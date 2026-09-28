import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-wrapper education-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>Academic Pedigree</span>
          </div>
          <h2 className="section-title">Education &amp; Formal Credentials</h2>
          <p className="section-subtitle">
            Strong foundation from India's premier engineering institutions combined with advanced modern specializations in Machine Learning and Artificial Intelligence.
          </p>
        </div>

        <div className="education-grid">
          {educationList.map((edu, idx) => (
            <div key={idx} className="glass-card education-card">
              <div className="edu-icon-badge">
                <GraduationCap size={22} />
              </div>

              <div className="edu-content">
                <span className="edu-status-pill">{edu.status}</span>
                <h4 className="edu-degree">{edu.degree}</h4>
                <div className="edu-institution">{edu.institution}</div>
                
                <div className="edu-year-row">
                  <Calendar size={13} />
                  <span>{edu.year}</span>
                </div>

                {edu.honors && (
                  <div className="edu-honors">
                    <Award size={13} className="award-icon" />
                    <span>{edu.honors}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .education-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(15, 23, 42, 0.65);
        }

        .edu-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-indigo-light);
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .edu-status-pill {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
        }

        .edu-degree {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .edu-institution {
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .edu-year-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          margin-top: 4px;
        }

        .edu-honors {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--text-secondary);
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border-subtle);
          line-height: 1.4;
        }

        .award-icon {
          color: var(--accent-amber);
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
