import React, { useState } from 'react';
import { Perspective } from '../types/portfolio';
import { 
  FileText, 
  Menu, 
  X,
  Printer,
  Play,
  Bot
} from 'lucide-react';

interface NavbarProps {
  currentPerspective?: Perspective;
  onSelectPerspective?: (perspective: Perspective) => void;
  onOpenVideoModal?: () => void;
  onOpenRecruiterDrawer: () => void;
  onOpenChatbot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVideoModal,
  onOpenRecruiterDrawer,
  onOpenChatbot
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="navbar-container no-print">
      <div className="container navbar-inner">
        {/* Brand Logo & Title with smooth top scroll */}
        <a href="#top" className="navbar-brand" onClick={handleScrollToTop} title="Scroll to top of portfolio">
          <div className="brand-logo-mark">
            <span>PG</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Pavan Kumar Ghanta</span>
            <span className="brand-role">Data &amp; Software Architect</span>
          </div>
        </a>

        {/* Desktop Section Links */}
        <nav className="navbar-nav desktop-nav">
          <a href="#top" onClick={handleScrollToTop}>Overview</a>
          <a href="#career-ladder">Career Ladder</a>
          <a href="#architecture">Architecture</a>
          <a href="#experience">Experience</a>
          <a href="#genai-lab">GenAI Lab</a>
          <a href="#competencies">Competencies</a>
          <a href="#education">Education</a>
        </nav>

        {/* Primary Navbar Actions */}
        <div className="navbar-actions">
          {onOpenChatbot && (
            <button
              className="btn btn-outline-cyan btn-sm ask-ai-nav-btn"
              onClick={onOpenChatbot}
              title="Ask Pavan's AI Assistant questions directly"
            >
              <Bot size={14} />
              <span>Ask AI</span>
            </button>
          )}

          <button 
            className="btn btn-primary btn-sm recruiter-cta-btn"
            onClick={onOpenRecruiterDrawer}
            title="Fast screening summary for Executive Recruiters & Hiring Managers"
          >
            <FileText size={14} />
            <span>Recruiter Fast-Screen</span>
          </button>

          <button 
            className="btn btn-secondary btn-icon-only"
            onClick={handlePrint}
            title="Print or Save Official Executive PDF Resume"
            aria-label="Print Resume"
          >
            <Printer size={15} />
          </button>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <nav className="mobile-nav-links">
            <a href="#top" onClick={handleScrollToTop}>Overview</a>
            <a href="#career-ladder" onClick={() => setMobileMenuOpen(false)}>Career Ladder</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)}>Architecture Deep Dives</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience &amp; Projects</a>
            <a href="#genai-lab" onClick={() => setMobileMenuOpen(false)}>GenAI &amp; RAG Lab</a>
            <a href="#competencies" onClick={() => setMobileMenuOpen(false)}>Competencies Matrix</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education &amp; Credentials</a>
          </nav>

          <div className="mobile-actions-panel">
            {onOpenChatbot && (
              <button 
                className="btn btn-outline-cyan btn-sm btn-full"
                onClick={() => { onOpenChatbot(); setMobileMenuOpen(false); }}
              >
                <Bot size={14} />
                <span>Ask AI Assistant</span>
              </button>
            )}
            {onOpenVideoModal && (
              <button
                className="btn btn-secondary btn-sm btn-full"
                onClick={() => { onOpenVideoModal(); setMobileMenuOpen(false); }}
              >
                <Play size={14} fill="currentColor" />
                <span>Watch 60s Briefing</span>
              </button>
            )}
            <button 
              className="btn btn-primary btn-sm btn-full"
              onClick={() => { onOpenRecruiterDrawer(); setMobileMenuOpen(false); }}
            >
              <FileText size={14} />
              <span>Open Recruiter Screening</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(2, 6, 23, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          height: var(--nav-height);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 16px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .brand-logo-mark {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #020617;
          font-weight: 800;
          font-size: 0.95rem;
          font-family: var(--font-mono);
          box-shadow: 0 0 15px var(--accent-cyan-glow);
          flex-shrink: 0;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .brand-name {
          font-weight: 800;
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .brand-role {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan-light);
          white-space: nowrap;
        }

        .perspective-lens-wrapper {
          display: flex;
          align-items: center;
        }

        .perspective-lens {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid var(--border-card);
          padding: 3px;
          border-radius: var(--radius-full);
          gap: 3px;
        }

        .lens-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-sans);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .lens-btn:hover {
          color: var(--text-primary);
        }

        .lens-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.3));
          color: #ffffff;
          border: 1px solid rgba(6, 182, 212, 0.4);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .desktop-nav a {
          color: var(--text-secondary);
          font-size: 0.825rem;
          font-weight: 600;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }

        .desktop-nav a:hover {
          color: var(--accent-cyan-light);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ask-ai-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-sm {
          padding: 7px 14px;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
        }

        .btn-icon-only {
          padding: 8px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
        }

        .btn-icon-only:hover {
          color: #ffffff;
        }

        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
        }

        /* Mobile Dropdown Menu */
        .mobile-dropdown-menu {
          position: absolute;
          top: var(--nav-height);
          left: 0;
          right: 0;
          background: rgba(2, 6, 23, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-card);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
        }

        .mobile-lens-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-lens-label {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .mobile-lens-buttons {
          display: flex;
          gap: 6px;
        }

        .mobile-lens-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 8px 10px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }

        .mobile-lens-btn.active {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan-light);
          border-color: var(--accent-cyan);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-links a {
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .mobile-actions-panel {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 10px;
          }
          .desktop-nav a {
            font-size: 0.775rem;
          }
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .perspective-lens-wrapper {
            display: none;
          }
          .recruiter-cta-btn span {
            display: none;
          }
          .recruiter-cta-btn {
            padding: 8px;
          }
        }
      `}</style>
    </header>
  );
};
