import { motion } from 'framer-motion';

const TBD = ['Tech stack TBD'];

// Compact project card: title + tech stack. Clicking it grows it into <ProjectModal>
// (they share a layoutId, so Framer Motion animates one into the other).
export default function ProjectCard({ project, onOpen }) {
  const { title, tech } = project;
  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <motion.div
      layoutId={`project-${title}`}
      className="pc"
      style={{ borderRadius: 22 }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${title} — open project details`}
      onClick={onOpen}
      onKeyDown={onKeyDown}
    >
      <motion.h3 layoutId={`project-title-${title}`}>{title}</motion.h3>
      <div className="tags">
        {(tech.length ? tech : TBD).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <span className="hint" aria-hidden="true">click to read more ⤢</span>
    </motion.div>
  );
}
