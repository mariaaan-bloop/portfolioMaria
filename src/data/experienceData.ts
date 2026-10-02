import { asset } from './assets';
export interface RoleRecord {
  title: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
  achievements?: string[];
  type?: 'Leadership' | 'Operational' | 'Academic' | 'Volunteer';
}

export interface OrganizationExperience {
  organization: string;
  totalDuration?: string;
  locationDefault?: string;
  summary?: string;
  roles: RoleRecord[];
}

export const EXPERIENCE_DATA: OrganizationExperience[] = [
  {
    organization: 'HIMTI BINUS University',
    totalDuration: '1 year 8 months',
    locationDefault: 'Semarang, Jawa Tengah, Indonesia',
    summary:
      'Himpunan Mahasiswa Teknik Informatika (Computer Science Student Association) — Leading human resources, academic programming, event registration data operations, and cross-functional fundraising.',
    roles: [
      {
        title: 'Manager — Human Resource Department (Regional Semarang)',
        period: 'March 2026 – Present',
        duration: '8 months',
        location: 'Semarang, Indonesia',
        type: 'Leadership',
        description:
          'Overseeing regional member management, departmental performance evaluation, team cohesion, and talent development initiatives for the Semarang regional branch of HIMTI BINUS University.'
      },
      {
        title: 'Academic Events Activist',
        period: 'March 2025 – Present',
        duration: '1 year 8 months',
        location: 'Semarang, Indonesia',
        type: 'Academic',
        description:
          'Supporting academic enrichment programs, coding workshops, and knowledge-sharing symposiums aimed at enhancing technical competencies across computer science student cohorts.'
      },
      {
        title: 'Registration and Fundraising Committee',
        period: 'November 2025 – December 2025',
        duration: '2 months',
        type: 'Operational',
        description:
          'Managed the end-to-end participant registration lifecycle, including data validation and check-in operations, ensuring a seamless entry process and accurate attendance tracking for HIMTI Leadership Training 2026.'
      },
      {
        title: 'Committee of Fundraising and Registration',
        period: 'September 2025 – October 2025',
        duration: '2 months',
        type: 'Operational',
        description:
          'Optimized event funding and attendance by executing strategic fundraising initiatives to secure financial targets while simultaneously managing participant registration and data verification to ensure a seamless entry process for Sesvent 2025.'
      },
      {
        title: 'Education Program Associate',
        period: 'April 2025 – September 2025',
        duration: '6 months',
        type: 'Academic',
        description:
          'Coordinated educational logistics by acting as a primary liaison for instructors in Techno 2025, managing catering procurement, and serving as a Zoom operator to ensure the seamless technical and operational execution of programming workshops.'
      },
      {
        title: 'Coordinator of Promotion & Registration',
        period: 'May 2025 – August 2025',
        duration: '4 months',
        type: 'Operational',
        description:
          'Drove promotional outreach campaigns, supervised digital registration pipelines, and handled incoming participant inquiries.'
      },
      {
        title: 'Coordinator of Consumption and Fundraising Division',
        period: 'April 2025 – June 2025',
        duration: '3 months',
        location: 'Kudus, Central Java, Indonesia',
        type: 'Operational',
        description:
          'Initiated and executed fundraising programs to generate additional revenue and coordinated with external vendors to deliver high-quality catering services within the allocated budget for Company Visit to Pura Smart Technology.'
      },
      {
        title: 'Committee of Design and Documentation',
        period: 'March 2025',
        duration: '1 month',
        type: 'Operational',
        description:
          'Developed cohesive visual assets for the event, including posters, social media feed frames, profile pictures, and ensured a consistent design aesthetic across all digital touchpoints.'
      }
    ]
  },
  {
    organization: 'IMCB — International Marketing Community of BINUS',
    totalDuration: '2 years 2 months',
    locationDefault: 'Semarang, Indonesia',
    summary:
      'Active contributor to market analysis, promotional campaigns, and MSME digital transformation programs.',
    roles: [
      {
        title: 'Member',
        period: 'September 2024 – Present',
        duration: '2 years 2 months',
        type: 'Academic',
        description:
          'Participating in community marketing clinics, consumer research discussions, and digital promotion masterclasses.'
      },
      {
        title: 'Marketing Promotion Staff',
        period: 'April 2025 – July 2025',
        duration: '4 months',
        location: 'Semarang, Indonesia',
        type: 'Operational',
        description:
          'Designed and implemented an incentive-based promotion strategy ("Review-for-Reward") to enhance MSME digital presence by optimizing Google Business Profile ratings, verified consumer reviews, and search discoverability.'
      }
    ]
  },
  {
    organization: 'BINUS University',
    totalDuration: 'Campus Initiatives',
    locationDefault: 'Semarang, Indonesia',
    summary:
      'Key university festival committees and community social impact volunteering.',
    roles: [
      {
        title: 'Sponsorship Committee — BINUS Festival 2025',
        period: 'October 2025 – December 2025',
        duration: '3 months',
        location: 'Semarang, Indonesia',
        type: 'Leadership',
        description:
          'Secured event partnerships and diversified food & beverage offerings by scouting, negotiating, and onboarding various tenants to meet sponsorship targets and enhance attendee experience at BINUS Festival 2025.'
      },
      {
        title: 'Digital Education Volunteer — BIFEST 2024',
        period: 'November 2024',
        duration: '1 month',
        location: 'Semarang, Indonesia',
        type: 'Volunteer',
        description:
          'Educated elementary school students on fundamental computer skills and digital literacy to bridge the technology gap during the BINUS Festival (BIFEST) 2024.'
      }
    ]
  },
  {
    organization: 'World Cleanup Day Indonesia',
    totalDuration: 'Environmental Volunteer Initiative',
    locationDefault: 'Semarang, Indonesia',
    summary: 'Global grassroots environmental conservation campaign.',
    roles: [
      {
        title: 'Volunteer Staff',
        period: 'September 2024',
        duration: '1 month',
        location: 'Semarang, Indonesia',
        type: 'Volunteer',
        description:
          'Participating in a global environmental initiative by collaborating with a team to perform waste collection and sorting to improve local sanitation, waste separation, and environmental sustainability.'
      }
    ]
  }
];

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  year: string;
  description: string;
  highlight: string;
  image: string;
}

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'sic-python',
    title: 'Samsung Innovation Campus — Python Programming Completion',
    category: 'Technical Certification',
    issuer: 'Samsung Innovation Campus',
    year: '2024',
    description:
      'Rigorous certification verifying core Python programming, algorithm analysis, mathematical problem-solving, and foundational analytics application.',
    highlight: 'Data Science & Algorithm Core',
    image: asset('Sertifikat/SIC_python.jpg')
  },
  {
    id: 'inbiz-2025',
    title: '3rd Place Winner — INBIZ 2025 National Business Competition',
    category: 'Podium Business Award',
    issuer: 'INBIZ Committee',
    year: '2025',
    description:
      'Awarded 3rd Place nationwide for "Reeflection" — an innovative digital platform integrating gamification, IoT transparency, and virtual coral adoption for the sustainable blue economy.',
    highlight: 'Podium Finish · Blue Economy Innovation',
    image: asset('Sertifikat/Businessplan-top3.jpg')
  },
  {
    id: 'innobiz-2025',
    title: 'Top 10 Finalist — INNOBIZ Business Plan Competition 2025',
    category: 'National Business Plan Competition',
    issuer: 'INNOBIZ Committee',
    year: '2025',
    description:
      'Recognized among the Top 10 Finalists nationwide for "Little Thinkers" — an innovative game-based EdTech platform developing computational thinking literacy and healthy screen habits in children.',
    highlight: 'EdTech Business Model & DCF Valuation',
    image: asset('Sertifikat/Businessplam_top10.jpg')
  },
  {
    id: 'coursera-ba',
    title: 'Coursera Business Analysis & Process Management Credential',
    category: 'Professional Certification',
    issuer: 'Coursera Verified',
    year: '2024',
    description:
      'Verified coursework in business requirements analysis, process modeling, stakeholder communication, and analytical problem-solving.',
    highlight: 'Business Requirements & Modeling',
    image: asset('Sertifikat/Coursera Business Analyst.jpg')
  },
  {
    id: 'ibm-classification',
    title: 'IBM Data Classification',
    category: 'Technical Credential',
    issuer: 'IBM',
    year: '2024',
    description:
      'Certified understanding of enterprise data categorization, data protection policies, and compliance architectures.',
    highlight: 'Data Governance & Hygiene',
    image: asset('Sertifikat/Ibm data classification.jpg')
  },
  {
    id: 'ibm-agile',
    title: 'IBM Agile Explorer Credential',
    category: 'Methodology Certification',
    issuer: 'IBM',
    year: '2024',
    description:
      'Verified expertise in Agile scrum frameworks, sprint backlog tracking, and iterative cross-functional development cycles.',
    highlight: 'Agile Delivery & Scrum Operations',
    image: asset('Sertifikat/Ibm_agile.jpg')
  },
  {
    id: 'icpc-achievement',
    title: 'ICPC Competitive Programming Achievement',
    category: 'Competitive Programming',
    issuer: 'ICPC International',
    year: '2024',
    description:
      'Recognized competitive programming achievement in algorithmic speed, data structure optimization, and complex logic resolution.',
    highlight: 'Algorithmic Problem-Solving',
    image: asset('Sertifikat/Icpc_achievement.jpg')
  },
  {
    id: 'beelingua-english',
    title: 'Beelingua English Language Proficiency Certificate',
    category: 'Language Credential',
    issuer: 'Beelingua',
    year: '2024',
    description:
      'Certified advanced English fluency for cross-border professional communication, technical documentation, and presentation.',
    highlight: 'Professional English Proficiency',
    image: asset('Sertifikat/Beelingua english certificate.jpg')
  }
];
