# Spec-Driven Design (SDD): Executive Career Platform
**Target Candidate**: Pavan Kumar Ghanta — Software & Data Architect | Enterprise & Cloud Architecture Leader  
**Target Roles**: Senior/Principal Architect, Director / VP of Software Engineering  
**Experience Level**: 20 Years | M.Tech (IIT Dhanbad) | PG Diploma AI/ML (IIIT Bangalore)  

---

## 1. Executive Summary & Design Vision

This specification defines the complete blueprint for developing a high-impact, modern executive career platform designed to impress **Executive Search Recruiters, CTOs, and VP/Director Hiring Committees**.

### The "Vibe Coding" Philosophy
This document is structured so that any developer or AI pair-programmer can build, test, and iterate on this webpage component-by-component with zero guesswork. Every data model, color token, state transition, and layout grid is explicitly defined.

---

## 2. Visual Architecture & Mockup Blueprint

### Screen 1: Executive Hero & Dual-Perspective Lens
![Executive Hero & Profile Integration](C:\Users\Pavan\.gemini\antigravity\brain\dcd83537-7a6e-4ba5-8f3b-f17d90d78f86\pavan_hero_presentation_1790483440063.jpg)

### Screen 2: 60-Second Executive Video Pitch Modal
![60-Second Video Pitch & Chapters](C:\Users\Pavan\.gemini\antigravity\brain\dcd83537-7a6e-4ba5-8f3b-f17d90d78f86\pavan_video_briefing_1790483636700.jpg)

### Screen 3: Interactive Resume & Architectural Case Studies
![Interactive Resume & Experience](C:\Users\Pavan\.gemini\antigravity\brain\dcd83537-7a6e-4ba5-8f3b-f17d90d78f86\pavan_resume_interactive_1790483459423.jpg)

---

## 3. Design System Tokens & Style Guide

### 3.1 Color Palette (Dark Executive Theme)
- **Background Primary**: `slate-950` (`#020617`)
- **Background Secondary / Surfaces**: `slate-900/90` (`#0f172a`) with glassmorphic `backdrop-blur-md`
- **Surface Elevation High**: `slate-800/80` (`#1e293b`)
- **Border Default**: `slate-800` (`#1e293b`)
- **Border Highlight / Active**: `cyan-500/40` (`rgba(6, 182, 212, 0.4)`) & `indigo-500/40`
- **Primary Text**: `slate-100` (`#f8fafc`)
- **Secondary / Subdued Text**: `slate-400` (`#94a3b8`)
- **Accent Glows**:
  - Cyan Accent: `#06b6d4` (Architectural / Systems)
  - Indigo Accent: `#6366f1` (Executive / Leadership)
  - Emerald Accent: `#10b981` (FinOps & Production Metrics)

### 3.2 Typography Tokens
- **Font Display / Headings**: Inter / Plus Jakarta Sans (`font-sans font-bold tracking-tight`)
- **Body**: System UI / Inter (`font-sans text-slate-300 antialiased`)
- **Code / Metrics / Monospace**: Fira Code / JetBrains Mono (`font-mono`)

---

## 4. Complete Data Contract & Schema (`src/data/portfolioData.ts`)

```typescript
export interface CredentialBadge {
  label: string;
  icon: string;
  highlight?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ArchitectureCaseStudy {
  id: string;
  title: string;
  category: 'lakehouse' | 'event-mesh' | 'legacy-modernization' | 'finops';
  systemSummary: string;
  problemStatement: string;
  architecturalDecisions: string[];
  techStack: string[];
  orgLeadership: {
    squads: number;
    teamScale: string;
    keyProcesses: string[];
  };
  quantifiableImpact: {
    latencyOrScale: string;
    financialOrCost: string;
    reliability: string;
  };
}

export interface ExperienceRole {
  id: string;
  company: string;
  location: string;
  title: string;
  period: string;
  isCurrent: boolean;
  perspectiveType: 'both' | 'leadership' | 'architecture';
  summary: string;
  achievements: {
    pillar: string;
    description: string;
    tags: string[];
  }[];
}

export interface VideoChapter {
  startTime: number; // in seconds
  timestampDisplay: string;
  title: string;
  description: string;
  keyTakeaways: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    photoUrl: string;
    resumePdfUrl: string;
    executiveSummary: string;
  };
  badges: CredentialBadge[];
  metrics: MetricItem[];
  videoPitch: {
    title: string;
    duration: string;
    videoUrl: string; // local or embed
    chapters: VideoChapter[];
  };
  caseStudies: ArchitectureCaseStudy[];
  experiences: ExperienceRole[];
  competencies: {
    domain: string;
    items: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    status?: string;
  }[];
}
```

