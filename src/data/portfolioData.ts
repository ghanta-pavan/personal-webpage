import {
  ContactInfo,
  CredentialBadge,
  CareerStage,
  MetricItem,
  ArchitectureDeepDive,
  ExperienceRole,
  CompetencyCategory,
  EducationItem,
  VideoChapter
} from '../types/portfolio';

export const contactInfo: ContactInfo = {
  name: "Pavan Kumar Ghanta",
  headline: "Software & Data Architect | Engineering Leader",
  targetRole: "Targeting Enterprise Architect & VP of Software Engineering Roles",
  tagline: "Results-driven Software & Data Architect and Engineering Leader with 20+ years spanning application, data, security, and mainframe architecture — building toward an Enterprise Architect role.",
  location: "Hyderabad, India (Open to Global / Remote)",
  phone: "+91-9163012196",
  email: "pavankumar.ghanta@zohomail.in",
  linkedin: "https://linkedin.com/in/pavan-kumar-ghantaa1b14475/",
  photoUrl: "./pavan-photo.jpg",
  resumePdfUrl: "./resume.html",
  executiveSummary: [
    "Strategic and hands-on architectural leader with over 20 years of experience spanning application architecture, modern cloud data lakehouses, identity/security architecture, and mission-critical legacy modernization.",
    "Proven track record spearheading enterprise data platform strategy at Cubic Transportation Systems (AWS lakehouse, cross-cloud Azure VPN ingestion, Flink real-time observability, Kafka/MSK event streaming) and 15 years at Cognizant executing complex core banking modernizations for Tier-1 institutions (JPMorgan Chase, Credit Suisse).",
    "Owns end-to-end architecture for the B2B/employer-benefit program vertical of the platform — from program configuration and funds-pool/billing logic through fraud controls, notifications, and partner integrations — combining deep domain expertise in transit fare & payments, B2B program administration, and identity/data-privacy compliance.",
    "Early adopter of AI-assisted SDLC practices (GitHub Copilot, Claude/Claude Code) alongside Generative AI (RAG) models, cutting development and documentation cycles across Java/Spring Boot and Terraform workstreams."
  ]
};

export const domainExpertise: string[] = [
  "Transit Fare & Payments Systems",
  "B2B / Employer Benefit Program Administration",
  "Funds Pool & Program Billing",
  "Fraud & Risk Management",
  "Identity & Data Privacy (GDPR/DPIA)",
  "Concession & Eligibility Programs",
  "Banking & Financial Services",
  "Cloud Cost & Modernization Strategy"
];

export const credentialBadges: CredentialBadge[] = [
  { label: "20+ Years Enterprise Exp", iconName: "Clock", category: "experience", highlight: true },
  { label: "M.Tech IIT Dhanbad (2006)", iconName: "GraduationCap", category: "pedigree", highlight: true },
  { label: "MS in AI/ML (IIIT-B & LJMU)", iconName: "Cpu", category: "pedigree", highlight: true },
  { label: "AWS & Azure Cross-Cloud", iconName: "Cloud", category: "tech" },
  { label: "Apache Flink & Kafka/MSK", iconName: "Activity", category: "tech" },
  { label: "AWS DMS & GoldenGate CDC", iconName: "Database", category: "tech" },
  { label: "Mainframe Modernization", iconName: "Server", category: "tech" },
  { label: "Cloud FinOps (~70% Spend Cut)", iconName: "ShieldCheck", category: "leadership", highlight: true }
];

