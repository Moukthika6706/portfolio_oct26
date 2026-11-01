import Lenis from 'lenis';

// One shared requestAnimationFrame loop: Lenis scrolls first, then every
// registered ticker runs, so anything that reads scroll position (the
// contribution graph's clip-path) sees this frame's value, not last frame's.
let lenis = null;
let rafId = 0;
const tickers = new Set();

function loop(time) {
  lenis?.raf(time);
  tickers.forEach((fn) => fn(time));
  rafId = requestAnimationFrame(loop);
}

function ensureLoop() {
  if (!rafId) rafId = requestAnimationFrame(loop);
}

export function addTicker(fn) {
  tickers.add(fn);
  ensureLoop();
  return () => tickers.delete(fn);
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Lenis is created stopped; the intro starts it when it slides away.
export function initLenis() {
  if (lenis || prefersReducedMotion()) return lenis;
  lenis = new Lenis({ lerp: 0.08 });
  lenis.stop();
  ensureLoop();
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}

export function startScrolling() {
  document.documentElement.style.overflow = '';
  lenis?.start();
}

export function stopScrolling() {
  document.documentElement.style.overflow = 'hidden';
  lenis?.stop();
}

export function scrollToHash(hash) {
  if (lenis) {
    lenis.scrollTo(hash, { offset: -60 });
  } else {
    const el = document.querySelector(hash);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60 });
  }
}
