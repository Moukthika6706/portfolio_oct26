import Section from '../Section';
import Reveal from '../Reveal';
import BedroomScene from '../art/BedroomScene';
import { contact } from '../../data/content';

export default function Contact() {
  return (
    <Section id="contact" title="Contact me" background={<BedroomScene />}>
      <Reveal className="ct">
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            download={c.download}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
          >
            {c.label}
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
