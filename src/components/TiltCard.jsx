import { useReducedMotion } from 'framer-motion';

// Card that tilts toward the cursor (±16deg, lifted 20px) and resets on leave.
export default function TiltCard({ as: Tag = 'div', className = '', children, ...props }) {
  const reduce = useReducedMotion();

  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 32}deg) rotateX(${-y * 32}deg) translateZ(20px)`;
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <Tag
      className={`tc ${className}`}
      onMouseMove={reduce ? undefined : onMouseMove}
      onMouseLeave={reduce ? undefined : onMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}
