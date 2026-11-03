import {
  SiPython, SiCplusplus, SiC, SiJavascript, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiLangchain, SiLanggraph, SiModelcontextprotocol, SiReact, SiFlask, SiFastapi, SiMysql,
  SiDuckdb, SiDocker, SiGit, SiGithub, SiLinux, SiGithubactions, SiJira, SiFigma, SiNotion,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

// Each skill shows a brand logo (icon) or, when no logo exists, Anton letters (label).
export const skills = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    category: 'Data & ML',
    items: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'XGBoost', label: 'XGB' },
      { name: 'SHAP', label: 'SHAP' },
    ],
  },
  {
    category: 'LLM & Agentic AI',
    items: [
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLanggraph },
      { name: 'RAG', label: 'RAG' },
      { name: 'MCP', icon: SiModelcontextprotocol },
      { name: 'LangSmith', label: 'LS' },
      { name: 'Embeddings', label: 'EMB' },
    ],
  },
  {
    category: 'Web & APIs',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST', label: 'REST' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'DuckDB', icon: SiDuckdb },
      { name: 'NoSQL', label: 'NoSQL' },
      { name: 'SQL', label: 'SQL' },
    ],
  },
  {
    category: 'Cloud & Tools',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Linux', icon: SiLinux },
      { name: 'CI/CD', icon: SiGithubactions },
    ],
  },
  {
    category: 'Product Management',
    items: [
      { name: 'Product Strategy', label: 'PS' },
      { name: 'Roadmapping', label: 'MAP' },
      { name: 'User Research', label: 'UX' },
      { name: 'PRDs', label: 'PRD' },
      { name: 'Agile / Scrum', label: 'AGL' },
      { name: 'A/B Testing', label: 'A/B' },
      { name: 'Jira', icon: SiJira },
      { name: 'Figma', icon: SiFigma },
      { name: 'Notion', icon: SiNotion },
    ],
  },
];

export const tileShades = ['#6d000f', '#8a1a2a', '#5c000d', '#a3283a', '#7a0f1d', '#b5394a', '#4a000a'];
