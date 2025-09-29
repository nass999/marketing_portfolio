import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Product Marketing & Content Strategy
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting compelling narratives that drive adoption, build communities, and accelerate growth. 
          From technical content to go-to-market strategies, I help companies tell their story and connect with their audience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Content Strategy</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Product Marketing</span>
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Community Building</span>
          <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Technical Writing</span>
        </div>
        <a 
          href="#articles" 
          className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium group transition-colors"
        >
          Explore My Work
          <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}