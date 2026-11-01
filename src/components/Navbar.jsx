import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';
import { scrollToHash } from '../lib/scroll';

const flatLinks = navLinks.flatMap((l) => l.children ?? [l]);

export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Active link = the section crossing the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const close = () => window.innerWidth > 800 && setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(`#${id}`);
  };

  const isOn = (link) => (link.children ? link.children.some((c) => c.id === active) : link.id === active);

  return (
    <nav className="nav" aria-label="Main">
      <a className="logo" href="#home" onClick={(e) => go(e, 'home')}>
        <b>M</b>oukthika
      </a>

      <ul>
        {navLinks.map((link) => (
          <li key={link.label} className={link.children ? 'dd' : undefined}>
            <a
              href={`#${link.id}`}
              className={isOn(link) ? 'on' : undefined}
              aria-haspopup={link.children ? 'true' : undefined}
              onClick={(e) => go(e, link.id)}
            >
              {link.label}
            </a>
            {link.children && (
              <div className="menu">
                {link.children.map((c) => (
                  <a key={c.id} href={`#${c.id}`} className={c.id === active ? 'on' : undefined} onClick={(e) => go(e, c.id)}>
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mnav" id="mobile-nav">
          {flatLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={l.id === active ? 'on' : undefined} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
