import Reveal from './Reveal';

// A full-height section. tone="light" switches to the pink theme (.lt).
// `background` is rendered first so scene layers sit under the content.
export default function Section({ id, tone = 'maroon', title, short = false, background, className = '', children }) {
  const cls = ['sec', tone === 'light' && 'lt', short && 'short', className].filter(Boolean).join(' ');
  return (
    <section id={id} className={cls} aria-labelledby={title ? `${id}-title` : undefined}>
      {background}
      {title && (
        <Reveal as="h2" id={`${id}-title`}>
          {title}
        </Reveal>
      )}
      {children}
    </section>
  );
}
