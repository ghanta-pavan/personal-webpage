import React from 'react';

/**
 * PrintResumeView
 * Faithfully embeds the exact layout and typography of resume_pavan.html.
 * Hidden on screen (.print-only), rendered exclusively during window.print()
 * Styled with forced print-color-adjust and borders to guarantee highlighted tiles in PDF/print.
 */
export const PrintResumeView: React.FC = () => {
  return (
    <div className="print-only resume-print-container">
      <style>{`
        @media print {
          .resume-print-container {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            color: #1f2733;
            font-size: 7.9pt;
            line-height: 1.24;
            display: block !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .resume-print-container * {
            box-sizing: border-box;
          }
          .resume-print-container h1 {
            margin: 0;
            font-size: 18pt;
            color: #12233f;
            letter-spacing: 0.5px;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            font-weight: 700;
          }
          .resume-print-container .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2.5px solid #12233f;
            padding-bottom: 6px;
            margin-bottom: 6px;
          }
          .resume-print-container .header .left {
            max-width: 66%;
          }
          .resume-print-container .tagline {
            margin-top: 4px;
            font-size: 7.9pt;
            color: #1f2733;
          }
          .resume-print-container .tagline b {
            color: #12233f;
          }
          .resume-print-container .contact {
            text-align: right;
            font-size: 7.6pt;
            line-height: 1.5;
            white-space: nowrap;
            color: #1f2733;
          }
          .resume-print-container .section-title {
            display: flex;
            align-items: center;
            color: #12233f;
            font-size: 9pt;
            font-weight: 700;
            margin: 7px 0 3px 0;
            text-transform: uppercase;
            letter-spacing: 0.3px;
          }
          .resume-print-container .section-title:before {
            content: "\\25CF";
            color: #12233f;
            margin-right: 5px;
            font-size: 7.5pt;
          }
          .resume-print-container ul {
            margin: 0;
            padding-left: 13px;
          }
          .resume-print-container li {
            margin-bottom: 1.5px;
            color: #1f2733;
          }
          .resume-print-container .two-col {
            display: flex;
            gap: 20px;
          }
          .resume-print-container .col {
            flex: 1;
          }
          .resume-print-container .growth {
            display: flex;
            gap: 3px;
            margin-top: 3px;
          }
          .resume-print-container .growth span {
            flex: 1;
            text-align: center;
            font-size: 6.4pt;
            font-weight: 600;
            border: 1px solid #12233f;
            color: #12233f;
            padding: 4px 2px;
            border-radius: 3px;
          }
          .resume-print-container .growth span.current {
            background: #12233f !important;
            background-color: #12233f !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            border: 1px solid #12233f !important;
            box-shadow: inset 0 0 0 1000px #12233f !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .resume-print-container .chips {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 4px !important;
            margin-top: 3px !important;
          }
          /* Prominent, highlighted solid navy tiles for Core Competencies and Domain Expertise */
          .resume-print-container .chips span {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: #12233f !important;
            background-color: #12233f !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            font-size: 6.9pt !important;
            font-weight: 600 !important;
            padding: 4px 6px !important;
            border-radius: 3px !important;
            text-align: center !important;
            line-height: 1.25 !important;
            min-height: 22px !important;
            border: 1px solid #12233f !important;
            box-shadow: inset 0 0 0 1000px #12233f !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
            box-sizing: border-box !important;
          }
          .resume-print-container .softskills {
            list-style: none;
            padding-left: 0;
          }
          .resume-print-container .softskills li:before {
            content: "\\25C6 ";
            color: #12233f;
          }
          .resume-print-container .keyval {
            display: grid;
            grid-template-columns: 138px 1fr;
            gap: 1px 8px;
            margin-bottom: 5px;
            font-size: 7.6pt;
          }
          .resume-print-container .keyval div.k {
            font-weight: 700;
            color: #12233f;
          }
          .resume-print-container .role-block {
            margin-bottom: 5px;
          }
          .resume-print-container .role-title {
            font-weight: 700;
            font-size: 8.4pt;
            color: #12233f;
          }
          .resume-print-container .role-dates {
            font-style: italic;
            font-size: 7.6pt;
            color: #1f2733;
          }
          .resume-print-container .tech-line {
            font-size: 7.3pt;
            margin: 2px 0 4px 0;
            color: #1f2733;
          }
          .resume-print-container .tech-line b {
            color: #12233f;
          }
          .resume-print-container .subhead {
            font-weight: 700;
            margin: 5px 0 2px 0;
            font-size: 8pt;
            color: #12233f;
          }
          .resume-print-container .proj-name {
            font-weight: 700;
            color: #12233f;
          }
          .resume-print-container .footer-band {
            background: #12233f !important;
            background-color: #12233f !important;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            padding: 4px 8px;
            margin-top: 6px;
            font-weight: 700;
            font-size: 8.2pt;
            box-shadow: inset 0 0 0 1000px #12233f !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .resume-print-container .footer-content {
            padding: 3px 8px 0 8px;
            font-size: 7.6pt;
            color: #1f2733;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="left">
          <h1>PAVAN KUMAR GHANTA</h1>
          <div className="tagline">
            Results-driven <b>Software &amp; Data Architect and Engineering Leader</b> with 20+ years spanning application, data, security, and mainframe architecture — building toward an <b>Enterprise Architect</b> role. Committed to aligning technology strategy with business goals through cross-domain architecture, governance, and scalable, secure platform design.
          </div>
        </div>
        <div className="contact">
          &#9742; +91-9163012196<br />
          &#9993; pavankumar.ghanta@zohomail.in<br />
          in/ linkedin.com/in/pavan-kumar-ghantaa1b14475/
        </div>
      </div>

      {/* Profile Summary */}
      <div className="section-title">Profile Summary</div>
      <ul>
        <li>Software &amp; Data Architect and Engineering Leader with over 20 years of experience spanning application architecture, data architecture, identity/security architecture, and mainframe modernization — actively building toward an Enterprise Architect role through cross-portfolio, business-aligned technology leadership.</li>
        <li>Proven ability to architect across the full enterprise stack: cross-cloud and cloud-native data platforms (AWS DMS, Oracle GoldenGate, MSK/Kafka, Kinesis, Azure-to-AWS VPN ingestion), application development (Java, Spring Boot, Angular), identity &amp; security (IAM Identity Center, Cognito), and legacy-to-cloud modernization — the cross-domain breadth central to enterprise architecture.</li>
        <li>Experienced translating business requirements into technology strategy, including cost governance, tool-selection frameworks, and phased delivery roadmaps presented to Chief Architect and executive stakeholders; owns epic-level planning, estimation, and design-approval gates in Jira/Confluence for multi-team data platform programs.</li>
        <li>Demonstrated success in end-to-end project management, leading all phases from requirement analysis, effort estimation, and design to deployment and production support under Agile and DevOps frameworks, including test-plan authorship, security/tagging policy definition, and data lifecycle (hot/warm/cold) governance.</li>
        <li>Strong advocate of DevOps and CI/CD practices, implementing automation pipelines using Jenkins, Docker, Git/SVN, and Stonebranch Scheduler to enhance release velocity and reduce deployment risk.</li>
        <li>Passionate about innovation and AI adoption, with hands-on experience designing Generative AI (RAG)-based chat models and AI-driven defect analysis and product configuration tools to accelerate software delivery, and an early adopter of AI-assisted SDLC practices (GitHub Copilot, Claude/Claude Code) for code generation, review, and documentation.</li>
        <li>Owns end-to-end architecture for the B2B/employer-benefit program vertical of the platform — from program configuration and funds-pool/billing logic through fraud controls, notifications, and partner integrations — combining deep domain expertise in transit fare &amp; payments, B2B program administration, and identity/data-privacy compliance with the technical breadth above.</li>
        <li>Inspirational people leader and mentor, skilled at guiding diverse engineering teams, conducting code reviews, establishing development standards, and fostering a culture of quality and technical excellence.</li>
        <li>Recognized for delivering business-aligned, cost-efficient technology solutions, driving productivity improvements, enhancing customer satisfaction, and strengthening long-term client partnerships across global engagements.</li>
      </ul>

      {/* Growth Path & Competencies */}
      <div className="two-col">
        <div className="col">
          <div className="section-title">Growth Path</div>
          <div className="growth">
            <span>Programmer Analyst Trainee</span>
            <span>Programmer Analyst</span>
            <span>Associate</span>
            <span>Senior Associate</span>
            <span>Principal Software Engineer</span>
            <span>Software Architect</span>
            <span className="current">Data Architect</span>
          </div>
          <div className="section-title" style={{ marginTop: '12px' }}>Soft Skills</div>
          <ul className="softskills">
            <li>Team Leader</li>
            <li>Communicator &amp; Collaborator</li>
            <li>Planner &amp; Innovator</li>
            <li>Decision-maker</li>
            <li>Adaptable</li>
            <li>Problem-solver</li>
          </ul>
        </div>
        <div className="col">
          <div className="section-title">Core Competencies</div>
          <div className="chips">
            <span>Data &amp; Solution Architecture</span>
            <span>Cross-Cloud &amp; AWS Migration</span>
            <span>Data Lake &amp; Streaming (Kafka/MSK/Kinesis)</span>
            <span>Application Development</span>
            <span>Software Engineering Leadership</span>
            <span>Agile &amp; Scrum Delivery Planning</span>
            <span>Java Full Stack Development</span>
            <span>Mainframe Modernization</span>
            <span>CI/CD Pipeline Management</span>
            <span>AI &amp; Generative AI Integration</span>
            <span>Code Quality &amp; Security (SonarQube, Fortify)</span>
            <span>Microservices Design</span>
            <span>Stakeholder &amp; Client Management</span>
            <span>Team Mentoring &amp; Technical Governance</span>
          </div>
          <div className="section-title" style={{ marginTop: '8px' }}>Domain Expertise</div>
          <div className="chips">
            <span>Transit Fare &amp; Payments Systems</span>
            <span>B2B / Employer Benefit Program Administration</span>
            <span>Funds Pool &amp; Program Billing</span>
            <span>Fraud &amp; Risk Management</span>
            <span>Identity &amp; Data Privacy (GDPR/DPIA)</span>
            <span>Concession &amp; Eligibility Programs</span>
            <span>Banking &amp; Financial Services</span>
            <span>Cloud Cost &amp; Modernization Strategy</span>
          </div>
        </div>
      </div>

      {/* Certifications & Education */}
      <div className="section-title">Certifications</div>
      <ul>
        <li>MS in Machine Learning and AI from IIIT Bangalore and Liverpool John Moores University, Upgrad, In progress</li>
        <li>M.Tech. (Computer Science) from Indian Institute of Technology, Dhanbad in 2006</li>
        <li>B.Tech. (Computer Science and Information Technology) from Vignan's Engineering College, JNTU Hyderabad in 2004</li>
      </ul>

      {/* Technical Skills */}
      <div className="section-title">Technical Skills</div>
      <div className="keyval">
        <div className="k">Cloud &amp; Data Platform:</div>
        <div>AWS (DMS, MSK/MSK Connect, Kinesis Data Streams &amp; Firehose, Glue, S3, DynamoDB, RDS, Lambda, API Gateway, IAM Identity Center, Cognito, Route 53, CloudWatch), Azure (VPN Gateway, cross-cloud ingestion), Terraform, Oracle GoldenGate, Kafka</div>
        <div className="k">Programming Languages:</div>
        <div>Java, TypeScript, PL1, COBOL, REXX</div>
        <div className="k">Frameworks &amp; Technologies:</div>
        <div>Spring Boot, Spring MVC, Spring Security, Struts, Angular 2+, CORBA</div>
        <div className="k">Web &amp; UI Technologies:</div>
        <div>HTML5, CSS3, JavaScript, Angular 6+, TypeScript</div>
        <div className="k">Databases:</div>
        <div>Oracle SQL, DB2, MySQL, SQL Server, PostgreSQL, VSAM</div>
        <div className="k">Mainframe Technologies:</div>
        <div>JCL, CICS, IMS, MVS</div>
        <div className="k">Stream Processing:</div>
        <div>Apache Flink, Kafka/MSK, Kinesis, Glue ETL</div>
        <div className="k">DevOps &amp; Tools:</div>
        <div>Jenkins, Docker, Git, SVN, Apache Mesos, Stonebranch Scheduler, HP ALM, GitHub Actions</div>
        <div className="k">Project &amp; Collaboration Tools:</div>
        <div>Jira, Confluence, Enterprise Architect</div>
        <div className="k">Development Methodologies:</div>
        <div>Agile, Scrum, Test Driven Development (TDD), Domain Driven Design (DDD)</div>
        <div className="k">Security &amp; Code Quality:</div>
        <div>SonarQube, Fortify</div>
        <div className="k">AI &amp; Automation:</div>
        <div>Generative AI (RAG, LLM integration), GitHub Copilot, Claude/Claude Code (AI-assisted SDLC), AI-based defect analysis and automation tools</div>
        <div className="k">Operating Systems:</div>
        <div>Windows, UNIX, Mainframe (z/OS)</div>
      </div>

      {/* Work Experience */}
      <div className="section-title">Work Experience</div>

      {/* Cubic */}
      <div className="role-block">
        <div className="role-title">Cubic Transportation Systems, Hyderabad</div>
        <div className="role-dates">
          Data Architect (Nov 2025 – Present)<br />
          Software Architect (Aug 2023 – Nov 2025)<br />
          Principal Software Engineer (Nov 2021 – Jul 2023)
        </div>
        <div className="tech-line">
          <b>Technologies:</b> AWS (DMS, MSK, Kinesis, Glue, S3, DynamoDB, RDS, Lambda, IAM Identity Center, Cognito), Azure, Terraform, Oracle GoldenGate, Kafka, Apache Flink, Java 8, Spring Boot, Spring Security, Struts, TypeScript, Oracle SQL
        </div>
        <ul>
          <li>Leading data architecture strategy for the enterprise data platform, covering database migration (AWS DMS, Oracle GoldenGate), streaming/event architecture (Kafka/MSK/Kinesis), data lake design, and identity &amp; access architecture for internal and third-party users.</li>
          <li>Designed the target architecture for extending the AWS data lake to ingest Azure-hosted workloads: a self-managed Kafka event-source Lambda and an Oracle GoldenGate CDC path over a dual-tunnel Site-to-Site VPN, both landing in Kinesis Data Streams so the existing device-event and heartbeat consumer ecosystem could be repointed without a rebuild; the design included a build-vs-buy cost comparison (VPN vs. Direct Connect/ExpressRoute) and a risk/mitigation plan reviewed for the AWS Modernization Initiative.</li>
          <li>Defined the end-to-end architecture for a Flink-based device observability platform — hot/cold path event processing, a Java service layer, and monitoring dashboards — and led the design-approval, Terraform deployment, and QA-validation stages across Hyderabad and NY environments as part of the platform's Jira-tracked delivery plan.</li>
          <li>Authoring migration runbooks and Terraform-based infrastructure patterns adopted by DBA, DevOps, and data engineering teams to standardize zero/near-zero downtime cutover across production databases.</li>
          <li>Own delivery planning and governance for the data platform's Jira epics (data lake platform provisioning, device observability, Azure-to-AWS pipeline, monitoring &amp; observability) — including scope/architecture/estimation sign-off, standardized repository and naming-convention guidelines, S3 data-lifecycle (hot/warm/cold) and security/tagging policy, and test-plan authorship.</li>
          <li>Advising platform and engineering leadership on AWS cost modeling, tool-selection trade-offs, and phased delivery roadmaps for data lake and observability modernization initiatives — including a cross-cloud connectivity and streaming trade-off analysis showing a managed Site-to-Site VPN and on-demand Kinesis ingestion path cutting recurring network and streaming-platform spend by roughly 70% versus a Direct Connect/ExpressRoute and self-managed Kafka/MSK approach, while accelerating the platform's move off self-managed cluster infrastructure toward serverless, managed AWS services as part of its broader cloud modernization roadmap.</li>
          <li>Partnering with the Chief Architect and stakeholders on delivery-model design, sprint planning, and resource/risk modeling for multi-sprint data platform workstreams.</li>
          <li>Owned end-to-end software architecture for the B2B/employer-benefit program vertical across 20+ Jira epics and capabilities — spanning self-service program configuration, program/product-type definition, funds-pool and enablement-fee logic, low-balance notifications, benefit-order processing, card-replacement/token-status synchronization, and a B2B shipping (FedEx) integration — acting as the primary architect and business-domain point of contact for that portfolio.</li>
          <li>Spearheaded software architecture design and solution delivery for enterprise-grade transport systems prior to the Data Architect role, authoring or co-approving 45+ Confluence-tracked change designs spanning B2B program billing/funds-pool logic, third-party concession and benefit-program integrations, account/fraud controls, and system-user multi-factor authentication, ensuring performance, scalability, and security across multi-module applications.</li>
          <li>Led requirement finalization, high-level architecture design, and effort estimation, providing end-to-end ownership of solution planning and delivery.</li>
          <li>Collaborated with cross-functional teams to prepare low-level design documents, define coding standards, and ensure technical consistency across modules.</li>
          <li>Conducted code reviews, performance optimization, and technical validation to uphold code quality, maintainability, and adherence to best practices.</li>
          <li>Adopted AI-assisted SDLC practices, using GitHub Copilot and Claude/Claude Code for code generation, code review, and technical documentation to shorten development cycles alongside the team's Java/Spring Boot and Terraform workstreams.</li>
          <li>Designed and implemented POCs to embed Generative AI into existing platforms—leveraging RAG (Retrieval-Augmented Generation) to build chatbots trained on Confluence pages, Swagger documentation, and product user content.</li>
          <li>Developed AI-driven solutions for defect analysis and root cause prediction, improving issue resolution efficiency and defect turnaround time.</li>
          <li>Mentored a 10-member development team on technical design, secure coding, and Agile delivery; ensuring smooth coordination between onsite and offshore teams.</li>
          <li>Engaged in proposal development and innovation ideation initiatives, contributing to product enhancements and next-generation platform capabilities.</li>
        </ul>

        {/* Data Architecture Key Projects */}
        <div className="subhead">Key Projects – Data Architecture</div>
        <ul>
          <li><span className="proj-name">Enterprise Data Migration Runbooks (AWS DMS &amp; Oracle GoldenGate):</span> Authored a 750+ line production migration runbook (RACI across 8 roles) plus a companion on-prem/Azure-to-AWS runbook, including a snapshot/replica-sourced full-load pattern for critical tables and a cost-based DMS-vs-OGG decision framework; published to Confluence for cross-team governance.</li>
          <li><span className="proj-name">Azure-to-AWS Cross-Cloud Data Lake Ingestion:</span> Authored the architecture document for bringing Azure-hosted Kafka and Oracle workloads into the AWS data lake via Lambda Kafka event-source mapping and OGG CDC over Site-to-Site VPN into Kinesis, preserving the existing MSK-based consumer/alerting pipeline (DynamoDB, SQS, ServiceNow) by simply repointing its trigger source; included NFRs, IAM scoping, observability plan, and alternatives-considered analysis (MSK, Kafka Connect, NiFi, MirrorMaker 2, Direct Connect).</li>
          <li><span className="proj-name">Flink-Based Device Observability Platform:</span> Defined end-to-end architecture and led delivery of a hot/cold-path device-event and heartbeat observability solution (Flink, Lambda, DynamoDB, ServiceNow alerting), including the Java processing service, monitoring dashboards, and design-approval/validation gates tracked as a dedicated Jira epic.</li>
          <li><span className="proj-name">Data Platform Governance &amp; Delivery Planning:</span> Defined standardized repository structure and AWS resource/pipeline naming conventions, S3 data-lifecycle (hot/warm/cold) and security/tagging policy, and the data lake test plan; owned scope, architecture, and estimation sign-off for the platform's Jira epics spanning ingestion, observability, and cross-cloud pipeline workstreams.</li>
          <li><span className="proj-name">MSK Streaming &amp; Multi-Target Sink Architecture:</span> Architected a cross-VPC Kafka/MSK Connect pipeline for device event and heartbeat data, sinking to S3, DynamoDB, and PostgreSQL via a single feature-flagged Terraform module with DLQ error handling and Glue Schema Registry governance.</li>
          <li><span className="proj-name">Data Lake Modernization &amp; Trip History API Platform:</span> Directed data lake sequencing (raw/staging/analytics) to close a retention-driven data-loss risk, and led discovery/delivery planning for a Trip History API modernization effort spanning CDC, Aurora data availability, and Glue performance remediation against a 5-minute SLA.</li>
          <li><span className="proj-name">Identity Federation &amp; Multi-Tenant Security Architecture:</span> Designed a two-tier identity model (AWS Managed AD/IAM Identity Center for staff, Cognito with SAML/OIDC for third-party customers) behind a single Lambda authorizer, with token-derived multi-tenant data isolation and production cost modeling.</li>
          <li><span className="proj-name">Lean Delivery Model &amp; Executive Operating Model Program:</span> Proposed a spec-driven delivery model redefining Architect/EM role boundaries, and delivered an 11-slide Systems Engineering operating model presentation (RACI, governance checkpoints, KPIs) to a mixed executive/technical audience.</li>
        </ul>

        {/* Software Architecture Key Projects */}
        <div className="subhead">Key Projects – Software Architecture</div>
        <ul>
          <li><span className="proj-name">B2B Program Vertical Ownership:</span> Acted as architect-of-record for the B2B/employer-benefit program vertical across 20+ epics and capabilities, from initial program-configuration and billing architecture through delivery, notifications, and partner shipping integration — the primary technical and domain authority for that portfolio.</li>
          <li><span className="proj-name">B2B Program Billing &amp; Funds Pool Architecture:</span> Designed a fare-program product offering model driven by program type and a new fixed-monthly-fee billing type, and authored the privacy impact assessment and change design consolidating funds-pool reload-refund logic so that a purse belongs to a single program.</li>
          <li><span className="proj-name">Concession &amp; Third-Party Benefit Program Integration:</span> Architected concession rules and invoicing for third-party benefit programs, including automated age-based concession approval/enrollment and attributed fare and invoicing for external benefit-program partners.</li>
          <li><span className="proj-name">B2B Account &amp; Fraud Controls:</span> Designed a set of B2B account-management and fraud-control enhancements — credit card velocity checks, token/identity status synchronization on member status changes, balance-transfer overrides on card replacement, and membership re-synchronization — alongside a broader B2B integration-gaps remediation effort.</li>
          <li><span className="proj-name">Multi-Factor Authentication for System Users:</span> Served as one of the approving software architects on the MFA design for internal system users, covering authentication flow and impacted-component sign-off across the platform.</li>
        </ul>
      </div>

      {/* Cognizant */}
      <div className="role-block">
        <div className="role-title">Cognizant Technology Solutions, Kolkata</div>
        <div className="role-dates">Programmer Analyst &rarr; Associate &rarr; Senior Associate (Jun 2006 – Oct 2021)</div>
        <div className="tech-line">
          <b>Clients:</b> QVC Inc., JPMorgan Chase (JPMC), Credit Suisse<br />
          <b>Technologies:</b> Java 8, Spring Boot, Angular 6, TypeScript, SQL Server, DB2, PL1, JCL, VSAM, REXX, CICS, CORBA
        </div>
        <ul>
          <li>Led end-to-end software design and development for multiple enterprise applications in banking and financial domains, including money market trading, credit processing, and accounting systems.</li>
          <li>Directed teams in defining solution architecture, establishing reusable frameworks, and maintaining alignment between business and IT objectives.</li>
          <li>Designed scalable backend systems and REST-based microservices, integrating distributed and mainframe environments for legacy modernization initiatives.</li>
          <li>Managed Agile transformations, standardizing DevOps toolchains and CI/CD practices using Jenkins, Docker, and Git, significantly improving release cycles and deployment accuracy.</li>
          <li>Partnered with global client teams to deliver customized application solutions, manage risk, and implement performance enhancements, resulting in improved user satisfaction and reduced production incidents.</li>
          <li>Executed functional and code reviews, ensuring compliance with design principles, maintainability standards, and security validation through SonarQube and Fortify.</li>
          <li>Acted as the technical liaison between development, QA, and support teams—facilitating communication and ensuring timely issue resolution across multiple time zones.</li>
          <li>Developed and delivered prototypes and proof-of-concept applications for clients to validate architectural feasibility and accelerate solution adoption.</li>
          <li>Championed knowledge-sharing and team enablement, mentoring junior developers, introducing structured review processes, and cultivating a culture of learning and excellence.</li>
        </ul>

        <div className="subhead">Key Projects</div>
        <ul>
          <li><span className="proj-name">TDM 2.0:</span> Built a self-service web application to automate test data generation, reducing data preparation time from several days to minutes, improving QA efficiency and test readiness.</li>
          <li><span className="proj-name">MMSY:</span> Led backend design for a money market trading system at JPMC, enabling institutional clients to trade directly via digital interfaces; improved trade throughput and reliability.</li>
          <li><span className="proj-name">XAMIN:</span> Architected a mainframe-to-UNIX data integration system, automating transfer and reconciliation of financial data between OMNI and XAMIN accounting systems.</li>
          <li><span className="proj-name">GRANIT &amp; KSEC2 (Credit Suisse):</span> Enhanced core banking applications supporting credit request processing and product catalog management, improving system performance and code maintainability.</li>
        </ul>
      </div>

      <div className="footer-band">Personal Details</div>
      <div className="footer-content">Date of Birth: 25th August 1982</div>
    </div>
  );
};
