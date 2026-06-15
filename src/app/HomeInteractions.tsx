"use client";

import { useEffect } from "react";

/**
 * Client-side behaviours for the Home page, ported from the prototype:
 *  - nav scrollspy + frosted header on scroll
 *  - the jigsaw-puzzle watermark behind the hero (rendered statically)
 * Renders nothing; it wires effects onto the server-rendered markup.
 */
export default function HomeInteractions() {
  // ---- nav scrollspy / header frosting ----
  useEffect(() => {
    const navEls = Array.from(
      document.querySelectorAll<HTMLElement>(".home .brand, .home .nav-pills .np")
    );
    const setActive = (el: HTMLElement) =>
      navEls.forEach((n) => n.classList.toggle("active", n === el));

    const onClick = (e: Event) => setActive(e.currentTarget as HTMLElement);
    navEls.forEach((n) => n.addEventListener("click", onClick));

    const tracked = navEls
      .filter((n) => n.dataset.spy)
      .map((n) => ({ el: n, sec: document.getElementById(n.dataset.spy!) }))
      .filter((t): t is { el: HTMLElement; sec: HTMLElement } => !!t.sec);

    const headerEl = document.querySelector<HTMLElement>(".home header");
    const onScroll = () => {
      if (headerEl) headerEl.classList.toggle("scrolled", window.scrollY > 6);
      const line = window.scrollY + window.innerHeight * 0.32;
      let current = tracked[0];
      tracked.forEach((t) => {
        if (t.sec.offsetTop <= line) current = t;
      });
      if (current) setActive(current.el);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      navEls.forEach((n) => n.removeEventListener("click", onClick));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // ---- ID video: plays muted after the intro reveals, unmutes on first gesture ----
  useEffect(() => {
    const v = document.getElementById("idVideo") as HTMLVideoElement | null;
    if (!v) return;
    const root = document.documentElement;

    // play (muted - browser policy) once the intro is done
    const start = () => {
      v.muted = true;
      void v.play().catch(() => {});
    };
    let obs: MutationObserver | null = null;
    if (root.classList.contains("intro-done")) {
      start();
    } else {
      obs = new MutationObserver(() => {
        if (root.classList.contains("intro-done")) {
          start();
          obs?.disconnect();
        }
      });
      obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    }

    // turn sound on at the first user interaction (browsers block audio until then)
    const events = ["pointerdown", "touchstart", "keydown"] as const;
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, unmute));
    const unmute = () => {
      v.muted = false;
      v.volume = 1;
      void v.play().catch(() => {});
      cleanup();
    };
    events.forEach((e) => window.addEventListener(e, unmute, { passive: true }));

    return () => {
      obs?.disconnect();
      cleanup();
    };
  }, []);

  // ---- jigsaw puzzle watermark (static render) ----
  useEffect(() => {
    const svg = document.getElementById("puzzleSvg");
    const hero = document.getElementById("top");
    if (!svg || !hero) return;
    const NS = "http://www.w3.org/2000/svg";
    // uniform interlock-tileable piece: top OUT, right OUT, bottom IN, left IN
    const PC =
      "M20,20 H40 C40,10 60,10 60,20 H80 V40 C90,40 90,60 80,60 V80 H60 C60,70 40,70 40,80 H20 V60 C30,60 30,40 20,40 Z";
    const pitch = 120;
    const f = 2;

    function build() {
      const W = hero!.clientWidth;
      const H = hero!.clientHeight;
      if (!W || !H) return;
      svg!.setAttribute("viewBox", `0 0 ${W} ${H}`);
      while (svg!.firstChild) svg!.removeChild(svg!.firstChild);
      const cols = Math.ceil(W / pitch) + 2;
      const rows = Math.ceil(H / pitch) + 2;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const g = document.createElementNS(NS, "g");
          g.setAttribute("transform", `translate(${c * pitch},${r * pitch}) scale(${f})`);
          const inner = document.createElementNS(NS, "g");
          inner.setAttribute("class", "pc");
          const p = document.createElementNS(NS, "path");
          p.setAttribute("d", PC);
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "#E6E9FB");
          p.setAttribute("stroke-width", "1.2");
          p.setAttribute("vector-effect", "non-scaling-stroke");
          p.setAttribute("stroke-linejoin", "round");
          inner.appendChild(p);
          g.appendChild(inner);
          svg!.appendChild(g);
        }
      }
    }

    build();
    let t: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(build, 160);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
