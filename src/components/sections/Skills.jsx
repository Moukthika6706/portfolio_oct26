import Section from '../Section';
import Reveal from '../Reveal';
import { skills, tileShades } from '../../data/skills';

export default function Skills() {
  return (
    <Section id="skills" tone="light" title="Skills">
      <Reveal>
        {skills.map(({ category, items }) => (
          <div key={category} className="sk">
            <h3>{category}</h3>
            <ul className="row" aria-label={category}>
              {items.map(({ name, icon: Icon, label }, i) => (
                <li key={name} className="lg">
                  <span className="tile" style={{ background: tileShades[(i + category.length) % tileShades.length] }}>
                    {Icon ? <Icon aria-hidden="true" /> : label}
                  </span>
                  <span className="name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
