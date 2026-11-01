import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { greetings } from '../data/content';
import { startScrolling, stopScrolling } from '../lib/scroll';

// Click-to-start overlay: cycles the greetings, then slides up and unlocks scrolling.
export default function Intro() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true); // word opacity during the 120ms fade
  const [started, setStarted] = useState(false);
  const [up, setUp] = useState(false);
  const [gone, setGone] = useState(false);
  const word = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    stopScrolling();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  // Shrink wide scripts (e.g. Tamil) so the word always fits the screen.
  useLayoutEffect(() => {
    const el = word.current;
    if (!el) return;
    const fit = () => {
      el.style.fontSize = '';
      const max = el.parentElement.clientWidth * 0.92;
      const size = parseFloat(getComputedStyle(el).fontSize);
      if (max > 0 && size > 0 && el.scrollWidth > max) el.style.fontSize = `${(size * max) / el.scrollWidth}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [index]);

  const begin = () => {
    if (started) return;
    setStarted(true);
    const t = (fn, ms) => timers.current.push(setTimeout(fn, ms));
    greetings.slice(1).forEach((_, i) => {
      const at = 420 * (i + 1);
      t(() => setVisible(false), at - 120);
      t(() => {
        setIndex(i + 1);
        setVisible(true);
      }, at);
    });
    const end = 420 * greetings.length;
    t(() => {
      setUp(true);
      startScrolling();
    }, end);
    t(() => setGone(true), end + 1000);
  };

  if (gone) return null;

  return (
    <div
      className={`intro${up ? ' up' : ''}`}
      role="button"
      tabIndex={0}
      aria-label="Intro. Press Enter to begin."
      onClick={begin}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), begin())}
    >
      <div ref={word} className="hi" style={{ opacity: visible ? 1 : 0 }} aria-live="polite">
        {greetings[index]}
      </div>
      {!started && <div className="tap">click to begin</div>}
    </div>
  );
}
