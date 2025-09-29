import React from 'react';
import { ExternalLink, FileText, Video, Users, Globe } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description?: string;
  link?: string;
  type: 'article' | 'asset' | 'media' | 'webcast' | 'community' | 'link';
  archived?: boolean;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const getIcon = () => {
    switch (item.type) {
      case 'article': return <FileText className="w-5 h-5" />;
      case 'media': return <Video className="w-5 h-5" />;
      case 'community': return <Users className="w-5 h-5" />;
      case 'link': return <Globe className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = () => {
    switch (item.type) {
      case 'article': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'media': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'community': return 'bg-green-50 text-green-700 border-green-200';
      case 'link': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getTypeColor()}`}>
            {getIcon()}
            <span className="ml-1.5 capitalize">{item.type}</span>
          </div>
          {item.archived && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Archived</span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {item.title}
        </h3>
        
        {item.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
        )}
        
        {item.link && (
          <div className="flex items-center justify-between">
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm group-hover:underline transition-colors"
            >
              View Project
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        )}
      </div>
      
      <div className="h-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-orange-400 transition-all duration-500"></div>
    </div>
  );
}