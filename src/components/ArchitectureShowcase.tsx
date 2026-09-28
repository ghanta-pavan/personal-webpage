import React, { useState } from 'react';
import { architectureDeepDives } from '../data/portfolioData';
import { Perspective } from '../types/portfolio';
import { 
  Layers, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight, 
  Activity, 
  Check, 
  Network
} from 'lucide-react';

interface ArchitectureShowcaseProps {
  perspective: Perspective;
}

export const ArchitectureShowcase: React.FC<ArchitectureShowcaseProps> = ({ perspective }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'decisions' | 'governance' | 'impact'>>({});

  const categories = [
    { id: 'all', label: 'All Architectures' },
    { id: 'cross-cloud', label: 'Cross-Cloud & Ingestion' },
    { id: 'stream-observability', label: 'Flink Streaming & Observability' },
    { id: 'governance-runbook', label: '750+ Line Runbook & RACI' },
    { id: 'identity-security', label: 'Identity Federation & MFA' },
    { id: 'legacy-modernization', label: 'Banking & Mainframe Modernization' }
  ];

  const filteredStudies = architectureDeepDives.filter(study => {
    // Category filter
    if (selectedCategory !== 'all' && study.category !== selectedCategory) {
      return false;
    }
    // Perspective filter
    if (perspective === 'leadership') {
      return ['governance-runbook', 'identity-security', 'cross-cloud'].includes(study.category);
    }
    if (perspective === 'architecture') {
      return ['cross-cloud', 'stream-observability', 'legacy-modernization'].includes(study.category);
    }
    return true;
  });

  const getActiveTab = (studyId: string) => {
    return activeTabMap[studyId] || (perspective === 'leadership' ? 'governance' : 'decisions');
  };

  const setActiveTab = (studyId: string, tab: 'decisions' | 'governance' | 'impact') => {
    setActiveTabMap(prev => ({ ...prev, [studyId]: tab }));
  };

  return (
    <section id="architecture" className="section-wrapper architecture-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>Production Architectures</span>
          </div>
          <h2 className="section-title">Architectural Deep Dives &amp; System Topologies</h2>
          <p className="section-subtitle">
            Enterprise topologies engineered for high-concurrency transit operations and tier-1 financial institutions. Explore trade-offs across architectural decisions, 8-role RACI governance, and Cloud FinOps impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filters-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="case-studies-stack">
          {filteredStudies.map(study => {
            const currentTab = getActiveTab(study.id);

            return (
              <div key={study.id} className="glass-card case-study-card">
                {/* Case Study Header */}
                <div className="study-header">
                  <div className="study-title-block">
                    <span className="study-company-badge">{study.company}</span>
                    <h3 className="study-title">{study.title}</h3>
                    <p className="study-summary">{study.summary}</p>
                  </div>
                </div>

                {/* Problem Statement Box */}
                <div className="problem-statement-box">
                  <span className="problem-label">Engineering Challenge:</span>
                  <span className="problem-text">{study.problemStatement}</span>
                </div>

                {/* Interactive Topological Flow Visualizer */}
                <div className="topology-visualizer">
                  <div className="topology-title-bar">
                    <Network size={14} />
                    <span>Topological Data &amp; Control Flow</span>
                  </div>
                  <div className="topology-nodes-strip">
                    {study.topology.nodes.map((node, nIdx) => (
                      <React.Fragment key={nIdx}>
                        <div className={`topology-node node-type-${node.type}`}>
                          <span className="node-type-label">{node.type}</span>
                          <span className="node-name">{node.name}</span>
                        </div>
                        {nIdx < study.topology.nodes.length - 1 && (
                          <div className="topology-arrow">
                            <ArrowRight size={14} />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="topology-caption">
                    <span>Flow: </span>{study.topology.flowSummary}
                  </div>
                </div>

                {/* 3-Tab Trade-Off Navigation */}
                <div className="tradeoff-tabs-nav">
                  <button 
                    className={`tab-btn ${currentTab === 'decisions' ? 'active' : ''}`}
                    onClick={() => setActiveTab(study.id, 'decisions')}
                  >
                    <Cpu size={14} />
                    <span>Architectural Decisions</span>
                  </button>
                  <button 
                    className={`tab-btn ${currentTab === 'governance' ? 'active' : ''}`}
                    onClick={() => setActiveTab(study.id, 'governance')}
                  >
                    <ShieldCheck size={14} />
                    <span>Governance &amp; RACI</span>
                  </button>
                  <button 
                    className={`tab-btn ${currentTab === 'impact' ? 'active' : ''}`}
                    onClick={() => setActiveTab(study.id, 'impact')}
                  >
                    <DollarSign size={14} />
                    <span>FinOps &amp; Quantifiable Impact</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="tradeoff-tab-content">
                  {currentTab === 'decisions' && (
                    <div className="tab-pane">
                      <h4 className="pane-heading">Architectural Rationale &amp; Design Decisions</h4>
                      <ul className="decisions-list">
                        {study.architecturalDecisions.map((dec, dIdx) => (
                          <li key={dIdx} className="decision-item">
                            <div className="decision-icon">
                              <Check size={14} />
                            </div>
                            <span>{dec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTab === 'governance' && (
                    <div className="tab-pane">
                      <h4 className="pane-heading">Delivery Ownership, RACI &amp; Stakeholder Governance</h4>
                      {study.governanceAndRaci.raciRoles && (
                        <div className="raci-roles-wrap">
                          <span className="raci-label">RACI Stakeholders:</span>
                          <div className="raci-chips">
                            {study.governanceAndRaci.raciRoles.map((role, rIdx) => (
                              <span key={rIdx} className="badge badge-indigo">{role}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <ul className="decisions-list" style={{ marginTop: '12px' }}>
                        {study.governanceAndRaci.governanceProcesses.map((proc, pIdx) => (
                          <li key={pIdx} className="decision-item">
                            <div className="decision-icon">
                              <ShieldCheck size={14} />
                            </div>
                            <span>{proc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="stakeholder-note">
                        <strong>Executive Alignment: </strong>{study.governanceAndRaci.stakeholderEngagement}
                      </div>
                    </div>
                  )}

                  {currentTab === 'impact' && (
                    <div className="tab-pane">
                      <h4 className="pane-heading">Measurable Outcomes &amp; Cloud Economics</h4>
                      <div className="impact-grid">
                        <div className="impact-item">
                          <span className="impact-label">Performance &amp; Scale</span>
                          <span className="impact-val">{study.quantifiableImpact.performance}</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-label">FinOps &amp; TCO Optimization</span>
                          <span className="impact-val">{study.quantifiableImpact.finOpsAndTco}</span>
                        </div>
                        <div className="impact-item">
                          <span className="impact-label">Reliability &amp; Risk Mitigation</span>
                          <span className="impact-val">{study.quantifiableImpact.reliabilityAndGovernance}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Stack Badges */}
                <div className="study-tech-footer">
                  <span className="tech-footer-label">Technologies:</span>
                  <div className="tech-pills-wrap">
                    {study.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tag-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .category-filters-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .cat-filter-btn {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-card);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .cat-filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .cat-filter-btn.active {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan-light);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.2);
        }

        .case-studies-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .case-study-card {
          padding: 32px;
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.65), rgba(15, 23, 42, 0.85));
          border: 1px solid var(--border-card);
        }

        .study-header {
          margin-bottom: 16px;
        }

        .study-company-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }

        .study-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .study-summary {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .problem-statement-box {
          background: rgba(15, 23, 42, 0.7);
          border-left: 3px solid var(--accent-amber);
          padding: 12px 16px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.875rem;
          margin-bottom: 24px;
        }

        .problem-label {
          font-weight: 700;
          color: #fcd34d;
          margin-right: 8px;
        }

        .problem-text {
          color: #e2e8f0;
        }

        .topology-visualizer {
          background: rgba(2, 6, 23, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 18px;
          margin-bottom: 24px;
        }

        .topology-title-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .topology-nodes-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
        }

        .topology-node {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid var(--border-card);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          min-width: 140px;
          flex-shrink: 0;
        }

        .node-type-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 600;
        }

        .node-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .node-type-source { border-left: 3px solid var(--accent-indigo); }
        .node-type-ingress { border-left: 3px solid var(--accent-cyan); }
        .node-type-processing { border-left: 3px solid var(--accent-amber); }
        .node-type-storage { border-left: 3px solid var(--accent-emerald); }
        .node-type-consumer { border-left: 3px solid #ec4899; }

        .topology-arrow {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .topology-caption {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 12px;
          line-height: 1.5;
        }

        .topology-caption span {
          font-weight: 700;
          color: var(--accent-cyan-light);
        }

        .tradeoff-tabs-nav {
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 18px;
          overflow-x: auto;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn.active {
          color: var(--accent-cyan-light);
          border-bottom-color: var(--accent-cyan);
        }

        .tradeoff-tab-content {
          padding-bottom: 20px;
        }

        .pane-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .decisions-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .decision-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          color: #cbd5e1;
          line-height: 1.55;
        }

        .decision-icon {
          color: var(--accent-cyan);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .raci-roles-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .raci-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .raci-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .stakeholder-note {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: var(--text-secondary);
          margin-top: 14px;
        }

        .stakeholder-note strong {
          color: var(--accent-indigo-light);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .impact-item {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-card);
          padding: 14px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .impact-label {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-emerald);
          font-weight: 700;
        }

        .impact-val {
          font-size: 0.875rem;
          color: #f1f5f9;
          line-height: 1.45;
        }

        .study-tech-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }

        .tech-footer-label {
          font-size: 0.775rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .tech-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .case-study-card {
            padding: 20px;
          }
          .study-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
