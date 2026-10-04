import { contactInfo, domainExpertise, architectureDomains } from '../data/portfolioData';

export interface SkillEntry {
  name: string;
  category: string;
  aliases: string[];
  isVerified: boolean;
  context: string;
  resumeEvidence: string;
  companionStack: string[];
}

export interface KnowledgeChunk {
  id: string;
  category: 'architecture' | 'experience' | 'skills' | 'education' | 'summary' | 'finops' | 'leadership' | 'contact';
  title: string;
  keywords: string[];
  content: string;
  actionLabels?: { label: string; action: 'open_recruiter_drawer' | 'open_video_modal' | 'scroll_to' | 'send_prompt'; target?: string }[];
}

// Exhaustive Verified Skill Registry extracted from Pavan's 3-Page Resume
export const VERIFIED_SKILLS: SkillEntry[] = [
  // Programming & Frameworks
  {
    name: "Python",
    category: "Programming & Frameworks / AI & Automation",
    aliases: ["python", "python3", "py"],
    isVerified: true,
    context: "Used in data processing, Spark ETL automation, and advanced Machine Learning & Generative AI engineering (MS at IIIT Bangalore & Liverpool John Moores University).",
    resumeEvidence: "Applied in data platform workflows, ETL scripting, and AI/ML model prototyping alongside Java, Spring Boot, and cloud serverless architectures.",
    companionStack: ["Java", "Spring Boot", "Apache Spark", "Generative AI", "Claude Code", "GitHub Copilot"]
  },
  {
    name: "Java",
    category: "Programming & Frameworks",
    aliases: ["java", "java 8", "java 8+", "java 11", "java 17", "j2ee"],
    isVerified: true,
    context: "20+ years of core enterprise engineering across Cubic Transportation Systems and Cognizant (JPMC, Credit Suisse).",
    resumeEvidence: "Engineered high-throughput institutional money market trading microservices (JPMC - MMSY), core banking modernization at Credit Suisse, and scalable backend platforms at Cubic.",
    companionStack: ["Spring Boot", "Spring MVC", "Spring Security", "Microservices", "REST APIs"]
  },
  {
    name: "Spring Boot",
    category: "Programming & Frameworks",
    aliases: ["spring", "spring boot", "spring framework", "spring mvc", "spring security"],
    isVerified: true,
    context: "Primary backend microservices framework for tier-1 banking platforms and high-availability transit subsystems.",
    resumeEvidence: "Architected resilient REST microservices for JPMC institutional trading, Credit Suisse banking, and Cubic B2B employer-benefit services.",
    companionStack: ["Java (8+)", "Spring Security", "Docker", "REST APIs", "Microservices"]
  },
  {
    name: "Angular & TypeScript",
    category: "Programming & Frameworks",
    aliases: ["angular", "angular 2+", "angular 6+", "angularjs", "typescript", "ts", "javascript", "js", "html5", "css3"],
    isVerified: true,
    context: "Frontend application development across banking modernization and transit enterprise portals.",
    resumeEvidence: "Built modern institutional client frontends, self-service test data management portals (TDM 2.0), and B2B web workflows.",
    companionStack: ["TypeScript", "HTML5", "CSS3", "Spring Boot", "REST APIs"]
  },
  {
    name: "Mainframe Languages (COBOL, PL1, REXX, JCL)",
    category: "Mainframe & Modernization",
    aliases: ["cobol", "pl1", "pl/1", "rexx", "jcl", "cics", "ims", "mvs", "z/os", "mainframe"],
    isVerified: true,
    context: "8+ years of deep mainframe and legacy modernization experience at Cognizant.",
    resumeEvidence: "Architected high-volume mainframe-to-UNIX data integration (XAMIN), nightly accounting reconciliation (OMNI), and decoupled mainframe estates into distributed Java microservices.",
    companionStack: ["DB2", "VSAM", "CORBA", "UNIX", "Mainframe-to-Cloud Migration"]
  },

  // Lakehouse & Streaming
  {
    name: "Apache Spark",
    category: "Lakehouse & Streaming",
    aliases: ["spark", "apache spark", "pyspark", "spark streaming", "spark etl"],
    isVerified: true,
    context: "Core batch processing and ETL engine for central enterprise lakehouse modernization at Cubic Transportation Systems.",
    resumeEvidence: "Architected a central Lakehouse on AWS S3 with AWS Glue cataloging, Spark ETL batch processing, and continuous streaming ingestion via MSK and Kinesis Data Streams.",
    companionStack: ["AWS S3", "AWS Glue", "Athena", "AWS MSK", "Kinesis Data Streams"]
  },
  {
    name: "Apache Kafka & AWS MSK",
    category: "Lakehouse & Streaming",
    aliases: ["kafka", "apache kafka", "msk", "aws msk", "managed streaming for kafka", "kafka connect"],
    isVerified: true,
    context: "Low-latency streaming backbones and event mesh architectures at Cubic.",
    resumeEvidence: "Continuous streaming ingestion into S3 Lakehouse via MSK and Kinesis Data Streams; captured Azure Kafka event streams over Site-to-Site VPN directly into Kinesis.",
    companionStack: ["AWS MSK", "Kinesis Data Streams", "Apache Flink", "Glue Schema Registry", "Lambda"]
  },
  {
    name: "Apache Flink",
    category: "Lakehouse & Streaming",
    aliases: ["flink", "apache flink", "pyflink"],
    isVerified: true,
    context: "Real-time stream enrichment and telemetry processing engine at Cubic Transportation Systems.",
    resumeEvidence: "Architected high-velocity telemetry pipeline using Apache Flink for stream enrichment, sliding-window anomaly detection, Lambda routing, and automated ServiceNow incident triggers (<1.2s detection).",
    companionStack: ["AWS Kinesis", "AWS MSK", "DynamoDB", "CloudWatch", "Grafana", "ServiceNow"]
  },
  {
    name: "AWS Kinesis (Data Streams & Firehose)",
    category: "Lakehouse & Streaming",
    aliases: ["kinesis", "kinesis data streams", "kinesis data firehose", "firehose", "aws kinesis"],
    isVerified: true,
    context: "Real-time streaming ingestion pipeline for cross-cloud telemetry and lakehouse landing.",
    resumeEvidence: "Dual-tunnel Site-to-Site VPN landing directly into Kinesis Data Streams and Firehose, slashing recurring spend by ~70% versus Direct Connect and self-managed Kafka.",
    companionStack: ["AWS S3", "AWS Lambda", "Oracle GoldenGate", "DynamoDB", "ServiceNow"]
  },
  {
    name: "AWS Glue & Athena",
    category: "Lakehouse & Streaming",
    aliases: ["glue", "aws glue", "glue etl", "glue catalog", "athena", "aws athena", "schema registry"],
    isVerified: true,
    context: "Metadata cataloging, schema governance, and serverless querying across AWS S3 Lakehouses.",
    resumeEvidence: "Architected central Lakehouse on AWS S3 with Glue cataloging and Spark ETL batch processing; governed streaming schemas with Glue Schema Registry.",
    companionStack: ["AWS S3", "Apache Spark", "AWS MSK", "Kinesis Data Streams"]
  },

  // Databases & Migrations
  {
    name: "AWS DMS (Database Migration Service)",
    category: "Databases & Migrations",
    aliases: ["dms", "aws dms", "database migration service"],
    isVerified: true,
    context: "Standardized production zero/near-zero downtime database migrations at Cubic Transportation Systems.",
    resumeEvidence: "Authored 750+ line production migration runbook establishing snapshot/replica loading, automated cutovers, and cross-functional RACI matrices for Oracle DB and PostgreSQL workloads.",
    companionStack: ["Oracle GoldenGate", "PostgreSQL", "AWS RDS", "Aurora PostgreSQL", "Oracle DB"]
  },
  {
    name: "Oracle GoldenGate (OGG)",
    category: "Databases & Migrations",
    aliases: ["goldengate", "ogg", "oracle goldengate", "cdc", "change data capture"],
    isVerified: true,
    context: "Real-time high-throughput CDC replication for zero-downtime cutovers and cross-cloud ingestion.",
    resumeEvidence: "Implemented Oracle GoldenGate CDC pipelines bridging Azure Oracle workloads over VPN into AWS Kinesis and S3 Lakehouse; established deterministic DMS vs OGG selection rubric.",
    companionStack: ["Oracle DB", "AWS DMS", "AWS Kinesis", "Site-to-Site VPN", "PostgreSQL"]
  },
  {
    name: "PostgreSQL & Aurora",
    category: "Databases & Migrations",
    aliases: ["postgresql", "postgres", "aurora", "aurora postgresql", "rds postgres"],
    isVerified: true,
    context: "Target cloud database engine for multi-tier applications and modernized relational workloads.",
    resumeEvidence: "Captured real-time CDC streams from Oracle DB, DB2, and SQL Server into PostgreSQL (RDS/Aurora) and S3 lakehouses with zero downtime.",
    companionStack: ["AWS RDS", "AWS DMS", "Oracle GoldenGate", "Spring Boot"]
  },
  {
    name: "Oracle DB & SQL Server & DB2",
    category: "Databases & Migrations",
    aliases: ["oracle db", "oracle sql", "oracle", "sql server", "mssql", "db2", "ibm db2", "vsam", "mysql"],
    isVerified: true,
    context: "20 years architecting, optimizing, and migrating enterprise relational and legacy database engines.",
    resumeEvidence: "Optimized mission-critical DB2 queries at Cognizant, engineered high-volume reconciliation, and executed zero-downtime migrations from Oracle/DB2/SQL Server to AWS Aurora/RDS.",
    companionStack: ["AWS DMS", "Oracle GoldenGate", "SQL", "Spring Data"]
  },
  {
    name: "Amazon DynamoDB",
    category: "Databases & Migrations / Cloud",
    aliases: ["dynamodb", "amazon dynamodb", "dynamo"],
    isVerified: true,
    context: "High-throughput serverless state store for real-time device telemetry and microservices.",
    resumeEvidence: "Fast state storage for sub-second device heartbeats and sliding-window event state in Flink telemetry pipeline, fronted by automated ServiceNow incident dispatch.",
    companionStack: ["AWS Lambda", "Apache Flink", "AWS EventBridge", "SQS", "SNS"]
  },

  // Cloud Platforms
  {
    name: "AWS Platform (Enterprise & Serverless)",
    category: "Cloud Platforms",
    aliases: ["aws", "amazon web services", "cloud", "s3", "lambda", "eventbridge", "api gateway", "sqs", "sns", "cloudfront", "route 53", "cloudwatch", "rds"],
    isVerified: true,
    context: "Deep architectural authority across AWS distributed cloud, serverless, and lakehouse ecosystems.",
    resumeEvidence: "Architected central S3 Lakehouse, decoupled EventBridge/SQS/SNS asynchronous microservices, CloudFront edge caching, Lambda authorizers, and Route 53 DNS cutovers.",
    companionStack: ["Terraform", "S3", "Lambda", "EventBridge", "IAM Identity Center", "CloudFront"]
  },
  {
    name: "Microsoft Azure (Cross-Cloud & VPN)",
    category: "Cloud Platforms",
    aliases: ["azure", "microsoft azure", "vpn gateway", "cross-cloud", "site-to-site vpn"],
    isVerified: true,
    context: "Cross-cloud hybrid network topology connecting Azure workloads to AWS data platforms.",
    resumeEvidence: "Engineered dual-tunnel Site-to-Site VPN bridging Azure-hosted Kafka and Oracle workloads directly into AWS Kinesis and S3 Lakehouse, reducing network spend by ~70%.",
    companionStack: ["AWS Kinesis", "Site-to-Site VPN", "Oracle GoldenGate", "Terraform"]
  },

  // Infrastructure as Code & DevOps
  {
    name: "Terraform (IaC)",
    category: "Infrastructure as Code & DevOps",
    aliases: ["terraform", "iac", "infrastructure as code", "hashicorp terraform"],
    isVerified: true,
    context: "Standardized multi-tier Infrastructure as Code across staging and production cloud environments.",
    resumeEvidence: "Standardized Terraform modular configurations across staging and production; automated S3 lifecycle tiering, tagging policies, and audit validation against SLA baselines.",
    companionStack: ["AWS S3", "AWS MSK", "Docker", "Jenkins", "GitHub Actions"]
  },
  {
    name: "Docker Containerization",
    category: "Infrastructure as Code & DevOps",
    aliases: ["docker", "containers", "containerization"],
    isVerified: true,
    context: "Containerized microservice packaging, deployment standardizations, and automated CI/CD pipelines.",
    resumeEvidence: "Introduced automated Jenkins/Docker CI/CD pipelines at Credit Suisse and Cubic, eliminating environment contention and slashing deployment cycle times.",
    companionStack: ["Jenkins", "Git", "SonarQube", "Fortify SCA", "Apache Mesos"]
  },
  {
    name: "Jenkins & GitHub Actions CI/CD",
    category: "Infrastructure as Code & DevOps",
    aliases: ["jenkins", "github actions", "ci/cd", "ci cd", "cicd", "continuous integration", "continuous delivery", "git", "svn", "apache mesos", "stonebranch scheduler"],
    isVerified: true,
    context: "Automated continuous delivery pipelines with static code quality and security vulnerability gates.",
    resumeEvidence: "Established continuous delivery pipelines with Jenkins, Docker, and GitHub Actions; integrated SonarQube and Fortify static code gates; automated batch schedules with Stonebranch.",
    companionStack: ["Docker", "Git", "SonarQube", "Fortify", "TDD"]
  },

  // Monitoring & Observability
  {
    name: "Grafana & Amazon CloudWatch",
    category: "Monitoring & Observability",
    aliases: ["grafana", "cloudwatch", "amazon cloudwatch", "servicenow", "servicenow alerting", "hp alm", "observability", "telemetry"],
    isVerified: true,
    context: "End-to-end real-time observability, telemetry dashboards, and automated incident response.",
    resumeEvidence: "Custom Grafana monitoring panels and CloudWatch alarms evaluating Flink stream metrics with automated SQS/SNS and ServiceNow incident triggers.",
    companionStack: ["Apache Flink", "DynamoDB", "AWS Lambda", "ServiceNow API"]
  },

  // Security, Identity & Governance
  {
    name: "AWS IAM Identity Center & Cognito",
    category: "Security & Quality",
    aliases: ["iam", "iam identity center", "cognito", "amazon cognito", "saml", "oidc", "oauth2", "single sign-on", "sso", "mfa", "multi-tenant"],
    isVerified: true,
    context: "Two-tier unified enterprise identity architecture for internal staff and multi-tenant external partners.",
    resumeEvidence: "Paired AWS IAM Identity Center with Cognito SAML/OIDC federation behind a centralized Lambda authorizer, providing cryptographic token validation and tenant isolation.",
    companionStack: ["AWS Lambda", "API Gateway", "CloudFront", "OAuth2/SAML/OIDC"]
  },
  {
    name: "SonarQube & Fortify SCA",
    category: "Security & Quality",
    aliases: ["sonarqube", "fortify", "fortify sca", "static code analysis", "security scanning", "code quality", "tdd", "ddd"],
    isVerified: true,
    context: "Automated security scanning, code quality governance, and TDD engineering leadership.",
    resumeEvidence: "Instituted automated static code gates via SonarQube and Fortify SCA in CI/CD pipelines, mentored 10-member software engineering teams in secure coding standards and TDD/DDD.",
    companionStack: ["Jenkins", "Docker", "Java", "Spring Boot"]
  },

  // AI & Automation
  {
    name: "Generative AI (RAG & LLM Integration)",
    category: "AI & Automation",
    aliases: ["ai", "generative ai", "rag", "llm", "llms", "retrieval augmented generation", "vector", "vector search", "confluence", "swagger", "openapi"],
    isVerified: true,
    context: "Architected enterprise RAG assistants referencing OpenAPI specs and technical documentation.",
    resumeEvidence: "Architected and deployed RAG-based AI assistants referencing internal OpenAPI/Swagger specs and Confluence docs; engineered automated defect classification models.",
    companionStack: ["Claude Code", "GitHub Copilot", "Python", "Vector Embeddings"]
  },
  {
    name: "Claude Code & GitHub Copilot",
    category: "AI & Automation",
    aliases: ["claude code", "claude", "github copilot", "copilot", "ai-assisted sdlc", "ai assisted engineering"],
    isVerified: true,
    context: "Early adopter of AI-assisted engineering and modern SDLC acceleration.",
    resumeEvidence: "Integrated Claude Code and GitHub Copilot across Java, Spring Boot, and Terraform workstreams to accelerate feature prototyping and automate static defect analysis.",
    companionStack: ["Generative AI", "Java", "Terraform", "Spring Boot"]
  },

  // Core Leadership Principles & Governance Style
  {
    name: "Influence Without Authority & Pod Unification",
    category: "Core Leadership & Governance",
    aliases: ["influence without authority", "pod unification", "cross-organizational influence", "stakeholder alignment", "leadership style"],
    isVerified: true,
    context: "Leading through technical credibility and cross-organizational alignment rather than direct reporting lines.",
    resumeEvidence: "Unified autonomous data engineering pods, DBAs, DevOps, and C-suite leadership around high-stakes architecture shifts (such as the central AWS S3 lakehouse and Azure-to-AWS Site-to-Site VPN cutover).",
    companionStack: ["RACI Matrix", "Architecture Review Boards (ARBs)", "Jira / Confluence Governance"]
  },
  {
    name: "FinOps & Strategic Cost Engineering",
    category: "Core Leadership & Governance",
    aliases: ["finops", "cost optimization", "cloud spend", "cost engineering", "finops strategy"],
    isVerified: true,
    context: "Pioneered a culture where cost efficiency and FinOps are designed into architectures from Day 1.",
    resumeEvidence: "Formulated and presented a FinOps strategy to executive leadership demonstrating how cross-cloud VPN routing and Kinesis pipelines cut recurring AWS data ingestion expenses by ~70% compared to Direct Connect/ExpressRoute.",
    companionStack: ["Terraform", "AWS S3 Lifecycle Tiering", "Cost-Allocation Tagging", "Kinesis Data Streams"]
  },
  {
    name: "Spec-Driven Development (SDD) & Systems Engineering Operating Model",
    category: "Core Leadership & Governance",
    aliases: ["sdd", "spec-driven development", "systems engineering operating model", "operating model", "adr", "adrs", "architecture decision records", "design approval gates"],
    isVerified: true,
    context: "Formulated and presented an 11-slide Systems Engineering Operating Model establishing clear role boundaries between Architecture and Engineering Management.",
    resumeEvidence: "Replaced big-bang delivery ambiguity with deterministic design-approval gates, Jira/Confluence tracking, 8-role RACI matrices, and Architecture Decision Records (ADRs).",
    companionStack: ["Confluence Change Designs", "Jira Epics", "Architecture Review Boards (ARBs)", "RACI Framework"]
  },
  {
    name: "Architecture Review Boards (ARBs) & Technical Governance",
    category: "Core Leadership & Governance",
    aliases: ["arb", "architecture review board", "governance", "design governance", "blameless post-mortems"],
    isVerified: true,
    context: "Instituted architecture review boards and blameless post-mortems across multi-pod organizations.",
    resumeEvidence: "Authored and approved 45+ Confluence-tracked architectural change designs; instituted ARBs and blameless post-mortems that reduced recurring production regressions by 40%.",
    companionStack: ["Confluence", "Jira", "SonarQube Gates", "Fortify SCA"]
  }
];

