import Section from '../Section';
import Reveal from '../Reveal';
import { education } from '../../data/content';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Reveal className="edu">
        {education.map((e) => (
          <article key={e.title} className="tc" tabIndex={0}>
            <small>{e.years}</small>
            <h3>{e.title}</h3>
            <p>{e.place}</p>
            <div className="more">
              <div className="big">{e.score}</div>
              {e.scoreLabel}
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
