import Section from '../Section';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';
import MeetingRoomScene from '../art/MeetingRoomScene';
import { leadership } from '../../data/content';

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership" short background={<MeetingRoomScene />}>
      <Reveal className="g">
        {leadership.map((l) => (
          <TiltCard as="article" key={l.role}>
            <small className="venue">{l.when}</small>
            <h3>{l.role}</h3>
            <p>{l.note}</p>
          </TiltCard>
        ))}
      </Reveal>
    </Section>
  );
}