### Pre-Populated Data for Pavan Kumar Ghanta
```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Pavan Kumar Ghanta",
    title: "Software & Data Architect | Targeting Enterprise Architecture & VP Roles",
    location: "Hyderabad, Telangana (Open to Global / Remote)",
    phone: "+91-9163012196",
    email: "pavankumar.ghanta@zohomail.in",
    linkedin: "https://linkedin.com/in/pavan-kumar-ghanta-a1b14475",
    photoUrl: "/pavan-photo.jpg",
    resumePdfUrl: "/Pavan_Kumar_Ghanta_Resume.pdf",
    executiveSummary: "Strategic and highly technical architectural leader with 20 years of cross-domain experience spanning large-scale software engineering, modern cloud data platforms, infrastructure automation, and enterprise workflow orchestration. Proven expertise bridging complex legacy mainframe estates with modern cloud-native environments."
  },
  badges: [
    { label: "20 Years Experience", icon: "Clock", highlight: true },
    { label: "M.Tech IIT Dhanbad (2006)", icon: "GraduationCap", highlight: true },
    { label: "PG Diploma AI/ML (IIIT-B)", icon: "Cpu" },
    { label: "Apache Iceberg & Kafka", icon: "Database" },
    { label: "Mainframe Modernization", icon: "Server" },
    { label: "AWS Cloud FinOps", icon: "Cloud" }
  ],
  metrics: [
    { value: "20+", label: "Years Enterprise Exp", subtext: "From Mainframe to Cloud Lakehouses" },
    { value: "15 Yrs", label: "Cognizant Leadership", subtext: "Tier-1 Financials: JPMC, Credit Suisse" },
    { value: "TB-Scale", label: "Iceberg Lakehouse", subtext: "ACID transactions & schema evolution" },
    { value: "Zero Downtime", label: "Legacy Decoupling", subtext: "Strangler Fig architecture & Kafka" }
  ],
  videoPitch: {
    title: "60-Second Executive Briefing: Architecture & Leadership Overview",
    duration: "1:00",
    videoUrl: "/pavan-intro-60s.mp4",
    chapters: [
      {
        startTime: 0,
        timestampDisplay: "0:00",
        title: "20-Year Career Horizon & Strategic Direction",
        description: "Overview of 20 years leading enterprise architectural evolution from core banking mainframes to cloud-native platforms.",
        keyTakeaways: ["Cross-domain architect bridging legacy and cloud", "IIT Dhanbad M.Tech engineering foundation", "Proven execution at Tier-1 institutions"]
      },
      {
        startTime: 15,
        timestampDisplay: "0:15",
        title: "Apache Iceberg Lakehouse & Kafka Event Mesh",
        description: "Architecting terabyte-scale lakehouse modernization on AWS at Cubic Transportation Systems.",
        keyTakeaways: ["Kafka event-driven decoupling for transit transactions", "Apache Iceberg ACID lakehouse with schema evolution", "AWS Lake Formation RBAC governance"]
      },
      {
        startTime: 35,
        timestampDisplay: "0:35",
        title: "Mainframe Modernization for Tier-1 Banks (15 Yrs Cognizant)",
        description: "Leading zero-downtime refactoring for mission-critical banking platforms at JPMC and Credit Suisse.",
        keyTakeaways: ["De-risking Cobol/PL1/CICS into Java/Spring microservices", "Enterprise workflow orchestration via CORBA/REXX", "Automated CI/CD and DevSecOps compliance"]
      },
      {
        startTime: 50,
        timestampDisplay: "0:50",
        title: "Leadership Philosophy & Target Executive Roles",
        description: "What Pavan brings to Senior/Principal Architect and Director/VP Software Engineering roles.",
        keyTakeaways: ["TCO optimization and Cloud FinOps discipline", "Culture of high psychological safety and architectural rigor", "Immediate availability for strategic roles"]
      }
    ]
  },
  caseStudies: [
    {
      id: "lakehouse-modernization",
      title: "Enterprise Transit Lakehouse & Event Mesh Architecture",
      category: "lakehouse",
      systemSummary: "Modernizing terabytes of legacy transit transactional data into an Apache Iceberg lakehouse on AWS with real-time Kafka event streaming.",
      problemStatement: "Fragile point-to-point batch dependencies and rigid schema constraints in legacy databases impaired transit analytics and increased latency.",
      architecturalDecisions: [
        "Event Mesh: Implemented Apache Kafka / AWS MSK to decouple transactional transit cores from microservices.",
        "Lakehouse: Architected Apache Iceberg on AWS S3/Glue for ACID guarantees and atomic time-travel queries.",
        "Security & RBAC: Established AWS Lake Formation granular access controls for strict data sovereignty."
      ],
      techStack: ["Apache Iceberg", "Apache Kafka", "AWS MSK", "AWS Lake Formation", "Terraform", "DynamoDB", "Glue"],
      orgLeadership: {
        squads: 4,
        teamScale: "Cross-functional distributed engineering squads",
        keyProcesses: ["Architecture Decision Records (ADRs)", "Cloud FinOps budget forecasting", "Zero-incident cutovers"]
      },
      quantifiableImpact: {
        latencyOrScale: "Sub-second event ingestion across high-volume transit nodes",
        financialOrCost: "35% reduction in compute/storage TCO via automated tiering and Terraform IaC",
        reliability: "99.99% data pipeline availability with zero data loss during schema evolution"
      }
    },
    {
      id: "mainframe-modernization",
      title: "Mission-Critical Core Modernization for Tier-1 Banks",
      category: "legacy-modernization",
      systemSummary: "Strangler Fig deconstruction of legacy Mainframe (Cobol, CICS, DB2, VSAM) estates into modern Java/Spring Boot microservices for JPMC & Credit Suisse.",
      problemStatement: "Monolithic mainframe estates incurred massive MIPS licensing overhead, slow release cycles, and high operational risk.",
      architecturalDecisions: [
        "Strangler Pattern: Incremental traffic rerouting via API gateways without big-bang risk.",
        "Enterprise Orchestration: Harmonized heterogeneous CORBA, REXX, and relational data reconciliation.",
        "DevSecOps Pipeline: Automated CI/CD with Jenkins, Docker, SonarQube, and Fortify vulnerability gating."
      ],
      techStack: ["Java 8+", "Spring Boot", "Cobol", "PL1", "CICS", "DB2", "CORBA", "Docker", "Jenkins", "SonarQube"],
      orgLeadership: {
        squads: 6,
        teamScale: "Global delivery teams across US and India (15-year tenure at Cognizant)",
        keyProcesses: ["Strict code quality guardrails", "Mentorship of senior tech leads", "Executive stakeholder demos"]
      },
      quantifiableImpact: {
        latencyOrScale: "Processed millions of daily financial reconciliations seamlessly",
        financialOrCost: "Substantial MIPS cost reduction and eliminated point-to-point integration fragility",
        reliability: "Zero operational downtime during multi-year phased modernizations"
      }
    }
  ],
  experiences: [
    {
      id: "cubic",
      company: "Cubic Transportation Systems",
      location: "Hyderabad, India",
      title: "Data & Software Architect (Principal Software Engineer)",
      period: "Nov 2021 – Present",
      isCurrent: true,
      perspectiveType: "both",
      summary: "Spearheading enterprise integration strategy, cloud data lakehouse architecture, and GenAI production initiatives across high-scale transit networks.",
      achievements: [
        {
          pillar: "Enterprise Integration & Architecture",
          description: "Defined enterprise integration strategy using Apache Kafka event-driven mesh, eliminating brittle point-to-point dependencies across transit networks.",
          tags: ["Kafka", "Event Mesh", "Microservices", "Transit"]
        },
        {
          pillar: "Modern Data Lakehouse Strategy",
          description: "Architecting transition of TB-scale legacy data to Apache Iceberg lakehouse on AWS, enabling ACID transactions and reliable schema evolution.",
          tags: ["Apache Iceberg", "AWS", "ACID", "Lakehouse"]
        },
        {
          pillar: "Data Governance & Cloud FinOps",
          description: "Implemented AWS Lake Formation RBAC controls and automated cloud infrastructure via Terraform (MSK, Firehose, Glue, DynamoDB) optimizing TCO.",
          tags: ["AWS Lake Formation", "Terraform", "FinOps", "TCO"]
        },
        {
          pillar: "Emerging Tech & Generative AI",
          description: "Championed internal GenAI initiatives, transitioning experimental hackathon prototypes into production-grade enterprise automation assets.",
          tags: ["Generative AI", "LLMs", "Enterprise Automation"]
        }
      ]
    },
    {
      id: "cognizant-lead",
      company: "Cognizant Technology Solutions",
      location: "Kolkata, India / New Jersey, USA",
      title: "Senior Associate (Solution Architect & Technology Lead)",
      period: "2012 – Oct 2021",
      isCurrent: false,
      perspectiveType: "both",
      summary: "Led strategic modernization programs for Tier-1 investment banks (JPMC, Credit Suisse), decoupling mission-critical legacy architectures into resilient Java/Spring platforms.",
      achievements: [
        {
          pillar: "Legacy Modernization & Refactoring",
          description: "Safely decoupled mission-critical Mainframe estates (Cobol, PL1, CICS, VSAM) into scalable Java/Spring microservices with zero operational downtime.",
          tags: ["Mainframe Modernization", "Spring Boot", "Strangler Fig"]
        },
        {
          pillar: "Enterprise Workflow Orchestration",
          description: "Managed cross-system integrations across heterogeneous platforms using CORBA, REXX, DB2, and SQL Server, mitigating enterprise integration risks.",
          tags: ["CORBA", "REXX", "DB2", "Integration"]
        },
        {
          pillar: "CI/CD & Security Governance",
          description: "Standardized CI/CD automation with Jenkins, Docker, and Git; instituted code quality guardrails eliminating vulnerabilities via SonarQube & Fortify.",
          tags: ["Docker", "Jenkins", "DevSecOps", "SonarQube"]
        }
      ]
    },
    {
      id: "cognizant-foundation",
      company: "Cognizant Technology Solutions",
      location: "Kolkata, India",
      title: "Programmer Analyst to Associate (Engineering Foundation)",
      period: "Jun 2006 – 2012",
      isCurrent: false,
      perspectiveType: "architecture",
      summary: "Engineered core backend applications and high-throughput data reconciliation pipelines using Java, Spring, and relational databases for institutional clients.",
      achievements: [
        {
          pillar: "Distributed Systems Engineering",
          description: "Built high-reliability backend services and financial data reconciliation batch engines for institutional banking clients.",
          tags: ["Java", "Spring", "SQL Server", "DB2"]
        }
      ]
    }
  ],
  competencies: [
    {
      domain: "Enterprise Architecture & Governance",
      items: ["Enterprise Integration Strategy", "Event Mesh & API Connectivity", "Technical Governance", "Portfolio Rationalization", "Cloud FinOps & TCO Optimization"]
    },
    {
      domain: "Software & Application Architecture",
      items: ["Legacy-to-Cloud Modernization", "Strangler Fig Pattern", "Microservices Decoupling", "Modern Java (8-21)", "Spring Boot Ecosystem", "Domain-Driven Design (DDD)"]
    },
    {
      domain: "Data Architecture & Lakehouses",
      items: ["Apache Iceberg Lakehouse", "Data Governance & RBAC (Lake Formation)", "Event Streaming (Apache Kafka, AWS MSK)", "Data Observability", "Schema Evolution"]
    },
    {
      domain: "Cloud & Infrastructure as Code",
      items: ["AWS Cloud Architecture", "Terraform IaC", "CI/CD Pipeline Automation", "Docker Containerization", "Security Hardening (SonarQube, Fortify)"]
    },
    {
      domain: "Legacy Infrastructure & Mainframe",
      items: ["Mainframe Decoupling", "Cobol, PL1, CICS, JCL", "DB2, VSAM, Oracle SQL", "CORBA & Enterprise Workflow Orchestration"]
    },
    {
      domain: "Emerging Tech & AI",
      items: ["Generative AI Enterprise Solutions", "RAG & LLM Integration", "Applied Machine Learning", "AI Hackathon Productionization"]
    }
  ],
  education: [
    {
      degree: "PG Diploma in AI and Machine Learning",
      institution: "IIIT Bangalore (via upGrad)",
      year: "In Progress",
      status: "Advanced Specialization"
    },
    {
      degree: "M.Tech in Computer Science",
      institution: "Indian Institute of Technology (IIT), Dhanbad",
      year: "2006",
      status: "Premier Institute of National Importance"
    },
    {
      degree: "B.Tech in Computer Science & Information Technology",
      institution: "Vignan's Engineering College, JNTU Hyderabad",
      year: "2004",
      status: "First Class with Distinction"
    }
  ]
};
```

