export interface StrengthItem {
  id: string;
  name: string;
  shortDesc: string;
  category: 'Cognitive' | 'Technical' | 'Interpersonal';
}

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: 'analytical-thinking',
    name: 'Analytical Thinking',
    shortDesc: 'Deconstructing complex datasets and ambiguous business questions into structured hypotheses and statistical tests.',
    category: 'Cognitive'
  },
  {
    id: 'attention-to-detail',
    name: 'Attention to Detail',
    shortDesc: 'Verifying data hygiene, missingness, and schema integrity to ensure bulletproof downstream business insights.',
    category: 'Technical'
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    shortDesc: 'Translating real-world operational bottlenecks into actionable system architectures and predictive models.',
    category: 'Cognitive'
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    shortDesc: 'Rapidly assimilating new data stacks, distributed tools, and domain requirements with agility.',
    category: 'Cognitive'
  },
  {
    id: 'willingness-to-learn',
    name: 'Willingness to Learn',
    shortDesc: 'Constantly expanding competencies across modern BI ecosystems, distributed ETL, and predictive algorithms.',
    category: 'Cognitive'
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    shortDesc: 'Uncovering authentic customer behavior and operational trends using non-parametric statistics and ML.',
    category: 'Technical'
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    shortDesc: 'Designing high-impact, story-driven executive dashboards in Power BI and Tableau that inform key decisions.',
    category: 'Technical'
  },
  {
    id: 'coordination',
    name: 'Coordination',
    shortDesc: 'Guiding cross-functional teams, registration data workflows, and event logistics with precision.',
    category: 'Interpersonal'
  },
  {
    id: 'communication',
    name: 'Communication',
    shortDesc: 'Articulating complex quantitative findings and data architecture clearly to non-technical business leaders.',
    category: 'Interpersonal'
  }
];