export const careerStages: CareerStage[] = [
  {
    id: "pat",
    stepNumber: 1,
    title: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    period: "Jun 2006 – 2007",
    level: "Foundation",
    description: "Core algorithmic engineering, Java/J2EE and relational database programming following IIT Dhanbad M.Tech graduation."
  },
  {
    id: "pa",
    stepNumber: 2,
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2007 – 2009",
    level: "Full Stack Delivery",
    description: "Engineered distributed banking services, SQL Server/DB2 data reconciliation batch engines, and institutional client workflows."
  },
  {
    id: "assoc",
    stepNumber: 3,
    title: "Associate",
    company: "Cognizant Technology Solutions",
    period: "2009 – 2012",
    level: "Technical Leadership",
    description: "Led technical delivery for money market and credit systems at JPMC and Credit Suisse, establishing automated build workflows."
  },
  {
    id: "sr-assoc",
    stepNumber: 4,
    title: "Senior Associate & Solution Architect",
    company: "Cognizant Technology Solutions",
    period: "2012 – Oct 2021",
    level: "Architectural Ownership",
    description: "Spearheaded 15-year tenure programs across JPMC and Credit Suisse: Strangler Fig mainframe refactoring, TDM 2.0 self-service test data generation, and DevSecOps governance."
  },
  {
    id: "pse",
    stepNumber: 5,
    title: "Principal Software Engineer",
    company: "Cubic Transportation Systems",
    period: "Nov 2021 – Jul 2023",
    level: "Enterprise Scale",
    description: "Delivered enterprise transit software architecture, B2B funds-pool billing logic, and third-party concession/benefit integrations."
  },
  {
    id: "sa",
    stepNumber: 6,
    title: "Software Architect",
    company: "Cubic Transportation Systems",
    period: "Aug 2023 – Nov 2025",
    level: "Strategic Architecture",
    description: "Authored 45+ Confluence-tracked change designs, B2B fraud velocity controls, MFA security architecture, and enterprise GenAI (RAG) automation prototypes."
  },
  {
    id: "da",
    stepNumber: 7,
    title: "Data Architect",
    company: "Cubic Transportation Systems",
    period: "Nov 2025 – Present",
    level: "Executive Data Platform",
    isCurrent: true,
    description: "Leading enterprise data platform architecture: cross-cloud Azure-to-AWS ingestion, Flink device observability, MSK streaming, 750+ line DMS/GoldenGate migration runbooks, and S3 lifecycle governance."
  },
  {
    id: "ea",
    stepNumber: 8,
    title: "Enterprise Architect / VP Engineering",
    company: "Target Leadership Destination",
    period: "Immediate Availability",
    level: "Executive Horizon",
    isTarget: true,
    description: "Aligning cross-domain technology portfolios, cloud migration economics, data lakehouses, and high-performance engineering organizations with strategic business imperatives."
  }
];

export const metricHighlights: MetricItem[] = [
  {
    value: "~70% Cut",
    label: "Cloud FinOps Savings",
    subtext: "Managed VPN + Kinesis vs Direct Connect/MSK Infrastructure",
    iconName: "DollarSign"
  },
  {
    value: "20+ Epics",
    label: "B2B Vertical Ownership",
    subtext: "Architect-of-Record for Fare, Billing & Partner Integrations",
    iconName: "Layers"
  },
  {
    value: "750+ Lines",
    label: "Migration Runbook",
    subtext: "8-Role RACI with AWS DMS vs. GoldenGate Decision Matrix",
    iconName: "FileCode"
  },
  {
    value: "20+ Yrs",
    label: "Enterprise Architecture",
    subtext: "From Mainframe Estates to Modern Cloud Lakehouses",
    iconName: "Compass"
  }
];

