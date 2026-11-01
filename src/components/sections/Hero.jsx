import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import BedroomScene from '../art/BedroomScene';
import HandDrawnArrow from '../art/HandDrawnArrow';
import { hero } from '../../data/content';

export default function Hero() {
  const photo = useRef(null);
  const [imgOk, setImgOk] = useState(true);
  const reduce = useReducedMotion();

  // photo tilts toward the mouse, up to ±25deg
  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (photo.current) photo.current.style.transform = `rotateY(${x * 50}deg) rotateX(${-y * 50}deg)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce]);

  return (
    <section id="home" className="sec" aria-label="Introduction">
      <BedroomScene centered />

      <h1>{hero.name}</h1>

      <div className="face">
        <div className="note">
          {hero.note}
          <HandDrawnArrow />
        </div>
        <div className="ph" ref={photo}>
          <span aria-hidden="true">M</span>
          {imgOk && (
            <img
              src={hero.photo}
              alt="Moukthika"
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              onError={() => setImgOk(false)}
            />
          )}
          {/* maroon tint that slides away on hover to reveal the real photo */}
          {imgOk && <span className="tint" aria-hidden="true" />}
        </div>
      </div>

      <div className="cr l">{hero.year}</div>
      <div className="cr r">{hero.focus}</div>
    </section>
  );
}
