import {
  ContactInfo,
  CredentialBadge,
  CareerStage,
  MetricItem,
  ArchitectureDeepDive,
  ExperienceRole,
  CompetencyCategory,
  EducationItem,
  VideoChapter,
  RoleDetail,
  LeadershipPrinciple
} from '../types/portfolio';

export const contactInfo: ContactInfo = {
  name: "Pavan Kumar Ghanta",
  headline: "Data & Software Architect | Enterprise Technology & Engineering Leader",
  targetRole: "Targeting Enterprise Architecture and Director Engineering Roles",
  tagline: "Results-driven Software & Data Architect and Engineering Leader with 20+ years of enterprise experience spanning distributed cloud platforms, lakehouse architectures, real-time event streaming, security/IAM governance, and legacy-to-cloud modernization. Actively building toward an Enterprise Architect role by aligning technology roadmaps with corporate business strategy.",
  location: "Hyderabad, India",
  phone: "+91-9163012196",
  email: "pavankumar.ghanta@zohomail.in",
  linkedin: "https://linkedin.com/in/pavan-kumar-ghantaa1b14475/",
  photoUrl: "./pavan-photo.jpg",
  resumePdfUrl: "./resume.html",
  executiveSummary: [
    "Results-driven Software & Data Architect and Engineering Leader with 20+ years of enterprise experience spanning distributed cloud platforms, lakehouse architectures, real-time event streaming, security/IAM governance, and legacy-to-cloud modernization. Actively building toward an Enterprise Architect role by aligning technology roadmaps with corporate business strategy.",
    "Recognized for leading through influence without authority—unifying autonomous engineering pods, DBAs, DevOps, and C-suite leadership (Chief Architect, VP of Engineering). Bridges strategic vision with deterministic engineering execution via Spec-Driven Development (SDD), FinOps cost modeling, and Architecture Decision Records (ADRs).",
    "Enterprise Lakehouse & Streaming Platforms: Proven authority in architecting enterprise lakehouses on AWS (S3, Glue, Spark, Athena) and low-latency streaming backbones using Apache Kafka, AWS MSK, Apache Flink, and AWS Kinesis Data Streams & Firehose.",
    "Database Migration & CDC Mastery: Architected zero/near-zero downtime database cutovers utilizing AWS DMS and Oracle GoldenGate (OGG), capturing real-time CDC streams from Oracle DB, DB2, and SQL Server into PostgreSQL (RDS/Aurora) and S3 lakehouses.",
    "Governance, FinOps & Observability: Slashing recurring infrastructure expenses by ~70% via cross-cloud VPN and Kinesis pipelines; proficient with Terraform IaC, Amazon CloudWatch, and Grafana observability dashboards.",
    "AI Adoption & Modern SDLC: Hands-on implementation of Generative AI (RAG, LLM integrations) for automated defect classification and Confluence-based knowledge retrieval; early adopter of AI-assisted engineering with GitHub Copilot and Claude Code."
  ]
};

export const leadershipPrinciples: LeadershipPrinciple[] = [
  {
    id: "influence-without-authority",
    title: "Influence Without Authority & Cross-Functional Alignment",
    description: "Unifies distributed engineering teams, platform infrastructure pods, DBAs, and business stakeholders around common architectural North Stars through objective trade-off frameworks, Architecture Review Boards (ARBs), and collaborative RFCs.",
    iconName: "Users",
    keyPractices: [
      "Architecture Review Boards (ARBs) & Consensus Building",
      "Collaborative RFC Documentation & Review Cadences",
      "Objective Alternatives-Considered Trade-Off Frameworks",
      "Unifying Autonomous Pods, DBAs, DevOps & C-Suite"
    ],
    proofPoint: "Standardized 750+ line production migration runbook (RACI across 8 distinct roles) and reusable Terraform modules adopted across multi-disciplinary platform squads."
  },
  {
    id: "strategic-finops",
    title: "Strategic FinOps & Executive Advisory",
    description: "Champions frugality and capital efficiency; constructs data-driven TCO and build-vs-buy models that de-risk cloud investments and guide Chief Architect and executive funding allocations.",
    iconName: "TrendingUp",
    keyPractices: [
      "Data-Driven Total Cost of Ownership (TCO) Modeling",
      "Build-vs-Buy Architecture Trade-Off Rubrics",
      "Executive Investment De-risking & Budget Allocations",
      "Cloud Infrastructure & Operational Cost Optimization"
    ],
    proofPoint: "Demonstrated that managed Site-to-Site VPN and on-demand Kinesis ingestion slashed recurring network and streaming OPEX by ~70% versus dedicated Direct Connect/MSK."
  },
  {
    id: "spec-driven-engineering",
    title: "Spec-Driven Engineering & Delivery Governance",
    description: "Spearheads Spec-Driven Development (SDD), establishing deterministic design-approval gates, Jira/Confluence epic tracking, and clear role boundaries between Architecture and Engineering Management.",
    iconName: "FileCheck",
    keyPractices: [
      "Spec-Driven Development (SDD) Methodology",
      "Systems Engineering Operating Model (RACI, KPIs)",
      "Deterministic Architecture Design-Approval Gates",
      "Clear Role Boundaries: Architecture vs. Engineering Management"
    ],
    proofPoint: "Authored and presented an 11-slide Systems Engineering Operating Model to executive leadership, transitioning multi-sprint squads to Spec-Driven Development."
  },
  {
    id: "customer-obsession",
    title: "Customer Obsession & Business Alignment",
    description: "Translates business domain requirements into resilient technical architectures, owning end-to-end portfolio verticals across transit fare billing, concession logic, and B2B funds-pool management.",
    iconName: "Target",
    keyPractices: [
      "Domain-Driven Design (DDD) & Strategic Mapping",
      "End-to-End Vertical Portfolio Ownership",
      "Complex Funds-Pooling & Program Billing Models",
      "Automated Partner Integrations & SLA Enforcement"
    ],
    proofPoint: "Served as chief architect-of-record for enterprise B2B employer-benefit portfolio across 20+ Jira epics and 45+ Confluence-tracked architectural change designs."
  },
  {
    id: "talent-mentorship",
    title: "Talent Mentorship & Culture of Quality",
    description: "Practices servant leadership; mentors 10+ member multi-disciplinary teams across technical design, secure coding (SonarQube, Fortify), and AI-assisted SDLC workflows (GitHub Copilot, Claude/Claude Code).",
    iconName: "Award",
    keyPractices: [
      "Servant Leadership & Engineering Career Coaching",
      "AI-Assisted SDLC Workflows (Copilot, Claude Code)",
      "Automated Static Code Gates (SonarQube, Fortify SCA)",
      "Test-Driven Development (TDD) & Secure Code Standards"
    ],
    proofPoint: "Mentored 10-member cross-functional engineering teams, eliminating architectural technical debt and reducing post-release defect density across global onsite/offshore pods."
  }
];

