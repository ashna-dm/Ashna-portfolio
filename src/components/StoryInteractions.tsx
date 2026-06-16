"use client";

import { useEffect } from "react";

/**
 * Story board behaviours, ported from story.js: the flip-through journal
 * (click left/right half or arrow keys), the Figma-style zoom control with
 * fit-to-width, and the frosted nav on scroll.
 */
export default function StoryInteractions() {
  useEffect(() => {
    // ---------- JOURNAL FLIP BOOK ----------
    const book = document.getElementById("book");
    let bookCleanup = () => {};
    if (book) {
      const leaves = Array.from(book.querySelectorAll<HTMLElement>(".leaf"));
      const N = leaves.length;
      let flipped = 0;
      let busy = false;
      function settle() {
        leaves.forEach((lf, i) => (lf.style.zIndex = String(i < flipped ? i : N - i)));
        book!.classList.toggle("closed", flipped === 0);
        leaves.forEach((lf, i) => lf.classList.toggle("turned", i < flipped));
        busy = false;
      }
      function apply() {
        leaves.forEach(
          (lf, i) => (lf.style.transform = i < flipped ? "rotateY(-180deg)" : "rotateY(0deg)")
        );
      }
      function go(dir: number) {
        if (busy) return;
        const target = flipped + dir;
        if (target < 0 || target > N) return;
        const moving = dir > 0 ? leaves[flipped] : leaves[flipped - 1];
        busy = true;
        if (moving) moving.style.zIndex = "999";
        flipped = target;
        apply();
        if (moving) setTimeout(() => moving.classList.toggle("turned", dir > 0), 450);
        setTimeout(settle, 940);
      }
      const onClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest("button")) return;
        const r = book!.getBoundingClientRect();
        if (e.clientX > r.left + r.width / 2) go(1);
        else go(-1);
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") go(1);
        else if (e.key === "ArrowLeft") go(-1);
      };
      book.addEventListener("click", onClick);
      window.addEventListener("keydown", onKey);
      settle();
      bookCleanup = () => {
        book.removeEventListener("click", onClick);
        window.removeEventListener("keydown", onKey);
      };
    }

    // ---------- FIGMA ZOOM ----------
    const board = document.getElementById("board");
    const spacer = document.getElementById("spacer");
    const valEl = document.getElementById("zoomVal");
    const zin = document.getElementById("zoomIn");
    const zout = document.getElementById("zoomOut");
    let zoomCleanup = () => {};
    if (board && spacer) {
      let z = 1;
      const MIN = 0.4,
        MAX = 1.4;
      const fit = () => Math.min(1, Math.min(window.innerWidth - 48, 1280) / 1280);
      function render() {
        board!.style.transform = "translateX(-50%) scale(" + z + ")";
        spacer!.style.height = board!.offsetHeight * z + "px";
        if (valEl) valEl.textContent = Math.round(z * 100) + "%";
      }
      const setZoom = (nz: number) => {
        z = Math.max(MIN, Math.min(MAX, nz));
        render();
      };
      const onIn = () => setZoom(z + 0.1);
      const onOut = () => setZoom(z - 0.1);
      zin?.addEventListener("click", onIn);
      zout?.addEventListener("click", onOut);
      function init() {
        if (window.innerWidth > 760) {
          z = fit();
        } else {
          z = 1;
          board!.style.transform = "translateX(-50%)";
          spacer!.style.height = "";
          if (valEl) valEl.textContent = "100%";
          return;
        }
        render();
      }
      init();
      let rt: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(rt);
        rt = setTimeout(init, 120);
      };
      window.addEventListener("resize", onResize);
      zoomCleanup = () => {
        zin?.removeEventListener("click", onIn);
        zout?.removeEventListener("click", onOut);
        window.removeEventListener("resize", onResize);
      };
    }

    // ---------- DRAGGABLE STICKIES (session-only; reset on refresh) ----------
    const boardEl = document.getElementById("board");
    // current on-screen scale of the zoomable board (so drag tracks the cursor)
    const scaleNow = () => {
      if (!boardEl || !boardEl.offsetWidth) return 1;
      return boardEl.getBoundingClientRect().width / boardEl.offsetWidth;
    };
    const stickyCleanups: Array<() => void> = [];
    let zTop = 60;
    document.querySelectorAll<HTMLElement>(".sticky").forEach((el) => {
      const base = el.style.transform || ""; // keep the original rotate
      let ox = 0,
        oy = 0,
        sx = 0,
        sy = 0,
        bx = 0,
        by = 0,
        dragging = false;
      el.classList.add("draggable");
      const onDown = (e: PointerEvent) => {
        dragging = true;
        bx = ox;
        by = oy;
        sx = e.clientX;
        sy = e.clientY;
        el.classList.add("dragging");
        el.style.zIndex = String(++zTop);
        try {
          el.setPointerCapture(e.pointerId);
        } catch {}
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        const s = scaleNow();
        ox = bx + (e.clientX - sx) / s;
        oy = by + (e.clientY - sy) / s;
        el.style.transform = `translate(${ox}px, ${oy}px) ${base}`;
      };
      const onUp = (e: PointerEvent) => {
        if (!dragging) return;
        dragging = false;
        el.classList.remove("dragging");
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
      };
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerup", onUp);
      el.addEventListener("pointercancel", onUp);
      stickyCleanups.push(() => {
        el.removeEventListener("pointerdown", onDown);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerup", onUp);
        el.removeEventListener("pointercancel", onUp);
      });
    });

    // ---------- frosted nav on scroll ----------
    const headerEl = document.querySelector("header");
    const onNavScroll = () =>
      headerEl && headerEl.classList.toggle("scrolled", window.scrollY > 6);
    window.addEventListener("scroll", onNavScroll, { passive: true });
    onNavScroll();

    return () => {
      bookCleanup();
      zoomCleanup();
      stickyCleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return null;
}
