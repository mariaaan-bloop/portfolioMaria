export type SkillCategory =
  | 'ALL'
  | 'DATA'
  | 'BI'
  | 'DATA ENGINEERING'
  | 'SYSTEM'
  | 'BUSINESS & PRODUCT'
  | 'DESIGN';

export interface SkillItem {
  id: string;
  name: string;
  categories: SkillCategory[];
  level: string; // e.g., 'Core', 'Advanced', 'Specialized'
  /** true = sedang dipelajari */
  learning?: boolean;
  iconName: string;
  tagline: string;
  bgGrad: string;
  textColor: string;
  borderColor: string;
  initialX: number;
  initialY: number;
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    categories: ['DATA', 'DATA ENGINEERING', 'BI'],
    level: 'Core Language',
    iconName: 'Terminal',
    tagline: 'End-to-end data wrangling, automation scripts, ML modeling & ETL pipelines',
    bgGrad: 'rgba(53, 32, 68, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.4)',
    initialX: 20,
    initialY: 30
  },
  {
    id: 'sql',
    name: 'SQL & Relational DBs',
    categories: ['DATA', 'BI', 'DATA ENGINEERING', 'SYSTEM'],
    level: 'Core Querying',
    iconName: 'Database',
    tagline: 'Multi-table star schema queries, complex joins, aggregations & performance optimization',
    bgGrad: 'rgba(43, 26, 56, 0.9)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.5)',
    initialX: 230,
    initialY: 20
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    categories: ['BI', 'DATA'],
    level: 'Executive BI',
    iconName: 'BarChart3',
    tagline: 'Multi-page executive dashboards, DAX measures, cohort matrices & SQL live connects',
    bgGrad: 'rgba(60, 36, 76, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(233, 199, 212, 0.45)',
    initialX: 470,
    initialY: 40
  },
  {
    id: 'tableau',
    name: 'Tableau',
    categories: ['BI', 'DATA'],
    level: 'Visual Storytelling',
    iconName: 'PieChart',
    tagline: 'Interactive parameter controls, story points, ATV trends & public cloud dashboards',
    bgGrad: 'rgba(48, 29, 62, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(141, 106, 145, 0.5)',
    initialX: 700,
    initialY: 25
  },
  {
    id: 'pandas',
    name: 'Pandas & NumPy',
    categories: ['DATA', 'DATA ENGINEERING'],
    level: 'Data Wrangling',
    iconName: 'Table',
    tagline: 'Vectorized transformations, missing value imputation, EDA & feature matrices',
    bgGrad: 'rgba(42, 25, 54, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.35)',
    initialX: 920,
    initialY: 45
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    categories: ['DATA'],
    level: 'Machine Learning',
    iconName: 'Cpu',
    tagline: 'Classification pipelines, stratified cross-validation, hyperparameter tuning & metrics',
    bgGrad: 'rgba(56, 34, 72, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.45)',
    initialX: 60,
    initialY: 130
  },
  {
    id: 'catboost-rf',
    name: 'CatBoost & Random Forest',
    categories: ['DATA'],
    level: 'Ensemble Modeling',
    iconName: 'GitBranch',
    tagline: 'High-accuracy tabular ensemble modeling with ADASYN synthetic augmentation (81.98% acc)',
    bgGrad: 'rgba(48, 29, 62, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.4)',
    initialX: 320,
    initialY: 140
  },
  {
    id: 'apache-spark',
    name: 'Apache Spark & PySpark',
    categories: ['DATA ENGINEERING', 'DATA'],
    level: 'Big Data Processing',
    iconName: 'Zap',
    tagline: 'Distributed batch ETL pipelines, resilient datasets & Hadoop HDFS scalability',
    bgGrad: 'rgba(54, 32, 70, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.5)',
    initialX: 630,
    initialY: 125
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    categories: ['DATA ENGINEERING', 'SYSTEM', 'DATA'],
    level: 'Data Warehousing',
    iconName: 'Database',
    tagline: 'Dimensional star schema data warehouses, index tuning, fact & dimension tables',
    bgGrad: 'rgba(40, 24, 52, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(141, 106, 145, 0.45)',
    initialX: 890,
    initialY: 145
  },
  {
    id: 'mysql',
    name: 'MySQL',
    categories: ['DATA ENGINEERING', 'SYSTEM'],
    level: 'Relational Database',
    iconName: 'Server',
    tagline: 'Transactional databases for retail analytics warehouses and web applications',
    bgGrad: 'rgba(52, 31, 66, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(233, 199, 212, 0.35)',
    initialX: 30,
    initialY: 235
  },
  {
    id: 'pentaho',
    name: 'Pentaho Data Integration (PDI)',
    categories: ['DATA ENGINEERING', 'BI'],
    level: 'Automated ETL',
    iconName: 'Workflow',
    tagline: 'End-to-end Kettle jobs & transformations for 400K+ transaction datasets',
    bgGrad: 'rgba(44, 26, 58, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.4)',
    initialX: 250,
    initialY: 245
  },
  {
    id: 'ms-excel',
    name: 'Microsoft Excel / Office',
    categories: ['BUSINESS & PRODUCT', 'BI'],
    level: 'Financial & Business Modeling',
    iconName: 'Sheet',
    tagline: 'DCF valuation, 5-year financial projections, NPV/IRR calculations & feasibility',
    bgGrad: 'rgba(55, 33, 71, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.4)',
    initialX: 530,
    initialY: 230
  },
  {
    id: 'figma',
    name: 'Figma',
    categories: ['DESIGN', 'BUSINESS & PRODUCT', 'SYSTEM'],
    level: 'UI/UX & Prototyping',
    iconName: 'Figma',
    tagline: 'High-fidelity wireframes, interactive user flows, and design systems for web & mobile',
    bgGrad: 'rgba(46, 27, 60, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.5)',
    initialX: 790,
    initialY: 235
  },
  {
    id: 'mermaid',
    name: 'Mermaid.js & Visual Paradigm',
    categories: ['SYSTEM', 'BUSINESS & PRODUCT'],
    level: 'System Modeling',
    iconName: 'Network',
    tagline: 'Process flowcharts, entity-relationship diagrams (ERD), and UML sequence diagrams',
    bgGrad: 'rgba(42, 25, 54, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(141, 106, 145, 0.45)',
    initialX: 80,
    initialY: 340
  },
  {
    id: 'laravel-tailwind',
    name: 'Laravel & Tailwind CSS',
    categories: ['SYSTEM', 'DESIGN'],
    level: 'Full-Stack Architecture',
    iconName: 'Code',
    tagline: 'MVC backend frameworks, RESTful APIs, role-based access & modern responsive styling',
    bgGrad: 'rgba(58, 35, 74, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.45)',
    initialX: 370,
    initialY: 345
  },
  {
    id: 'docker',
    name: 'Docker & Environment Staging',
    categories: ['SYSTEM', 'DATA ENGINEERING'],
    level: 'Containerization',
    iconName: 'Box',
    tagline: 'Consistent container environments for Laravel backends and data pipeline testing',
    bgGrad: 'rgba(44, 26, 56, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(233, 199, 212, 0.35)',
    initialX: 680,
    initialY: 335
  },
  {
    id: 'r-language',
    name: 'R',
    categories: ['DATA'],
    level: 'Currently Studying',
    learning: true,
    iconName: 'Sigma',
    tagline: 'Currently studying: statistical computing, data manipulation and visualization in R',
    bgGrad: 'rgba(50, 30, 64, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.4)',
    initialX: 60,
    initialY: 430
  },
  {
    id: 'qgis',
    name: 'QGIS',
    categories: ['DATA', 'BI'],
    level: 'Currently Studying',
    learning: true,
    iconName: 'Map',
    tagline: 'Currently studying: geospatial analysis, map layers and spatial data visualization',
    bgGrad: 'rgba(50, 30, 64, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(109, 74, 255, 0.45)',
    initialX: 300,
    initialY: 430
  },
  {
    id: 'github',
    name: 'Git & GitHub',
    categories: ['SYSTEM', 'DATA', 'DATA ENGINEERING'],
    level: 'Version Control',
    iconName: 'GitPullRequest',
    tagline: 'Collaborative code versioning, repository documentation, and CI automation',
    bgGrad: 'rgba(50, 30, 64, 0.85)',
    textColor: '#F8F5F2',
    borderColor: 'rgba(201, 143, 168, 0.4)',
    initialX: 910,
    initialY: 340
  }
];