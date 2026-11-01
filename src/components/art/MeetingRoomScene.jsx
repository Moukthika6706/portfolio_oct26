import { useId } from 'react';

// Same isometric style as the bedroom: a leader paces in front of a projector
// screen while six teammates nod around a long table (12s loop, see index.css).
const seats = [
  { x: 270, shoulder: 228, head: 242, fill: '#ffdfe1', delay: '0s' },
  { x: 400, shoulder: 228, head: 242, fill: '#e07a86', delay: '-1s' },
  { x: 530, shoulder: 228, head: 242, fill: '#ff9fa9', delay: '-2s' },
  { x: 270, shoulder: 392, head: 378, fill: '#c4505e', delay: '-.5s' },
  { x: 400, shoulder: 392, head: 378, fill: '#ffdfe1', delay: '-1.5s' },
  { x: 530, shoulder: 392, head: 378, fill: '#e07a86', delay: '-2.5s' },
];

export default function MeetingRoomScene() {
  const sh = `sh-${useId().replace(/:/g, '')}`;
  const shadow = `url(#${sh})`;

  return (
    <div className="room meeting">
      <svg
        viewBox="0 0 800 500"
        role="img"
        aria-label="A girl leading a team meeting while a message shows on the projector screen"
      >
        <defs>
          <filter id={sh}>
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity=".45" />
          </filter>
        </defs>

        <rect x="10" y="10" width="780" height="480" rx="10" fill="#8a1a2a" stroke="#3a0007" strokeWidth="14" />
        <ellipse cx="400" cy="310" rx="270" ry="120" fill="#c4505e" opacity=".3" />

        {/* projector screen with cycling messages */}
        <g filter={shadow}>
          <rect x="200" y="24" width="400" height="116" rx="6" fill="#fff" stroke="#ffdfe1" strokeWidth="6" />
          <g fontFamily="Anton, Impact, sans-serif" fontSize="46" fill="#6d000f" textAnchor="middle">
            <text className="t1" x="400" y="96">LET'S SHIP IT</text>
            <text className="t2" x="400" y="96">OWN THE ROADMAP</text>
            <text className="t3" x="400" y="96">LEAD WITH EMPATHY</text>
          </g>
        </g>

        {/* table + laptops */}
        <g filter={shadow}>
          <rect x="190" y="255" width="420" height="110" rx="40" fill="#5c000d" />
        </g>
        <g fill="#ffdfe1" opacity=".8">
          {[252, 382, 512].map((x) => (
            <rect key={`t${x}`} x={x} y="268" width="36" height="22" rx="3" />
          ))}
          {[252, 382, 512].map((x) => (
            <rect key={`b${x}`} x={x} y="330" width="36" height="22" rx="3" />
          ))}
        </g>

        {/* seated team, top-down */}
        {seats.map((s, i) => (
          <g key={i} className="nod" style={{ animationDelay: s.delay }}>
            <ellipse cx={s.x} cy={s.shoulder} rx="24" ry="12" fill={s.fill} />
            <circle cx={s.x} cy={s.head} r="13" fill="#2b0007" />
          </g>
        ))}

        {/* the leader, pacing; 0deg = facing up */}
        <g className="ldr" filter={shadow}>
          <circle cy="13" r="8" fill="#2b0007" />
          <ellipse rx="25" ry="13" fill="#ffdfe1" />
          <circle cy="-1" r="14" fill="#2b0007" />
          <path d="M-20 -4 L-10 -30 M20 -4 L10 -30" stroke="#ffdfe1" strokeWidth="7" strokeLinecap="round" />
          <circle className="hand" cx="-10" cy="-31" r="5" fill="#f1c0a8" />
          <circle className="hand" cx="10" cy="-31" r="5" fill="#f1c0a8" />
          <path
            className="wave"
            d="M-14 -46 q14-10 28 0 M-22 -55 q22-16 44 0"
            stroke="#ffdfe1"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