---

## 5. Component Specifications & State Machine

### 5.1 Perspective Lens State Machine
The entire page responds to the global `perspective` state:
- `'leadership'`: Emphasizes org scale, team management, business impact, delivery cadence, and FinOps.
- `'architecture'`: Emphasizes system topologies, microservices decoupling, Kafka event meshes, ACID lakehouses, and technical trade-offs.
- `'hybrid'` (default): Blends both seamlessly with dual visual indicators.

```typescript
type Perspective = 'leadership' | 'architecture' | 'hybrid';
```

### 5.2 Component Hierarchy
```
App.tsx (Holds perspective, videoModalOpen, recruiterDrawerOpen, commandPaletteOpen)
├── Navbar.tsx
│   ├── PerspectiveToggle.tsx (Executive Leadership vs Principal Architect)
│   ├── QuickLinks
│   ├── Action: 60s Video Briefing Trigger
│   ├── Action: 60s Recruiter Briefing Trigger
│   └── Action: Download Resume
├── HeroSection.tsx
│   ├── ProfilePortraitCard (with glow border, status pill)
│   ├── ExecutiveHeadline & Subtitle
│   ├── CredentialBadges (IIT Dhanbad, IIIT-B, 20 Yrs, AWS)
│   ├── ExecutiveSummaryStatement
│   ├── CTAs (Watch 60s Video, Recruiter Briefing, Resume PDF)
│   └── MetricsStrip (20+ Yrs, 15 Yrs Cognizant, Iceberg, Zero Downtime)
├── ArchitectureShowcase.tsx
│   ├── FilterPills (All, Lakehouse, Event Mesh, Modernization)
│   └── CaseStudyCards
│       ├── ArchitectureDiagramVisualizer (SVG/CSS topological flow)
│       ├── TradeOffTabs (System Architecture vs Leadership/Execution vs FinOps)
│       └── TechStackBadges
├── ExperienceSection.tsx
│   ├── TimelineFilter (All, Leadership Scope, Architectural Scope)
│   └── ExperienceCards (Cubic Transportation Systems, Cognizant Lead, Cognizant Core)
├── CompetencyMatrix.tsx (Categorized 6-box executive radar)
├── EducationAndCredentials.tsx (IIT Dhanbad, IIIT Bangalore, JNTU)
├── RecruiterDrawer.tsx (60-second slide-over quick screening summary)
├── VideoPitchModal.tsx (Custom video player with interactive chapter scrubbing)
├── CommandPalette.tsx (Cmd+K quick search for instant navigation)
└── Footer.tsx (Direct contact, LinkedIn, email copy, print resume trigger)
```