export const domainExpertise: string[] = [
  "Transit Fare Collection & Payments",
  "B2B Employer Benefit Administration",
  "Funds-Pool Management",
  "Fraud & Velocity Risk Detection",
  "Banking & Money Market Trading"
];

export const architectureDomains: string[] = [
  "Solution Architecture",
  "Enterprise Data Lakehouse",
  "Event-Driven Architecture",
  "Microservices",
  "Multi-Tenant Isolation",
  "Cross-Cloud Network Topologies"
];

export const credentialBadges: CredentialBadge[] = [
  { label: "20+ Years Enterprise Exp", iconName: "Clock", category: "experience", highlight: true },
  { label: "Notice Period: 2 Months", iconName: "Clock", category: "availability", highlight: true },
  { label: "Influence Without Authority", iconName: "ShieldCheck", category: "leadership", highlight: true },
  { label: "M.Tech IIT Dhanbad (2006)", iconName: "GraduationCap", category: "pedigree", highlight: true },
  { label: "MS in AI/ML (IIIT-B & LJMU)", iconName: "Cpu", category: "pedigree", highlight: true },
  { label: "AWS & Azure Cross-Cloud", iconName: "Cloud", category: "tech" },
  { label: "Apache Spark & Flink", iconName: "Activity", category: "tech", highlight: true },
  { label: "AWS DMS & GoldenGate CDC", iconName: "Database", category: "tech" },
  { label: "Strategic FinOps (~70% OPEX Cut)", iconName: "TrendingUp", category: "leadership", highlight: true }
];

export const careerStages: CareerStage[] = [
  {
    id: "pat",
    stepNumber: 1,
    title: "Programmer Analyst / Trainee",
    company: "Cognizant Technology Solutions",
    period: "Jun 2006 – Sep 2009",
    level: "Foundation",
    description: "Core algorithmic engineering, COBOL, JCL, CICS, VSAM, and DB2 database systems for global banking clients."
  },
  {
    id: "assoc",
    stepNumber: 2,
    title: "Associate",
    company: "Cognizant Technology Solutions",
    period: "Oct 2009 – Jun 2015",
    level: "Technical Leadership",
    description: "Spearheaded mainframe-to-UNIX data integration (XAMIN), core banking credit enhancements at Credit Suisse, and CORBA middleware microservices."
  },
  {
    id: "sr-assoc",
    stepNumber: 3,
    title: "Senior Associate / Architect",
    company: "Cognizant Technology Solutions",
    period: "Jul 2015 – Oct 2021",
    level: "Architectural Ownership",
    description: "Led solution architecture for JPMC money market trading (MMSY), Credit Suisse banking modernization, TDM 2.0 test automation, and DevSecOps governance across 15-year tenure."
  },
  {
    id: "pse",
    stepNumber: 4,
    title: "Principal Software Engineer",
    company: "Cubic Transportation Systems",
    period: "Nov 2021 – Jul 2023",
    level: "Enterprise Scale",
    description: "High-throughput transit transaction microservices, concession eligibility verification, and technical mentorship of a 10-member cross-functional engineering team."
  },
  {
    id: "sa",
    stepNumber: 5,
    title: "Software Architect",
    company: "Cubic Transportation Systems",
    period: "Aug 2023 – Nov 2025",
    level: "Strategic Architecture",
    description: "Chief architect for B2B employer-benefit vertical (20+ epics), 11-slide Systems Engineering Operating Model, 45+ Confluence designs, and AI-assisted SDLC pioneering."
  },
  {
    id: "da",
    stepNumber: 6,
    title: "Data Architect",
    company: "Cubic Transportation Systems",
    period: "Nov 2025 – Present",
    level: "Executive Data Platform",
    isCurrent: true,
    description: "Strategic FinOps executive advisory (~70% OPEX cut), 750+ line migration runbook with 8-role RACI, central S3 Lakehouse with Spark/Glue, and Flink real-time observability."
  },
  {
    id: "ea",
    stepNumber: 7,
    title: "Enterprise Technology & Engineering Leader",
    company: "Target Leadership Destination",
    period: "Notice Period: 2 Months",
    level: "Executive Horizon",
    isTarget: true,
    description: "Aligning cross-domain technology portfolios, multi-cloud data lakehouses, zero-downtime migrations, and high-performance engineering organizations with corporate strategy."
  }
];

export const metricHighlights: MetricItem[] = [
  {
    value: "~70% Cut",
    label: "Strategic FinOps OPEX",
    subtext: "Managed VPN + Kinesis vs Direct Connect/MSK Footprint",
    iconName: "TrendingUp"
  },
  {
    value: "20+ Epics",
    label: "B2B Vertical Ownership",
    subtext: "Chief Architect for Fare, Billing & FedEx Integrations",
    iconName: "Layers"
  },
  {
    value: "750+ Lines",
    label: "8-Role RACI Runbook",
    subtext: "Cross-Functional Database Cutover Governance (DMS / OGG)",
    iconName: "FileCheck"
  },
  {
    value: "20+ Yrs",
    label: "Enterprise Experience",
    subtext: "Leading Through Influence Without Authority",
    iconName: "Users"
  }
];

