import React from 'react';
import { useApp } from '../../context/AppContext';
import { SupportJourneyVisual } from '../../components/student/SupportJourneyVisual';
import { Sparkles, Shield, HeartHandshake, Milestone, LifeBuoy } from 'lucide-react';

export const MySupportJourney: React.FC = () => {
  const { student, requestHumanSupport } = useApp();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-brand-primary text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-brand-softBlue" />
          <span>Core Novelty Feature: The Continuous Support Loop</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
          My Continuous Support Journey
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
          Traditional campus software stops at the notification. EmoSpot creates an unbroken,
          transparent journey from your voluntary check-in through coordinated human care and
          sustainable resolution.
        </p>
      </div>

      {/* Main Timeline Visualizer */}
      <SupportJourneyVisual studentId={student.id} isCompact={false} />

      {/* Novelty Comparison Banner */}
      <div className="bg-gradient-to-r from-brand-indigo via-brand-deep to-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-softBlue">
          <Milestone className="w-4 h-4" />
          Why This Matters to Students & Universities
        </div>
        <h3 className="font-heading font-bold text-lg text-white">
          Beyond Early Warning: Continuous Human Stewardship
        </h3>
        <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed max-w-2xl">
          When students know exactly where their request sits, who has been assigned, and what the next action is,
          anxiety drops significantly. No student is left wondering if their check-in disappeared into an administrative void.
        </p>
      </div>

    </div>
  );
};
