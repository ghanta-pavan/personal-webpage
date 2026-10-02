import React from 'react';
import { 
  BrainCircuit, 
  Bot, 
  Code, 
  BookOpen
} from 'lucide-react';

export const GenAILab: React.FC = () => {
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

        <div className="genai-grid">
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
      </div>

      <style>{`
        .genai-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
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

        @media (max-width: 992px) {
          .genai-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
