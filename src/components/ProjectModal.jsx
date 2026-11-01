import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { startScrolling, stopScrolling } from '../lib/scroll';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

// The enlarged project view. Rendered in a portal so no transformed or
// overflow-hidden section ancestor can clip or offset it.
export default function ProjectModal({ project, onClose }) {
  return createPortal(
    <AnimatePresence>{project && <Panel key={project.title} project={project} onClose={onClose} />}</AnimatePresence>,
    document.body
  );
}

function Panel({ project, onClose }) {
  const { title, category, focus, tech, github, description } = project;
  const closeBtn = useRef(null);
  const titleId = `project-dialog-${title.replace(/\W+/g, '-')}`;

  useEffect(() => {
    stopScrolling();
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      startScrolling();
    };
  }, [onClose]);

  return (
    <div className="pm-wrap">
      <motion.div
        className="pm-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        layoutId={`project-${title}`}
        className="pm"
        style={{ borderRadius: 28 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      >
        <motion.button ref={closeBtn} className="pm-close" aria-label="Close project details" onClick={onClose} {...fadeIn}>
          ×
        </motion.button>

        {(category || focus) && (
          <motion.small className="pcat" {...fadeIn}>
            {[category, focus].filter(Boolean).join(' · ')}
          </motion.small>
        )}
        <motion.h3 id={titleId} layoutId={`project-title-${title}`}>
          {title}
        </motion.h3>

        <motion.div {...fadeIn}>
          <div className="tags">
            {(tech.length ? tech : ['Tech stack TBD']).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          {description.length ? (
            <ul className="pdesc">
              {description.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          ) : (
            <p className="pdesc">Description coming soon</p>
          )}
          <a className="gh" href={github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
