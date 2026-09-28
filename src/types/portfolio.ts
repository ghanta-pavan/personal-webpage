export type Perspective = 'all' | 'architecture' | 'leadership';

export interface ContactInfo {
  name: string;
  headline: string;
  targetRole: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  photoUrl: string;
  resumePdfUrl: string;
  executiveSummary: string[];
}

export interface CredentialBadge {
  label: string;
  iconName: string;
  category: 'pedigree' | 'experience' | 'tech' | 'leadership';
  highlight?: boolean;
}

export interface CareerStage {
  id: string;
  stepNumber: number;
  title: string;
  company: string;
  period: string;
  level: string;
  description: string;
  isTarget?: boolean;
  isCurrent?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface ArchitectureDeepDive {
  id: string;
  title: string;
  category: 'cross-cloud' | 'stream-observability' | 'governance-runbook' | 'identity-security' | 'legacy-modernization';
  company: string;
  summary: string;
  problemStatement: string;
  topology: {
    nodes: { name: string; type: 'source' | 'ingress' | 'processing' | 'storage' | 'consumer' }[];
    flowSummary: string;
  };
  architecturalDecisions: string[];
  techStack: string[];
  governanceAndRaci: {
    raciRoles?: string[];
    governanceProcesses: string[];
    stakeholderEngagement: string;
  };
  quantifiableImpact: {
    performance: string;
    finOpsAndTco: string;
    reliabilityAndGovernance: string;
  };
}

export interface ExperienceRole {
  id: string;
  company: string;
  location: string;
  roles: { title: string; period: string; isCurrent?: boolean }[];
  technologies: string[];
  summary: string[];
  keyProjects: {
    name: string;
    category: 'data-architecture' | 'software-architecture' | 'banking-modernization';
    description: string;
    tags: string[];
  }[];
}

export interface CompetencyCategory {
  domain: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: string;
  honors?: string;
}

export interface VideoChapter {
  startTime: number;
  timestampDisplay: string;
  title: string;
  description: string;
  keyTakeaways: string[];
}
