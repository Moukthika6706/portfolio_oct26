import { useCallback, useRef, useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import Section from '../Section';
import Reveal from '../Reveal';
import ProjectCard from '../ProjectCard';
import ProjectModal from '../ProjectModal';
import { projects } from '../../data/projects';

export default function Projects() {
  const [open, setOpen] = useState(null);
  const opener = useRef(null);

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus({ preventScroll: true });
  }, []);

  return (
    <Section id="projects" title="Projects">
      <LayoutGroup>
        <Reveal className="g">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              project={p}
              onOpen={() => {
                opener.current = document.activeElement;
                setOpen(p);
              }}
            />
          ))}
        </Reveal>
        <ProjectModal project={open} onClose={close} />
      </LayoutGroup>
    </Section>
  );
}