// Common Technologies NOT listed in Pavan's Resume, with their verified alternatives
export const UNLISTED_TECH_MAP: Record<string, { alternativeText: string; verifiedTools: string[] }> = {
  kubernetes: {
    alternativeText: "Pavan's containerization and infrastructure engineering centers on Docker, Apache Mesos, modular Terraform IaC, and fully managed AWS Serverless (Lambda, EventBridge, SQS, SNS, API Gateway).",
    verifiedTools: ["Docker", "Terraform IaC", "AWS Serverless (Lambda, EventBridge)", "Apache Mesos"]
  },
  k8s: {
    alternativeText: "Pavan's container orchestration and infrastructure orchestration centers on Docker, Apache Mesos, modular Terraform IaC, and AWS Serverless architectures.",
    verifiedTools: ["Docker", "Terraform IaC", "AWS Lambda", "EventBridge"]
  },
  react: {
    alternativeText: "Pavan's enterprise frontend experience is anchored in Angular (2+/6+), TypeScript, Modern HTML5, and CSS3 across institutional trading portals, TDM 2.0 self-service applications, and B2B workflows.",
    verifiedTools: ["Angular (2+/6+)", "TypeScript", "HTML5/CSS3", "Spring Boot Microservices"]
  },
  vue: {
    alternativeText: "Pavan's frontend stack focuses on Angular (2+/6+) and TypeScript paired with Java/Spring Boot backend microservices.",
    verifiedTools: ["Angular (2+/6+)", "TypeScript", "Spring Boot"]
  },
  golang: {
    alternativeText: "Pavan's primary backend languages are Java (8+) with Spring Boot, Python (for data processing, Spark ETL, and AI), and TypeScript, alongside legacy systems in PL1, COBOL, and REXX.",
    verifiedTools: ["Java (8+)", "Python", "Spring Boot", "TypeScript"]
  },
  go: {
    alternativeText: "Pavan's primary backend languages are Java (8+) with Spring Boot, Python, and TypeScript, alongside legacy systems in PL1, COBOL, and REXX.",
    verifiedTools: ["Java (8+)", "Python", "Spring Boot", "TypeScript"]
  },
  rust: {
    alternativeText: "Pavan's core high-throughput systems programming is built on Java (8+), Apache Flink stream processing, Apache Spark, and Python.",
    verifiedTools: ["Java (8+)", "Apache Flink", "Apache Spark", "Python"]
  },
  snowflake: {
    alternativeText: "Pavan's enterprise lakehouse architecture is built natively on AWS S3 Lakehouses, Apache Spark, AWS Glue Catalog, Athena, Apache Kafka, AWS MSK, and Apache Flink.",
    verifiedTools: ["AWS S3 Lakehouse", "Apache Spark", "AWS Glue", "AWS Athena", "Apache Flink"]
  },
  databricks: {
    alternativeText: "Pavan architects cloud lakehouses using AWS S3, Apache Spark, AWS Glue ETL batch processing, and continuous streaming ingestion via AWS MSK and Kinesis Data Streams.",
    verifiedTools: ["Apache Spark", "AWS Glue ETL", "AWS S3 Lakehouse", "AWS MSK", "Kinesis Data Streams"]
  },
  graphql: {
    alternativeText: "Pavan specializes in enterprise RESTful APIs, OpenAPI/Swagger specifications, AWS API Gateway with Lambda Authorizers, and decoupled event-driven messaging (EventBridge, SQS, SNS).",
    verifiedTools: ["REST APIs", "AWS API Gateway", "OpenAPI / Swagger", "AWS EventBridge"]
  },
  csharp: {
    alternativeText: "Pavan's 20+ year enterprise programming experience is rooted in Java (8+), Spring Boot, Python, TypeScript, and legacy languages (PL1, COBOL, REXX).",
    verifiedTools: ["Java (8+)", "Spring Boot", "Python", "TypeScript"]
  },
  "c#": {
    alternativeText: "Pavan's 20+ year enterprise programming experience is rooted in Java (8+), Spring Boot, Python, TypeScript, and legacy languages (PL1, COBOL, REXX).",
    verifiedTools: ["Java (8+)", "Spring Boot", "Python", "TypeScript"]
  },
  "c++": {
    alternativeText: "Pavan's high-throughput distributed systems and streaming pipelines are built with Java, Apache Flink, Apache Spark, and Python.",
    verifiedTools: ["Java (8+)", "Apache Flink", "Apache Spark", "Python"]
  },
  ruby: {
    alternativeText: "Pavan's backend and automation engineering is centered on Java, Spring Boot, Python, and Terraform IaC.",
    verifiedTools: ["Java (8+)", "Python", "Spring Boot", "Terraform"]
  }
};

