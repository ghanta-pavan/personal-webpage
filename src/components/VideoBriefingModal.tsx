import React, { useState, useEffect } from 'react';
import { videoBriefingChapters, contactInfo } from '../data/portfolioData';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Mail, 
  Calendar 
} from 'lucide-react';

interface VideoBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoBriefingModal: React.FC<VideoBriefingModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const totalDuration = 60; // 60 seconds

  // Auto-advance timer when playing
  useEffect(() => {
    let interval: number | null = null;
    if (isOpen && isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isPlaying, totalDuration]);

  if (!isOpen) return null;

  // Determine active chapter based on currentTime
  let activeChapterIndex = 0;
  for (let i = videoBriefingChapters.length - 1; i >= 0; i--) {
    if (currentTime >= videoBriefingChapters[i].startTime) {
      activeChapterIndex = i;
      break;
    }
  }

  const activeChapter = videoBriefingChapters[activeChapterIndex];

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <div className="modal-overlay no-print" onClick={onClose}>
      <div className="glass-card modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-title">
            <span className="modal-eyebrow">Executive Video Pitch</span>
            <h3 className="modal-title">60-Second Architecture &amp; Leadership Briefing</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="video-player-container">
          <div className="simulated-video-screen">
            {/* Visualizer Background */}
            <div className="screen-visualizer-bg">
              <div className="wave-animation-bar"></div>
            </div>

            <div className="video-overlay-content">
              <div className="video-badge">
                <Sparkles size={13} />
                <span>Executive Briefing Reel</span>
              </div>
              <h4 className="video-chapter-headline">{activeChapter.title}</h4>
              <p className="video-chapter-sub">{activeChapter.description}</p>
            </div>

            {/* Play/Pause Center Button Overlay */}
            <button 
              className="center-play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} fill="currentColor" />}
            </button>

            {/* Bottom Timeline Bar */}
            <div className="player-bottom-bar">
              <div className="player-controls-row">
                <button 
                  className="control-icon-btn" 
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
                </button>
                <button className="control-icon-btn" onClick={handleReset} title="Restart from 0:00">
                  <RotateCcw size={15} />
                </button>
                <div className="time-display">
                  <span>0:{currentTime < 10 ? `0${currentTime}` : currentTime}</span> / <span>1:00</span>
                </div>
              </div>

              {/* Progress Bar with Chapter Markers */}
              <div className="progress-track-wrapper">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />
                {videoBriefingChapters.map((ch, idx) => (
                  <div 
                    key={idx}
                    className="chapter-tick"
                    style={{ left: `${(ch.startTime / totalDuration) * 100}%` }}
                    title={`${ch.timestampDisplay} - ${ch.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Chapters Scrub Bar */}
        <div className="chapters-scrub-bar">
          {videoBriefingChapters.map((chapter, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <button
                key={idx}
                className={`chapter-scrub-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleSeek(chapter.startTime)}
              >
                <div className="chapter-btn-top">
                  <span className="chapter-timestamp">{chapter.timestampDisplay}</span>
                  {isActive && <span className="now-playing-dot"></span>}
                </div>
                <span className="chapter-btn-title">{chapter.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Takeaways Callout */}
        <div className="chapter-takeaways-box">
          <h5 className="takeaways-title">
            <CheckCircle2 size={15} className="takeaway-icon" />
            <span>Key Takeaways for Chapter: {activeChapter.timestampDisplay}</span>
          </h5>
          <ul className="takeaways-list">
            {activeChapter.keyTakeaways.map((point, pIdx) => (
              <li key={pIdx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Modal Footer CTAs */}
        <div className="modal-footer-actions">
          <a href={`mailto:${contactInfo.email}?subject=Executive%20Interview%20Inquiry%20-%20Pavan%20Kumar%20Ghanta`} className="btn btn-primary">
            <Mail size={16} />
            <span>Contact Pavan</span>
          </a>
          <button className="btn btn-secondary" onClick={onClose}>
            <span>Continue Browsing Portfolio</span>
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-panel {
          width: 820px;
          max-width: 95vw;
          max-height: 90vh;
          overflow-y: auto;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border-card);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: var(--radius-lg);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 14px;
        }

        .modal-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
        }

        .modal-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
        }

        .modal-close-btn:hover {
          color: #fff;
        }

        .video-player-container {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #020617;
          border: 1px solid var(--border-card);
        }

        .simulated-video-screen {
          position: relative;
          width: 100%;
          height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);
        }

        .screen-visualizer-bg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          pointer-events: none;
          background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(6, 182, 212, 0.2) 10px, rgba(6, 182, 212, 0.2) 20px);
        }

        .video-overlay-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 80%;
        }

        .video-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        .video-chapter-headline {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
        }

        .video-chapter-sub {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .center-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.85);
          color: #020617;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
          transition: all var(--transition-fast);
          z-index: 5;
        }

        .center-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.08);
          background: #ffffff;
        }

        .player-bottom-bar {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(2, 6, 23, 0.75);
          backdrop-filter: blur(8px);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
        }

        .player-controls-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .control-icon-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
        }

        .time-display {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: #cbd5e1;
        }

        .progress-track-wrapper {
          position: relative;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo));
          border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }

        .chapter-tick {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ffffff;
          opacity: 0.6;
        }

        .chapters-scrub-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .chapter-scrub-btn {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-card);
          padding: 10px;
          border-radius: var(--radius-sm);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chapter-scrub-btn:hover {
          background: rgba(51, 65, 85, 0.7);
        }

        .chapter-scrub-btn.active {
          background: rgba(6, 182, 212, 0.15);
          border-color: var(--accent-cyan);
        }

        .chapter-btn-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chapter-timestamp {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan-light);
          font-weight: 700;
        }

        .now-playing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
        }

        .chapter-btn-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .chapter-takeaways-box {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-md);
          padding: 16px;
        }

        .takeaways-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--accent-cyan-light);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .takeaway-icon {
          color: var(--accent-cyan);
        }

        .takeaways-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.825rem;
          color: #cbd5e1;
          padding-left: 4px;
        }

        .takeaways-list li::before {
          content: "— ";
          color: var(--accent-cyan);
        }

        .modal-footer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .chapters-scrub-bar {
            grid-template-columns: 1fr 1fr;
          }
          .simulated-video-screen {
            height: 280px;
          }
        }
      `}</style>
    </div>
  );
};
