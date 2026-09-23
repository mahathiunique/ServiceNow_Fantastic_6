import React, { useState } from 'react';
import { RESOURCE_ARTICLES } from '../../data/mockData';
import { ResourceArticle } from '../../types';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Share2,
  ChevronRight
} from 'lucide-react';

export const Learn: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);

  const categories = [
    'All',
    'Wellbeing',
    'Academic Stress',
    'Sleep',
    'Relationships',
    'Getting Support'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? RESOURCE_ARTICLES
    : RESOURCE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-0 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Student Resource Library
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy">
          Learn & Strengthen
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Non-clinical, evidence-grounded guides designed to help you navigate academic workloads,
          dorm sleep disruptions, and campus life with confidence.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-brand-primary text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-base text-brand-navy leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveArticle(article)}
                className="text-xs font-bold text-brand-primary hover:text-indigo-800 transition-colors flex items-center gap-1.5"
              >
                Read Article <ChevronRight className="w-4 h-4" />
              </button>
              <Bookmark className="w-4 h-4 text-slate-300 hover:text-brand-primary cursor-pointer transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-white px-2 py-0.5 rounded border border-slate-200">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeArticle.readTime}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-xl text-brand-navy">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 bg-white border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
              <p className="text-sm font-semibold text-brand-primary italic border-l-4 border-brand-primary pl-4 py-1 bg-indigo-50/40 rounded-r-xl">
                {activeArticle.summary}
              </p>

              <div className="space-y-4">
                {activeArticle.content.map((paragraph, i) => (
                  <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Actionable Tips Card */}
              <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-100 space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Key Takeaways & Action Steps
                </h4>
                <div className="space-y-2">
                  {activeArticle.actionTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Curated by Campus Student Wellbeing
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 bg-brand-navy text-white font-bold rounded-xl"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