---

## 6. Detailed Interactive Feature Specifications

### Feature A: 60-Second Video Pitch Player Modal
- **Trigger**: Click "Watch 60s Video Intro" in the Hero or Navbar.
- **State**:
  - `currentTime`: number (tracks elapsed seconds)
  - `isPlaying`: boolean
  - `activeChapterIndex`: number (auto-updates based on `currentTime`)
- **Interaction**:
  - Clicking any chapter (e.g. `0:15 - Apache Iceberg Lakehouse`) instantly seeks the video to that timestamp.
  - Video scrub bar with animated timeline indicator.
  - Subtitle track display synchronized with current chapter takeaways.
  - Includes high-fidelity animated demo reel simulation when the user has not yet uploaded their recorded MP4.

### Feature B: 60-Second Recruiter Briefing Drawer
- **Trigger**: Floating sticky button or Navbar CTA.
- **Layout**: Slide-in right drawer with `backdrop-blur-xl`.
- **Content Blocks**:
  1. Candidate Snapshot: Target Roles, Total Experience, Top Pedigree (IIT Dhanbad).
  2. Core Competencies Checklist: Fast visual checkmarks for screening requirements.
  3. Key Wins: Bulleted quantifiable impacts ($ TCO savings, TB-scale data, zero downtime).
  4. Direct Contact Actions: Click-to-call, click-to-email, copy LinkedIn, download PDF resume.

