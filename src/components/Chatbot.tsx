import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Sparkles,
  X,
  Send,
  User,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { searchKnowledgeBase } from '../utils/knowledgeBase';

interface MessageAction {
  label: string;
  action: 'open_recruiter_drawer' | 'open_video_modal' | 'scroll_to' | 'send_prompt';
  target?: string;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: MessageAction[];
  timestamp: string;
}

interface ChatbotProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  onOpenRecruiterDrawer?: () => void;
  onOpenVideoModal?: () => void;
}

const INITIAL_SUGGESTIONS = [
  "Executive Summary & Target Roles",
  "Azure-to-AWS ~70% FinOps Savings",
  "Apache Flink & Device Observability",
  "Tier-1 Banking Modernization",
  "Identity & DevSecOps Architecture",
  "How to Contact Pavan"
];

const getCurrentTimeString = () => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const sanitizeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const Chatbot: React.FC<ChatbotProps> = ({
  isOpen,
  onToggle,
  onClose,
  onOpenRecruiterDrawer,
  onOpenVideoModal
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Controlled vs Uncontrolled open state
  const isChatOpen = isOpen !== undefined ? isOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
    setHasUnread(false);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `👋 Hi! I'm Pavan's **AI Executive Assistant** powered by a semantic search engine grounded in Pavan's portfolio data.\n\nAsk me anything about Pavan's 20+ years in Enterprise & Data Architecture, FinOps savings, real-time streaming, or legacy mainframe modernization!`,
      actions: [
        { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
        { label: '🎬 60s Video Briefing', action: 'open_video_modal' }
      ],
      timestamp: getCurrentTimeString()
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const processUserQuery = (queryText: string) => {
    const { topChunk, matchScore } = searchKnowledgeBase(queryText);

    // If query has low relevance match, return helpful overview with guidance
    if (matchScore <= 2) {
      const fallbackActions: MessageAction[] = [
        { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
        { label: '🎬 60s Video Briefing', action: 'open_video_modal' },
        { label: '📐 Cross-Cloud Architecture', action: 'scroll_to', target: 'architecture' },
        { label: '🤖 AI & RAG Engineering', action: 'scroll_to', target: 'genai-lab' }
      ];

      return {
        responseText: `Pavan Kumar Ghanta is a **Software & Data Architect** with 20+ years leading enterprise cloud data lakehouses, real-time streaming (Flink/MSK), FinOps cost optimizations, and core banking modernizations.\n\nHere are popular topics you can ask me about:`,
        actions: fallbackActions
      };
    }

    return {
      responseText: topChunk.content,
      actions: topChunk.actionLabels || []
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const now = Date.now();
    const userMessage: Message = {
      id: `user-${now}`,
      sender: 'user',
      text: text.trim(),
      timestamp: getCurrentTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const { responseText, actions } = processUserQuery(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: responseText,
        actions,
        timestamp: getCurrentTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (actionItem: MessageAction) => {
    if (actionItem.action === 'open_recruiter_drawer') {
      onOpenRecruiterDrawer?.();
    } else if (actionItem.action === 'open_video_modal') {
      onOpenVideoModal?.();
    } else if (actionItem.action === 'scroll_to' && actionItem.target) {
      const elem = document.getElementById(actionItem.target);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (actionItem.action === 'send_prompt' && actionItem.target) {
      handleSendMessage(actionItem.target);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-reset-${Date.now()}`,
        sender: 'bot',
        text: `Conversation reset! How can I assist you with Pavan's architecture background today?`,
        actions: [
          { label: '⚡ Recruiter Fast Screen', action: 'open_recruiter_drawer' },
          { label: '🎬 60s Video Briefing', action: 'open_video_modal' }
        ],
        timestamp: getCurrentTimeString()
      }
    ]);
  };

  const formatMarkdownText = (text: string) => {
    let formatted = sanitizeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>');
    formatted = formatted.replace(/\n/g, '<br/>');

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  return (
    <>
      {/* Floating Chatbot Toggle Button */}
      {!isChatOpen && (
        <button
          className="chatbot-floating-trigger"
          onClick={handleToggle}
          aria-label="Open AI Assistant"
        >
          <div className="trigger-icon-wrapper">
            <Bot size={24} />
            <Sparkles size={12} className="sparkle-overlay" />
          </div>
          <span className="trigger-label">Ask AI Assistant</span>
          {hasUnread && <span className="unread-pulse-badge"></span>}
        </button>
      )}

      {/* Floating Chat Window */}
      {isChatOpen && (
        <div className="chatbot-window-container no-print">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-info">
              <div className="bot-avatar-box">
                <Bot size={20} />
                <span className="online-indicator"></span>
              </div>
              <div className="header-text-details">
                <div className="bot-title">
                  <span>Pavan's AI Assistant</span>
                  <span className="ai-badge">Semantic RAG</span>
                </div>
                <div className="bot-subtitle">Executive Knowledge Base</div>
              </div>
            </div>

            <div className="header-actions">
              <button
                className="icon-btn-ghost"
                onClick={handleReset}
                title="Reset Conversation"
              >
                <RefreshCw size={15} />
              </button>
              <button
                className="icon-btn-ghost"
                onClick={handleClose}
                title="Close Window"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chatbot-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message-row ${msg.sender === 'user' ? 'row-user' : 'row-bot'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="msg-avatar bot-avatar">
                    <Bot size={16} />
                  </div>
                )}

                <div className="msg-bubble-wrapper">
                  <div className={`msg-bubble ${msg.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                    <div className="msg-text">{formatMarkdownText(msg.text)}</div>
                    <div className="msg-time">{msg.timestamp}</div>
                  </div>

                  {/* Quick Action Buttons attached to Bot Message */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="msg-actions-grid">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          className="chat-action-btn"
                          onClick={() => handleActionClick(act)}
                        >
                          <span>{act.label}</span>
                          <ChevronRight size={13} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="msg-avatar user-avatar">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row row-bot">
                <div className="msg-avatar bot-avatar">
                  <Bot size={16} />
                </div>
                <div className="msg-bubble bubble-bot typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="chatbot-suggestions-bar">
            <span className="suggestions-label">Suggested:</span>
            <div className="suggestions-scroll">
              {INITIAL_SUGGESTIONS.map((prompt, i) => (
                <button
                  key={i}
                  className="suggestion-chip"
                  onClick={() => handleSendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="chatbot-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="chat-input-form"
            >
              <input
                type="text"
                className="chat-input"
                placeholder="Ask about architecture, FinOps, streaming..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Chatbot Styles */}
      <style>{`
        /* Floating Trigger Button */
        .chatbot-floating-trigger {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: linear-gradient(135deg, var(--bg-card), var(--bg-secondary));
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(12px);
          transition: all var(--transition-normal);
        }

        .chatbot-floating-trigger:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 40px rgba(6, 182, 212, 0.45);
          border-color: var(--accent-cyan-light);
        }

        .trigger-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan-light);
        }

        .sparkle-overlay {
          position: absolute;
          top: -3px;
          right: -3px;
          color: var(--accent-amber);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .unread-pulse-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          background: var(--accent-emerald);
          border: 2px solid var(--bg-primary);
          border-radius: 50%;
          animation: pulseGlow 1.5s infinite;
        }

        /* Floating Window Container */
        .chatbot-window-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 410px;
          max-width: calc(100vw - 32px);
          height: 580px;
          max-height: calc(100vh - 100px);
          z-index: 1000;
          background: rgba(11, 19, 41, 0.95);
          border: 1px solid rgba(6, 182, 212, 0.4);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(6, 182, 212, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chatSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Chat Header */
        .chatbot-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid var(--border-subtle);
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bot-avatar-box {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan-light);
        }

        .online-indicator {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 9px;
          height: 9px;
          background: var(--accent-emerald);
          border: 2px solid #0f172a;
          border-radius: 50%;
        }

        .header-text-details {
          display: flex;
          flex-direction: column;
        }

        .bot-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 0.925rem;
          color: var(--text-primary);
        }

        .ai-badge {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          padding: 1px 6px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.4);
          color: var(--accent-indigo-light);
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .bot-subtitle {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-btn-ghost {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 6px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn-ghost:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Chat Body */
        .chatbot-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(2, 6, 23, 0.6);
        }

        .chat-message-row {
          display: flex;
          gap: 10px;
          max-width: 90%;
        }

        .row-bot {
          align-self: flex-start;
        }

        .row-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .msg-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bot-avatar {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan-light);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .user-avatar {
          background: rgba(99, 102, 241, 0.2);
          color: var(--accent-indigo-light);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .msg-bubble-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .msg-bubble {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          line-height: 1.5;
          position: relative;
        }

        .bubble-bot {
          background: rgba(30, 41, 59, 0.85);
          border: 1px solid var(--border-card);
          color: var(--text-primary);
          border-top-left-radius: 2px;
        }

        .bubble-user {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.25));
          border: 1px solid rgba(6, 182, 212, 0.4);
          color: #f8fafc;
          border-top-right-radius: 2px;
        }

        .msg-text {
          white-space: pre-wrap;
          word-break: break-word;
        }

        .msg-time {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 4px;
          text-align: right;
        }

        .chat-link {
          color: var(--accent-cyan-light);
          text-decoration: underline;
        }

        /* Attached Actions */
        .msg-actions-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .chat-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-sm);
          color: var(--accent-cyan-light);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .chat-action-btn:hover {
          background: rgba(6, 182, 212, 0.2);
          border-color: var(--accent-cyan);
          color: #fff;
        }

        /* Typing Indicator */
        .typing-bubble {
          padding: 10px 14px;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-dots span {
          width: 6px;
          height: 6px;
          background: var(--accent-cyan-light);
          border-radius: 50%;
          animation: pulseGlow 0.8s infinite alternate;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        /* Suggestions Bar */
        .chatbot-suggestions-bar {
          padding: 8px 12px;
          background: rgba(15, 23, 42, 0.9);
          border-top: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          gap: 8px;
          overflow: hidden;
        }

        .suggestions-label {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--text-muted);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .suggestions-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
        }

        .suggestions-scroll::-webkit-scrollbar {
          display: none;
        }

        .suggestion-chip {
          white-space: nowrap;
          padding: 4px 10px;
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.725rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .suggestion-chip:hover {
          background: rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.4);
          color: var(--accent-cyan-light);
        }

        /* Footer Form */
        .chatbot-footer {
          padding: 12px 14px;
          background: rgba(15, 23, 42, 0.95);
          border-top: 1px solid var(--border-subtle);
        }

        .chat-input-form {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(2, 6, 23, 0.8);
          border: 1px solid var(--border-card);
          padding: 4px 6px 4px 14px;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .chat-input-form:focus-within {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }

        .chat-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.825rem;
          font-family: var(--font-sans);
        }

        .chat-input::placeholder {
          color: var(--text-muted);
        }

        .chat-send-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--accent-cyan);
          color: #020617;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .chat-send-btn:hover:not(:disabled) {
          background: var(--accent-cyan-light);
          transform: scale(1.05);
        }

        .chat-send-btn:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chatbot-window-container {
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
};
