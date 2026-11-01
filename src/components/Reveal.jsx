import { motion } from 'framer-motion';

// Scroll reveal: rises 80px and un-tilts 12deg as it enters the viewport (once).
const variants = {
  hidden: { opacity: 0, y: 80, rotateX: 12 },
  shown: { opacity: 1, y: 0, rotateX: 0 },
};

export default function Reveal({ as = 'div', children, ...props }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}