### Feature C: Interactive Architecture Trade-Off Tabs
- Each case study card contains three view tabs:
  1. **Architectural Decisions**: Deep technical rationale (e.g. why Iceberg over Hive, why MSK over self-hosted).
  2. **Org Execution & Governance**: Squad topology, RFC/ADR governance, multi-regional coordination.
  3. **Quantifiable Impact**: Hard metrics on latency, TCO reduction, and availability.

### Feature D: One-Click Print & PDF Resume Generation
- A dedicated `@media print` stylesheet that cleanly formats the executive resume into a print-perfect 2-page or 1-page executive summary document directly from the browser (`window.print()`), removing navigation, buttons, and dark backgrounds for crisp white-paper output.

---

## 7. Step-by-Step Vibe Coding Implementation Sequence

Developers can execute this prompt plan sequentially to build the complete platform:

### Phase 1: Foundation & Project Scaffolding
- Initialize Vite + React + TypeScript + Tailwind CSS.
- Configure tailwind tokens for executive dark theme (`slate-950`, `slate-900`, `cyan-400`, `indigo-500`, `emerald-400`).
- Install `lucide-react`.
- Copy assets (`pavan-photo.jpg`, `Pavan_Kumar_Ghanta_Resume.pdf`) to `public/`.
- Create `src/types/portfolio.ts` and `src/data/portfolioData.ts` with complete data.

