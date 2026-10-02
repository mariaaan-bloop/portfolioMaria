import { asset } from './assets';
export interface ProjectJourneyStep {
  phase: string;
  title: string;
  desc: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category:
    | 'DATA & BI'
    | 'DATA ENGINEERING'
    | 'BUSINESS & PRODUCT'
    | 'SYSTEM ANALYSIS';
  /** Kategori tambahan supaya project muncul di lebih dari satu tab filter */
  alsoIn?: ProjectItem['category'][];
  categoryLabel: string;
  status: 'Completed' | 'Ongoing';
  role: string;
  roleHighlights?: string[];
  overview: string;
  approach: string[];
  tools: string[];
  metrics: ProjectMetric[];
  keyInsights: string[];
  outcomes: string[];
  recommendations?: string[];
  links: {
    github?: string;
    powerbi?: string;
    tableau?: string;
    figma?: string;
    demo?: string;
  };
  image?: string;
  gallery?: string[];
  accentColor: string;
  journey: ProjectJourneyStep[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'customer-shopping-behavior',
    title: 'Customer Shopping Behavior Analysis',
    shortTitle: 'Customer Shopping Behavior',
    category: 'DATA & BI',
    categoryLabel: 'Data Analyst / Business Intelligence',
    status: 'Completed',
    role: 'Data Analyst · ML Modeling · Data Visualization',
    roleHighlights: [
      'Led predictive machine learning modeling and feature engineering',
      'Conducted end-to-end data wrangling and exploratory data analysis across 3,900 transactions',
      'Designed a comprehensive 4-page interactive executive Tableau dashboard',
    ],
    overview:
      'A comprehensive data analytics lifecycle project analyzing a dataset of 3,900 customer shopping transactions across 18 original variables. The primary objective is to develop a deep understanding of customer purchasing patterns, evaluate the effectiveness of promotional discounts and subscription statuses on shopper behavior, and build tuned classification models to guide targeted retention strategies.',
    approach: [
      'CRISP-DM Analytics Lifecycle Framework execution',
      'Descriptive and diagnostic exploratory data analysis (EDA)',
      'Non-parametric statistical hypothesis testing (Kruskal-Wallis, Mann-Whitney U, Chi-Square)',
      'Feature engineering & synthetic sampling with SMOTE for class imbalance',
      'Tuned Logistic Regression and XGBoost classification modeling',
      'Interactive executive BI dashboard design and storyboarding in Tableau',
    ],
    tools: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'imbalanced-learn',
      'Tableau',
      'Mermaid.js',
      'GitHub',
      'Microsoft Office',
    ],
    metrics: [
      {
        label: 'Average Transaction Value (ATV)',
        value: '$59.76',
        detail:
          'Uniform spending behavior across demographic tiers and categories',
      },
      {
        label: 'Discount Efficiency Rate',
        value: '0% Lift',
        detail:
          'Discounts drive basket participation rather than higher basket value',
      },
      {
        label: 'Subscription Cramér’s V',
        value: '0.42',
        detail:
          'Moderate association revealing a key female non-subscriber conversion opportunity',
      },
      {
        label: 'Analyzed Dataset Size',
        value: '3,900',
        detail: 'Detailed transactions with 18 distinct consumer attributes',
      },
    ],
    keyInsights: [
      'Average Transaction Value (ATV) held steady at $59.76 per transaction, showing surprising uniformity across age groups, product categories, and payment types.',
      'Discount Efficiency Rate yielded a 0% increase in average ticket spend, proving promotions act purely as adoption & volume drivers rather than ticket-upselling catalysts.',
      'Subscription Engagement Index identified a moderate gender-based association (Cramér’s V = 0.42), pinpointing a high-potential conversion gap within the female non-subscriber cohort.',
    ],
    outcomes: [
      'Comprehensive two-phase analytical research report detailing statistical tests and findings',
      'Jupyter notebooks covering end-to-end cleaning, statistical validation, and ML pipelines',
      'Interactive four-page executive dashboard deployed on Tableau Public',
    ],
    recommendations: [
      'Target discount-driven acquisition campaigns specifically toward the female demographic (focusing on accessories and clothing) to efficiently convert non-subscribers and reduce wasted marketing spend.',
      'Reposition discounts strictly as subscription conversion incentives (such as exclusive trial offers or spend-to-unlock thresholds) rather than spending drivers, protecting profit margins from eroding without increasing transaction values.',
    ],
    links: {
      github:
        'https://github.com/mariaaan-bloop/Customer-Shopping-Behaviour-Analysis',
      tableau:
        'https://public.tableau.com/app/profile/nabila.mukhbita/viz/CustomerShoppingBehaviorAnalysisDashboard/ExcecutiveSummary?publish=yes&showOnboarding=true',
    },
    image: asset('Project/Data Analytics - BI/shopping_behaviour/shopping_beha1.png'),
    gallery: [
      asset('Project/Data Analytics - BI/shopping_behaviour/shopping_beha1.png'),
      asset('Project/Data Analytics - BI/shopping_behaviour/shopping_beha2.png'),
      asset('Project/Data Analytics - BI/shopping_behaviour/shopping_beha3.png'),
      asset('Project/Data Analytics - BI/shopping_behaviour/shopping_beha4.png'),
    ],
    accentColor: '#C98FA8',
    journey: [
      {
        phase: 'Problem',
        title: 'Promotion & Retention Blindspots',
        desc: 'Retail management lacked empirical clarity on whether discount campaigns were lifting revenue or cannibalizing margins.',
      },
      {
        phase: 'Data',
        title: 'Wrangling 3,900 Records',
        desc: 'Cleaned 18 consumer variables, normalized transaction distributions, and prepared categorical matrices.',
      },
      {
        phase: 'Analysis',
        title: 'Non-Parametric Hypothesis Testing',
        desc: 'Utilized Kruskal-Wallis, Mann-Whitney U, and Chi-Square tests to validate statistical behavioral differences.',
      },
      {
        phase: 'Modeling',
        title: 'SMOTE & Predictive Classification',
        desc: 'Trained tuned Logistic Regression and XGBoost classifiers with SMOTE resampled consumer segments.',
      },
      {
        phase: 'Visualization',
        title: '4-Page Tableau Executive Suite',
        desc: 'Constructed an executive dashboard highlighting ATV stability, promotion efficiency, and subscription drivers.',
      },
      {
        phase: 'Outcome',
        title: 'Actionable Retention Playbook',
        desc: 'Delivered strategic recommendations to redirect discount expenditure toward targeted subscriber loyalty programs.',
      },
    ],
  },
  {
    id: 'big-data-olist-analytics',
    title:
      'Implementation of Big Data Architecture for E-Commerce Analytics and Customer Satisfaction Prediction on Brazilian Olist Data',
    shortTitle: 'Brazilian Olist Big Data & Satisfaction AI',
    category: 'DATA & BI',
    categoryLabel: 'Data Analytics / Big Data & ML',
    status: 'Completed',
    role: 'Data Analyst · Team Leader · ML Engineer',
    roleHighlights: [
      'Led the end-to-end multi-member engineering and analytics workflow',
      'Engineered scalable batch ETL pipeline using Apache Spark / PySpark over large-scale transaction data',
      'Trained classification models achieving 81.98% accuracy with ADASYN imbalance handling',
    ],
    overview:
      'A Big Data Architecture and end-to-end analytics platform engineered to process millions of operational rows from the public Brazilian Olist e-commerce dataset. The project accomplished two core objectives: constructing a distributed, scalable data infrastructure capable of high-throughput operational processing, and predicting customer satisfaction scores using machine learning to diagnose root causes of negative customer sentiment.',
    approach: [
      'Batch processing ETL pipeline engineered with Apache Spark (PySpark) on Hadoop HDFS architecture',
      'Feature engineering extracting shipping lead time, transit variance, and freight ratios',
      'Class imbalance mitigation using ADASYN (Adaptive Synthetic) and Gaussian noise augmentation',
      'Model training with CatBoost and Random Forest evaluated through 10-Fold Stratified Cross-Validation',
      'Interactive multi-page executive logistics and satisfaction dashboard in Power BI',
    ],
    tools: [
      'Python',
      'CatBoost',
      'Random Forest',
      'Scikit-learn',
      'ADASYN',
      'Hadoop HDFS',
      'Apache Spark / PySpark',
      'Power BI',
      'Microsoft Office',
    ],
    metrics: [
      {
        label: 'CatBoost Model Accuracy',
        value: '81.98%',
        detail: 'Evaluated with 10-Fold Stratified Cross-Validation',
      },
      {
        label: 'On-Time Customer Satisfaction',
        value: '82.85%',
        detail: 'High satisfaction rate when logistics deadlines are met',
      },
      {
        label: 'Delayed Customer Satisfaction',
        value: '34.68%',
        detail:
          'Severe 48.17% drop in customer satisfaction when orders are delayed',
      },
      {
        label: 'Data Architecture',
        value: 'PySpark + HDFS',
        detail: 'Scalable distributed batch ETL framework',
      },
    ],
    keyInsights: [
      'Primary Driver of Satisfaction: Actual delivery duration and unexpected shipping delays represent the single most decisive factor determining customer satisfaction scores.',
      'Drastic Sentiment Cliff: Customer satisfaction plummets from 82.85% for punctual shipments down to just 34.68% when shipments arrive past the estimated date.',
      'Predictive Power: CatBoost outmatched baseline classifiers, accurately identifying at-risk orders prior to final customer review submission.',
    ],
    outcomes: [
      'Scalable distributed batch ETL processing pipeline leveraging Apache Spark and Hadoop HDFS',
      'Tuned CatBoost machine learning model reaching 81.98% cross-validated classification accuracy',
      'Multi-page interactive Power BI executive suite visualizing fulfillment bottlenecks and customer satisfaction',
    ],
    recommendations: [
      'Streamline logistics and optimize delivery timelines to boost customer satisfaction.',
      'Establish regional fulfillment centers or enhance courier partnerships in high-latency areas to minimize transit durations.',
      'Implement strict pre-shipment quality checks for large orders to reduce fulfillment errors and complaints.',
    ],
    links: {
      github: 'https://github.com/mariaaan-bloop/Customer-Shopping-Behaviour-Analysis',
      powerbi:
        'https://app.powerbi.com/groups/me/reports/bd9aecc8-8f65-4ad5-8144-6e2f341b62fd/1ad5e60f18f4250250dd?experience=power-bi',
    },
    image: asset('Project/Data Analytics - BI/customer_satisfaction_bigdata/customer_satisfaction_1.png'),
    gallery: [
      asset('Project/Data Analytics - BI/customer_satisfaction_bigdata/customer_satisfaction_1.png'),
      asset('Project/Data Analytics - BI/customer_satisfaction_bigdata/customer_satisfaction_2.png'),
      asset('Project/Data Analytics - BI/customer_satisfaction_bigdata/customer_satisfaction_3.png'),
    ],
    accentColor: '#6D4AFF',
    journey: [
      {
        phase: 'Problem',
        title: 'Customer Sentiment Erosion in E-Commerce',
        desc: 'Unpredictable multi-state logistics in Brazil resulted in spikes of 1-star reviews without immediate visibility into causes.',
      },
      {
        phase: 'Data Pipeline',
        title: 'PySpark & HDFS Distributed ETL',
        desc: 'Ingested multi-million row operational datasets, joined customer, order, payment, and delivery records.',
      },
      {
        phase: 'Augmentation',
        title: 'Imbalance Resolution with ADASYN',
        desc: 'Handled skewed customer review distributions with synthetic ADASYN sampling and Gaussian noise injection.',
      },
      {
        phase: 'Modeling',
        title: 'CatBoost & 10-Fold Stratified CV',
        desc: 'Trained CatBoost and Random Forest ensembles, validating resilience and achieving 81.98% predictive accuracy.',
      },
      {
        phase: 'Dashboard',
        title: 'Power BI Multi-Page Executive Command',
        desc: 'Designed dynamic logistics dashboards highlighting SLA adherence, fulfillment delays, and geo-regional trends.',
      },
      {
        phase: 'Outcome',
        title: 'Operational SLA Interventions',
        desc: 'Empowered logistics managers to proactively flag delayed shipments and issue pre-emptive service updates.',
      },
    ],
  },
  {
    id: 'customer-support-ticket-analytics',
    title: 'Customer Support Ticket Analytics',
    shortTitle: 'Support Ticket Operations & BI',
    category: 'DATA & BI',
    categoryLabel: 'Data Analytics / BI & Data Engineering',
    status: 'Completed',
    role: 'Business Intelligence Analyst · Data Engineering',
    roleHighlights: [
      'Constructed complete end-to-end Python ETL cleaning and validation pipeline',
      'Engineered relational Star Schema data warehouse architecture in PostgreSQL',
      'Analyzed 18 core operational business questions and designed direct-connected Power BI dashboard',
      'Executed user acceptance testing (UAT) for operational team adoption',
    ],
    overview:
      'Addressed operational blindspots surrounding support ticket backlog accumulation, extended resolution cycles, and depressed Customer Satisfaction (CSAT) scores. Analyzed 4,000 comprehensive ticket histories spanning January 1, 2023 to February 4, 2024 through an automated Python ETL pipeline, a PostgreSQL Star Schema data warehouse, and interactive Power BI dashboards to diagnose support bottlenecks with surgical precision.',
    approach: [
      'Python ETL extraction, data hygiene validation, and derived metric engineering via Pandas',
      'Dimensional modeling implementing Star Schema (fact_tickets, dim_date, dim_channel, dim_queue, dim_priority)',
      'Advanced SQL analytics systematically answering 18 strategic business and operational questions',
      'Live-connected Power BI reporting displaying First Response Time (FRT), Mean Time to Resolution (MTTR), and backlog velocity',
      'User Acceptance Testing (UAT) with support leads to ensure analytical accuracy',
    ],
    tools: [
      'Python',
      'Pandas',
      'PostgreSQL',
      'SQL',
      'Power BI',
      'Microsoft Office',
    ],
    metrics: [
      {
        label: 'Technical Queue Volume',
        value: '1,282 (32%)',
        detail: 'Largest single ticket category across support operations',
      },
      {
        label: 'Technical Mean Resolution',
        value: '~4,982 mins',
        detail: 'Longest resolution time with lowest CSAT rating of 3.85',
      },
      {
        label: 'Open Backlog Share',
        value: '46.2%',
        detail:
          'Technical queue accounts for nearly half of the 225 active open tickets',
      },
      {
        label: 'Top Inbound Channel',
        value: 'Email (34%)',
        detail: '1,368 tickets originating from email inquiries',
      },
    ],
    keyInsights: [
      'Technical Bottleneck: The Technical queue represents 32% of total volume (1,282 tickets), records the longest resolution time (~4,982 minutes), and yields the lowest CSAT score (3.85).',
      'Backlog Concentration: Out of 225 active unresolved backlog tickets, the Technical queue alone is responsible for 46.2%.',
      'Reopening Friction: 285 total tickets were reopened by users, with the Technical queue leading with 84 repeat reopenings.',
      'CSAT Response Gap: CSAT survey responses were captured for only 30.65% of all closed tickets (1,226 tickets), exposing a survey distribution drop-off.',
    ],
    outcomes: [
      'Automated Python ETL cleaning and ingestion pipeline with data validation checks',
      'Production-grade PostgreSQL Star Schema data warehouse (fact_tickets and dimensional tables)',
      '18-point SQL strategic business analysis documentation answering core operational questions',
      'Interactive executive and operational Power BI dashboard with completed User Acceptance Testing',
    ],
    recommendations: [
      'Optimize High-Volume & Slow Queues: Review staffing and workflows for Technical (highest backlog) and Integrations (slowest first response).',
      'Implement Low-Priority SLA: Establish a ~5-day resolution SLA to improve the current ~109-hour average.',
      'Investigate Technical Reopens: Audit handling processes to address the highest volume of reopened tickets (84).',
      'Boost CSAT Response Rate: Increase survey completion from the 30.65% baseline using immediate post-resolution triggers.',
      'Analyze Reopen/Multi-Touch Impact: Conduct follow-on studies to test correlations between ticket reopens and customer satisfaction.',
    ],
    links: {
      github:
        'https://github.com/mariaaan-bloop/CUSTOMER-SUPPORT-TICKET-ANALYTICS',
      powerbi:
        'https://app.powerbi.com/links/r3YnCFAOgr?ctid=3485b963-82ba-4a6f-810f-b5cc226ff898&pbi_source=linkShare',
    },
    image: asset(
      'Project/Data Analytics - BI/customer_support_ticket/customer_support_ticket_1.png'
    ),
    gallery: [
      asset(
        'Project/Data Analytics - BI/customer_support_ticket/customer_support_ticket_1.png'
      ),
      asset(
        'Project/Data Analytics - BI/customer_support_ticket/customer_support_ticket_2.png'
      ),
      asset(
        'Project/Data Analytics - BI/customer_support_ticket/customer_support_ticket_3.png'
      ),
    ],
    accentColor: '#8D6A91',
    journey: [
      {
        phase: 'Problem',
        title: 'Unmonitored Backlog & Support Fatigue',
        desc: 'Support leadership lacked visibility into ticket backlog escalation and sluggish technical turnaround times.',
      },
      {
        phase: 'ETL Pipeline',
        title: 'Python Validation & Cleanse',
        desc: 'Processed 4,000 raw ticket records, calculated precise duration deltas, and normalized priority statuses.',
      },
      {
        phase: 'Warehouse',
        title: 'PostgreSQL Star Schema Design',
        desc: 'Constructed fact_tickets joined with dim_date, dim_channel, dim_queue, and dim_priority for fast relational querying.',
      },
      {
        phase: 'Analysis',
        title: '18 SQL Operational Query Benchmarks',
        desc: 'Wrote structured analytical SQL queries evaluating First Response Time (FRT), resolution durations, and reopening rates.',
      },
      {
        phase: 'Dashboard',
        title: 'Power BI Interactive Control Tower',
        desc: 'Visualized queue bottlenecks, ticket age distributions, and channel split with direct SQL warehouse connection.',
      },
      {
        phase: 'Outcome',
        title: 'Targeted Technical Queue Reallocation',
        desc: 'Provided evidence for dedicated tier-2 engineering triage to alleviate 46.2% backlog stagnation.',
      },
    ],
  },
  {
    id: 'reeflection-blue-economy',
    title:
      'Reeflection — Gamified Digital Business Innovation for Coral Conservation & Blue Economy Empowerment',
    shortTitle: 'Reeflection: Marine Gamification & Economy',
    category: 'BUSINESS & PRODUCT',
    categoryLabel: 'Business & Product Analysis',
    status: 'Completed',
    role: 'Business Analyst · UI/UX Designer',
    roleHighlights: [
      'Synthesized literature review and competitive analysis inspired by ReefOS marine frameworks',
      'Formulated strategic conservation NGO partnership architecture via structured MoUs',
      'Conducted extensive market survey validation and five-year financial feasibility modeling',
      'Designed end-to-end interactive Figma prototype with gamified adoption mechanics',
    ],
    overview:
      'A participatory digital platform that seamlessly unites virtual coral adoption, verifiable digital certification, gamification mechanics, and transparent IoT field data to support ocean ecosystem preservation and empower the sustainable blue economy. The platform bridges consumer environmental altruism with verifiable on-the-ground marine restoration impact.',
    approach: [
      'Comprehensive academic and industry literature study on marine restoration monetization',
      'Platform conceptual architecture inspired by ReefOS open conservation models',
      'Strategic partnership structuring with local conservation institutions and marine NGOs via MoU',
      'Quantitative market interest survey validating customer willingness-to-pay',
      'Unit economics and five-year financial feasibility modeling',
      'High-fidelity UX flow and visual prototyping in Figma and Canva',
    ],
    tools: ['Figma', 'GitHub', 'Microsoft Office', 'Canva'],
    metrics: [
      {
        label: 'Market Interest Rate',
        value: '68%',
        detail: 'Surveyed respondents eager to adopt virtual coral reefs',
      },
      {
        label: 'Service Tier Preference',
        value: '52% / 48%',
        detail: 'Balanced demand across Basic (52%) and Diamond (48%) packages',
      },
      {
        label: 'Certificate Motivation Lift',
        value: '62.5%',
        detail:
          'Digital certificates directly increase conservation engagement',
      },
      {
        label: 'Year-1 Net Profit Projection',
        value: 'Rp60.65M',
        detail: 'Demonstrated initial positive financial feasibility',
      },
    ],
    keyInsights: [
      'High Adoption Willingness: 68% of surveyed target consumers expressed enthusiastic intent to subscribe to digital coral adoption services.',
      'Balanced Tier Distribution: Customer demand split evenly between accessible entry-level adoption (Basic 52%) and high-impact premium packages (Diamond 48%).',
      'Gamification & Credibility: 62.5% of respondents confirmed that verifiable digital impact certificates significantly boost sustained motivation and repeat adoption.',
    ],
    outcomes: [
      'Complete business research proposal and commercial feasibility whitepaper',
      'Interactive Figma UI/UX prototype covering adoption flows, gamified reef growth, and transparent tracker',
      'Financial feasibility model projecting a Year-1 net profit of Rp60.65 Million',
    ],
    links: {
      github: 'https://github.com/mariaaan-bloop/reeflection',
      figma:
        'https://www.figma.com/proto/jvWxD8rSNfsOy8gIaNzA3L/INBIZ-2025--Reeflect-?node-id=15-2&t=H1NAup8l2jvQc4ja-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A2',
    },
    image: asset('Project/Business & Products Analysis/coral_Reef.png'),
    accentColor: '#C98FA8',
    journey: [
      {
        phase: 'Problem',
        title: 'Disconnect in Marine Conservation Funding',
        desc: 'Reef restoration initiatives suffered from opaque donor communication and lack of ongoing personal engagement.',
      },
      {
        phase: 'Research',
        title: 'Market Surveys & ReefOS Benchmarking',
        desc: 'Surveyed consumer adoption willingness and benchmarked IoT underwater sensor integration models.',
      },
      {
        phase: 'Business Design',
        title: 'Freemium & Dual-Tier Economics',
        desc: 'Structured Basic vs Diamond sponsorship tiers with automated digital impact certificates.',
      },
      {
        phase: 'UI/UX Prototype',
        title: 'Gamified Adoption in Figma',
        desc: 'Designed interactive mobile screens where users name, nurture, and track real GPS coral clusters.',
      },
      {
        phase: 'Feasibility',
        title: 'Financial Viability Model',
        desc: 'Projected operating revenues, NGO revenue splits, and confirmed Rp60.65M Year-1 profitability.',
      },
      {
        phase: 'Outcome',
        title: 'Award-Winning Business Proposal',
        desc: 'Recognized with podium finish at INBIZ 2025 Business Competition for sustainable innovation.',
      },
    ],
  },
  {
    id: 'little-thinkers-edtech',
    title:
      'Little Thinkers: Game-Based EdTech Innovation for Children’s Computational Thinking & Problem-Solving Literacy',
    shortTitle: 'Little Thinkers: Computational Thinking EdTech',
    category: 'BUSINESS & PRODUCT',
    categoryLabel: 'Business & Product Analysis',
    status: 'Ongoing',
    role: 'Marketing and Community Lead · Business Analyst',
    roleHighlights: [
      'Conceptualized gamified adventure learning platform targeting children aged 6–12 (primary focus 8–10)',
      'Structured freemium commercialization model and institutional B2B2C school partnership strategy',
      'Engineered interactive navigation user flows, parental monitoring dashboards, and screen-time guardrails',
      'Formulated 5-year financial model demonstrating Rp1.54B NPV, 140.1% IRR, and 11-month payback',
    ],
    overview:
      'Little Thinkers is a gamified educational mobile platform tailored for Indonesian children aged 6–12 (core 8–10 years old) to cultivate the 4 foundational pillars of Computational Thinking: Decomposition, Pattern Recognition, Abstraction, and Algorithmic Thinking. Designed to confront national PISA deficits and digital screen addiction, it pairs interactive adventure gameplay with digital wellbeing guardrails (strict 2-hour daily screen cap, mandatory 15-minute breaks), tactile off-screen unplugged missions, and parental diagnostic dashboards.',
    approach: [
      'Product Concept & Pedagogical Vision: Structured 4-pillar CT curriculum embedded in immersive narrative quests',
      'Commercial Go-To-Market Formulation: Designed freemium consumer subscriptions alongside B2B2C school licensing programs',
      'User Journey & Wireframe Mapping: Developed user flow schematics spanning gamified quests, parent dashboards, and breaks',
      'Prototyping & Early Validation: Conducted interactive usability testing validating adaptive difficulty algorithms',
      'Comprehensive Market & Financial Modeling: Conducted TAM/SAM/SOM market sizing, PESTEL analysis, and 5-year discounted cash flow forecasting',
    ],
    tools: ['Figma', 'Canva', 'Vite', 'GitHub', 'Microsoft Office'],
    metrics: [
      {
        label: 'Net Present Value (NPV)',
        value: 'Rp1.54 Billion',
        detail: 'Robust 5-year financial feasibility model',
      },
      {
        label: 'Internal Rate of Return',
        value: '140.1% IRR',
        detail: 'High capital efficiency and rapid margin expansion',
      },
      {
        label: 'Payback Period',
        value: '11 Months',
        detail:
          'Rapid capital recovery driven by freemium and B2B2C school channels',
      },
      {
        label: 'Target Addressable Market',
        value: '24.1M Children',
        detail:
          'Enormous demographic opportunity across Indonesian elementary students',
      },
    ],
    keyInsights: [
      'PISA Literacy Urgency: Only 17% of Indonesian children achieve Level 2 or higher in mathematics (far beneath the OECD 65% average), with computational problem-solving scores languishing at 30%.',
      'Screen Addiction Anxiety: 62.43% of kids aged 5–12 access the internet daily for over 7 hours, creating immense parental demand for wholesome, strictly capped educational screen time.',
      'Enormous Market Runway: With an Indonesian TAM of 24.1 million children, pairing gamified digital quests with mandatory off-screen physical activities solves both parental guilt and learning deficits.',
    ],
    outcomes: [
      'Comprehensive business proposal including TAM/SAM/SOM market sizing, PESTEL analysis, and 5-year financial projections',
      'Four-Pillar Computational Thinking curriculum blueprint, technical infrastructure plan, and organizational staffing plan',
      'High-fidelity interactive prototype featuring parent progress tracking and healthy screen-time throttles',
      'Finalist recognition at INNOBIZ Business Plan Competition 2025',
    ],
    links: {
      github: 'https://github.com/mariaaan-bloop',
    },
    image: asset(
      'Project/Business & Products Analysis/little thinkers/little_thinkers1.png'
    ),
    gallery: [
      asset(
        'Project/Business & Products Analysis/little thinkers/little_thinkers1.png'
      ),
      asset(
        'Project/Business & Products Analysis/little thinkers/little_thinkers2.png'
      ),
      asset(
        'Project/Business & Products Analysis/little thinkers/little_thinkers3.png'
      ),
    ],
    accentColor: '#C98FA8',
    journey: [
      {
        phase: 'Problem',
        title: 'PISA Deficit & Screen Addiction',
        desc: 'Indonesian students lagged behind in OECD problem-solving while consuming 7+ hours of unsupervised passive entertainment.',
      },
      {
        phase: 'Pedagogy',
        title: '4 Pillars of Computational Thinking',
        desc: 'Translated Decomposition, Pattern Recognition, Abstraction, and Algorithms into child-friendly quest narratives.',
      },
      {
        phase: 'Product Mechanics',
        title: 'Healthy Digital Guardrails',
        desc: 'Engineered automatic 15-minute eye-rest prompts, 2-hour daily screen limits, and physical unplugged tasks.',
      },
      {
        phase: 'Commercial Model',
        title: 'B2B2C School & Freemium Strategy',
        desc: 'Formulated student home subscriptions augmented by institutional school lab licenses and parent analytics.',
      },
      {
        phase: 'Financial Model',
        title: 'NPV Rp1.54B & 140.1% IRR',
        desc: 'Modeled complete 5-year discounted cash flows proving rapid 11-month capital payback.',
      },
      {
        phase: 'Outcome',
        title: 'Top 10 INNOBIZ 2025 Finalist',
        desc: 'Presented business proposal and interactive prototype to national business competition judges.',
      },
    ],
  },
  {
    id: 'servin-pos-system',
    title: 'Servin — F&B Point of Sale System',
    shortTitle: 'Servin: Integrated F&B POS Architecture',
    category: 'SYSTEM ANALYSIS',
    categoryLabel: 'System Analyst & Business Architecture',
    status: 'Ongoing',
    role: 'Business Analyst · System Analyst',
    roleHighlights: [
      'Defined comprehensive Software Requirements Specification (SRS) for full-lifecycle F&B operations',
      'Engineered system architecture, entity-relationship diagrams (ERD), and client-server workflows',
      'Led core module development oversight (Ordering, Cashier, Kitchen Display, and Inventory)',
      'Constructed Requirements Traceability Matrix and operational User Acceptance Testing criteria',
    ],
    overview:
      'Servin is an integrated web-based Point of Sale (POS) system engineered specifically for Food & Beverage establishments to unify order ingestion, billing, kitchen order tickets (KOT), inventory deduction, and consolidated sales analytics. Developed to eradicate manual ledger inconsistencies and eliminate cashier-to-kitchen miscommunications through a lean, dependable digital workflow.',
    approach: [
      'Requirement Elicitation & SRS Authoring: Documented functional & non-functional scopes, user stories, and acceptance criteria',
      'System & Data Modeling: Created unified process flows, Entity Relationship Diagrams (ERD), and state machines using Mermaid.js',
      'Architecture Formulation: Selected a lightweight, highly resilient client-server monolithic architecture (PHP, MySQL, Bootstrap)',
      'Development Oversight: Guided execution across core modules: table ordering, cashier register, kitchen display, and stock audits',
      'Verification & UAT: Executed requirement traceability audits and end-to-end stress testing against SRS benchmarks',
    ],
    tools: [
      'Mermaid.js',
      'GitHub',
      'Microsoft Office',
      'PHP',
      'MySQL',
      'Bootstrap',
    ],
    metrics: [
      {
        label: 'System Scope',
        value: '4 Core Pillars',
        detail:
          'Unified Ordering, Cashier Billing, Kitchen Operations & Live Stock',
      },
      {
        label: 'Communication Latency',
        value: 'Real-Time',
        detail:
          'Instant ticket dispatch from cashier terminal to kitchen display',
      },
      {
        label: 'Operational Architecture',
        value: 'Lean Monolith',
        detail:
          'High reliability without bloated enterprise microservice overhead',
      },
      {
        label: 'Inventory Accuracy',
        value: 'Auto-Deduct',
        detail: 'Real-time ingredient deduction linked directly to menu orders',
      },
    ],
    keyInsights: [
      'Unified Single Source of Truth: Consolidating ordering, billing, kitchen preparation, and reporting into a unified flow eliminates lost chits and manual ledger discrepancies.',
      'Workflow Optimization: Direct digital dispatch between cashier and kitchen staff cuts wait times and prevents manual ingredient omissions.',
      'Lean Architecture Discipline: A clean monolithic architecture keeps deployment and maintenance affordable and stable for fast-paced F&B operators without enterprise bloat.',
    ],
    outcomes: [
      'Formal Software Requirements Specification (SRS) document with end-to-end functional specifications',
      'Full System & Data Architecture documentation including relational schema and ERDs',
      'Requirement Traceability Matrix (RTM) and rigorous User Acceptance Testing (UAT) checklists',
      'Functional Servin POS application system implementation',
    ],
    links: {
      github:
        'https://github.com/mariaaan-bloop/Servin-F-B-Point-of-Sale-System',
    },
    accentColor: '#352044',
    journey: [
      {
        phase: 'Problem',
        title: 'Paper Chaos & Kitchen Miscommunication',
        desc: 'F&B staff suffered from misplaced handwritten tickets, inventory leakages, and delayed meal preparation.',
      },
      {
        phase: 'SRS Specs',
        title: 'Requirements Specification & Scope',
        desc: 'Authored exhaustive SRS documentation outlining functional boundaries, role privileges, and edge cases.',
      },
      {
        phase: 'Data Modeling',
        title: 'ERD & Relational Schemas',
        desc: 'Designed normalized relational tables mapping menu modifiers, inventory ingredients, orders, and receipts.',
      },
      {
        phase: 'Implementation',
        title: 'Core Module Engineering',
        desc: 'Built synchronous cashier, digital order input, kitchen ticket queue, and inventory auto-deduction.',
      },
      {
        phase: 'Verification',
        title: 'RTM & Stress Testing',
        desc: 'Mapped every user story to system code blocks through a strict Requirements Traceability Matrix.',
      },
      {
        phase: 'Outcome',
        title: 'Turnkey F&B Management System',
        desc: 'Delivered an intuitive operational POS system with reliable local resilience and consolidated reporting.',
      },
    ],
  },
  {
    id: 'volunteerhub-platform',
    title:
      'VolunteerHub — Web-Based Social Event and Volunteer Management Platform',
    shortTitle: 'VolunteerHub: Non-Profit Management System',
    category: 'SYSTEM ANALYSIS',
    categoryLabel: 'System Analyst · Business Analyst',
    status: 'Completed',
    role: 'Business Analyst · System Analyst · UI/UX Designer',
    roleHighlights: [
      'Established full SRS documentation, non-profit operational workflows, and role-based access controls',
      'Engineered relational database schema and system sequence diagrams using Visual Paradigm',
      'Designed responsive UI/UX prototypes and Tailwind CSS frontends for volunteer portals and admin consoles',
      'Coordinated comprehensive usability testing and end-to-end evaluation for non-profit stakeholders',
    ],
    overview:
      'VolunteerHub is a centralized web management platform built for non-profit organizations to consolidate social initiative discovery, volunteer signups, quota management, and payment verification into a single automated system. Developed following the structured Waterfall methodology, the platform directly eliminates administrative paper friction and accelerates volunteer mobilization in support of UN Sustainable Development Goal 17 (Partnerships for the Goals).',
    approach: [
      'Requirements Analysis & SRS Formulation: Outlined functional/non-functional specifications and activity workflows',
      'System Modeling & Architecture: Modeled relational databases, sequence diagrams, and Role-Based Access Control (RBAC) tiers using Visual Paradigm',
      'UI/UX & Responsive Frontend Design: Crafted clean interactive layouts using Tailwind CSS for user portals and administrator dashboards',
      'Testing Coordination & Quality Assurance: Managed system testing and usability evaluations across non-profit volunteer coordinators',
    ],
    tools: [
      'Visual Paradigm',
      'Laravel (MVC)',
      'Tailwind CSS',
      'Docker',
      'Laragon',
      'GitHub',
      'Microsoft Office',
    ],
    metrics: [
      {
        label: 'UN SDG Alignment',
        value: 'SDG 17',
        detail: 'Directly powers partnerships and community mobilization',
      },
      {
        label: 'Architecture Paradigm',
        value: 'Laravel MVC',
        detail:
          'Robust MVC backend paired with Dockerized development environment',
      },
      {
        label: 'Access Governance',
        value: 'Multi-Role RBAC',
        detail:
          'Granular permissions for public volunteers, event organizers, and superadmins',
      },
      {
        label: 'Payment Validation',
        value: 'Automated',
        detail:
          'Streamlined verification eliminating manual receipt cross-checking',
      },
    ],
    keyInsights: [
      'Centralized Event Ecosystem: Merging social event exploration, seat quota tracking, and attendee rosters into one platform saves organizers hours of administrative back-and-forth.',
      'Automated Verification Integrity: Eliminating manual receipt uploads and fragmented chat confirmations drastically minimizes payment fraud and double-registrations.',
      'Accessible Multi-Tier Governance: Tiered role permissions (Volunteers vs Organizers vs Admins) guarantee privacy while delivering responsive mobile accessibility for on-ground volunteers.',
    ],
    outcomes: [
      'Full Software Requirements Specification (SRS) and UML system modeling blueprints',
      'Fully functioning VolunteerHub web application built with Laravel MVC and Tailwind CSS',
      'Verified containerized Docker environment for consistent cross-platform staging',
    ],
    links: {
      github: 'https://github.com/mariaaan-bloop/VolunteerHub',
    },
    image: asset('Project/System Analysis/volunteerhub_1.png'),
    gallery: [
      asset('Project/System Analysis/volunteerhub_1.png'),
      asset('Project/System Analysis/volunteerhub_2.png'),
      asset('Project/System Analysis/volunteerhub_3.png'),
    ],
    accentColor: '#6D4AFF',
    journey: [
      {
        phase: 'Problem',
        title: 'Fragmented NGO Volunteer Management',
        desc: 'Non-profits struggled with chaotic Google Forms, unverified payments, and manual WhatsApp confirmations.',
      },
      {
        phase: 'Waterfall SRS',
        title: 'Structured Engineering Scope',
        desc: 'Defined rigid functional requirements, RBAC boundaries, and participant validation lifecycles.',
      },
      {
        phase: 'Architecture',
        title: 'UML & Relational Schemas',
        desc: 'Modeled database structures in Visual Paradigm with strict foreign key constraints across events and volunteers.',
      },
      {
        phase: 'UI/UX Design',
        title: 'Tailwind Responsive Interfaces',
        desc: 'Crafted mobile-optimized volunteer registration flows and dense administrator control panels.',
      },
      {
        phase: 'Testing',
        title: 'Usability Evaluation with Organizers',
        desc: 'Conducted UAT and usability tests to ensure intuitive adoption by non-technical non-profit leaders.',
      },
      {
        phase: 'Outcome',
        title: 'Scalable Volunteer Portal',
        desc: 'Successfully deployed VolunteerHub web application ready for community event onboarding.',
      },
    ],
  },
  {
    id: 'automated-retail-data-pipeline',
    title: 'Automated End-To-End Data Pipeline For Online Retail Analytics',
    shortTitle: 'Automated Retail Data Pipeline & Warehouse',
    category: 'DATA & BI',
    alsoIn: ['DATA ENGINEERING'],
    categoryLabel: 'Data Engineering & Business Intelligence',
    status: 'Completed',
    role: 'Conceptualization · ETL Pipeline Development · Data Visualization · Automation & Orchestration',
    roleHighlights: [
      'Architected automated ETL workflows in Pentaho Data Integration for ~400,000 transaction records',
      'Engineered relational Star Schema data warehouse architecture in MySQL with fact & dimension tables',
      'Automated recurrent data transformations using Batch Scripting and Windows Task Scheduler',
      'Designed interactive Power BI business performance dashboard and customer cohort retention matrices',
    ],
    overview:
      'Engineered an automated end-to-end data engineering pipeline using Pentaho Data Integration to clean, standardize, and load approximately 400,000 raw e-commerce transaction records from the Online Retail II dataset (2010–2011) into a relational MySQL Star Schema data warehouse. The resulting warehouse seamlessly feeds an interactive Power BI analytics suite delivering granular sales KPIs, product basket performance, and longitudinal customer cohort retention analysis.',
    approach: [
      'Extract, Transform, Load (ETL): Constructed automated Pentaho Data Integration transformation and job flows',
      'Dimensional Data Modeling: Modeled a star schema data warehouse featuring centralized fact tables and conformed dimension tables',
      'System Automation: Configured batch orchestration scripts scheduled through Windows Task Scheduler for zero-touch batch runs',
      'Power BI Intelligence: Connected direct SQL queries to Power BI for executive KPIs, regional sales shares, and customer cohort heatmaps',
      'Academic Research: Authored academic findings paper interpreting transaction velocity, retention slopes, and unit economics',
    ],
    tools: [
      'Pentaho Data Integration',
      'MySQL',
      'Power BI',
      'Batch Scripting',
      'Windows Task Scheduler',
      'Microsoft Office',
    ],
    metrics: [
      {
        label: 'Total Revenue Processed',
        value: '$8.75 Million',
        detail:
          'Derived from 5 million units sold across ~400,000 transactions',
      },
      {
        label: 'Average Order Value (AOV)',
        value: '$475.50',
        detail: 'Stable baseline order basket value',
      },
      {
        label: 'Top Market Revenue Share',
        value: '26.63% (NL)',
        detail:
          'Netherlands achieved highest market share and highest average selling price',
      },
      {
        label: 'Post-Month 1 Retention',
        value: '11% – 36%',
        detail:
          'Sharp drop-off highlighting vital requirement for post-purchase loyalty programs',
      },
    ],
    keyInsights: [
      'Revenue & Volume Footprint: Generated $8.75 million in aggregate revenue across 5 million items sold, averaging $475.50 per customer transaction.',
      'Hero Product Concentration: "Paper Craft" accounted for ~28% of revenue among the top 5 products, with "PaperCraft Little Birdie" proving to be the single highest performing SKU by volume and price.',
      'Geographic Disparity: While the United Kingdom drove raw sales volume, the Netherlands captured the largest revenue share (26.63%) with the highest average unit prices.',
      'Customer Retention Drop: Longitudinal cohort analysis revealed a sharp retention collapse to 11%–36% after month one, though the December 2010 cohort showed the highest multi-month stickiness.',
      'High-Value Market: EIRE generated the highest average revenue per customer (approaching $100,000), qualifying as the prime candidate for VIP loyalty pilots.',
      'Q4 2011 Surge: Revenue acceleration in Q4 2011 was driven by genuine transaction volume and customer base growth rather than unit price inflation or basket enlargement.',
    ],
    outcomes: [
      'Automated batch ETL pipeline configured in Pentaho Data Integration',
      'Production MySQL dimensional Star Schema data warehouse with automated batch triggers',
      'Comprehensive Power BI interactive dashboard reporting executive metrics, geographic shares, and cohort retention',
      'Academic research paper detailing retail performance and architecture orchestration',
    ],
    recommendations: [
      'Deploy automated post-purchase loyalty programs triggered immediately within 30 days of first checkout to arrest early retention drop-off.',
      'Establish the high-value EIRE market as the dedicated testing ground for premium white-glove loyalty initiatives.',
      'Replicate the high-retention December 2010 year-end promotional campaign structure during early Q1 to sustain transaction volume.',
      'Consider migrating the batch pipeline to distributed Apache Spark streaming architecture for real-time telemetry processing in future iterations.',
    ],
    links: {
      github: 'https://github.com/mariaaan-bloop/Online-Retail-Analysis',
      powerbi:
        'https://app.powerbi.com/groups/me/reports/bff59bd0-b8df-45f4-bcc0-5f1e8deb0170/e558cd035594e0953591?experience=power-bi',
    },
    image: asset('Project/Data Engineering/online_retail/online_retail_1.png'),
    gallery: [
      asset('Project/Data Engineering/online_retail/online_retail_1.png'),
      asset('Project/Data Engineering/online_retail/online_retail_2.png'),
      asset('Project/Data Engineering/online_retail/online_retail_3.png'),
    ],
    accentColor: '#8D6A91',
    journey: [
      {
        phase: 'Problem',
        title: 'Disjointed Raw Retail Logs',
        desc: '400,000 disorganized transaction records with unstandardized customer keys and fragmented invoices.',
      },
      {
        phase: 'ETL Pipeline',
        title: 'Pentaho Data Integration Workflows',
        desc: 'Automated data extraction, currency conversions, cancellation removals, and customer key assignments.',
      },
      {
        phase: 'Star Schema',
        title: 'MySQL Fact & Dimension Tables',
        desc: 'Engineered fact_sales joined with dim_customer, dim_product, dim_date, and dim_country.',
      },
      {
        phase: 'Automation',
        title: 'Windows Batch Scheduler',
        desc: 'Automated periodic script execution enabling touchless data refresh into the warehouse.',
      },
      {
        phase: 'Cohort Analytics',
        title: 'Power BI Longitudinal Modeling',
        desc: 'Visualized month-by-month retention matrices, customer lifetime spending, and regional revenue shares.',
      },
      {
        phase: 'Outcome',
        title: 'Academic Publication & BI Strategy',
        desc: 'Delivered peer-reviewed paper recommendations for loyalty programs and distributed Spark migration.',
      },
    ],
  },
];