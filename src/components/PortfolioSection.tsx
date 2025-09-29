import React from 'react';
import { PortfolioCard } from './PortfolioCard';

interface PortfolioItem {
  title: string;
  description?: string;
  link?: string;
  type: 'article' | 'asset' | 'media' | 'webcast' | 'community' | 'link';
  archived?: boolean;
}

interface PortfolioSectionProps {
  id: string;
  title: string;
  description: string;
  items: PortfolioItem[];
}

export function PortfolioSection({ id, title, description, items }: PortfolioSectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}