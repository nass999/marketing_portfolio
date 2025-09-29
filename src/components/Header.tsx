import React from 'react';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Nassir Khan</h1>
              <p className="text-sm text-gray-600">Product Marketing & Content Strategy</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#articles" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Articles</a>
            <a href="#assets" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Assets</a>
            <a href="#media" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Media</a>
            <a href="#webcasts" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Webcasts</a>
            <a href="#community" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Community</a>
            <a href="#resume" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Resume</a>
          </nav>
        </div>
      </div>
    </header>
  );
}