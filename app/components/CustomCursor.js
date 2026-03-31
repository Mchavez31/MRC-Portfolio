"use client";

import { useEffect, useState } from "react";

const TRAIL_MAX = 12;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [visible, setVisible] = useState(false);
  const [useCustom, setUseCustom] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setUseCustom(fine.matches && !motion.matches);
    update();
    fine.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!useCustom) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const onMove = (e) => {
      const p = { x: e.clientX, y: e.clientY };
      setTrail((prev) => [...prev.slice(-(TRAIL_MAX - 1)), p]);
      setPos(p);
      setVisible(true);
    };
    const onLeave = () => {
      setVisible(false);
      setTrail([]);
    };
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [useCustom]);

  if (!useCustom) return null;

  const dots = trail.slice(0, -1);
  const n = dots.length;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[10000]"
        aria-hidden
      >
        {dots.map((p, i) => {
          const t = n <= 1 ? 1 : i / Math.max(1, n - 1);
          const opacity = 0.04 + t * 0.26;
          const size = 2 + t * 4;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#22d3ee]"
              style={{
                left: p.x,
                top: p.y,
                width: size,
                height: size,
                transform: "translate(-50%, -50%)",
                opacity,
                boxShadow: "0 0 6px rgba(34,211,238,0.35)",
              }}
            />
          );
        })}
      </div>
      <div
        className="pointer-events-none fixed z-[10001]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
        aria-hidden
      >
        <div className="relative h-[18px] w-[18px]">
          <div className="custom-cursor-ring absolute inset-0 rounded-full border border-white/70 shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
          <div
            className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22d3ee] shadow-[0_0_14px_3px_rgba(34,211,238,0.95),0_0_28px_6px_rgba(34,211,238,0.25)]"
          />
          <div className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
        </div>
      </div>
    </>
  );
}
