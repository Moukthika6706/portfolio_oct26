import { useId } from 'react';

// Isometric top-view bedroom: the girl types at her desk, walks to the
// whiteboard, writes three lines, then walks back (16s loop, see index.css).
// Used behind Contact and, centred, behind the Hero.
export default function BedroomScene({ centered = false }) {
  const sh = `sh-${useId().replace(/:/g, '')}`;
  const shadow = `url(#${sh})`;

  return (
    <div className={`room bedroom${centered ? ' c' : ''}`} aria-hidden={centered || undefined}>
      <svg
        viewBox="0 0 800 500"
        role="img"
        aria-label="Top view of a bedroom where a girl works at her laptop, then writes on a whiteboard"
      >
        <defs>
          <filter id={sh}>
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity=".45" />
          </filter>
        </defs>

        {/* floor + walls, rug */}
        <rect x="10" y="10" width="780" height="480" rx="10" fill="#8a1a2a" stroke="#3a0007" strokeWidth="14" />
        <ellipse cx="400" cy="300" rx="170" ry="110" fill="#c4505e" opacity=".45" />

        {/* bed with blanket and pillows */}
        <g filter={shadow}>
          <rect x="36" y="36" width="190" height="250" rx="10" fill="#ffdfe1" />
          <rect x="36" y="140" width="190" height="146" rx="10" fill="#e07a86" />
          <rect x="56" y="52" width="70" height="36" rx="10" fill="#fff" />
          <rect x="136" y="52" width="70" height="36" rx="10" fill="#fff" />
        </g>

        {/* bookshelf + plant */}
        <g filter={shadow}>
          <rect x="20" y="320" width="34" height="110" rx="4" fill="#5c000d" />
          <circle cx="110" cy="440" r="26" fill="#4a000a" />
          <circle cx="110" cy="440" r="13" fill="#ffdfe1" />
        </g>

        {/* whiteboard, drawn flat on the top wall */}
        <g filter={shadow}>
          <rect x="370" y="26" width="250" height="120" rx="6" fill="#fff" stroke="#ffdfe1" strokeWidth="6" />
          <g fill="none" stroke="#6d000f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path className="w w1" pathLength="1" d="M392 56 q12-16 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" />
            <path className="w w2" pathLength="1" d="M392 86 q12-16 24 0 t24 0 t24 0 t24 0 t24 0" />
            <path className="w w3" pathLength="1" d="M392 118 l14 14 l26-28 M450 118 h120" />
          </g>
        </g>

        {/* desk, laptop, mug */}
        <g filter={shadow}>
          <rect x="540" y="330" width="230" height="100" rx="6" fill="#5c000d" />
          <rect x="610" y="342" width="90" height="56" rx="4" fill="#2b0007" />
          <rect className="scr" x="616" y="348" width="78" height="36" rx="2" fill="#ffdfe1" />
          <rect x="620" y="390" width="70" height="6" rx="2" fill="#a3283a" />
          <circle cx="740" cy="360" r="10" fill="#ffdfe1" />
        </g>

        {/* chair */}
        <circle className="chair" cx="655" cy="462" r="24" fill="#a3283a" filter={shadow} />

        {/* the girl, seen from above; 0deg = facing up */}
        <g className="girl" filter={shadow}>
          <circle cx="0" cy="13" r="8" fill="#2b0007" />
          <ellipse rx="25" ry="13" fill="#ffdfe1" />
          <circle cy="-1" r="14" fill="#2b0007" />
          <path d="M-20 -4 L-10 -30 M20 -4 L10 -30" stroke="#ffdfe1" strokeWidth="7" strokeLinecap="round" />
          <circle className="hand" cx="-10" cy="-31" r="5" fill="#f1c0a8" />
          <g className="rhA">
            <circle className="hand" cx="10" cy="-31" r="5" fill="#f1c0a8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
