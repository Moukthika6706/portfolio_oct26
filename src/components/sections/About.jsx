import Section from '../Section';
import Reveal from '../Reveal';
import CodingIllustration from '../art/CodingIllustration';
import LeadingTeamIllustration from '../art/LeadingTeamIllustration';
import PresentingIllustration from '../art/PresentingIllustration';
import HackathonIllustration from '../art/HackathonIllustration';
import { about, aboutTitle } from '../../data/content';

const pictures = [CodingIllustration, LeadingTeamIllustration, PresentingIllustration, HackathonIllustration];

export default function About() {
  return (
    <Section id="about" tone="light" title={aboutTitle}>
      <Reveal className="about">
        <div>
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="pics">
          {pictures.map((Pic, i) => (
            <div key={i} className="pic">
              <Pic />
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
