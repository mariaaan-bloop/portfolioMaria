import { useEffect, useId, useRef } from 'react';

const CARD_W = 290, CARD_H = 470, CLASP = 30, N = 6, AY = -30, STRAP = 150;
const PULL = 110; // jarak tarik ekstra di luar panjang tali (tali meregang lalu memantul balik)
type P = { x: number; y: number; px: number; py: number; w: number };

/** Lanyard dengan fisika tali (verlet): berayun natural, bisa di-drag, lalu menggantung kembali. */
export default function LanyardBadge({ photoSrc }: { photoSrc: string }) {
  const box = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const strap = useRef<SVGPathElement>(null);
  const pid = 'strap' + useId().replace(/:/g, '');

  useEffect(() => {
    const el = box.current!, cardEl = card.current!, path = strap.current!;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const Lc = CLASP + CARD_H / 2;
    let pts: P[] = [], C: P = { x: 0, y: 0, px: 0, py: 0, w: 0.25 };
    let seg = 30, raf = 0, t = 0, last = 0, acc = 0, calm = 0, visible = true;
    let drag: { dx: number; dy: number } | null = null, target = { x: 0, y: 0 };

    const init = () => {
      const W = el.clientWidth;
      seg = STRAP / N;
      pts = Array.from({ length: N + 1 }, (_, i) => {
        const y = AY + i * seg;
        return { x: W / 2, y, px: W / 2, py: y, w: i ? 1 : 0 };
      });
      const cy = pts[N].y + Lc;
      C = { x: W / 2, y: cy, px: reduce ? W / 2 : W / 2 - 1.5, py: cy, w: 0.25 };
    };

    const link = (a: P, b: P, d: number) => {
      const dx = b.x - a.x, dy = b.y - a.y, dist = Math.hypot(dx, dy) || 1e-4;
      const k = (dist - d) / dist / (a.w + b.w);
      a.x += dx * k * a.w; a.y += dy * k * a.w;
      b.x -= dx * k * b.w; b.y -= dy * k * b.w;
    };

    const step = () => {
      t++;
      const wind = reduce ? 0 : Math.sin(t / 70) * 0.015;
      let energy = 0;
      if (drag) { C.px = C.x; C.py = C.y; C.x = target.x; C.y = target.y; }
      for (const p of [...pts, C]) {
        if (!p.w || (drag && p === C)) continue;
        const vx = (p.x - p.px) * 0.988, vy = (p.y - p.py) * 0.988;
        p.px = p.x; p.py = p.y;
        p.x += vx + wind; p.y += vy + 0.9;
        energy += Math.abs(vx) + Math.abs(vy);
      }
      const cw = C.w;
      if (drag) C.w = 0;
      for (let k = 0; k < 12; k++) {
        for (let i = 0; i < N; i++) link(pts[i], pts[i + 1], seg);
        link(pts[N], C, Lc);
      }
      C.w = cw;
      calm = energy < 0.05 ? calm + 1 : 0;
    };

    const draw = () => {
      let d = `M${pts[0].x},${pts[0].y}`;
      for (let i = 1; i < N; i++) d += ` Q${pts[i].x},${pts[i].y} ${(pts[i].x + pts[i + 1].x) / 2},${(pts[i].y + pts[i + 1].y) / 2}`;
      path.setAttribute('d', d + ` L${pts[N].x},${pts[N].y}`);
      const e = pts[N], ang = (-Math.atan2(C.x - e.x, C.y - e.y) * 180) / Math.PI;
      cardEl.style.transform = `translate3d(${e.x - CARD_W / 2}px,${e.y}px,0) rotate(${ang}deg)`;
      cardEl.style.setProperty('--sheen', `${50 + ang * 4}%`);
    };

    const loop = (now: number) => {
      raf = 0;
      acc += Math.min(now - (last || now), 50);
      last = now;
      for (let n = 0; acc >= 16.67 && n < 3; n++, acc -= 16.67) step();
      draw();
      if (visible && (!reduce || drag || calm < 60)) raf = requestAnimationFrame(loop);
      else last = 0;
    };
    const wake = () => { calm = 0; if (!raf && visible) raf = requestAnimationFrame(loop); };

    const rel = (e: PointerEvent) => { const r = el.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const down = (e: PointerEvent) => {
      const m = rel(e);
      drag = { dx: C.x - m.x, dy: C.y - m.y };
      target = { x: C.x, y: C.y };
      cardEl.setPointerCapture(e.pointerId);
      cardEl.style.cursor = 'grabbing';
      wake();
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const m = rel(e), a = pts[0], max = seg * N + Lc + PULL;
      let x = m.x + drag.dx, y = m.y + drag.dy;
      const dx = x - a.x, dy = y - a.y, dist = Math.hypot(dx, dy);
      if (dist > max) { x = a.x + (dx * max) / dist; y = a.y + (dy * max) / dist; }
      target = { x, y };
    };
    const up = () => {
      if (!drag) return;
      drag = null;
      C.px = C.x - Math.max(-18, Math.min(18, C.x - C.px));
      C.py = C.y - Math.max(-18, Math.min(18, C.y - C.py));
      cardEl.style.cursor = 'grab';
      wake();
    };

    init(); draw(); wake();
    const ro = new ResizeObserver(() => { init(); draw(); wake(); });
    ro.observe(el);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) wake(); });
    io.observe(el);
    cardEl.addEventListener('pointerdown', down);
    cardEl.addEventListener('pointermove', move);
    cardEl.addEventListener('pointerup', up);
    cardEl.addEventListener('pointercancel', up);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      cardEl.removeEventListener('pointerdown', down);
      cardEl.removeEventListener('pointermove', move);
      cardEl.removeEventListener('pointerup', up);
      cardEl.removeEventListener('pointercancel', up);
    };
  }, []);

  const href = `#${pid}`;

  return (
    <div ref={box} className="absolute inset-0 select-none overflow-hidden" aria-label="Interactive ID badge — drag to swing">
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D4AFF]/20 blur-3xl" />

      {/* Hint: selalu tampil, berada di belakang badge (z-0 < z-10) */}
      <div
        style={{ top: AY + STRAP + CLASP + CARD_H + 16 }}
        className="pointer-events-none absolute left-1/2 z-0 -translate-x-1/2 font-mono text-[10px] text-[#8D6A91]"
      >
        drag the badge ↔
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <defs><path id={pid} ref={strap} fill="none" /></defs>
        <use href={href} stroke="#1c0f26" strokeWidth="30" fill="none" />
        <use href={href} stroke="#6D4AFF" strokeWidth="26" fill="none" />
        <use href={href} stroke="rgba(255,255,255,.14)" strokeWidth="8" fill="none" />
      </svg>

      <div
        ref={card}
        style={{ width: CARD_W, transformOrigin: '50% 0', touchAction: 'pan-y' }}
        className="absolute left-0 top-0 z-10 cursor-grab will-change-transform"
      >
        {/* Metal crimp + ring */}
        <div className="relative mx-auto h-[30px] w-[34px]">
          <div className="absolute inset-x-0 top-0 h-4 rounded border border-zinc-600/60 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500 shadow-md" />
          <div className="absolute left-1/2 top-3 h-[18px] w-[18px] -translate-x-1/2 rounded-full border-[3px] border-zinc-300 shadow-md" />
        </div>

        <div
          style={{ height: CARD_H }}
          className="relative flex flex-col gap-3 overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-[#3a2350] via-[#2B1A38] to-[#1f1229] p-3.5 shadow-2xl shadow-black/50"
        >
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: 'linear-gradient(115deg,transparent calc(var(--sheen,50%) - 18%),rgba(255,255,255,.10) var(--sheen,50%),transparent calc(var(--sheen,50%) + 18%))' }}
          />

          <div className="flex shrink-0 items-center justify-between px-1 pt-0.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F8F5F2]">BINUS University</span>
            </div>
            <span className="rounded-full border border-[#E9C7D4]/15 bg-[#352044] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#C98FA8]">2024 – 2028</span>
          </div>

          {/* Foto besar mengisi hampir seluruh kartu, nama di-overlay */}
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/20 bg-[#352044]">
            <img src={photoSrc} alt="Maria Theresia" draggable={false} className="pointer-events-none h-full w-full object-cover object-[50%_12%]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f1229] via-[#1f1229]/70 to-transparent px-3.5 pb-3 pt-10">
              <h3 className="text-xl font-bold leading-tight text-[#F8F5F2]">Maria Theresia</h3>
              <div className="text-xs font-semibold text-[#E9C7D4]">BI & Data Analytics · Computer Science</div>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between px-1 pb-0.5">
            <div className="flex h-4 items-center gap-[2px] opacity-75">
              {[3, 1, 5, 2, 4, 1, 3, 2, 6, 1, 4, 2, 3].map((w, i) => (
                <div key={i} style={{ width: w }} className="h-full bg-[#E9C7D4]" />
              ))}
            </div>
            <span className="font-mono text-[10px] text-[#E9C7D4]/70">Data Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  );
}