export const architectureDeepDives: ArchitectureDeepDive[] = [
  {
    id: "azure-aws-cross-cloud",
    title: "Cross-Cloud Lakehouse Ingestion & Strategic FinOps (~70% OPEX Cut)",
    category: "cross-cloud",
    company: "Cubic Transportation Systems",
    summary: "Influenced C-suite and Chief Architect roadmaps by authoring an alternatives-considered and TCO model for cross-cloud Azure-to-AWS ingestion; demonstrated that a managed Site-to-Site VPN and on-demand Kinesis ingestion path slashed recurring network and streaming OPEX by ~70% versus dedicated Direct Connect/ExpressRoute and self-managed MSK, accelerating the move to managed serverless AWS services.",
    problemStatement: "Critical transit device events and transactional payloads resided across heterogeneous Azure subscriptions, threatening fragmented analytics and requiring expensive dual pipeline maintenance without a standardized cross-cloud ingestion fabric.",
    topology: {
      nodes: [
        { name: "Azure Kafka & Oracle", type: "source" },
        { name: "Site-to-Site VPN Dual Tunnel", type: "ingress" },
        { name: "Lambda Event-Source Mapping & OGG CDC", type: "processing" },
        { name: "AWS Kinesis Data Streams", type: "ingress" },
        { name: "S3 Data Lake & MSK Alerting Pipeline", type: "consumer" }
      ],
      flowSummary: "Azure workloads traverse dual IPsec VPN tunnels into a self-managed Lambda Kafka ESM & Oracle GoldenGate CDC engine, landing directly in Kinesis Data Streams to feed existing DynamoDB, SQS, and ServiceNow alerting without rewriting consumers."
    },
    architecturalDecisions: [
      "Strategic FinOps & Executive Advisory: Formulated trade-off analysis demonstrating ~70% recurring cost savings using managed Site-to-Site VPN and on-demand Kinesis instead of dedicated Direct Connect / ExpressRoute and self-managed Kafka clusters, accelerating migration to serverless AWS services.",
      "Consumer Preservation: Ingested Azure streams directly into Kinesis to reuse the entire downstream device-event, heartbeat, and alerting ecosystem without rewriting consumers.",
      "Resiliency: Engineered dual-tunnel failover with automated CloudWatch dead-letter monitoring and IAM least-privilege role scoping."
    ],
    techStack: ["AWS Kinesis", "AWS Lambda", "Oracle GoldenGate CDC", "Site-to-Site VPN", "Terraform", "Kafka", "DynamoDB", "ServiceNow"],
    governanceAndRaci: {
      raciRoles: ["Data Architect", "Cloud Ops", "Network Security", "DBA Leads", "DevOps"],
      governanceProcesses: [
        "Architectural Decision Record (ADR) sign-off with Chief Architect",
        "Alternatives-considered analysis: MSK vs Kafka Connect vs NiFi vs MirrorMaker 2",
        "Infrastructure as Code review via Terraform guardrails"
      ],
      stakeholderEngagement: "Presented cross-cloud topology and cost governance directly to AWS Modernization Initiative review committee."
    },
    quantifiableImpact: {
      performance: "Sub-second event propagation from Azure edge to AWS analytics lakehouse",
      finOpsAndTco: "~70% reduction in recurring network and streaming-platform spend versus Direct Connect and self-managed Kafka",
      reliabilityAndGovernance: "100% preservation of downstream alerting SLA with zero consumer rebuilds"
    }
  },
  {
    id: "flink-device-observability",
    title: "Stream Observability Platform with Flink & Grafana",
    category: "stream-observability",
    company: "Cubic Transportation Systems",
    summary: "Defined end-to-end architecture for an Apache Flink-based device telemetry and heartbeat platform (Flink, Lambda, DynamoDB, Grafana dashboards), governing design-approval, Terraform deployment, and QA validation across Hyderabad and New York environments.",
    problemStatement: "High-density transit validators and ticketing gates generate millions of continuous heartbeats; batch databases suffered write amplification and delayed fault detection by up to 45 minutes.",
    topology: {
      nodes: [
        { name: "Edge Device Fleet (Millions)", type: "source" },
        { name: "AWS Kinesis / MSK Stream", type: "ingress" },
        { name: "Apache Flink Stream Application", type: "processing" },
        { name: "Hot Path: DynamoDB + ServiceNow", type: "consumer" },
        { name: "Cold Path: S3 Lakehouse", type: "storage" }
      ],
      flowSummary: "Device telemetry streams into Apache Flink which evaluates sliding-window anomalies in real time, instantly alerting ServiceNow while sinking batch data into S3."
    },
    architecturalDecisions: [
      "Dual Path Partitioning: Split stream into Hot Path (immediate sub-second anomaly detection & incident dispatch) and Cold Path (historical retention & compliance).",
      "Stateful Sliding Windows: Flink managed checkpointing to detect device degradation patterns before total hardware failure occurs.",
      "Cross-Regional Deployment: Terraform parameterized deployment verified across Hyderabad and New York staging/production clusters."
    ],
    techStack: ["Apache Flink", "AWS MSK", "Java 8/17", "Python", "DynamoDB", "AWS Lambda", "ServiceNow API", "Terraform", "CloudWatch", "Grafana"],
    governanceAndRaci: {
      governanceProcesses: [
        "Jira Epic Delivery Ownership: Designed, estimated, and validated delivery gates",
        "Hot/warm/cold lifecycle compliance and data retention sign-off",
        "Performance baseline benchmarking under simulated 5x peak loads"
      ],
      stakeholderEngagement: "Coordinated cross-continental QA validation and SRE operational readiness across Hyderabad and NY teams."
    },
    quantifiableImpact: {
      performance: "Reduced mean time to hardware fault detection from 45 minutes to < 1.2 seconds",
      finOpsAndTco: "30% reduction in database IOPS write costs by buffering sliding-window states in Flink memory",
      reliabilityAndGovernance: "Automated ticket triage eliminating manual validator health audits"
    }
  },
  {
    id: "migration-runbook-governance",
    title: "Production Zero-Downtime Migration Framework & 8-Role RACI",
    category: "governance-runbook",
    company: "Cubic Transportation Systems",
    summary: "Led cross-functional adoption of standardized migration governance by authoring a 750+ line production migration runbook (RACI across 8 distinct roles) and reusable Terraform modules adopted by DBA, DevOps, and data engineering teams to execute zero/near-zero downtime database cutovers (AWS DMS, Oracle GoldenGate).",
    problemStatement: "Multi-terabyte production transit databases faced unacceptably high cutover risks and prolonged downtime windows due to inconsistent migration practices across distributed DBA and engineering teams.",
    topology: {
      nodes: [
        { name: "Production Source Database (Oracle/DB2)", type: "source" },
        { name: "Read Replica / Storage Snapshot", type: "processing" },
        { name: "AWS DMS / Oracle GoldenGate CDC", type: "ingress" },
        { name: "Target PostgreSQL (RDS / Aurora)", type: "storage" },
        { name: "Zero-Downtime Traffic Cutover", type: "consumer" }
      ],
      flowSummary: "Full-load offloaded to read replica snapshots, followed by continuous CDC stream catch-up, concluding with DNS repointing under strict rollback gates."
    },
    architecturalDecisions: [
      "Production Isolation: Designed snapshot/replica-sourced full load pattern to isolate active operational databases from read lock starvation during initial migration.",
      "Selection Framework: Formulated cost vs. latency decision tree to deterministically select AWS DMS (standard relational tables) vs. Oracle GoldenGate (high-throughput complex schema CDC).",
      "Cross-Functional RACI: Codified responsibilities across Architect, DBA, Lead Dev, Network Eng, DevOps, Product Owner, QA, and Incident Commander."
    ],
    techStack: ["AWS DMS", "Oracle GoldenGate (OGG)", "PostgreSQL", "AWS RDS", "Aurora PostgreSQL", "Oracle DB", "DB2", "Terraform", "Route 53"],
    governanceAndRaci: {
      raciRoles: ["Architect (Accountable)", "DBA (Responsible)", "DevOps (Responsible)", "Network (Consulted)", "QA (Informed)"],
      governanceProcesses: [
        "Go/No-Go checkpoint validation at T-24h, T-4h, and Cutover Hour",
        "Deterministic rollback runbook triggers based on lag threshold breaches",
        "Pre-migration schema drift audit and collation verification"
      ],
      stakeholderEngagement: "Presented runbook standards to VP of Engineering and deployed as the corporate standard across all project teams."
    },
    quantifiableImpact: {
      performance: "Zero-downtime cutover achieved for multi-TB relational transit estates",
      finOpsAndTco: "Optimized tool licensing by reserving Oracle GoldenGate exclusively for high-concurrency CDC workloads",
      reliabilityAndGovernance: "Eliminated migration-related production rollbacks across scheduled weekend releases"
    }
  },
  {
    id: "identity-security-architecture",
    title: "Serverless Event-Driven Microservices & IAM Security",
    category: "identity-security",
    company: "Cubic Transportation Systems",
    summary: "Designed two-tier federation model (AWS Managed AD/IAM Identity Center for internal staff; Cognito with SAML/OIDC for third-party consumers) behind a unified Lambda authorizer with token-derived data isolation, fronted by CloudFront edge caching.",
    problemStatement: "Disparate user pools, conflicting access models between enterprise staff and external municipal transit partners, and complex multi-tenant data isolation requirements created compliance vulnerabilities.",
    topology: {
      nodes: [
        { name: "Internal Staff & SRE", type: "source" },
        { name: "AWS IAM Identity Center / AD", type: "ingress" },
        { name: "3rd-Party Municipal Partners", type: "source" },
        { name: "Amazon Cognito (SAML/OIDC)", type: "ingress" },
        { name: "EventBridge & Unified API Gateway Authorizer", type: "processing" },
        { name: "Tenant-Isolated Services & S3", type: "storage" }
      ],
      flowSummary: "Both internal and partner credentials resolve at a centralized Lambda Authorizer which injects tenant claims into cryptographic JWT tokens for row-level DB and S3 policy isolation."
    },
    architecturalDecisions: [
      "Two-Tier Federation: Staff access unified under AWS Managed AD / IAM Identity Center; external partner transit authorities federated via Cognito User Pools with B2B SAML 2.0 / OIDC.",
      "Unified Lambda Authorizer: Single token validation layer decoupling API endpoints from upstream identity provider variations.",
      "Tenant Isolation: Token-derived tenant identifiers passed to downstream services, driving row-level database security and S3 prefix access policies."
    ],
    techStack: ["AWS EventBridge", "AWS SQS", "AWS SNS", "AWS IAM Identity Center", "Amazon Cognito", "AWS Lambda", "API Gateway", "CloudFront", "OAuth2 / SAML / OIDC"],
    governanceAndRaci: {
      governanceProcesses: [
        "Privacy Impact Assessment (PIA) and regulatory compliance audit",
        "Automated secret rotation and key management via AWS KMS",
        "Zero-trust credential lifecycle tracking"
      ],
      stakeholderEngagement: "Worked in tandem with Chief Information Security Officer (CISO) and partner IT leads on mutual trust configurations."
    },
    quantifiableImpact: {
      performance: "Sub-15ms authorization latency through cached cryptographic token verification",
      finOpsAndTco: "Consolidated multiple legacy auth servers into managed AWS serverless services",
      reliabilityAndGovernance: "Passed stringent transit regulatory audits with automated multi-tenant audit trails"
    }
  }
];

