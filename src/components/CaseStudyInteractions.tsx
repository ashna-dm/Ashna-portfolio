"use client";

import { useEffect } from "react";

/**
 * Behaviours shared by the Sorta & AURA case studies, ported from the
 * prototype's inline script: frosted header on scroll, reveal-on-scroll,
 * and the design-system "book" carousel (arrows, dots, drag, keys).
 */
export default function CaseStudyInteractions() {
  useEffect(() => {
    const header = document.querySelector("header");
    const onScroll = () =>
      header && header.classList.toggle("scrolled", window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // reveal on scroll
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // design-system carousel
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-dscar]").forEach((car) => {
      const track = car.querySelector<HTMLElement>(".dscar-track");
      const slides = Array.from(car.querySelectorAll(".dscar-slide"));
      const dotsWrap = car.querySelector(".dscar-dots");
      const prev = car.querySelector(".dscar-prev");
      const next = car.querySelector(".dscar-next");
      if (!track || !dotsWrap) return;
      let i = 0;
      const n = slides.length;
      let sx = 0,
        dx = 0,
        drag = false;
      const dots = slides.map((_, k) => {
        const b = document.createElement("button");
        b.className = "dscar-dot" + (k === 0 ? " on" : "");
        b.setAttribute("aria-label", "Go to " + (k + 1));
        b.addEventListener("click", () => go(k));
        dotsWrap.appendChild(b);
        return b;
      });
      function go(k: number) {
        i = (k + n) % n;
        track!.style.transition = "";
        track!.style.transform = "translateX(" + -i * 100 + "%)";
        dots.forEach((d, j) => d.classList.toggle("on", j === i));
      }
      const onPrev = () => go(i - 1);
      const onNext = () => go(i + 1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      const onDown = (e: PointerEvent) => {
        const t = e.target as HTMLElement;
        if (t.closest(".dscar-arrow,.dscar-dot")) return;
        drag = true;
        sx = e.clientX;
        dx = 0;
        track!.style.transition = "none";
      };
      const onMove = (e: PointerEvent) => {
        if (!drag) return;
        dx = e.clientX - sx;
        track!.style.transform = "translateX(calc(" + -i * 100 + "% + " + dx + "px))";
      };
      const onUp = () => {
        if (!drag) return;
        drag = false;
        if (Math.abs(dx) > 60) go(i + (dx < 0 ? 1 : -1));
        else go(i);
      };
      car.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      car.setAttribute("tabindex", "0");
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") go(i - 1);
        if (e.key === "ArrowRight") go(i + 1);
      };
      car.addEventListener("keydown", onKey);
      cleanups.push(() => {
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        car.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        car.removeEventListener("keydown", onKey);
        dots.forEach((d) => d.remove());
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
