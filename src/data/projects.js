// Projects shown as flip cards in the Projects section, in this order.
// Front: title + tech stack. Back: category, focus, description bullets and GitHub link.
// - tech: [] shows a "Tech stack TBD" tag
// - description: [] shows "Description coming soon"
// - github: replace the profile URL with each repo URL when ready
export const GITHUB_PROFILE = 'https://github.com/Moukthika6706';

export const projects = [
  {
    title: 'TrustTrail',
    category: 'AI / FinTech',
    focus: 'Conversational Analytics',
    tech: ['Python', 'FastAPI', 'DuckDB', 'Groq API', 'Streamlit'],
    github: GITHUB_PROFILE,
    description: [
      'Built an AI-powered conversational analytics platform that allows users to query financial data using natural language instead of writing SQL.',
      'Integrated an LLM-powered Text-to-SQL pipeline to convert user questions into executable database queries.',
      'Used DuckDB for efficient data processing and generated insights with interactive visualizations.',
      'Implemented a Trust Trail panel to display generated SQL, metric definitions, data sources, and confidence information for transparent, traceable results.',
    ],
  },
  {
    title: 'RiskSure',
    category: 'AI / InsurTech',
    focus: 'Predictive Analytics',
    tech: ['Python', 'Flask', 'React.js', 'Scikit-learn', 'SHAP'],
    github: GITHUB_PROFILE,
    description: [
      'Developed an AI-powered insurance platform for risk assessment, premium estimation, and underwriting support.',
      'Integrated machine learning models to evaluate customer risk profiles and support insurance pricing decisions.',
      'Used SHAP-based explainability to identify the factors influencing risk predictions.',
      'Built a React frontend and Flask backend to connect model predictions with an interactive insurance management interface.',
    ],
  },
  {
    title: 'Validito',
    category: 'AI / FinTech',
    focus: 'Document Intelligence',
    tech: ['Python', 'FastAPI', 'React', 'Scikit-learn', 'PostgreSQL'],
    github: GITHUB_PROFILE,
    description: [
      'Developed an AI-assisted term sheet validation platform designed for financial advisors and deal teams.',
      'Automates financial document extraction and validation against relevant financial and governance rules.',
      'Identifies unusual terms, inconsistencies, and potential compliance issues through rule-based checks and anomaly detection.',
      'Maintains an audit trail of validation results, flagged issues, supporting evidence, and review decisions.',
    ],
  },
  {
    title: 'ColoXAI',
    category: 'AI / Healthcare',
    focus: 'Explainable AI',
    tech: ['Python', 'TensorFlow', 'SHAP', 'RAG', 'Pandas'],
    github: GITHUB_PROFILE,
    description: [
      'Developed an explainable AI framework for colorectal cancer prediction using machine learning and deep learning techniques.',
      'Explored hybrid intelligence approaches to improve prediction and make model outputs more interpretable.',
      'Integrated explainability techniques to understand the features influencing model predictions.',
      'Incorporated Retrieval-Augmented Generation (RAG) to connect prediction workflows with relevant medical knowledge and research literature.',
    ],
  },
  {
    title: 'RenalGuard-X',
    category: 'AI / Healthcare',
    focus: 'Machine Learning',
    tech: ['Python', 'Scikit-learn', 'Extra Trees', 'SHAP', 'K-Means SMOTE'],
    github: GITHUB_PROFILE,
    description: [
      'Developed a machine learning system for Chronic Kidney Disease (CKD) prediction using clinical and biochemical parameters.',
      'Experimented with multiple classification algorithms and selected an Extra Trees classifier for the predictive model.',
      'Applied K-Means SMOTE to address class imbalance and improve model training.',
      'Integrated SHAP to explain feature contributions and make CKD predictions more interpretable.',
    ],
  },
  {
    title: 'Multimodal PCOS Screening',
    category: 'AI / Healthcare',
    focus: 'Research Project',
    tech: ['Python', 'Deep Learning', 'CNN', 'Grad-CAM', 'RAG'],
    github: GITHUB_PROFILE,
    description: [
      'Developing an explainable AI framework for ultrasound-based PCOS screening and clinical decision support.',
      'Uses deep learning to classify ovarian ultrasound images and Grad-CAM to visualize image regions influencing predictions.',
      'Includes separate clinical prediction modules for insulin-resistance assessment using HOMA-IR and metabolic syndrome assessment.',
      'Integrates RAG to retrieve relevant medical literature and provide contextual, evidence-based health information.',
    ],
  },
  {
    title: 'MindSphere',
    category: 'AI / Full Stack',
    focus: 'Mental Wellness',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'NLP'],
    github: GITHUB_PROFILE,
    description: [
      'Built an AI-powered mental wellness platform designed to make emotional support and self-care more accessible.',
      'Developed a personalized chatbot for daily emotional check-ins using NLP and sentiment analysis.',
      'Created a secure journaling space with mood tracking to help users understand their emotional patterns.',
      'Added mood-based content recommendations, personalized habit suggestions, and therapist-connect support.',
    ],
  },
  {
    title: 'Travelly',
    category: 'AI / Full Stack',
    focus: 'Travel Tech',
    tech: ['React', 'Express.js', 'Gemini API', 'Firebase', 'ML Recommender'],
    github: GITHUB_PROFILE,
    description: [
      'Created a Gen-Z-focused travel application with a Pinterest-inspired interface and swipe-based destination discovery.',
      'Integrated AI and machine learning to generate personalized travel itineraries based on user interests and travel preferences.',
      'Designed an all-in-one travel experience covering flights, stays, and activities.',
      'Developed an AI travel buddy to provide real-time assistance, recommendations, and suggestions during trips.',
    ],
  },
  {
    title: 'CampusEats',
    category: 'Full Stack',
    focus: 'Campus Tech',
    tech: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js'],
    github: GITHUB_PROFILE,
    description: [
      'Built a smart canteen management platform for SRM IST Kattankulathur to address long queues, manual ordering, and inefficient order coordination.',
      'Developed a unified platform connecting students, vendors, and administrators through digital food ordering and order management.',
      'Implemented menu browsing, cart management, order tracking, and vendor order acceptance or rejection.',
      'Enhanced the system with order history, reorder functionality, vendor analytics, and email notifications.',
    ],
  },
];
