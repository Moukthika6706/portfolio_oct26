// Text content for the smaller sections. Items marked TBD are placeholders.

export const greetings = ['Hi', 'Hello', 'नमस्ते', 'నమస్కారం', 'வணக்கம்', 'हेलो', 'Bonjour', 'Hallo', 'مرحبا'];

export const hero = {
  name: "I'm Moukthika",
  note: "hi there, that's me!",
  photo: '/me.jpg',
  year: '2026',
  focus: 'Software · AI/ML · Data',
};

export const aboutTitle = 'A little about me';

export const about = [
  "Hey, I'm Moukthika! I'm a final-year Computer Science student at SRM Institute of Science and Technology with a CGPA of 9.2, and I genuinely enjoy figuring out how things work and building things from scratch.",
  "I'm passionate about software development, problem-solving, and exploring what AI can do. I love taking an idea and turning it into something real — whether that's building backend systems, experimenting with AI and machine learning, or creating clean, intuitive interfaces that make a product feel complete.",
  "I'm always curious about new technologies, always experimenting with something, and probably never done tweaking a project because I think it could be a little better.",
  'Outside of coding, I enjoy collaborating with people, taking up new challenges, and being part of communities where I can learn and contribute.',
  'Simply put, I love building things, solving problems, and getting better at what I do every day.',
];

export const education = [
  {
    years: '2023 – 2027',
    title: 'B.Tech, Computer Science',
    place: 'SRM Institute of Science and Technology',
    score: '9.2 / 10',
    scoreLabel: 'CGPA (current)',
  },
  {
    years: '2021 – 2023',
    title: 'Class XII',
    place: 'Resonance Junior College',
    score: '93.4%',
    scoreLabel: 'MPC',
  },
  {
    years: '2021',
    title: 'Class X',
    place: 'St. Peters Model School',
    score: '92.3%',
    scoreLabel: 'CBSE · School Captain',
  },
];

// link: optional, shown as a "View on IEEE Xplore" button
export const publications = [
  {
    venue: 'October 2026',
    title: 'RenalGuard-X: An Explainable Model for Accurate Chronic Kidney Disease Prediction',
    note: 'Authored and published in the 2026 IEEE International Conference on Natural Language Processing and Computer Vision (ICNPCV).',
    link: 'https://ieeexplore.ieee.org/document/11708933',
  },
  {
    venue: 'August 2026',
    title: 'ColoXAI: Explainable Framework for Colorectal Cancer Prediction',
    note: 'Co-authored and presented at the 2nd IEEE International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSCNC 2026).',
  },
];

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services' },
  { name: 'AWS Academy Machine Learning Foundations', issuer: 'Amazon Web Services' },
  { name: 'Enterprise Cloud Engineering for Insurance Technology', issuer: 'Guidewire' },
  { name: 'GitHub Copilot', issuer: 'Microsoft' },
  { name: 'Full-Stack Web Development Bootcamp', issuer: 'Udemy' },
  { name: 'Complete Python Bootcamp', issuer: 'Udemy' },
  { name: 'Machine Learning', issuer: 'NPTEL' },
  { name: 'Programming in Java', issuer: 'NPTEL' },
];

export const interests = [
  { emoji: '💻', label: 'Software Engineering' },
  { emoji: '🤖', label: 'AI / ML Engineer' },
  { emoji: '📊', label: 'Data Science' },
  { emoji: '🚀', label: 'Forward Deployed Engineer' },
  { emoji: '🏥', label: 'Healthcare' },
  { emoji: '🏦', label: 'Fintech' },
];

export const leadership = [
  {
    when: 'Aug 2024 – Present',
    role: 'Corporate Member · IEEE SSIT, SRM',
    note: 'Led a team of 35 students and ran a flagship event.',
  },
  {
    when: 'Jan 2024 – Jan 2025',
    role: 'PR Member · Directorate of Student Affairs',
    note: "Managed Milan'24, a national-level fest with around 7k students across universities.",
  },
];

// Contact buttons
export const contact = [
  { label: '⬇ Download Resume', href: '/resume.pdf', download: 'Moukthika_Resume.pdf' },
  { label: '✉ Email', href: 'mailto:moukthika6706@gmail.com' },
  { label: '☎ +91 93901 30430', href: 'tel:+919390130430' },
  { label: 'GitHub', href: 'https://github.com/Moukthika6706', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/moukthika-m-839544428/', external: true },
];

export const navLinks = [
  { id: 'about', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'certifications', label: 'Certifications' },
  {
    id: 'interests',
    label: 'More ▾',
    children: [
      { id: 'interests', label: 'Interests' },
      { id: 'leadership', label: 'Leadership' },
      { id: 'looking', label: "What I'm looking for" },
    ],
  },
  { id: 'contact', label: 'Contact' },
];
