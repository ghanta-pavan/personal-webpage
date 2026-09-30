import { contactInfo } from '../data/portfolioData';

export interface KnowledgeChunk {
  id: string;
  category: 'architecture' | 'experience' | 'skills' | 'education' | 'summary' | 'finops' | 'leadership' | 'contact';
  title: string;
  keywords: string[];
  content: string;
  actionLabels?: { label: string; action: 'open_recruiter_drawer' | 'open_video_modal' | 'scroll_to' | 'send_prompt'; target?: string }[];
}

// Exhaustive Knowledge Corpus built directly from Pavan's portfolio data
export const KNOWLEDGE_CORPUS: KnowledgeChunk[] = [
  {
    id: 'exec-summary',
    category: 'summary',
    title: 'Executive Profile & Target Roles',
    keywords: ['summary', 'profile', 'pavan', 'ghanta', 'target', 'role', 'vp', 'executive', 'architect', 'enterprise', 'experience', 'background', 'overview', 'who'],
    content: `**Pavan Kumar Ghanta | Software & Data Architect & Engineering Leader**\n\n` +
      `• **Target Roles:** Enterprise Architect, VP of Software Engineering, Director of Data Platform Architecture.\n` +
      `• **Pedigree:** 20+ years of architecture leadership spanning application, cloud data lakehouses, identity/security, and core banking mainframe modernizations. M.Tech from IIT Dhanbad (2006) and MS in AI/ML from IIIT Bangalore.\n` +
      `• **Recent Key Highlights:** Architect-of-Record for 20+ B2B epics at Cubic Transportation Systems; designed Azure-to-AWS cross-cloud VPN ingestion cutting spend by ~70%; Flink real-time device observability; 750+ line database migration runbooks with 8-role RACI governance.`,
    actionLabels: [
      { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
      { label: '🎬 60s Video Briefing', action: 'open_video_modal' }
    ]
  },
  {
    id: 'cross-cloud-finops',
    category: 'finops',
    title: 'Cross-Cloud Azure-to-AWS Data Lake Ingestion (~70% FinOps Savings)',
    keywords: ['finops', 'savings', 'cost', 'spend', 'azure', 'aws', 'cross-cloud', 'vpn', 'kinesis', 'direct connect', 'expressroute', 'oracle', 'cdc', 'goldengate', 'kafka', 'lambda', '70%', 'ingestion', 'reduction', 'budget'],
    content: `**Azure-to-AWS Cross-Cloud Data Ingestion & FinOps Optimization:**\n\n` +
      `• **Architecture:** Architected target ingestion blueprint capturing Azure-hosted Kafka event streams and Oracle CDC transactional data into AWS over a secure Site-to-Site dual-tunnel IPsec VPN landing in Kinesis Data Streams.\n` +
      `• **FinOps Impact:** Trade-off analysis proved ~70% recurring infrastructure & network cost savings by utilizing managed VPN + on-demand Kinesis instead of dedicated AWS Direct Connect / Azure ExpressRoute and self-managed Kafka clusters.\n` +
      `• **Technical Design:** Used Lambda Event-Source Mapping (ESM) & Oracle GoldenGate CDC; preserved 100% of downstream device-event and alerting consumers (DynamoDB, SQS, ServiceNow) with sub-second SLA and zero consumer refactoring.`,
      actionLabels: [
        { label: '📐 View System Topology', action: 'scroll_to', target: 'architecture' },
        { label: '📋 Recruiter Fast Screen', action: 'open_recruiter_drawer' }
      ]
  },
  {
    id: 'flink-observability',
    category: 'architecture',
    title: 'Apache Flink Real-Time Device Observability Platform',
    keywords: ['flink', 'apache flink', 'stream', 'streaming', 'observability', 'device', 'heartbeat', 'telemetry', 'validator', 'servicenow', 'hot path', 'cold path', 'sliding window', 'iceberg', 'sub-second', 'msk', 'kinesis'],
    content: `**Apache Flink Real-Time Device Telemetry & Fault Detection Platform:**\n\n` +
      `• **Problem:** High-density transit ticketing validators generate millions of continuous heartbeats; batch DBs suffered write amplification with 45-minute incident detection delays.\n` +
      `• **Solution:** Engineered stream processing on Apache Flink & AWS MSK/Kinesis separating Hot Path (sub-second sliding-window anomaly detection instantly dispatching ServiceNow incidents) from Cold Path (historical audit retention in S3 Apache Iceberg lake).\n` +
      `• **Metrics:** Reduced mean time to fault detection from 45 minutes to < 1.2 seconds; cut database IOPS write costs by 30% by buffering window states in Flink stateful memory.`,
    actionLabels: [
      { label: '📊 Explore Flink Topology', action: 'scroll_to', target: 'architecture' }
    ]
  },
  {
    id: 'migration-raci-runbook',
    category: 'leadership',
    title: '750+ Line Database Migration Runbook & 8-Role RACI Governance',
    keywords: ['runbook', 'migration', 'raci', 'database', 'dms', 'goldengate', 'downtime', 'cutover', 'governance', 'oracle', 'aurora', 'rds', 'decision matrix', '8-role', 'backup', 'cdc'],
    content: `**Enterprise Database Migration Runbook & Decision Framework:**\n\n` +
      `• **Governance:** Authored a 750+ line production migration runbook establishing standardized cutover procedures and an 8-Role RACI Matrix (Architect Accountable, DBA Responsible, DevOps Responsible, Network Consulted, QA Informed, Product Owner Sign-off, Incident Commander Go/No-Go, Dev Lead Consumer Repoint).\n` +
      `• **Selection Framework:** Formulated deterministic cost vs. latency rubric selecting AWS DMS (standard relational schemas) vs. Oracle GoldenGate (high-throughput complex schema CDC).\n` +
      `• **Zero Downtime:** Designed snapshot/replica-sourced full-load pattern isolating live operational databases from read locks during cutover.`,
    actionLabels: [
      { label: '📜 View Governance Details', action: 'scroll_to', target: 'architecture' }
    ]
  },
  {
    id: 'identity-security',
    category: 'architecture',
    title: 'Two-Tier Identity Federation & Multi-Tenant Security',
    keywords: ['identity', 'security', 'saml', 'oidc', 'cognito', 'iam', 'identity center', 'active directory', 'multi-tenant', 'jwt', 'lambda authorizer', 'token', 'mfa', 'isolation', 'zero-trust'],
    content: `**Two-Tier Identity Federation & Multi-Tenant Security Architecture:**\n\n` +
      `• **Identity Architecture:** Unified internal employee access under AWS IAM Identity Center / Managed AD while federating external partner transit authorities via Amazon Cognito (SAML 2.0 / OIDC).\n` +
      `• **Centralized Lambda Authorizer:** Built unified API Gateway Lambda authorizer providing cached cryptographic token validation (<15ms latency).\n` +
      `• **Tenant Isolation:** Token-derived tenant identifiers passed to downstream services, driving row-level database security and S3 prefix policy isolation.`,
    actionLabels: [
      { label: '🔒 View Identity Topology', action: 'scroll_to', target: 'architecture' }
    ]
  },
  {
    id: 'banking-modernization',
    category: 'architecture',
    title: 'Tier-1 Banking Mainframe Modernization & TDM 2.0 (Cognizant / JPMC / Credit Suisse)',
    keywords: ['banking', 'mainframe', 'modernization', 'strangler', 'fig', 'cobol', 'cics', 'pl1', 'java', 'spring boot', 'jpmc', 'jpmorgan', 'credit suisse', 'tdm', 'test data', 'mips', 'microservices', 'rexx', 'corba'],
    content: `**15-Year Tier-1 Banking Modernization (Cognizant Technology Solutions):**\n\n` +
      `• **Strangler Fig Decoupling:** Modernized legacy Cobol/PL1/CICS mainframes at JPMorgan Chase and Credit Suisse into resilient Java/Spring Boot microservices with zero operational downtime.\n` +
      `• **TDM 2.0 Automation:** Built self-service Test Data Management web portal automating test data generation, shrinking QA prep time from 3–4 days to under 2 minutes.\n` +
      `• **Financial Systems:** Led backend architecture for money market trading (MMSY) at JPMC and credit request processing (GRANIT/KSEC2) at Credit Suisse.`,
    actionLabels: [
      { label: '🏛️ View Banking Case Study', action: 'scroll_to', target: 'architecture' },
      { label: '📜 View Career Ladder', action: 'scroll_to', target: 'experience' }
    ]
  },
  {
    id: 'b2b-cubic-vertical',
    category: 'experience',
    title: 'B2B Program Vertical Ownership & Projects at Cubic',
    keywords: ['b2b', 'cubic', 'fare', 'payments', 'billing', 'funds pool', 'concession', 'fedex', 'fraud', 'velocity', 'transit', 'epic', 'confluence', 'rfc'],
    content: `**B2B / Employer Benefit Vertical Ownership at Cubic Transportation Systems:**\n\n` +
      `• **Architect-of-Record:** Owned end-to-end architecture across 20+ Jira epics — covering program configuration, fixed-monthly-fee billing, and funds-pool reload/refund logic.\n` +
      `• **Integrations & Fraud:** Integrated third-party FedEx shipping API for B2B card fulfillment; implemented credit card velocity checks and real-time token synchronization on card status updates.\n` +
      `• **Concession Engine:** Designed automated age-based concession approval and external partner benefit eligibility rules.`,
    actionLabels: [
      { label: '🏢 View Cubic Experience', action: 'scroll_to', target: 'experience' }
    ]
  },
  {
    id: 'genai-ml-rag',
    category: 'skills',
    title: 'Applied Generative AI, RAG Chatbots & Academic Rigor (IIIT-B)',
    keywords: ['ai', 'genai', 'rag', 'llm', 'claude', 'copilot', 'vector', 'confluence', 'swagger', 'iiit', 'iiit-b', 'ljmu', 'defect', 'rca', 'sdlc', 'machine learning'],
    content: `**Generative AI, RAG & AI-Assisted SDLC:**\n\n` +
      `• **Academic Specialization:** Pursuing Master of Science in AI & ML at IIIT Bangalore & Liverpool John Moores University (Upgrad), specializing in deep learning, natural language processing, and transformer models.\n` +
      `• **Enterprise RAG POCs:** Built RAG chatbots indexing 45+ Confluence architecture specifications and OpenAPI/Swagger specs with vector embeddings.\n` +
      `• **Defect Prediction & SDLC:** Formulated ML classifiers for automated defect root-cause analysis from stack traces; spearheaded GitHub Copilot and Claude/Claude Code adoption across Java and Terraform squads.`,
      actionLabels: [
        { label: '🤖 Explore AI Lab', action: 'scroll_to', target: 'genai-lab' }
      ]
  },
  {
    id: 'education-credentials',
    category: 'education',
    title: 'Academic Degrees & Professional Credentials',
    keywords: ['education', 'degree', 'iit', 'dhanbad', 'mtech', 'btech', 'iiit', 'iiitb', 'ljmu', 'gpa', 'honors', 'pedigree', 'qualification', 'academic'],
    content: `**Academic Pedigree & Higher Education:**\n\n` +
      `1. **MS in Machine Learning & AI:** IIIT Bangalore & Liverpool John Moores University (In Progress) — Specializing in Transformers, LLMs, and RAG.\n` +
      `2. **M.Tech in Computer Science:** Indian Institute of Technology (IIT), Dhanbad (2006) — Advanced Algorithms & Distributed Systems.\n` +
      `3. **B.Tech in CS & IT:** Vignan's Engineering College, JNTU Hyderabad (2004) — First Class with Distinction.`,
    actionLabels: [
      { label: '🎓 View Education Section', action: 'scroll_to', target: 'education' }
    ]
  },
  {
    id: 'contact-hiring-info',
    category: 'contact',
    title: 'Contact Information & Relocation / Availability',
    keywords: ['contact', 'email', 'phone', 'linkedin', 'location', 'notice', 'relocation', 'availability', 'hire', 'reach', 'mobile', 'hyderabad', 'address'],
    content: `**Pavan Kumar Ghanta | Contact & Availability Details:**\n\n` +
      `• **Email:** ${contactInfo.email}\n` +
      `• **Phone:** ${contactInfo.phone}\n` +
      `• **LinkedIn:** [LinkedIn Profile](${contactInfo.linkedin})\n` +
      `• **Current Location:** Hyderabad, India\n` +
      `• **Availability:** Immediate Availability for Global, Remote, or Relocation opportunities in Enterprise Architecture & Executive Engineering Leadership.`,
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

// Calculate Fuzzy Similarity / N-gram Token Overlap Score
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

      // Fuzzy Substring / Prefix match in keywords (4 points)
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
