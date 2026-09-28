import React, { useState } from 'react';
import { workExperience } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Cpu,
  Building,
  Calendar
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'cubic-0': true,
    'cubic-1': true,
    'cognizant-0': true
  });

  const toggleProject = (key: string) => {
    setExpandedProjects(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="section-wrapper experience-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>20-Year Enterprise Track Record</span>
          </div>
          <h2 className="section-title">Professional Experience &amp; Project Catalog</h2>
          <p className="section-subtitle">
            Two decades of deep technical delivery and architectural leadership spanning large-scale transit platforms at Cubic and tier-1 institutional banking at Cognizant.
          </p>
        </div>

        <div className="experience-timeline">
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-block">
              {/* Company Header Card */}
              <div className="glass-card company-card">
                <div className="company-header-top">
                  <div className="company-info-wrap">
                    <div className="company-logo-badge">
                      <Building size={20} />
                    </div>
                    <div>
                      <h3 className="company-title">{exp.company}</h3>
                      <div className="company-loc">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role History Badges */}
                  <div className="role-history-strip">
                    {exp.roles.map((r, rIdx) => (
                      <div key={rIdx} className={`role-badge ${r.isCurrent ? 'current' : ''}`}>
                        <span className="role-title-text">{r.title}</span>
                        <span className="role-date-text">{r.period}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Banner */}
                <div className="tech-banner">
                  <span className="tech-banner-label">Stack:</span>
                  <div className="tech-banner-chips">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tag-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Executive Summary Points */}
                <div className="company-summary-list">
                  {exp.summary.map((point, pIdx) => (
                    <div key={pIdx} className="summary-point-item">
                      <div className="point-icon">
                        <CheckCircle2 size={15} />
                      </div>
                      <p className="point-text">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects Grid */}
              <div className="projects-grid-section">
                <h4 className="projects-grid-title">Key Projects &amp; Solution Architectures:</h4>
                <div className="projects-grid">
                  {exp.keyProjects.map((proj, pIdx) => {
                    const key = `${exp.id}-${pIdx}`;
                    const isExpanded = expandedProjects[key];

                    return (
                      <div key={pIdx} className="glass-card project-item-card">
                        <div 
                          className="project-card-header"
                          onClick={() => toggleProject(key)}
                        >
                          <div className="project-title-wrap">
                            <span className="project-cat-pill">{proj.category.replace('-', ' ')}</span>
                            <h5 className="project-name">{proj.name}</h5>
                          </div>
                          <button className="project-toggle-btn" aria-label="Toggle project details">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="project-card-body">
                            <p className="project-desc">{proj.description}</p>
                            <div className="project-tags-wrap">
                              {proj.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="badge">{tag}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .experience-block {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .company-card {
          padding: 28px;
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.85));
        }

        .company-header-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }

        .company-info-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .company-logo-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .company-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .company-loc {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .role-history-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .role-badge {
          display: flex;
          flex-direction: column;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-card);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
        }

        .role-badge.current {
          border-color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.1);
        }

        .role-title-text {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .role-date-text {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .tech-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tech-banner-label {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan-light);
          font-weight: 700;
        }

        .tech-banner-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .company-summary-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary-point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .point-icon {
          color: var(--accent-cyan);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .point-text {
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .projects-grid-section {
          padding-left: 8px;
        }

        .projects-grid-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .project-item-card {
          padding: 16px 20px;
          background: rgba(15, 23, 42, 0.65);
        }

        .project-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          cursor: pointer;
          gap: 12px;
        }

        .project-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-cat-pill {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          text-transform: uppercase;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .project-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .project-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
        }

        .project-card-body {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .project-desc {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .project-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
