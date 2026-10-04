import React, { useState } from 'react';
import { workExperience } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Building,
  Calendar,
  Wrench
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

                {/* Role Details Breakdown */}
                {exp.roleDetails && exp.roleDetails.length > 0 && (
                  <div className="role-details-container">
                    {exp.roleDetails.map((role, rdIdx) => (
                      <div key={rdIdx} className="role-detail-card">
                        <div className="role-detail-header">
                          <div className="role-detail-title-group">
                            <h4 className="role-detail-title">{role.title}</h4>
                            <span className="role-detail-period">{role.period}</span>
                            {role.isCurrent && (
                              <span className="role-current-tag">Current Role</span>
                            )}
                          </div>
                          {role.clients && (
                            <div className="role-clients-tag">
                              <strong>Clients:</strong> {role.clients}
                            </div>
                          )}
                        </div>

                        {role.keyTools && role.keyTools.length > 0 && (
                          <div className="role-tools-wrap">
                            <div className="role-tools-header">
                              <Wrench size={13} className="text-accent" />
                              <span className="role-tools-label">Key Tools &amp; Technologies:</span>
                            </div>
                            <div className="role-tools-chips">
                              {role.keyTools.map((tool, tIdx) => (
                                <span key={tIdx} className="role-tool-chip">{tool}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        <ul className="role-achievements-list">
                          {role.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="role-achievement-item">
                              <div className="ach-bullet">▸</div>
                              <div className="ach-content">
                                <strong className="ach-title">{ach.title}:</strong>{' '}
                                <span className="ach-desc">{ach.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Projects Grid */}
              <div className="projects-grid-section">
                <h4 className="projects-grid-title">Selected Architecture &amp; Delivery Projects:</h4>
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
          background: rgba(15, 23, 42, 0.65);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .company-header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .company-info-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .company-logo-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .company-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .company-loc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.775rem;
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
          padding: 6px 12px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }

        .role-badge.current {
          background: rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.4);
        }

        .role-title-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .role-date-text {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--accent-cyan-light);
        }

        /* Role Details Breakdown */
        .role-details-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .role-detail-card {
          padding: 20px;
          background: rgba(18, 35, 63, 0.45);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .role-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .role-detail-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .role-detail-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
        }

        .role-detail-period {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .role-current-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .role-clients-tag {
          font-size: 0.775rem;
          color: #cbd5e1;
        }

        .role-tools-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(11, 19, 41, 0.6);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .role-tools-header {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .role-tools-label {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
        }

        .text-accent {
          color: var(--accent-cyan);
        }

        .role-tools-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .role-tool-chip {
          font-size: 0.7rem;
          padding: 2px 6px;
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 4px;
          color: #e2e8f0;
        }

        .role-achievements-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }

        .role-achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.825rem;
          line-height: 1.5;
          color: #cbd5e1;
        }

        .ach-bullet {
          color: var(--accent-cyan);
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.4;
          flex-shrink: 0;
        }

        .ach-title {
          color: #ffffff;
        }

        .ach-desc {
          color: #cbd5e1;
        }

        /* Key Projects Section */
        .projects-grid-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .projects-grid-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          padding-left: 4px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .project-item-card {
          padding: 16px 20px;
          background: rgba(15, 23, 42, 0.5);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
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
          letter-spacing: 0.5px;
        }

        .project-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .project-toggle-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .project-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px solid var(--border-subtle);
        }

        .project-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .badge {
          font-size: 0.7rem;
          padding: 2px 8px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: var(--radius-full);
          color: var(--accent-indigo-light);
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