export const architectureDeepDives: ArchitectureDeepDive[] = [
  {
    id: "azure-aws-cross-cloud",
    title: "Cross-Cloud Azure-to-AWS Data Lake Ingestion",
    category: "cross-cloud",
    company: "Cubic Transportation Systems",
    summary: "Architected the target ingestion blueprint extending the AWS data lake to capture Azure-hosted Kafka event streams and Oracle CDC transactional data over a secure Site-to-Site dual-tunnel VPN, cutting recurring network spend by ~70%.",
    problemStatement: "Critical transit device events and transactional payloads resided across heterogeneous Azure subscriptions, threatening fragmented analytics and requiring expensive dual pipeline maintenance without a standardized cross-cloud ingestion fabric.",
    topology: {
      nodes: [
        { name: "Azure Kafka & Oracle", type: "source" },
        { name: "Site-to-Site VPN Dual Tunnel", type: "ingress" },
        { name: "Lambda Event-Source Mapping & OGG CDC", type: "processing" },
        { name: "AWS Kinesis Data Streams", type: "ingress" },
        { name: "S3 Data Lake & MSK Alerting Pipeline", type: "consumer" }
      ],
      flowSummary: "Azure workloads traverse dual IPsec VPN tunnels into a self-managed Lambda Kafka ESM & Oracle GoldenGate CDC engine, landing directly in Kinesis Data Streams to feed existing DynamoDB, SQS, and ServiceNow alerting."
    },
    architecturalDecisions: [
      "Cloud FinOps & Infrastructure Modernization: Formulated trade-off analysis demonstrating ~70% recurring cost savings using managed Site-to-Site VPN and on-demand Kinesis instead of dedicated Direct Connect / ExpressRoute and self-managed Kafka clusters, accelerating migration to serverless AWS services.",
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
    title: "Apache Flink Real-Time Device Observability Platform",
    category: "stream-observability",
    company: "Cubic Transportation Systems",
    summary: "Designed end-to-end stream processing architecture separating hot-path sub-second device heartbeats from cold-path audit analytics across multi-regional transit environments.",
    problemStatement: "High-density transit validators and ticketing gates generate millions of continuous heartbeats; batch databases suffered write amplification and delayed fault detection by up to 45 minutes.",
    topology: {
      nodes: [
        { name: "Edge Device Fleet (Millions)", type: "source" },
        { name: "AWS Kinesis / MSK Stream", type: "ingress" },
        { name: "Apache Flink Stream Application", type: "processing" },
        { name: "Hot Path: DynamoDB + ServiceNow", type: "consumer" },
        { name: "Cold Path: S3 Apache Iceberg Lake", type: "storage" }
      ],
      flowSummary: "Device telemetry streams into Apache Flink which evaluates sliding-window anomalies in real time, instantly alerting ServiceNow while sinking batch data into S3."
    },
    architecturalDecisions: [
      "Dual Path Partitioning: Split stream into Hot Path (immediate sub-second anomaly detection & incident dispatch) and Cold Path (historical retention & compliance).",
      "Stateful Sliding Windows: Flink managed checkpointing to detect device degradation patterns before total hardware failure occurs.",
      "Cross-Regional Deployment: Terraform parameterized deployment verified across Hyderabad and New York staging/production clusters."
    ],
    techStack: ["Apache Flink", "AWS MSK", "Java 8/17", "DynamoDB", "AWS Lambda", "ServiceNow API", "Terraform", "CloudWatch"],
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
    title: "Enterprise Database Migration Runbook & Decision Framework",
    category: "governance-runbook",
    company: "Cubic Transportation Systems",
    summary: "Authored 750+ line production migration runbook establishing standardized cutover procedures, snapshot/replica loading, and a deterministic AWS DMS vs. Oracle GoldenGate selection rubric.",
    problemStatement: "Multi-terabyte production transit databases faced unacceptably high cutover risks and prolonged downtime windows due to inconsistent migration practices across distributed DBA and engineering teams.",
    topology: {
      nodes: [
        { name: "Production Source Database", type: "source" },
        { name: "Read Replica / Storage Snapshot", type: "processing" },
        { name: "DMS / GoldenGate CDC Sync", type: "ingress" },
        { name: "Target AWS RDS / Aurora", type: "storage" },
        { name: "Zero-Downtime Traffic Cutover", type: "consumer" }
      ],
      flowSummary: "Full-load offloaded to read replica snapshots, followed by continuous CDC stream catch-up, concluding with DNS repointing under strict rollback gates."
    },
    architecturalDecisions: [
      "Production Isolation: Designed snapshot/replica-sourced full load pattern to isolate active operational databases from read lock starvation during initial migration.",
      "Selection Framework: Formulated cost vs. latency decision tree to deterministically select AWS DMS (standard relational tables) vs. Oracle GoldenGate (high-throughput complex schema CDC).",
      "8-Role RACI: Codified responsibilities across Architect, DBA, Lead Dev, Network Eng, DevOps, Product Owner, QA, and Incident Commander."
    ],
    techStack: ["AWS DMS", "Oracle GoldenGate", "AWS RDS", "Aurora PostgreSQL", "Terraform", "Confluence Runbooks", "Route 53"],
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
    title: "Two-Tier Identity Federation & Multi-Tenant Security",
    category: "identity-security",
    company: "Cubic Transportation Systems",
    summary: "Designed enterprise identity architecture harmonizing internal employee governance (IAM Identity Center / Managed AD) with external partner federations (Cognito SAML/OIDC) through a unified Lambda authorizer.",
    problemStatement: "Disparate user pools, conflicting access models between enterprise staff and external municipal transit partners, and complex multi-tenant data isolation requirements created compliance vulnerabilities.",
    topology: {
      nodes: [
        { name: "Internal Staff & SRE", type: "source" },
        { name: "AWS IAM Identity Center / AD", type: "ingress" },
        { name: "3rd-Party Municipal Partners", type: "source" },
        { name: "Amazon Cognito (SAML/OIDC)", type: "ingress" },
        { name: "Unified API Gateway Lambda Authorizer", type: "processing" },
        { name: "Tenant-Isolated Services & S3", type: "storage" }
      ],
      flowSummary: "Both internal and partner credentials resolve at a centralized Lambda Authorizer which injects tenant claims into cryptographic JWT tokens for row-level DB and S3 policy isolation."
    },
    architecturalDecisions: [
      "Two-Tier Federation: Staff access unified under AWS Managed AD / IAM Identity Center; external partner transit authorities federated via Cognito User Pools with B2B SAML 2.0 / OIDC.",
      "Unified Lambda Authorizer: Single token validation layer decoupling API endpoints from upstream identity provider variations.",
      "Tenant Isolation: Token-derived tenant identifiers passed to downstream services, driving row-level database security and S3 prefix access policies."
    ],
    techStack: ["AWS IAM Identity Center", "AWS Directory Service", "Amazon Cognito", "AWS Lambda", "API Gateway", "OAuth2 / SAML / OIDC"],
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
  },
  {
    id: "banking-mainframe-modernization",
    title: "Tier-1 Investment Banking Core Modernization (JPMC & Credit Suisse)",
    category: "legacy-modernization",
    company: "Cognizant Technology Solutions",
    summary: "15-year tenure leading mission-critical modernization programs: Strangler Fig migration of Cobol/PL1/CICS mainframes into Java/Spring microservices, plus TDM 2.0 self-service test automation.",
    problemStatement: "High MIPS licensing overhead, fragile monolithic batch cycles, and multi-day manual test data generation throttled digital transformation for core money market and credit systems.",
    topology: {
      nodes: [
        { name: "Mainframe Core (Cobol/PL1/CICS)", type: "source" },
        { name: "CORBA / REXX Orchestration Layer", type: "ingress" },
        { name: "Strangler Reverse Proxy / API Gateway", type: "processing" },
        { name: "Spring Boot Microservices & DB2", type: "storage" },
        { name: "TDM 2.0 Self-Service Web Portal", type: "consumer" }
      ],
      flowSummary: "API gateways routed incremental transactions to Spring Boot microservices while CORBA and REXX bridges kept legacy mainframes synchronized in real time with zero downtime."
    },
    architecturalDecisions: [
      "Strangler Fig Decoupling: Deconstructed monolithic banking functions into modular REST microservices without big-bang operational disruption.",
      "TDM 2.0 Innovation: Built self-service web application automating test data generation, shrinking QA data prep time from days to minutes.",
      "DevSecOps Pipeline: Early adoption of Jenkins, Docker, SonarQube, and Fortify for automated security vulnerability gating across global teams."
    ],
    techStack: ["Java 8+", "Spring Boot", "Cobol", "PL1", "CICS", "DB2", "SQL Server", "CORBA", "Docker", "Jenkins", "SonarQube"],
    governanceAndRaci: {
      governanceProcesses: [
        "Rigorous financial reconciliation validation across OMNI and XAMIN systems",
        "Automated static and dynamic security scanning gating production builds",
        "Global team mentorship across US and India engineering centers"
      ],
      stakeholderEngagement: "Partnered directly with JPMC and Credit Suisse Managing Directors on risk reduction and release predictability."
    },
    quantifiableImpact: {
      performance: "Shrank QA test data provisioning cycle from 3-4 days to under 2 minutes with TDM 2.0",
      finOpsAndTco: "Substantial MIPS runtime cost reduction by offloading batch reconciliation to distributed Java services",
      reliabilityAndGovernance: "Zero operational downtime across multi-year core banking system modernization cutovers"
    }
  }
];

export const workExperience: ExperienceRole[] = [
  {
    id: "cubic",
    company: "Cubic Transportation Systems",
    location: "Hyderabad, India",
    roles: [
      { title: "Data Architect", period: "Nov 2025 – Present", isCurrent: true },
      { title: "Software Architect", period: "Aug 2023 – Nov 2025" },
      { title: "Principal Software Engineer", period: "Nov 2021 – Jul 2023" }
    ],
    technologies: [
      "AWS (DMS, MSK, Kinesis, Glue, S3, DynamoDB, RDS, Lambda, IAM Identity Center, Cognito)",
      "Azure (VPN, Cross-Cloud Ingestion)",
      "Terraform",
      "Oracle GoldenGate",
      "Apache Kafka",
      "Apache Flink",
      "Java 8/17",
      "Spring Boot",
      "Spring Security",
      "TypeScript",
      "Oracle SQL"
    ],
    summary: [
      "Leading data architecture strategy for the enterprise platform, spanning database migration (AWS DMS, Oracle GoldenGate), streaming event architectures (Kafka/MSK/Kinesis), data lake governance, and identity/access federation.",
      "Owned end-to-end software architecture for the B2B/employer-benefit program vertical across 20+ Jira epics and capabilities — from program configuration and funds-pool/billing logic through low-balance notifications, card replacement/token sync, and a B2B shipping (FedEx) integration.",
      "Advised platform and engineering leadership on AWS cost modeling and phased delivery roadmaps, including a connectivity trade-off analysis showing managed Site-to-Site VPN and on-demand Kinesis cutting recurring network/streaming spend by ~70% versus Direct Connect and self-managed Kafka.",
      "Spearheaded software architecture across enterprise transit platforms, authoring or co-approving 45+ Confluence-tracked change designs spanning B2B billing, concession integrations, fraud controls, and MFA security.",
      "Adopted AI-assisted SDLC practices, using GitHub Copilot and Claude/Claude Code for code generation, code review, and technical documentation to shorten development cycles."
    ],
    keyProjects: [
      {
        name: "B2B Program Vertical Ownership",
        category: "software-architecture",
        description: "Acted as architect-of-record for the B2B/employer-benefit program vertical across 20+ epics and capabilities, from initial program-configuration and billing architecture through delivery, notifications, and partner shipping integration (FedEx) — serving as the primary technical and domain authority.",
        tags: ["Architect-of-Record", "20+ Epics", "B2B Vertical", "FedEx Integration", "Funds Pool"]
      },
      {
        name: "Enterprise Data Migration Runbooks (AWS DMS & Oracle GoldenGate)",
        category: "data-architecture",
        description: "Authored 750+ line production migration runbook (RACI across 8 roles) plus on-prem/Azure companion runbook, snapshot/replica-sourced full-load pattern, and cost-based DMS-vs-OGG decision framework.",
        tags: ["AWS DMS", "Oracle GoldenGate", "RACI Governance", "Zero-Downtime"]
      },
      {
        name: "Azure-to-AWS Cross-Cloud Data Lake Ingestion (~70% Spend Cut)",
        category: "data-architecture",
        description: "Architected extension of AWS data lake to ingest Azure-hosted Kafka and Oracle workloads via Lambda event-source mapping and OGG CDC over Site-to-Site VPN into Kinesis Data Streams, cutting recurring network/streaming spend by ~70%.",
        tags: ["Cross-Cloud", "Azure VPN", "Kinesis", "70% Cost Cut", "Serverless"]
      },
      {
        name: "Flink-Based Device Observability Platform",
        category: "data-architecture",
        description: "Defined end-to-end architecture and led delivery of hot/cold-path device-event and heartbeat observability solution (Flink, Lambda, DynamoDB, ServiceNow alerting) across Hyderabad and NY.",
        tags: ["Apache Flink", "Stream Processing", "DynamoDB", "ServiceNow Alerting"]
      },
      {
        name: "MSK Streaming & Multi-Target Sink Architecture",
        category: "data-architecture",
        description: "Architected cross-VPC Kafka/MSK Connect pipeline for device event and heartbeat data, sinking to S3, DynamoDB, and PostgreSQL via a single feature-flagged Terraform module with DLQ error handling and Glue Schema Registry.",
        tags: ["AWS MSK", "Kafka Connect", "Glue Schema Registry", "Terraform"]
      },
      {
        name: "Data Lake Modernization & Trip History API Platform",
        category: "data-architecture",
        description: "Directed data lake sequencing (raw/staging/analytics) to eliminate retention-driven data-loss risk, and led discovery/delivery planning for Trip History API modernization against a 5-minute SLA.",
        tags: ["Data Lake", "5-Min SLA", "CDC", "Aurora PostgreSQL", "AWS Glue"]
      },
      {
        name: "Two-Tier Identity Federation & Multi-Tenant Security",
        category: "data-architecture",
        description: "Designed two-tier identity model (AWS Managed AD/IAM Identity Center for staff, Cognito with SAML/OIDC for third-party customers) behind a single Lambda authorizer with token-derived tenant data isolation.",
        tags: ["IAM Identity Center", "Cognito", "Lambda Authorizer", "Multi-Tenant"]
      },
      {
        name: "B2B Program Billing & Funds Pool Architecture",
        category: "software-architecture",
        description: "Designed fare-program product offering model driven by program type and fixed-monthly-fee billing, and authored privacy impact assessment and change design consolidating funds-pool reload-refund logic.",
        tags: ["B2B Billing", "Funds Pool", "Confluence RFC", "Privacy Impact"]
      },
      {
        name: "Concession & Third-Party Benefit Program Integration",
        category: "software-architecture",
        description: "Architected concession rules and invoicing for third-party benefit programs, including automated age-based concession approval/enrollment and attributed fare and invoicing for external partners.",
        tags: ["Concession Engine", "Third-Party APIs", "Rules Engine"]
      },
      {
        name: "B2B Account & Fraud Controls",
        category: "software-architecture",
        description: "Designed B2B account-management and fraud-control enhancements — credit card velocity checks, token/identity status synchronization on member status changes, and balance-transfer overrides.",
        tags: ["Fraud Detection", "Velocity Checks", "Token Sync"]
      },
      {
        name: "Generative AI (RAG) & Defect Root Cause Analysis",
        category: "software-architecture",
        description: "Designed and implemented POCs embedding Generative AI into existing platforms—leveraging RAG to build chatbots trained on Confluence and Swagger docs, plus AI-driven defect analysis and root cause prediction.",
        tags: ["Generative AI", "RAG", "LLM Integration", "Defect RCA"]
      }
    ]
  },
  {
    id: "cognizant",
    company: "Cognizant Technology Solutions",
    location: "Kolkata, India / New Jersey, USA",
    roles: [
      { title: "Senior Associate (Solution Architect & Tech Lead)", period: "2012 – Oct 2021" },
      { title: "Associate", period: "2009 – 2012" },
      { title: "Programmer Analyst", period: "2007 – 2009" },
      { title: "Programmer Analyst Trainee", period: "Jun 2006 – 2007" }
    ],
    technologies: [
      "Java 8+",
      "Spring Boot",
      "Angular 6+",
      "TypeScript",
      "SQL Server",
      "DB2",
      "PL1",
      "COBOL",
      "JCL",
      "VSAM",
      "REXX",
      "CICS",
      "CORBA",
      "Docker",
      "Jenkins",
      "SonarQube",
      "Fortify"
    ],
    summary: [
      "15-year tenure delivering strategic software design and engineering leadership for top-tier global institutions including JPMorgan Chase (JPMC), Credit Suisse, and QVC Inc.",
      "Led end-to-end software design for mission-critical enterprise applications in banking and finance (money market trading, credit request processing, and accounting reconciliation).",
      "Architected legacy modernization programs decoupling mainframe estates into resilient Java/Spring Boot microservices while standardizing DevOps toolchains (Jenkins, Docker, SonarQube, Fortify)."
    ],
    keyProjects: [
      {
        name: "TDM 2.0 (Test Data Management Portal)",
        category: "banking-modernization",
        description: "Built a self-service web application to automate test data generation, reducing test data preparation time from several days to minutes, vastly improving QA efficiency and test readiness.",
        tags: ["Self-Service Web App", "Automation", "QA Velocity", "Java"]
      },
      {
        name: "MMSY (JPMorgan Chase Money Market Trading Platform)",
        category: "banking-modernization",
        description: "Led backend design for institutional money market trading at JPMC, enabling institutional clients to trade directly via modern digital interfaces with high throughput and failover reliability.",
        tags: ["JPMC", "Money Market Trading", "High Throughput", "Spring"]
      },
      {
        name: "XAMIN (Mainframe-to-UNIX Data Integration)",
        category: "banking-modernization",
        description: "Architected mainframe-to-UNIX data integration system, automating transfer and reconciliation of financial transaction records between OMNI and XAMIN accounting systems.",
        tags: ["Data Reconciliation", "Mainframe", "UNIX", "OMNI/XAMIN"]
      },
      {
        name: "GRANIT & KSEC2 (Credit Suisse Core Banking)",
        category: "banking-modernization",
        description: "Enhanced mission-critical core banking applications supporting credit request processing and product catalog management, optimizing system response times and maintainability.",
        tags: ["Credit Suisse", "Credit Processing", "Core Banking", "DB2"]
      }
    ]
  }
];

export const competencies: CompetencyCategory[] = [
  {
    domain: "Domain & Industry Expertise",
    iconName: "Briefcase",
    skills: [
      "Transit Fare & Payments Systems",
      "B2B / Employer Benefit Program Administration",
      "Funds Pool & Program Billing Logic",
      "Fraud & Risk Controls (Velocity Checks)",
      "Identity & Data Privacy (GDPR/DPIA Compliance)",
      "Concession Rules & Eligibility Automation",
      "Banking & Institutional Financial Services",
      "Cloud Cost & Modernization Strategy"
    ]
  },
  {
    domain: "Data Platform & Streaming",
    iconName: "Database",
    skills: [
      "Data Lake Architecture (S3 Hot/Warm/Cold Lifecycle)",
      "Event Streaming (Apache Kafka, AWS MSK, Kinesis)",
      "Stream Processing (Apache Flink)",
      "Database Migration (AWS DMS, Oracle GoldenGate CDC)",
      "Glue Catalog & Schema Registry",
      "DynamoDB, RDS, Aurora PostgreSQL, DB2"
    ]
  },
  {
    domain: "Cloud & Infrastructure as Code",
    iconName: "Cloud",
    skills: [
      "AWS Enterprise Architecture",
      "Azure Cross-Cloud Ingestion (Site-to-Site VPN)",
      "Terraform Infrastructure as Code (IaC)",
      "CI/CD Automation (Jenkins, Docker, GitHub Actions)",
      "CloudWatch, Distributed Tracing & DLQ Patterns",
      "Cloud FinOps (~70% Spend Reduction Analysis)"
    ]
  },
  {
    domain: "Application & Microservices Architecture",
    iconName: "Layers",
    skills: [
      "B2B Vertical Ownership (20+ Jira Epics)",
      "Microservices Decoupling & Strangler Fig Pattern",
      "Java 8-21 & Spring Boot Ecosystem",
      "RESTful API Design & OpenAPI / Swagger",
      "Domain-Driven Design (DDD) & Event-Driven Architecture",
      "Angular 2-6+, TypeScript, Modern HTML5/CSS3"
    ]
  },
  {
    domain: "Identity, Security & DevSecOps",
    iconName: "Shield",
    skills: [
      "Two-Tier Identity (AWS IAM Identity Center + Cognito)",
      "Multi-Tenant Token-Derived Isolation",
      "Multi-Factor Authentication (MFA) & SAML/OIDC",
      "Static & Dynamic Code Quality (SonarQube, Fortify)",
      "Zero-Trust Architecture & Least Privilege IAM",
      "Privacy Impact Assessments (PIA) & Governance"
    ]
  },
  {
    domain: "Applied AI & Engineering Leadership",
    iconName: "BrainCircuit",
    skills: [
      "AI-Assisted SDLC (GitHub Copilot, Claude/Claude Code)",
      "Generative AI & RAG Chatbots (Confluence/Swagger docs)",
      "AI-Based Defect Root Cause Prediction",
      "Technical Governance & 8-Role RACI Runbooks",
      "45+ Confluence-Tracked Architecture Change Approvals",
      "Team Mentorship (10+ Member Distributed Squads)"
    ]
  },
  {
    domain: "Legacy Modernization & Mainframe",
    iconName: "Server",
    skills: [
      "Mainframe Estate Deconstruction (Cobol, PL1, CICS, JCL)",
      "VSAM, DB2 & SQL Server Heterogeneous Reconciliation",
      "Zero-Downtime Data & Application Cutover",
      "REXX Scripting & Mainframe Automation",
      "MIPS Reduction & Licensing Optimization"
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "MS in Machine Learning and AI",
    institution: "IIIT Bangalore & Liverpool John Moores University (Upgrad)",
    year: "In Progress",
    status: "Advanced Specialization",
    honors: "Specializing in Deep Learning, Natural Language Processing, and Generative AI Architectures"
  },
  {
    degree: "M.Tech in Computer Science",
    institution: "Indian Institute of Technology (IIT), Dhanbad",
    year: "2006",
    status: "Premier Institute of National Importance",
    honors: "Advanced Algorithms, Distributed Systems & Database Theory"
  },
  {
    degree: "B.Tech in Computer Science and Information Technology",
    institution: "Vignan's Engineering College, JNTU Hyderabad",
    year: "2004",
    status: "First Class with Distinction",
    honors: "Graduated with Distinction in Core Computer Science and Software Engineering"
  }
];

export const videoBriefingChapters: VideoChapter[] = [
  {
    startTime: 0,
    timestampDisplay: "0:00",
    title: "20-Year Enterprise Horizon & Strategic Leadership",
    description: "Executive overview of 20 years guiding high-concurrency systems evolution from core banking mainframes to modern multi-cloud data lakehouses.",
    keyTakeaways: [
      "Strategic cross-domain architect bridging legacy, cloud, and data disciplines",
      "Elite engineering foundation: M.Tech from IIT Dhanbad and MS in AI/ML from IIIT-B",
      "Proven enterprise delivery across Tier-1 banks (JPMC, Credit Suisse) and Cubic Transportation"
    ]
  },
  {
    startTime: 15,
    timestampDisplay: "0:15",
    title: "Modern Data Platform, Cross-Cloud Ingestion & Streaming (Cubic)",
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
    title: "Mission-Critical Legacy Modernization for Tier-1 Banks (Cognizant)",
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
    title: "Enterprise Architecture Philosophy & Target Executive Impact",
    description: "What Pavan delivers in Enterprise Architect, Director, or VP of Software Engineering roles.",
    keyTakeaways: [
      "Architect-of-record for 20+ B2B epics with deep Transit Fare & Payment domain expertise",
      "Early adopter of AI-assisted SDLC practices (GitHub Copilot, Claude/Claude Code)",
      "Immediate availability for transformative enterprise leadership roles"
    ]
  }
];