export const workExperience: ExperienceRole[] = [
  {
    id: "cubic",
    company: "Cubic Transportation Systems",
    location: "Hyderabad, India | Nov 2021 – Present",
    roles: [
      { title: "Data Architect", period: "Nov 2025 – Present", isCurrent: true },
      { title: "Software Architect", period: "Aug 2023 – Nov 2025" },
      { title: "Principal Software Engineer", period: "Nov 2021 – Jul 2023" }
    ],
    roleDetails: [
      {
        title: "Data Architect",
        period: "Nov 2025 – Present",
        isCurrent: true,
        keyTools: [
          "AWS platform", "Lakehouse", "S3", "Glue", "Spark", "Lambda", "Kafka streaming", "MSK", "Kinesis", "Firehose",
          "EventBridge", "DynamoDB", "RDS", "Postgres", "Oracle DB", "Flink", "SQS", "SNS", "API Gateway", "Cognito",
          "CloudFront", "AWS DMS", "Oracle GoldenGate", "CDC", "Grafana", "CloudWatch", "Terraform", "Python"
        ],
        achievements: [
          {
            title: "Strategic FinOps & Executive Advisory",
            description: "Influenced C-suite and Chief Architect roadmaps by authoring an alternatives-considered and TCO model for cross-cloud Azure-to-AWS ingestion; demonstrated that a managed Site-to-Site VPN and on-demand Kinesis ingestion path slashed recurring network and streaming OPEX by ~70% versus a dedicated Direct Connect/ExpressRoute and self-managed MSK footprint, accelerating the enterprise move to managed serverless AWS services."
          },
          {
            title: "Cross-Organizational Influence",
            description: "Led cross-functional adoption of standardized migration governance by authoring a 750+ line production migration runbook (RACI across 8 distinct roles) and reusable Terraform modules adopted by DBA, DevOps, and data engineering teams to execute zero/near-zero downtime database cutovers (AWS DMS, Oracle GoldenGate)."
          },
          {
            title: "Cross-Cloud Lakehouse & Ingestion Pipeline",
            description: "Architected target architecture extending AWS lakehouse to ingest Azure workloads via Lambda Kafka event-source mapping and Oracle GoldenGate CDC over dual-tunnel Site-to-Site VPN into Kinesis Data Streams, allowing the existing MSK-based consumer ecosystem (DynamoDB, SQS, ServiceNow) to repoint without rebuild."
          },
          {
            title: "Stream Observability Platform",
            description: "Defined end-to-end architecture for an Apache Flink-based device telemetry and heartbeat platform (Flink, Lambda, DynamoDB, Grafana dashboards), governing design-approval, Terraform deployment, and QA validation across Hyderabad and New York environments."
          },
          {
            title: "Data Lake Sequencing & Modernization",
            description: "Directed data lake storage tiering (raw/staging/analytics) and S3 data-lifecycle policies (hot/warm/cold), closing a retention-driven data loss risk; led delivery planning for Trip History API modernization (CDC, Aurora, Glue ETL) against a strict 5-minute SLA."
          },
          {
            title: "Security & Multi-Tenant Identity Architecture",
            description: "Designed a two-tier federation model (AWS Managed AD/IAM Identity Center for internal staff; Cognito with SAML/OIDC for third-party consumers) behind a unified Lambda authorizer with token-derived data isolation."
          }
        ]
      },
      {
        title: "Software Architect",
        period: "Aug 2023 – Nov 2025",
        keyTools: [
          "Java 8", "Spring Boot", "Spring Security", "Microservices", "TypeScript", "Angular", "Python", "Oracle DB",
          "AWS (Lambda, API Gateway, Cognito, S3)", "Terraform", "SonarQube", "Fortify"
        ],
        achievements: [
          {
            title: "Operating Model & Delivery Redefinition",
            description: "Influenced executive engineering leadership by formulating and presenting an 11-slide Systems Engineering Operating Model (RACI, governance checkpoints, KPIs); successfully established clear role boundaries between Architects and Engineering Managers and transitioned multi-sprint teams to Spec-Driven Development."
          },
          {
            title: "B2B Vertical Technical Ownership",
            description: "Served as architect-of-record for the enterprise B2B/employer-benefit vertical across 20+ Jira epics—governing program configuration, fixed-monthly-fee billing, funds-pool reload/refund logic, card replacement token synchronization, and partner shipping integrations (FedEx)."
          },
          {
            title: "Collaborative Architecture Governance",
            description: "Steered technical consensus and co-approved 45+ Confluence-tracked change designs spanning concession rules, multi-factor authentication (MFA) for system users, account/fraud controls, and external partner invoicing."
          },
          {
            title: "AI-Assisted SDLC Pioneering",
            description: "Early adopter of AI engineering workflows; introduced GitHub Copilot and Claude/Claude Code for deterministic code generation, technical reviews, and documentation, shortening feature delivery cycles across Java/Spring Boot, Python, and Terraform stacks."
          },
          {
            title: "Generative AI Innovation",
            description: "Designed and implemented RAG (Retrieval-Augmented Generation) POCs to build enterprise search assistants indexing Confluence runbooks, Swagger specs, and product documentation, improving team defect turnaround and root-cause resolution."
          }
        ]
      },
      {
        title: "Principal Software Engineer",
        period: "Nov 2021 – Jul 2023",
        keyTools: [
          "Java", "Spring Boot", "REST APIs", "Microservices", "Oracle SQL", "Docker", "Jenkins", "Fortify SCA", "SonarQube"
        ],
        achievements: [
          {
            title: "Solution Delivery & Microservices",
            description: "Spearheaded core application architecture and high-level/low-level designs for high-throughput transit transaction microservices using Java 8, Spring Boot, and Oracle SQL."
          },
          {
            title: "Team Mentorship & Standards",
            description: "Mentored a 10-member cross-functional engineering team on secure coding standards, TDD, and CI/CD automation, ensuring seamless delivery alignment between onsite and offshore pods."
          },
          {
            title: "Quality & Resiliency",
            description: "Enforced code quality and security gates via SonarQube and Fortify, eliminating architectural technical debt and reducing post-release defect density."
          }
        ]
      }
    ],
    technologies: [
      "AWS (S3, Glue, Spark, Lambda, MSK, Kinesis, Firehose, EventBridge, DynamoDB, RDS, API Gateway, Cognito, CloudFront, Route 53, CloudWatch, SQS, SNS, IAM Identity Center, DMS)",
      "Microsoft Azure (VPN Gateway, Cross-Cloud Networking)",
      "Terraform",
      "Oracle GoldenGate (OGG)",
      "Apache Kafka",
      "Apache Flink",
      "Apache Spark",
      "Python",
      "Java (8+)",
      "Spring Boot",
      "Spring Security",
      "TypeScript",
      "Angular (2+/6+)",
      "PostgreSQL",
      "Oracle DB",
      "Grafana",
      "ServiceNow Alerting",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Fortify SCA"
    ],
    summary: [
      "Influenced C-suite and Chief Architect roadmaps through data-driven TCO modeling, demonstrating ~70% OPEX reduction for cross-cloud Azure-to-AWS lakehouse ingestion.",
      "Authored 750+ line production database migration runbook with 8-role RACI governance, adopted by DBA and DevOps teams for zero/near-zero downtime cutovers.",
      "Formulated 11-slide Systems Engineering Operating Model redefining Architect vs. Engineering Manager role boundaries and transitioning squads to Spec-Driven Development.",
      "Architect-of-record for B2B employer-benefit vertical across 20+ Jira epics and 45+ Confluence-tracked architectural change approvals.",
      "Early adopter of AI-assisted engineering with GitHub Copilot and Claude Code; architected enterprise RAG prototypes for defect analysis.",
      "Practices servant leadership, mentoring 10+ member multi-disciplinary teams in secure coding standards, TDD, and CI/CD automation."
    ],
    keyProjects: [
      {
        name: "Cross-Cloud Lakehouse Ingestion & Strategic FinOps (~70% OPEX Cut)",
        category: "data-architecture",
        description: "Influenced C-suite and Chief Architect roadmaps by authoring an alternatives-considered and TCO model for cross-cloud Azure-to-AWS ingestion; demonstrated that managed Site-to-Site VPN and on-demand Kinesis slashed recurring network/streaming OPEX by ~70% vs Direct Connect/MSK.",
        tags: ["Strategic FinOps", "70% OPEX Cut", "Azure VPN", "Kinesis", "Executive Advisory"]
      },
      {
        name: "Production Zero-Downtime Migration Runbook (8-Role RACI)",
        category: "data-architecture",
        description: "Led cross-functional adoption of standardized migration governance by authoring a 750+ line production migration runbook (RACI across 8 distinct roles) and reusable Terraform modules adopted across DBA, DevOps, and data teams.",
        tags: ["8-Role RACI", "AWS DMS", "Oracle GoldenGate", "Governance", "Zero-Downtime"]
      },
      {
        name: "Systems Engineering Operating Model (Spec-Driven Development)",
        category: "software-architecture",
        description: "Influenced executive engineering leadership by formulating and presenting an 11-slide Systems Engineering Operating Model; successfully established clear role boundaries between Architects and EMs and transitioned squads to SDD.",
        tags: ["Operating Model", "Spec-Driven Development", "RACI Governance", "Executive Buy-In"]
      },
      {
        name: "Stream Observability Platform with Flink & Grafana",
        category: "data-architecture",
        description: "Defined end-to-end architecture for an Apache Flink-based device telemetry and heartbeat platform (Flink, Lambda, DynamoDB, Grafana dashboards), governing design-approval, Terraform deployment, and QA validation.",
        tags: ["Apache Flink", "DynamoDB", "Lambda", "Grafana", "ServiceNow Alerting"]
      },
      {
        name: "B2B Vertical Technical Ownership (20+ Epics)",
        category: "software-architecture",
        description: "Chief technical architect for the B2B employer-benefit portfolio across 20+ Jira epics; governed program configuration, purse-allocation logic, monthly billing models, and FedEx shipping.",
        tags: ["Chief Architect", "20+ Epics", "FedEx Integration", "Funds-Pool Logic"]
      },
      {
        name: "Generative AI (RAG) & AI-Assisted SDLC Pioneering",
        category: "software-architecture",
        description: "Architected and deployed RAG-based AI assistants referencing internal OpenAPI/Swagger specifications and Confluence documentation; introduced Claude Code and GitHub Copilot for defect analysis and rapid prototyping.",
        tags: ["Generative AI", "RAG", "Claude Code", "GitHub Copilot", "Defect Prediction"]
      }
    ]
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    location: "Kolkata, India | Jun 2006 – Oct 2021 (15 Years)",
    roles: [
      { title: "Senior Associate / Architect", period: "Jul 2015 – Oct 2021" },
      { title: "Associate", period: "Oct 2009 – Jun 2015" },
      { title: "Programmer Analyst / Trainee", period: "Jun 2006 – Sep 2009" }
    ],
    roleDetails: [
      {
        title: "Senior Associate / Architect",
        period: "Jul 2015 – Oct 2021",
        clients: "JPMorgan Chase (JPMC), Credit Suisse, QVC Inc.",
        keyTools: [
          "Java 8", "Spring Boot", "Angular 6+", "TypeScript", "SQL Server", "DB2", "Jenkins", "Docker", "Git", "SonarQube", "Fortify"
        ],
        achievements: [
          {
            title: "Enterprise Financial Platforms",
            description: "Led solution architecture and backend design for enterprise banking platforms across global Tier-1 investment banks (JPMorgan Chase, Credit Suisse) and retail enterprises (QVC Inc.)."
          },
          {
            title: "Institutional Money Market Trading (MMSY – JPMC)",
            description: "Architected scalable backend services enabling institutional clients to trade money market instruments via digital interfaces, significantly improving trade throughput and platform reliability."
          },
          {
            title: "Test Data Automation Platform (TDM 2.0)",
            description: "Conceptualized, architected, and built an enterprise self-service web platform to automate test data generation, compressing multi-environment QA test data preparation time from several days to minutes."
          },
          {
            title: "Stakeholder Management & Agile Transformation",
            description: "Served as primary technical liaison between global client stakeholders, onshore leadership, and offshore delivery pods; standardized CI/CD toolchains (Jenkins, Docker, Git) to cut release cycle times."
          },
          {
            title: "Code Governance & Security Audits",
            description: "Led code reviews and technical governance across globally distributed teams, enforcing architectural compliance through SonarQube and Fortify static analysis."
          }
        ]
      },
      {
        title: "Associate",
        period: "Oct 2009 – Jun 2015",
        keyTools: [
          "Java", "JCL", "CICS", "DB2", "PL1", "VSAM", "REXX", "CORBA", "Mainframe (z/OS)", "UNIX"
        ],
        achievements: [
          {
            title: "Mainframe Modernization & Data Integration (XAMIN)",
            description: "Architected a high-volume mainframe-to-UNIX data integration system, automating the extraction, transformation, and reconciliation of critical financial data between legacy OMNI and XAMIN accounting platforms."
          },
          {
            title: "Core Banking Enhancements (Credit Suisse – GRANIT & KSEC2)",
            description: "Enhanced mission-critical core banking applications supporting credit request processing, collateral evaluation, and product catalog management using Java, Spring MVC, DB2, and PL/1."
          },
          {
            title: "Distributed Architecture & Middleware",
            description: "Designed scalable REST-based microservices and backend components integrating distributed middleware (CORBA) with legacy mainframe transaction backends."
          }
        ]
      },
      {
        title: "Programmer Analyst / Trainee",
        period: "Jun 2006 – Sep 2009",
        keyTools: [
          "COBOL", "JCL", "CICS", "VSAM", "DB2"
        ],
        achievements: [
          {
            title: "Core Banking Batch & Online Systems",
            description: "Developed, tested, and maintained high-volume batch and online transaction processing systems using COBOL, JCL, CICS, VSAM, and DB2 across global banking client engagements."
          },
          {
            title: "Defect Resolution & Window Optimization",
            description: "Partnered with QA and operations teams to resolve production defects, author technical specifications, and optimize database batch execution windows."
          }
        ]
      }
    ],
    technologies: [
      "Java (8+)",
      "Spring Boot",
      "Angular (6+)",
      "TypeScript",
      "SQL Server",
      "DB2",
      "PL/1",
      "COBOL",
      "JCL",
      "VSAM",
      "REXX",
      "CICS",
      "CORBA",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Fortify",
      "UNIX",
      "Mainframe (z/OS)"
    ],
    summary: [
      "15-year tenure delivering strategic software design and engineering leadership for top-tier global institutions including JPMorgan Chase (JPMC), Credit Suisse, and QVC Inc.",
      "Architected high-throughput backend services for institutional money market trading at JPMC (MMSY); engineered resilient REST microservices enabling institutional client trading and trade reconciliation.",
      "Spearheaded modernization of core banking and credit-approval modules at Credit Suisse (GRANIT & KSEC2); introduced automated Jenkins/Docker CI/CD pipelines and static code gates via SonarQube and Fortify, slashing deployment cycle times.",
      "Conceptualized, architected, and built an enterprise self-service test data provisioning platform (TDM 2.0), compressing testing cycle times from multiple days to minutes and eliminating environment contention.",
      "Served as primary technical liaison between global client stakeholders, onshore leadership, and offshore delivery pods.",
      "Led code reviews and technical governance across globally distributed teams, enforcing architectural compliance through SonarQube and Fortify static analysis."
    ],
    keyProjects: [
      {
        name: "Institutional Money Market Trading (MMSY – JPMC)",
        category: "banking-modernization",
        description: "Architected high-throughput backend services for institutional money market trading; engineered resilient REST microservices directly enabling institutional client trading and trade reconciliation.",
        tags: ["JPMC", "Money Market Trading", "High-Throughput", "Spring Boot", "Microservices"]
      },
      {
        name: "Core Banking Modernization & DevOps (Credit Suisse – GRANIT & KSEC2)",
        category: "banking-modernization",
        description: "Spearheaded modernization of core banking and credit-approval modules; introduced automated Jenkins/Docker CI/CD pipelines and static code gates via SonarQube and Fortify, slashing deployment cycle times.",
        tags: ["Credit Suisse", "Core Banking", "CI/CD DevOps", "SonarQube", "Fortify"]
      },
      {
        name: "Test Data Automation Platform (TDM 2.0)",
        category: "banking-modernization",
        description: "Conceptualized, architected, and built an enterprise self-service web platform to automate test data generation, compressing multi-environment QA test data preparation time from several days to minutes.",
        tags: ["TDM 2.0", "Self-Service", "Test Automation", "Zero Contention"]
      },
      {
        name: "Mainframe Modernization & Data Integration (XAMIN)",
        category: "banking-modernization",
        description: "Architected high-volume mainframe-to-UNIX data integration system, automating the extraction, transformation, and reconciliation of critical financial data between legacy OMNI and XAMIN accounting platforms.",
        tags: ["XAMIN", "OMNI", "Mainframe-to-UNIX", "Reconciliation", "DB2"]
      }
    ]
  }
];

