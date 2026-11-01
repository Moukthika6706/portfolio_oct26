import { lazy, Suspense, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Certifications from './components/sections/Certifications';
import Interests from './components/sections/Interests';
import Leadership from './components/sections/Leadership';
import Looking from './components/sections/Looking';
import Contact from './components/sections/Contact';
import { initLenis, destroyLenis } from './lib/scroll';

// three.js is large, so the graph loads as its own chunk
const ContributionGraph = lazy(() => import('./components/ContributionGraph'));

export default function App() {
  useEffect(() => {
    initLenis();
    return destroyLenis;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="sr-only-skip" href="#about">Skip to content</a>
      <Intro />
      <Suspense fallback={null}>
        <ContributionGraph />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Publications />
        <Certifications />
        <Interests />
        <Leadership />
        <Looking />
        <Contact />
      </main>
    </MotionConfig>
  );
}
