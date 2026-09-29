import React, { useState } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Bot, 
  Search, 
  FileText, 
  Code, 
  Check, 
  Send,
  BookOpen
} from 'lucide-react';

export const GenAILab: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('confluence-rag');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const sampleQueries = [
    {
      id: 'confluence-rag',
      title: 'Enterprise RAG Chatbot on Confluence & Swagger Specs',
      prompt: 'Explain the 8-role RACI governance model in the 750+ line database migration runbook.',
      answer: 'The Enterprise Migration Runbook codifies an 8-role RACI matrix: Architect (Accountable for ADR sign-off & latency SLAs), DBA Lead (Responsible for CDC sync & replication lag audit), DevOps (Responsible for Terraform provisioning), Network Ops (Consulted on VPN tunnel bandwidth), QA (Informed on collation checks), Product Owner (Sign-off on maintenance window), Incident Commander (Go/No-Go authority), and Developer Lead (Application consumer repoint).'
    },
    {
      id: 'defect-rca',
      title: 'AI-Driven Defect Root Cause Analysis & Prediction',
      prompt: 'Predict root cause for intermittent device heartbeat latency in transit validators.',
      answer: 'Model evaluated sliding-window telemetry anomalies: 92% confidence correlation between heartbeat timeouts and cellular carrier MTU packet fragmentation during cross-regional transit route switching. Automated remediation dispatch created Jira ticket with recommended VPN tunnel MSS clamping patch.'
    },
    {
      id: 'cloud-finops',
      title: 'GenAI Tool-Selection & Cloud FinOps Advisor',
      prompt: 'Compare AWS Direct Connect + MSK vs Managed VPN + Kinesis for Azure-to-AWS ingestion.',
      answer: 'FinOps trade-off analysis: Managed Site-to-Site VPN and on-demand Kinesis ingestion cut recurring network and streaming-platform spend by roughly 70% versus Direct Connect/ExpressRoute with self-managed Kafka/MSK, while accelerating the platform move toward serverless AWS services with <500ms throughput SLA.'
    }
  ];

  const activeQuery = sampleQueries.find(q => q.id === selectedPrompt) || sampleQueries[0];

  const handleSelect = (id: string) => {
    setIsSimulating(true);
    setSelectedPrompt(id);
    setTimeout(() => {
      setIsSimulating(false);
    }, 300);
  };

  return (
    <section id="genai-lab" className="section-wrapper genai-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <BrainCircuit size={14} />
            <span>Applied AI &amp; Innovation</span>
          </div>
          <h2 className="section-title">Generative AI &amp; Enterprise ML Lab</h2>
          <p className="section-subtitle">
            Bridging production systems engineering with state-of-the-art AI. Hands-on RAG architectures trained on enterprise documentation, predictive defect triage, and formal academic research at IIIT Bangalore.
          </p>
        </div>

        <div className="genai-layout-grid">
          {/* Left Column: AI Capabilities Showcase */}
          <div className="genai-capabilities-col">
            <div className="glass-card ai-feature-card">
              <div className="ai-feature-icon-box">
                <Bot size={22} />
              </div>
              <div className="ai-feature-content">
                <h4 className="ai-feature-title">RAG Chatbots on Confluence &amp; Swagger</h4>
                <p className="ai-feature-desc">
                  Engineered production prototypes indexing 45+ Confluence architecture specifications and OpenAPI / Swagger contracts with vector embeddings, allowing developers and product teams to interrogate complex platform logic in real time.
                </p>
                <div className="ai-tech-pills">
                  <span className="tag-chip">RAG</span>
                  <span className="tag-chip">Vector Search</span>
                  <span className="tag-chip">Confluence API</span>
                  <span className="tag-chip">Swagger</span>
                </div>
              </div>
            </div>

            <div className="glass-card ai-feature-card">
              <div className="ai-feature-icon-box">
                <BrainCircuit size={22} />
              </div>
              <div className="ai-feature-content">
                <h4 className="ai-feature-title">AI-Driven Defect Root Cause Prediction</h4>
                <p className="ai-feature-desc">
                  Formulated machine learning classifiers analyzing production error traces, stack dumps, and hardware telemetry, drastically reducing mean time to triage (MTTR) by suggesting precise code-level fixes.
                </p>
                <div className="ai-tech-pills">
                  <span className="tag-chip">Defect RCA</span>
                  <span className="tag-chip">NLP Classification</span>
                  <span className="tag-chip">Telemetry ML</span>
                  <span className="tag-chip">Jira Automation</span>
                </div>
              </div>
            </div>

            <div className="glass-card ai-feature-card">
              <div className="ai-feature-icon-box">
                <BookOpen size={22} />
              </div>
              <div className="ai-feature-content">
                <h4 className="ai-feature-title">Academic AI Rigor: IIIT-B &amp; LJMU</h4>
                <p className="ai-feature-desc">
                  Pursuing Master of Science in AI &amp; Machine Learning from IIIT Bangalore and Liverpool John Moores University (Upgrad), specializing in deep neural architectures, LLM fine-tuning, and transformer attention mechanisms.
                </p>
                <div className="ai-tech-pills">
                  <span className="tag-chip">IIIT-B</span>
                  <span className="tag-chip">Transformers</span>
                  <span className="tag-chip">LLM Tuning</span>
                  <span className="tag-chip">Deep Learning</span>
                </div>
              </div>
            </div>

            <div className="glass-card ai-feature-card">
              <div className="ai-feature-icon-box">
                <Code size={22} />
              </div>
              <div className="ai-feature-content">
                <h4 className="ai-feature-title">AI-Assisted SDLC Velocity</h4>
                <p className="ai-feature-desc">
                  Adopted modern AI engineering practices using GitHub Copilot and Claude/Claude Code for rapid code generation, automated test scaffolding, and technical documentation, shortening delivery cycles across Java/Spring Boot and Terraform squads.
                </p>
                <div className="ai-tech-pills">
                  <span className="tag-chip">GitHub Copilot</span>
                  <span className="tag-chip">Claude / Claude Code</span>
                  <span className="tag-chip">AI-Assisted SDLC</span>
                  <span className="tag-chip">Terraform IaC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RAG Explorer Simulator */}
          <div className="genai-simulator-col">
            <div className="glass-card rag-terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-title">
                  <Sparkles size={13} />
                  <span>Enterprise RAG Context Explorer (Simulated)</span>
                </div>
                <span className="terminal-status-pill">Ready</span>
              </div>

              <div className="terminal-body">
                <span className="terminal-prompt-label">Select Enterprise RAG Query:</span>
                <div className="preset-prompts-list">
                  {sampleQueries.map(q => (
                    <button
                      key={q.id}
                      className={`prompt-chip-btn ${selectedPrompt === q.id ? 'active' : ''}`}
                      onClick={() => handleSelect(q.id)}
                    >
                      <span>{q.title}</span>
                    </button>
                  ))}
                </div>

                <div className="terminal-query-box">
                  <div className="user-query-line">
                    <span className="prompt-symbol">&gt;</span>
                    <span className="prompt-text">{activeQuery.prompt}</span>
                  </div>
                </div>

                <div className="terminal-response-box">
                  <div className="response-header">
                    <Bot size={15} className="bot-icon" />
                    <span>RAG Grounded Response (Vector Context Verified):</span>
                  </div>
                  {isSimulating ? (
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <p className="rag-answer-text">
                      {activeQuery.answer}
                    </p>
                  )}
                </div>
              </div>

              <div className="terminal-footer">
                <span className="terminal-footer-meta">
                  Vector Store: Confluence &bull; Swagger Specs &bull; Runbook Corpus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .genai-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .genai-capabilities-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ai-feature-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 22px;
          background: rgba(15, 23, 42, 0.65);
        }

        .ai-feature-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-indigo-light);
          flex-shrink: 0;
        }

        .ai-feature-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ai-feature-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ai-feature-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.55;
        }

        .ai-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
        }

        .rag-terminal-card {
          padding: 0;
          overflow: hidden;
          background: #030712;
          border: 1px solid rgba(6, 182, 212, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid var(--border-subtle);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .terminal-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .terminal-dots .red { background: #ef4444; }
        .terminal-dots .yellow { background: #f59e0b; }
        .terminal-dots .green { background: #10b981; }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--accent-cyan-light);
          font-weight: 600;
        }

        .terminal-status-pill {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .terminal-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .terminal-prompt-label {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .preset-prompts-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .prompt-chip-btn {
          text-align: left;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-card);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-family: var(--font-sans);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .prompt-chip-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .prompt-chip-btn.active {
          background: rgba(6, 182, 212, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan-light);
          font-weight: 600;
        }

        .terminal-query-box {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-subtle);
          padding: 12px 14px;
          border-radius: var(--radius-sm);
        }

        .user-query-line {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: #f1f5f9;
        }

        .prompt-symbol {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .terminal-response-box {
          background: rgba(6, 182, 212, 0.04);
          border: 1px solid rgba(6, 182, 212, 0.15);
          padding: 16px;
          border-radius: var(--radius-sm);
        }

        .response-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--accent-cyan-light);
          margin-bottom: 8px;
          font-weight: 600;
        }

        .rag-answer-text {
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 8px 0;
        }

        .typing-indicator span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          animation: pulseGlow 1s infinite alternate;
        }

        .terminal-footer {
          padding: 10px 18px;
          background: rgba(15, 23, 42, 0.8);
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .genai-layout-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
