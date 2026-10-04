import React, { useState } from 'react';
import { Perspective } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CareerLadder } from './components/CareerLadder';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { ExperienceSection } from './components/ExperienceSection';
import { GenAILab } from './components/GenAILab';
import { CompetencyMatrix } from './components/CompetencyMatrix';
import { EducationSection } from './components/EducationSection';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { VideoBriefingModal } from './components/VideoBriefingModal';
import { PrintResumeView } from './components/PrintResumeView';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export function App() {
  const [perspective, setPerspective] = useState<Perspective>('all');
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [recruiterDrawerOpen, setRecruiterDrawerOpen] = useState<boolean>(false);
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);

  return (
    <>
      {/* Print-Only 1-to-1 resume.html Output */}
      <PrintResumeView />

      {/* Interactive Webpage (Screen Only) */}
      <div className="portfolio-app-root">
        {/* Sticky Executive Navigation with Lens Switcher */}
        <Navbar
          currentPerspective={perspective}
          onSelectPerspective={setPerspective}
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
          onOpenChatbot={() => setChatbotOpen(true)}
        />

        <main>
          {/* Executive Hero & Career Milestones */}
          <HeroSection
            onOpenVideoModal={() => setVideoModalOpen(true)}
            onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
          />

          {/* Core Leadership Principles & Governance Style */}
          <LeadershipSection />

          {/* Interactive 7-Stage Career Progression Stepper */}
          <CareerLadder />

          {/* Architectural Showcase & Case Study Topologies */}
          <ArchitectureShowcase perspective={perspective} />

          {/* 20-Year Experience Timeline & Project Catalog */}
          <ExperienceSection />

          {/* Applied AI & Generative AI Lab */}
          <GenAILab />

          {/* 6-Pillar Competency Matrix */}
          <CompetencyMatrix />

          {/* Academic Pedigree & Credentials */}
          <EducationSection />
        </main>

        {/* Executive Footer */}
        <Footer />

        {/* 60-Second Recruiter Fast-Screen Slide-over Drawer */}
        <RecruiterDrawer
          isOpen={recruiterDrawerOpen}
          onClose={() => setRecruiterDrawerOpen(false)}
        />

        {/* 60-Second Video Briefing Modal with Interactive Chapters */}
        <VideoBriefingModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />

        {/* Floating AI Executive Assistant Chatbot */}
        <Chatbot
          isOpen={chatbotOpen}
          onToggle={() => setChatbotOpen(!chatbotOpen)}
          onClose={() => setChatbotOpen(false)}
          onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />
      </div>
    </>
  );
}

export default App;
