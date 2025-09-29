import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { Resume } from './components/Resume';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <PortfolioSection
        id="articles"
        title="Articles & Blogs"
        description="Thought leadership pieces, technical guides, and industry analysis covering authentication, security, DevOps, and emerging technologies."
        items={portfolioData.articles}
      />
      
      <div className="bg-gray-50">
        <PortfolioSection
          id="assets"
          title="Marketing Assets & Research"
          description="Strategic marketing materials, research reports, case studies, and innovative content formats that drive engagement and education."
          items={portfolioData.assets}
        />
      </div>
      
      <PortfolioSection
        id="media"
        title="Video & Media Content"
        description="Educational videos, product demonstrations, and multimedia content designed to simplify complex technical concepts."
        items={portfolioData.media}
      />
      
      <div className="bg-gray-50">
        <PortfolioSection
          id="webcasts"
          title="Webcasts & Events"
          description="Live event content, webinar campaigns, and interactive sessions that build community and drive product adoption."
          items={portfolioData.webcasts}
        />
      </div>
      
      <PortfolioSection
        id="community"
        title="Community & Engagement"
        description="Regular community programming and engagement initiatives that build lasting relationships with users and customers."
        items={portfolioData.community}
      />
      
      <div className="bg-gray-50">
        <PortfolioSection
          id="links"
          title="Digital Properties & Projects"
          description="End-to-end digital experiences, from concept to execution, including websites, portals, and interactive platforms."
          items={portfolioData.links}
        />
      </div>
      
      <Resume />
      
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Built with care using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;