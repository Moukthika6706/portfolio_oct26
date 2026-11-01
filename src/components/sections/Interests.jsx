import Section from '../Section';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';
import { interests } from '../../data/content';

// Last section covered by the contribution graph.
export default function Interests() {
  return (
    <Section id="interests" tone="light" title="My interests">
      <Reveal as="ul" className="chips" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {interests.map((i) => (
          <TiltCard as="li" key={i.label}>
            <span aria-hidden="true">{i.emoji}</span> {i.label}
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