/**
 * Skill Verification Engine
 * Analyzes whether the query is checking for a skill and returns an authoritative, grounded response.
 */
export const verifySkill = (queryText: string): { isSkillQuery: boolean; responseText: string } | null => {
  const normalizedQuery = queryText.toLowerCase().trim();

  // Pattern detection for skill verification inquiries
  const skillInquiryPatterns = [
    /does (?:pavan|he|ghanta) (?:have|possess|know|use|work with) (?:any )?(?:experience with|experience in|knowledge of|skills? in)?\s*(.+)/i,
    /has (?:pavan|he) (?:ever )?(?:worked with|used|implemented|architected)\s*(.+)/i,
    /is (.+) (?:in|on) (?:pavan's|his|the) (?:skills?|resume|curriculum|stack|technologies|background)/i,
    /can (?:pavan|he) (?:do|use|work with|code in|program in|architect in)\s*(.+)/i,
    /tell me (?:if|whether) (?:pavan|he) (?:knows|has experience (?:with|in))\s*(.+)/i,
    /experience (?:in|with)\s*(.+)/i,
    /skill(?:s)? (?:in|for)?\s*(.+)/i,
    /(?:know|learn)\s*(.+)\?/i
  ];

  let candidateSkill = '';

  for (const pattern of skillInquiryPatterns) {
    const match = normalizedQuery.match(pattern);
    if (match && match[1]) {
      candidateSkill = match[1]
        .replace(/[?!.]+$/, '')
        .replace(/^(?:the|an|a)\s+/, '')
        .trim();
      break;
    }
  }

  // If no pattern matched, check if the query is just a short tech name (1-3 words)
  if (!candidateSkill) {
    const tokens = normalizedQuery.split(/\s+/);
    if (tokens.length <= 3) {
      candidateSkill = normalizedQuery.replace(/[?!.]+$/, '').trim();
    }
  }

  if (!candidateSkill) {
    return null;
  }

  // Check against Verified Skills
  for (const skill of VERIFIED_SKILLS) {
    const matchesName = skill.name.toLowerCase() === candidateSkill;
    const matchesAlias = skill.aliases.some(alias => {
      if (candidateSkill === alias) return true;
      if (candidateSkill.includes(alias) && alias.length > 2) return true;
      if (alias.includes(candidateSkill) && candidateSkill.length > 3) return true;
      return false;
    });

    if (matchesName || matchesAlias) {
      const responseText =
        `✅ **Yes, Pavan has verified enterprise experience with ${skill.name}!**\n\n` +
        `• **Category:** ${skill.category}\n` +
        `• **Enterprise Application:** ${skill.context}\n` +
        `• **Resume Evidence:** ${skill.resumeEvidence}\n` +
        `• **Companion Stack:** ${skill.companionStack.join(', ')}`;

      return { isSkillQuery: true, responseText };
    }
  }

  // Check against Known Unlisted Technologies
  for (const [unlistedTech, info] of Object.entries(UNLISTED_TECH_MAP)) {
    if (candidateSkill === unlistedTech || candidateSkill.includes(unlistedTech) || unlistedTech.includes(candidateSkill)) {
      const formattedTech = unlistedTech.charAt(0).toUpperCase() + unlistedTech.slice(1);
      const responseText =
        `❌ **No, ${formattedTech} is not listed in Pavan's resume.**\n\n` +
        `• **Pavan's Verified Architecture:** ${info.alternativeText}\n` +
        `• **Verified Strengths from Stack:** ${info.verifiedTools.join(', ')}`;

      return { isSkillQuery: true, responseText };
    }
  }

  // If query was an explicit question "Does Pavan have experience with X?" but X is unknown
  const wasExplicitInquiry = skillInquiryPatterns.some(p => p.test(normalizedQuery));
  if (wasExplicitInquiry && candidateSkill.length >= 2) {
    const formattedTerm = candidateSkill.charAt(0).toUpperCase() + candidateSkill.slice(1);
    const responseText =
      `❌ **No, "${formattedTerm}" is not explicitly listed in Pavan's resume.**\n\n` +
      `Pavan's verified 20+ year technical stack features:\n` +
      `• **Cloud & Lakehouse:** AWS (S3, Glue, Spark, Lambda, MSK, Kinesis, Athena), Microsoft Azure VPN\n` +
      `• **Databases & CDC:** Oracle DB, PostgreSQL (RDS/Aurora), DynamoDB, DB2, AWS DMS, Oracle GoldenGate (OGG)\n` +
      `• **Programming:** Python, Java (8+), Spring Boot, TypeScript, Angular (2+/6+), PL1, COBOL, REXX\n` +
      `• **DevOps & IaC:** Terraform IaC, Docker, Jenkins, Git, SVN, GitHub Actions\n` +
      `• **Observability:** Grafana, Amazon CloudWatch, ServiceNow Alerting\n` +
      `• **AI & Automation:** Generative AI (RAG, LLMs), Claude Code, GitHub Copilot, Automated Defect Predictors\n\n` +
      `You can ask me to verify any skill from these areas!`;

    return { isSkillQuery: true, responseText };
  }

  return null;
};

// Exhaustive Knowledge Corpus built directly from Pavan's 3-Page Resume
export const KNOWLEDGE_CORPUS: KnowledgeChunk[] = [
  {
    id: 'exec-summary',
    category: 'summary',
    title: 'Executive Profile Summary & Core Pillars',
    keywords: ['summary', 'profile', 'pavan', 'ghanta', 'target', 'role', 'vp', 'executive', 'architect', 'enterprise', 'experience', 'background', 'overview', 'who', 'leadership', 'leader'],
    content: `**Pavan Kumar Ghanta | Data & Software Architect | Enterprise Technology Leader**\n\n` +
      `Results-driven Software & Data Architect and Engineering Leader with 20+ years of enterprise experience spanning distributed cloud architecture, lakehouse engineering, real-time event streaming, security/IAM governance, and mainframe modernization.\n\n` +
      `• **Enterprise Lakehouse & Streaming Platforms:** Proven authority in architecting enterprise lakehouses on AWS (S3, Glue, Spark, Athena) and low-latency streaming backbones using Apache Kafka, AWS MSK, Apache Flink, and AWS Kinesis Data Streams & Firehose.\n` +
      `• **Database Migration & CDC Mastery:** Architected zero/near-zero downtime database cutovers utilizing AWS DMS and Oracle GoldenGate (OGG), capturing real-time CDC streams from Oracle DB, DB2, and SQL Server into PostgreSQL (RDS/Aurora) and S3 lakehouses.\n` +
      `• **Cloud-Native & Serverless Integration:** Deep expertise across AWS serverless services (Lambda, API Gateway, EventBridge, SQS, SNS, DynamoDB) coupled with edge security via CloudFront and Route 53.\n` +
      `• **Governance, FinOps & Observability:** Slashing recurring infrastructure expenses by ~70% via cross-cloud VPN and Kinesis pipelines; proficient with Terraform IaC, Amazon CloudWatch, and Grafana observability dashboards.\n` +
      `• **AI Adoption & Modern SDLC:** Hands-on implementation of Generative AI (RAG, LLM integrations) for automated defect classification and Confluence knowledge retrieval; early adopter of GitHub Copilot and Claude Code.\n` +
      `• **Target Roles:** Enterprise Architecture and Director Engineering.`,
    actionLabels: [
      { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
      { label: '🎬 60s Video Briefing', action: 'open_video_modal' }
    ]
  },
  {
    id: 'leadership-principles',
    category: 'leadership',
    title: 'Core Leadership Principles & Governance Style (5 Pillars)',
    keywords: ['leadership', 'principles', 'governance', 'influence without authority', 'operating model', 'sdd', 'spec-driven development', 'finops', 'cost', 'stewardship', 'mentorship', 'arb', 'adr', 'raci', 'pods'],
    content: `**Core Leadership Principles & Governance Style:**\n\n` +
      `Pavan leads through technical credibility, architectural clarity, and influence without authority across 5 foundational pillars:\n\n` +
      `1. **Influence Without Authority & Pod Unification:**\n` +
      `   • Led through technical credibility and cross-organizational alignment rather than direct reporting lines.\n` +
      `   • Successfully aligned autonomous pods, DBAs, DevOps, and C-suite leadership around high-stakes architecture shifts.\n\n` +
      `2. **FinOps as a First-Class Architectural Citizen:**\n` +
      `   • Cost efficiency designed into architectures from Day 1.\n` +
      `   • Formulated executive FinOps strategy demonstrating how cross-cloud VPN routing and Kinesis pipelines cut recurring AWS data ingestion spend by ~70%.\n\n` +
      `3. **Spec-Driven Development (SDD) & Architecture Governance:**\n` +
      `   • Formulated and presented an 11-slide Systems Engineering Operating Model establishing clear role boundaries between Architecture and Engineering Management.\n` +
      `   • Replaced big-bang delivery ambiguity with deterministic design-approval gates, Jira/Confluence tracking, 8-role RACI, and Architecture Decision Records (ADRs).\n\n` +
      `4. **Pragmatic Technology Stewardship:**\n` +
      `   • Championed data-driven trade-off evaluations (e.g., Databricks vs. Apache Flink vs. Spark streaming for transit workloads) based on TCO, latency SLAs, and operational complexity rather than industry hype.\n\n` +
      `5. **Talent Multiplier & Mentorship:**\n` +
      `   • Mentored 15+ senior engineers and technical leads across cloud-native design, distributed systems, and modern AI engineering practices.\n` +
      `   • Instituted blameless post-mortems and architecture review boards (ARBs) that reduced recurring production regressions by 40%.`,
    actionLabels: [
      { label: '🛡️ View Leadership Section', action: 'scroll_to', target: 'leadership' },
      { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' }
    ]
  },
  {
    id: 'operating-model-sdd',
    category: 'leadership',
    title: 'Systems Engineering Operating Model & SDD',
    keywords: ['operating model', 'systems engineering', 'sdd', 'spec-driven', 'raci', 'role boundaries', '11-slide', 'slide deck', 'engineering management', 'design approval gates'],
    content: `**Systems Engineering Operating Model & Spec-Driven Development (SDD):**\n\n` +
      `• **Origin:** Formulated and presented an 11-slide Systems Engineering Operating Model to engineering directors, principal engineers, and delivery leads.\n` +
      `• **Role Boundary Definition:** Established crisp demarcation between Architecture (technical strategy, non-functional requirements, topology design, ADRs) and Engineering Management (pod sprint execution, velocity, resource allocation).\n` +
      `• **RACI Matrix:** 8-role cross-functional RACI mapping Architecture, Pod Tech Leads, DBAs, DevOps/SRE, Security/IAM, Product Management, QA, and Executive Sponsors.\n` +
      `• **Design Approval Gates:** Replaced big-bang cutover risks with deterministic stage-gate reviews documented in Confluence and tracked in Jira before code merges.`,
    actionLabels: [
      { label: '🛡️ View Leadership Model', action: 'scroll_to', target: 'leadership' },
      { label: '🏢 View Cubic Experience', action: 'scroll_to', target: 'experience' }
    ]
  },
  {
    id: 'technical-skills-overview',
    category: 'skills',
    title: 'Technical Skills & Technology Stack (9 Categories)',
    keywords: ['skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'databases', 'cloud', 'frameworks', 'programming'],
    content: `**Pavan's Technical Skills & Technology Stack:**\n\n` +
      `• **Cloud Platforms:** AWS platform (S3, Glue, Lambda, Kinesis, Firehose, EventBridge, DynamoDB, RDS, API Gateway, Cognito, CloudFront, Route 53, CloudWatch, SQS, SNS, IAM Identity Center), Microsoft Azure (VPN Gateway, Cross-Cloud Networking).\n` +
      `• **Lakehouse & Streaming:** Lakehouse Architecture, Apache Spark, Glue ETL, Apache Kafka, AWS MSK, Apache Flink, Kinesis Data Streams, Amazon Kinesis Data Firehose, Change Data Capture (CDC).\n` +
      `• **Databases & Migrations:** Oracle DB, PostgreSQL, AWS RDS, DynamoDB, DB2, MySQL, SQL Server, VSAM, AWS DMS (Database Migration Service), Oracle GoldenGate (OGG).\n` +
      `• **Infrastructure as Code & DevOps:** Terraform, Docker, Jenkins, Git, SVN, GitHub Actions, Apache Mesos, Stonebranch Scheduler.\n` +
      `• **Monitoring & Observability:** Grafana, Amazon CloudWatch, ServiceNow Alerting, HP ALM.\n` +
      `• **Programming & Frameworks:** Python, Java (8+), Spring Boot, Spring MVC, Spring Security, Angular (2+/6+), TypeScript, CORBA, Struts, PL1, COBOL, REXX.\n` +
      `• **Mainframe & Modernization:** JCL, CICS, IMS, MVS, z/OS, Mainframe-to-Cloud Migration.\n` +
      `• **Security & Quality:** Cognito, IAM Identity Center, OAuth2/SAML/OIDC, SonarQube, Fortify SCA, TDD, DDD.\n` +
      `• **AI & Automation:** Generative AI (RAG, LLMs), Claude Code, GitHub Copilot, Automated Defect Predictors.`,
    actionLabels: [
      { label: '📊 View Competency Matrix', action: 'scroll_to', target: 'competencies' },
      { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' }
    ]
  },
  {
    id: 'core-competencies-domains',
    category: 'skills',
    title: 'Core Competencies & Domain Expertise',
    keywords: ['domain', 'domains', 'architecture domains', 'competencies', 'transit', 'fare', 'payments', 'b2b', 'funds pool', 'fraud', 'velocity', 'banking', 'trading'],
    content: `**Core Competencies & Domain Expertise:**\n\n` +
      `• **Architecture Domains:** Solution Architecture, Enterprise Data Lakehouse, Event-Driven Architecture, Microservices, Multi-Tenant Isolation, Cross-Cloud Network Topologies.\n\n` +
      `• **Domain Specialization:**\n` +
      `  1. Transit Fare Collection & Payments\n` +
      `  2. B2B Employer Benefit Administration\n` +
      `  3. Funds-Pool Management\n` +
      `  4. Fraud & Velocity Risk Detection\n` +
      `  5. Banking & Money Market Trading`,
    actionLabels: [
      { label: '📊 View Competencies', action: 'scroll_to', target: 'competencies' }
    ]
  },
  {
    id: 'cubic-data-architect',
    category: 'experience',
    title: 'Cubic Transportation Systems – Data Architect (Nov 2025 – Present)',
    keywords: ['cubic', 'data architect', 'lakehouse', 'spark', 'glue', 'vpn', 'kinesis', 'flink', 'runbook', 'dms', 'goldengate', 'eventbridge', 'iam', 's3', 'finops'],
    content: `**Cubic Transportation Systems — Data Architect (Nov 2025 – Present):**\n\n` +
      `**Key Tools:** AWS platform, Lakehouse, S3, Glue, Spark, Lambda, Kafka streaming, MSK, Kinesis, Firehose, EventBridge, DynamoDB, RDS, Postgres, Oracle DB, Flink, SQS, SNS, API Gateway, Cognito, CloudFront, AWS DMS, Oracle GoldenGate, CDC, Grafana, CloudWatch, Terraform, Python.\n\n` +
      `• **Enterprise Lakehouse & Streaming Architecture:** Leading end-to-end data platform modernization, architecting a central Lakehouse on AWS S3 with Glue cataloging, Spark ETL batch processing, and continuous streaming ingestion via MSK and Kinesis Data Streams.\n` +
      `• **Cross-Cloud CDC Ingestion (Azure to AWS):** Designed high-throughput ingestion bridging Azure workloads to AWS Lakehouse using Oracle GoldenGate and self-managed Kafka event-source Lambda over dual Site-to-Site VPN into Kinesis and S3; reduced recurring spend by ~70% vs Direct Connect/ExpressRoute.\n` +
      `• **Real-Time Observability Engine:** High-velocity telemetry pipeline using Apache Flink for stream enrichment, Lambda for hot/cold path routing, DynamoDB for fast state storage, and CloudWatch and Grafana dashboards with automated ServiceNow triggers.\n` +
      `• **Zero-Downtime Database Migration Runbooks:** Authored a comprehensive 750+ line database cutover runbook leveraging AWS DMS and Oracle GoldenGate CDC patterns with automated snapshot loading and RACI matrices.\n` +
      `• **Event-Driven Serverless & IAM Security:** Asynchronous workflows leveraging EventBridge, SQS, SNS, and API Gateway fronted by CloudFront; unified identity pairing AWS IAM Identity Center with Cognito SAML/OIDC federation.\n` +
      `• **IaC & Storage Tiering:** Standardized Terraform modular configurations across staging/production; instituted S3 lifecycle policies (hot/warm/cold), automated tagging, and SLA audit validation.`,
    actionLabels: [
      { label: '🏢 View Cubic Timeline', action: 'scroll_to', target: 'experience' },
      { label: '📐 Cross-Cloud Topology', action: 'scroll_to', target: 'architecture' }
    ]
  },
  {
    id: 'cubic-software-architect',
    category: 'experience',
    title: 'Cubic Transportation Systems – Software Architect & Principal Engineer',
    keywords: ['software architect', 'principal engineer', 'b2b', 'epics', 'confluence', 'mfa', 'fedex', 'fraud', 'velocity', 'concession', 'copilot', 'claude code'],
    content: `**Cubic Transportation Systems — Software Architect (Aug 2023 – Nov 2025) & Principal Engineer (Nov 2021 – Jul 2023):**\n\n` +
      `**Software Architect Key Highlights:**\n` +
      `• **B2B Program Vertical Ownership:** Chief technical architect for B2B employer-benefit portfolio across 20+ Jira epics; governed program-configuration services, purse-allocation logic, fixed-fee monthly billing, and FedEx shipping.\n` +
      `• **Architectural Design Governance:** Authored and approved 45+ Confluence-tracked architectural change designs spanning internal user MFA, external 3rd-party concession APIs, and credit-card velocity fraud detection rules.\n` +
      `• **Generative AI & SDLC Innovation:** Deployed RAG-based AI assistants referencing OpenAPI/Swagger and Confluence; integrated Claude Code and GitHub Copilot to accelerate prototyping and automate static defect analysis.\n\n` +
      `**Principal Software Engineer Key Highlights:**\n` +
      `• **High-Availability Core Engineering:** Engineered transaction subsystems for automated concession eligibility verification, balance transfers on card replacements, and multi-module identity synchronization.\n` +
      `• **DevOps & Mentorship:** Established continuous delivery pipelines with Jenkins and Docker; mentored 10-member team in secure coding and TDD.`,
    actionLabels: [
      { label: '🏢 View Experience', action: 'scroll_to', target: 'experience' },
      { label: '🤖 Explore AI Lab', action: 'scroll_to', target: 'genai-lab' }
    ]
  },
  {
    id: 'cognizant-tenure',
    category: 'experience',
    title: 'Cognizant Technology Solutions – Tier-1 Banking Modernization (2006 – 2021)',
    keywords: ['cognizant', 'banking', 'jpmc', 'jpmorgan', 'credit suisse', 'qvc', 'mmsy', 'granit', 'ksec2', 'tdm', 'xamin', 'omni', 'mainframe', 'cobol', 'pl1', 'cics'],
    content: `**Cognizant Technology Solutions (Kolkata, India | Jun 2006 – Oct 2021):**\n\n` +
      `**Senior Associate / Technical Lead (Jul 2014 – Oct 2021):**\n` +
      `• **Clients:** JPMorgan Chase (JPMC), Credit Suisse, QVC Inc. | Tech: Java 8, Spring Boot, Angular 6+, TypeScript, SQL Server, DB2, Jenkins, Docker, Git.\n` +
      `• **Institutional Trading Platform (JPMC - MMSY):** Architected high-throughput backend services for institutional money market trading; engineered resilient REST microservices enabling trading and trade reconciliation.\n` +
      `• **Banking Modernization & DevOps (Credit Suisse - GRANIT & KSEC2):** Spearheaded modernization of core banking and credit-approval modules; introduced Jenkins/Docker CI/CD pipelines and static code gates via SonarQube and Fortify.\n` +
      `• **Automated Test Data Management (TDM 2.0):** Built self-service test data provisioning platform, compressing testing cycle times from multiple days to minutes and eliminating environment contention.\n\n` +
      `**Programmer Analyst → Associate (Jun 2006 – Jun 2014):**\n` +
      `• **Tech:** Java, JCL, CICS, DB2, PL1, VSAM, REXX, CORBA, Mainframe (z/OS), UNIX.\n` +
      `• **Financial Data Reconciliation (XAMIN):** Engineered high-volume mainframe-to-UNIX data pipelines automating nightly reconciliation and ledger transfers between OMNI and XAMIN.\n` +
      `• **Legacy Support & Distributed Architecture:** Maintained mission-critical batch schedules; optimized complex PL1/REXX scripts, DB2 queries, and CICS transaction systems.`,
    actionLabels: [
      { label: '🏛️ View Banking Projects', action: 'scroll_to', target: 'architecture' },
      { label: '📜 View Career Ladder', action: 'scroll_to', target: 'experience' }
    ]
  },
  {
    id: 'selected-architecture-projects',
    category: 'architecture',
    title: 'Selected Enterprise Architecture Projects',
    keywords: ['projects', 'architecture projects', 'cross-cloud', 'flink', 'migration framework', 'event-driven', 'microservices'],
    content: `**Selected Enterprise Architecture Projects:**\n\n` +
      `1. **Cross-Cloud Lakehouse Ingestion:** Ingested Azure Kafka and Oracle CDC data into AWS Kinesis and S3 Lakehouse over dual Site-to-Site VPN; preserved existing downstream consumers while eliminating expensive Direct Connect lines.\n` +
      `2. **Real-Time Observability with Flink & Grafana:** Developed hot/cold path event-processing engine handling millions of transit device heartbeats using Apache Flink, AWS Lambda, DynamoDB, CloudWatch, and custom Grafana monitoring panels.\n` +
      `3. **Production Zero-Downtime Migration Framework:** Standardized multi-database cutovers using AWS DMS, Oracle GoldenGate (OGG), and automated snapshot validation across critical Oracle DB, DB2, and Postgres instances.\n` +
      `4. **Serverless Event-Driven Microservices:** Architected scalable asynchronous decoupled messaging using AWS EventBridge, SQS queues with Dead Letter Queues (DLQ), SNS topic notifications, and API Gateway authorizers.`,
    actionLabels: [
      { label: '📐 Explore Topologies', action: 'scroll_to', target: 'architecture' }
    ]
  },
  {
    id: 'education-credentials',
    category: 'education',
    title: 'Academic Degrees & Professional Credentials',
    keywords: ['education', 'degree', 'iit', 'dhanbad', 'mtech', 'btech', 'iiit', 'iiitb', 'ljmu', 'upgrad', 'qualifications'],
    content: `**Education & Professional Credentials:**\n\n` +
      `1. **Master of Science (MS) in Machine Learning & AI (In Progress)**\n` +
      `   IIIT Bangalore & Liverpool John Moores University (Upgrad)\n` +
      `   Specialization in Deep Learning, Natural Language Processing, Transformer Models & Generative AI.\n\n` +
      `2. **Master of Technology (M.Tech.) in Computer Science (2006)**\n` +
      `   Indian Institute of Technology (IIT / ISM), Dhanbad\n` +
      `   Specialization in Advanced Distributed Systems, Algorithms & Database Theory.\n\n` +
      `3. **Bachelor of Technology (B.Tech.) in Computer Science & Information Technology (2004)**\n` +
      `   Vignan's Engineering College, JNTU Hyderabad (First Class with Distinction).`,
    actionLabels: [
      { label: '🎓 View Education Section', action: 'scroll_to', target: 'education' }
    ]
  },
  {
    id: 'contact-hiring-info',
    category: 'contact',
    title: 'Contact Information & Notice Period (2 Months)',
    keywords: ['contact', 'email', 'phone', 'linkedin', 'location', 'notice', 'notice period', '2 months', '60 days', 'relocation', 'availability', 'hire', 'reach', 'mobile', 'hyderabad'],
    content: `**Pavan Kumar Ghanta | Contact & Availability Details:**\n\n` +
      `• **Email:** ${contactInfo.email}\n` +
      `• **Phone:** ${contactInfo.phone}\n` +
      `• **LinkedIn:** [linkedin.com/in/pavan-kumar-ghantaa1b14475/](${contactInfo.linkedin})\n` +
      `• **Location:** ${contactInfo.location}\n` +
      `• **Notice Period:** 2 Months (60 Days)\n` +
      `• **Target Roles:** Enterprise Architecture and Director Engineering Roles.`,
    actionLabels: [
      { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
      { label: '🎬 Watch 60s Video Briefing', action: 'open_video_modal' }
    ]
  }
];

// Stopwords to filter out during semantic search tokenization
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 'in', 'is', 'it', 'its',
  'of', 'on', 'that', 'the', 'to', 'was', 'were', 'will', 'with', 'tell', 'me', 'about', 'what', 'how',
  'where', 'can', 'you', 'give', 'detail', 'details', 'show', 'pavan', 'pavans', 'does', 'do', 'did', 'would'
]);

const tokenizeAndStem = (text: string): string[] => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !STOP_WORDS.has(token));
};

// Calculate Fuzzy Similarity / Keyword Overlap Score for General Knowledge
export const searchKnowledgeBase = (query: string): { topChunk: KnowledgeChunk; matchScore: number } => {
  const queryTokens = tokenizeAndStem(query);

  if (queryTokens.length === 0) {
    return { topChunk: KNOWLEDGE_CORPUS[0], matchScore: 0 };
  }

  let maxScore = -1;
  let bestMatch = KNOWLEDGE_CORPUS[0];

  KNOWLEDGE_CORPUS.forEach(chunk => {
    let score = 0;
    const chunkKeywordSet = new Set(chunk.keywords);
    const chunkTitleTokens = tokenizeAndStem(chunk.title);
    const chunkContentTokens = tokenizeAndStem(chunk.content);

    queryTokens.forEach(qToken => {
      // 1. Direct Keyword Match (Highest weight: 10 points)
      if (chunkKeywordSet.has(qToken)) {
        score += 10;
      }

      // Fuzzy Substring match in keywords (4 points)
      chunk.keywords.forEach(kw => {
        if (kw.includes(qToken) || qToken.includes(kw)) {
          score += 4;
        }
      });

      // 2. Title Match (Weight: 6 points)
      if (chunkTitleTokens.includes(qToken)) {
        score += 6;
      }

      // 3. Content Body Match (Weight: 2 points)
      if (chunkContentTokens.includes(qToken)) {
        score += 2;
      }
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatch = chunk;
    }
  });

  return { topChunk: bestMatch, matchScore: maxScore };
};
