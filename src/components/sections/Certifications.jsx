import Section from '../Section';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';
import { certifications } from '../../data/content';

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <Reveal className="g">
        {certifications.map((c) => (
          <TiltCard as="article" key={c.name}>
            <h3 style={{ fontSize: '1.05rem' }}>{c.name}</h3>
            <p>{c.issuer}</p>
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
