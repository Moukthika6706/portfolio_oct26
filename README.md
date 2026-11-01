# Moukthika — Portfolio

A single-page, animated 3D portfolio built with React + Vite, Tailwind CSS, Framer Motion, Lenis and three.js.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Swapping in your own content

| What | Where |
| --- | --- |
| Photo | `public/me.jpg` — a square crop around your face (600×600 or larger). If it's missing, the circle shows an "M" instead. |
| Resume | `public/resume.pdf` — the "Download Resume" button links here and saves it as `Moukthika_Resume.pdf`. To update it, replace this file with your new PDF (keep the name `resume.pdf`). |
| Project GitHub links, tech stacks, descriptions | `src/data/projects.js` — each project has `title`, `category`, `focus`, `tech[]`, `github` and `description` (a list of bullet points). Cards show the title and tech stack; clicking one opens the full details. An empty `tech` array shows a "Tech stack TBD" tag; an empty `description` shows "Description coming soon". Every `github` currently points at your profile; replace it with each repo URL. |
| About text, education (Class XII / X), publications, certifications, interests, leadership, contact links, nav, intro greetings | `src/data/content.js` (placeholders are marked `// TBD`) |
| Skills and their logos | `src/data/skills.js` — `icon` uses a [react-icons](https://react-icons.github.io/react-icons/) logo; `label` shows Anton letters instead |
| "What I'm looking for" statement | `src/components/sections/Looking.jsx` |
| Social preview (Open Graph) | `index.html` — after deploying, change `og:image` / `og:url` / `twitter:image` to absolute URLs on your domain (e.g. `https://your-site.vercel.app/me.jpg`), since most social sites ignore relative image paths. |

## Real GitHub contribution data

The 3D contribution graph (behind Education → Interests) uses deterministic placeholder data by default. To show your real contributions for **Moukthika6706**:

1. Open `src/data/contributions.js`.
2. Set `USE_GITHUB_DATA = true`.

The graph then calls `fetchGitHubContributions()`, which reads the last year of contributions from the public API at `github-contributions-api.jogruber.de` (no token needed) and repaints the bars. If the request fails, it falls back to the placeholder data.

Want to use another source (e.g. GitHub's GraphQL API with a token at build time)? Replace the body of `fetchGitHubContributions()` so it returns a `Map` of `'YYYY-MM-DD' → count`; nothing else needs to change.

## Project layout

```
src/
  App.jsx                    section order, Lenis setup
  index.css                  design tokens, section themes, scene animations
  data/                      all text content (projects, skills, content, contributions)
  lib/scroll.js              Lenis + the shared animation-frame loop
  components/
    Intro.jsx                click-to-begin greeting overlay
    Navbar.jsx               fixed nav, More dropdown, mobile hamburger
    ContributionGraph.jsx    three.js background (Education → Interests)
    ProjectCard.jsx          compact project card
    ProjectModal.jsx         enlarged project view (opens on click)
    TiltCard.jsx, Reveal.jsx, Section.jsx
    sections/                one component per section
    art/                     every SVG scene / illustration as its own component
```

## Deploying to Vercel

**Option A — from GitHub (recommended)**

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Vite automatically: build command `npm run build`, output directory `dist`. Click **Deploy**.
4. Every push to the main branch redeploys the site.

**Option B — from your terminal**

```bash
npm i -g vercel
vercel          # first run links the project and creates a preview deployment
vercel --prod   # deploys to production
```

## Accessibility & motion

- `prefers-reduced-motion` turns off Lenis smooth scrolling, card tilts, the photo tilt, camera easing on the graph and the scene animations (each scene shows a still frame).
- The graph pauses when the tab is hidden and stops rendering when its sections are off-screen.