export const competencies: CompetencyCategory[] = [
  {
    domain: "Cloud & Lakehouse",
    iconName: "Cloud",
    skills: [
      "AWS Platform (S3, Glue, Lambda, Kinesis, Firehose)",
      "EventBridge, DynamoDB, RDS, API Gateway, Cognito",
      "CloudFront, Route 53, CloudWatch, SQS, SNS",
      "IAM Identity Center & Single Sign-On (SSO)",
      "Microsoft Azure (VPN Gateway, Cross-Cloud Ingestion)",
      "Lakehouse Architecture & Multi-Tenant Data Isolation"
    ]
  },
  {
    domain: "Streaming, Ingestion & CDC",
    iconName: "Database",
    skills: [
      "Apache Kafka & AWS Managed Streaming for Kafka (MSK)",
      "Apache Flink Real-Time Telemetry Enrichment",
      "Apache Spark & Glue ETL Batch Processing",
      "Change Data Capture (CDC) & Oracle GoldenGate",
      "AWS Database Migration Service (AWS DMS)",
      "Dead Letter Queue (DLQ) Handling & Schema Registry"
    ]
  },
  {
    domain: "Databases & Migrations",
    iconName: "Database",
    skills: [
      "Oracle DB & PostgreSQL (RDS / Aurora)",
      "DynamoDB, DB2, MySQL, SQL Server, VSAM",
      "AWS Database Migration Service (AWS DMS)",
      "Oracle GoldenGate (OGG) Real-Time CDC",
      "Zero/Near-Zero Downtime Production Cutovers"
    ]
  },
  {
    domain: "Infrastructure as Code & DevOps",
    iconName: "Layers",
    skills: [
      "Terraform Infrastructure as Code (Modular Multi-Tier)",
      "Docker Containerization & CI/CD Pipeline Automation",
      "Jenkins CI/CD Automation & GitHub Actions",
      "Git Version Control & Stonebranch Scheduler",
      "Zero/Near-Zero Downtime Production Cutovers"
    ]
  },
  {
    domain: "Observability & Governance",
    iconName: "Server",
    skills: [
      "Grafana Custom Observability Dashboards",
      "Amazon CloudWatch Metrics, Alarms & Logs",
      "SonarQube & Fortify Static Code Analysis",
      "S3 Data Lifecycle Management (Hot/Warm/Cold)",
      "Tag-Based Access Control (TBAC)",
      "GDPR / DPIA Privacy Impact Assessments"
    ]
  },
  {
    domain: "Programming & Frameworks",
    iconName: "Briefcase",
    skills: [
      "Java (8/11/17) & Spring Boot, Spring MVC, Spring Security",
      "Python (Data Processing, Automation, AI/ML)",
      "TypeScript & Angular (2+/6+)",
      "Microservices Design & REST APIs",
      "Domain-Driven Design (DDD) & Test-Driven Development (TDD)"
    ]
  },
  {
    domain: "Mainframe & Modernization",
    iconName: "Server",
    skills: [
      "Mainframe-to-Cloud Modernization",
      "PL/1, COBOL, JCL, CICS, IMS, DB2, VSAM, REXX",
      "CORBA Middleware Integration",
      "High-Volume Mainframe-to-UNIX Data Pipelines"
    ]
  },
  {
    domain: "Domain Knowledge",
    iconName: "Shield",
    skills: [
      "Transit Fare & Payments Systems",
      "B2B / Employer Benefit Programs",
      "Account & Fraud Controls (Velocity Checks)",
      "Invoicing & Funds Pooling Architecture",
      "Institutional Banking & Capital Markets (Money Market, Credit Risk)"
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Master of Science (M.S.) in Machine Learning & Artificial Intelligence",
    institution: "IIIT Bangalore & Liverpool John Moores University (Upgrad)",
    year: "In Progress",
    status: "Advanced Master's Specialization",
    honors: "Specializing in Deep Learning, Natural Language Processing, Transformer Models & Generative AI"
  },
  {
    degree: "Master of Technology (M.Tech.) in Computer Science",
    institution: "Indian Institute of Technology (IIT / ISM), Dhanbad",
    year: "2006",
    status: "Premier Institute of National Importance",
    honors: "Advanced Distributed Systems, Algorithms & Database Theory"
  },
  {
    degree: "Bachelor of Technology (B.Tech.) in Computer Science & Information Technology",
    institution: "Vignan's Engineering College, JNTU Hyderabad",
    year: "2004",
    status: "First Class with Distinction",
    honors: "Foundational Software Engineering, Systems Architecture & Core Algorithms"
  }
];

export const videoBriefingChapters: VideoChapter[] = [
  {
    startTime: 0,
    timestampDisplay: "0:00",
    title: "20-Year Enterprise Horizon & Leadership Philosophy",
    description: "Executive overview of 20 years guiding high-concurrency systems evolution and leading through influence without authority.",
    keyTakeaways: [
      "Strategic cross-domain architect bridging legacy, cloud, and data disciplines",
      "Elite engineering foundation: M.Tech from IIT Dhanbad and MS in AI/ML from IIIT-B",
      "Proven enterprise delivery across Tier-1 banks (JPMC, Credit Suisse) and Cubic Transportation"
    ]
  },
  {
    startTime: 15,
    timestampDisplay: "0:15",
    title: "Strategic FinOps, Cross-Cloud Ingestion & Streaming (Cubic)",
    description: "Architecting cross-cloud Azure-to-AWS ingestion, Flink device telemetry, and 750+ line database migration runbooks with 8-role RACI.",
    keyTakeaways: [
      "Azure-to-AWS Site-to-Site VPN CDC ingestion into Kinesis Data Streams cutting spend by ~70%",
      "Apache Flink sub-second sliding-window device fault detection",
      "Standardized zero-downtime database migration runbook and FinOps cost models"
    ]
  },
  {
    startTime: 35,
    timestampDisplay: "0:35",
    title: "Spec-Driven Engineering & Banking Modernization (Cognizant)",
    description: "15-year tenure decoupling mission-critical Cobol/PL1/CICS estates into modern Java/Spring Boot microservices.",
    keyTakeaways: [
      "Strangler Fig deconstruction with zero operational downtime",
      "Built TDM 2.0 self-service test data automation cutting cycles from days to minutes",
      "Instituted enterprise DevSecOps guardrails eliminating production vulnerabilities"
    ]
  },
  {
    startTime: 50,
    timestampDisplay: "0:50",
    title: "Enterprise Technology & Engineering Leadership Horizon",
    description: "What Pavan delivers in Enterprise Architecture and Director Engineering roles.",
    keyTakeaways: [
      "Chief architect for 20+ B2B epics with deep Transit Fare & Payment domain expertise",
      "Early adopter of AI-assisted SDLC practices (GitHub Copilot, Claude Code) and Python for AI/Automation",
      "Notice Period: 2 Months for transformative enterprise leadership roles"
    ]
  }
];