### Phase 2: Navigation & Perspective Switcher
- Build `Navbar.tsx` with sticky blur effect.
- Implement `PerspectiveToggle.tsx` with smooth pill slider animation.
- Wire perspective state down to the main view.

### Phase 3: Executive Hero & Impact Strip
- Build `HeroSection.tsx` with Pavan's headshot in glowing rounded frame.
- Add credential badges (IIT Dhanbad, IIIT-B, 20 Yrs).
- Add primary call-to-actions (Watch 60s Video, Recruiter Briefing, Resume PDF).
- Build the 4-card `MetricsStrip.tsx` with ambient hover effects.

### Phase 4: 60-Second Video Pitch Modal
- Build `VideoPitchModal.tsx` with custom video player controls.
- Implement interactive chapter markers with timestamp jump logic.
- Add synchronized key takeaways and CTA bar.

### Phase 5: Architecture Case Studies & Career Timeline
- Build `ArchitectureShowcase.tsx` with interactive trade-off tabs and topology diagrams.
- Build `ExperienceSection.tsx` with interactive 20-year milestone cards.
- Build `CompetencyMatrix.tsx` and `EducationSection.tsx`.

### Phase 6: Recruiter Drawer, Search & Polish
- Build `RecruiterDrawer.tsx` slide-over.
- Implement `CommandPalette.tsx` (`Cmd+K`).
- Add print stylesheet for crisp executive resume printing.
- Verify production build (`npm run build`) and responsiveness.
