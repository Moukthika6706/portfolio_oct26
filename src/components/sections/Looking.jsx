import Section from '../Section';
import Reveal from '../Reveal';

export default function Looking() {
  return (
    <Section id="looking" tone="light" title="What I'm looking for" short>
      <Reveal className="lf">
        <p>
          I'm looking for <b>software engineering</b> and <b>project management opportunities</b> where I can turn ideas
          into real-world products. I enjoy working across the stack, from building backend systems and integrating AI
          solutions to creating <b>clean, intuitive front-end experiences</b>.
        </p>
        <p>
          I also enjoy the project management side of building — planning roadmaps, coordinating teams, and keeping
          delivery on track so great ideas actually ship.
        </p>
        <p>
          I'm a curious and fast learner who loves solving problems, experimenting with new technologies, and turning
          ideas into working solutions. I'm excited to work with ambitious teams, contribute to meaningful projects, and
          keep growing as an engineer.
        </p>
      </Reveal>
    </Section>
  );
}
