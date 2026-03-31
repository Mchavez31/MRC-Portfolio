"use client";

import { useLayoutEffect, useRef } from "react";

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const MAX_DIST = 160;
    const SPEED_MULT = 0.1;
    const PULSE_SPAWN_FRAMES = 18;
    const PULSE_SPEED = 0.011;

    let nodes = [];
    let pulses = [];
    let frame = 0;
    let raf = null;

    function randVel() {
      return (Math.random() - 0.5) * 0.26 * 0.26;
    }

    function setSize() {
      const vpWidth = Math.max(
        1,
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
      const vpHeight = Math.max(
        1,
        window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
      );
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      W = vpWidth;
      H = vpHeight;
      canvas.width = Math.floor(vpWidth * dpr);
      canvas.height = Math.floor(vpHeight * dpr);
      canvas.style.position = "fixed";
      canvas.style.left = "0";
      canvas.style.top = "0";
      canvas.style.width = vpWidth + "px";
      canvas.style.height = vpHeight + "px";
      canvas.style.zIndex = "0";
      canvas.style.pointerEvents = "none";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      setSize();
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: randVel(),
          vy: randVel(),
          id: i,
        });
      }
      pulses = [];
    }

    function onResize() {
      init();
    }
    window.addEventListener("resize", onResize);

    function spawnPulseOnEdge(a, b) {
      pulses.push({ a, b, t: 0 });
    }

    function step() {
      frame++;
      ctx.clearRect(0, 0, W, H);
      const r = Math.max(W, H) * 0.55;
      for (const cx of [W * 0.2, W * 0.5, W * 0.8]) {
        const g = ctx.createRadialGradient(cx, H * 0.25, 0, cx, H * 0.25, r);
        g.addColorStop(0, "rgba(34,211,238,0.08)");
        g.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      for (const n of nodes) {
        n.x += n.vx * SPEED_MULT;
        n.y += n.vy * SPEED_MULT;
        if (n.x <= 0 || n.x >= W) n.vx *= -1;
        if (n.y <= 0 || n.y >= H) n.vy *= -1;
      }

      let connections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d <= MAX_DIST) {
            const alpha = 1 - d / MAX_DIST;
            ctx.strokeStyle = "rgba(34,211,238," + alpha.toFixed(3) + ")";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            connections.push({ aIndex: i, bIndex: j, d });
          }
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += PULSE_SPEED * SPEED_MULT;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const a = nodes[p.a],
          b = nodes[p.b];
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = "rgba(34,211,238,0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(34,211,238,0.12)";
        ctx.beginPath();
        ctx.arc(px, py, 6 + 6 * p.t, 0, Math.PI * 2);
        ctx.fill();
      }

      if (frame % PULSE_SPAWN_FRAMES === 0 && connections.length > 0) {
        const toSpawn = Math.min(
          3,
          Math.max(1, Math.floor(connections.length * 0.01))
        );
        for (let s = 0; s < toSpawn; s++) {
          const c = connections[Math.floor(Math.random() * connections.length)];
          spawnPulseOnEdge(c.aIndex, c.bIndex);
        }
      }

      const time = Date.now();
      for (const n of nodes) {
        const bright = 0.7 + 0.3 * Math.abs(Math.sin(time * 0.00025 + n.id));
        if (bright > 0.85) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 18);
          g.addColorStop(0, "rgba(34,211,238,0.14)");
          g.addColorStop(1, "rgba(34,211,238,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 18, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = "#22d3ee";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.2 * (0.8 + 0.2 * bright), 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    const NODE_COUNT = window.innerWidth < 768 ? 45 : 120;
    init();
    step();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 max-w-none"
      aria-hidden
    />
  );
}
