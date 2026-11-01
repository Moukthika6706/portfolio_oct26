import Section from '../Section';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';
import { publications } from '../../data/content';

export default function Publications() {
  return (
    <Section id="publications" tone="light" title="Publications">
      <Reveal className="g">
        {publications.map((p) => (
          <TiltCard as="article" key={p.title}>
            <small className="venue">{p.venue}</small>
            <h3>{p.title}</h3>
            <p>{p.note}</p>
            {p.link && (
              <a className="gh pub-link" href={p.link} target="_blank" rel="noopener noreferrer">
                View on IEEE Xplore ↗
              </a>
            )}
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
