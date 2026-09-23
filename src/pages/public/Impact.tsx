import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  TrendingUp,
  Building2,
  Clock,
  Target,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BarChart3
} from 'lucide-react';

export const Impact: React.FC = () => {
  const { navigateTo } = useApp();

  const targetOutcomes = [
    {
      title: 'Early Identification',
      challenge: 'Students suffer silently until midterms or finals trigger sudden crisis visits.',
      solution: 'Voluntary low-friction check-ins capture shifts in sleep and workload weeks before failure.',
      target: 'Identified within 48h of sustained indicator change'
    },
    {
      title: 'Connected Department Routing',
      challenge: 'Support is siloed across 12 offices with no shared educational context.',
      solution: 'Cross-campus routing routes academic stress to Advising, and dorm friction to ResLife.',
      target: '100% of signals routed to the appropriate authorized department'
    },
    {
      title: 'Faster Human Outreach',
      challenge: 'Students wait up to 3 weeks for an initial consultation appointment.',
      solution: 'Authorized staff review signals and send personalized outreach within 1-2 business days.',
      target: 'Reduce first outreach wait from 21 days to < 48 hours'
    },
    {
      title: 'Continuous Support Journey',
      challenge: 'Support terminates when a student leaves a consultation room with zero follow-up.',
      solution: '7-stage visual roadmap guides student self-care and light-touch check-ins.',
      target: 'Zero students left in limbo without a clear next action'
    },
    {
      title: 'Transparent Campus Coordination',
      challenge: 'Staff duplicate efforts, causing administrative fatigue and student frustration.',
      solution: 'Shared authorized notes and coordinated calendar scheduling prevent overlapping outreach.',
      target: '95%+ cross-department coordination rate'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Challenge Track 02 — Early Warning Analysis
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          Grounding Innovation in the University Crisis
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          EmoSpot was specifically engineered to solve the three structural bottlenecks
          identified in our mid-sized university challenge scenario.
        </p>
      </div>

      {/* Challenge Context Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Baseline Reality
          </span>
          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            Challenge Context (Problem Statement)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Bottleneck 01
              </span>
              <TrendingUp className="w-5 h-5 text-rose-500" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-rose-600">
              +40%
            </div>
            <h3 className="font-heading font-bold text-sm text-brand-navy">
              Increase in Support Referrals
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              University mental health referrals have surged dramatically, leaving staff overwhelmed by
              reactive crisis handling rather than proactive prevention.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Bottleneck 02
              </span>
              <Building2 className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-amber-600">
              12
            </div>
            <h3 className="font-heading font-bold text-sm text-brand-navy">
              Fragmented University Departments
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Student services operate in silos—counselling, academic advising, housing, accessibility,
              financial aid—creating administrative mazes for vulnerable students.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Bottleneck 03
              </span>
              <Clock className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold font-heading text-brand-primary">
              3 Weeks
            </div>
            <h3 className="font-heading font-bold text-sm text-brand-navy">
              Wait for Initial Appointment
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Students wait up to 21 days for their first meeting. In that critical gap, manageable
              academic fatigue often spirals into coursework failure or withdrawal.
            </p>
          </div>
        </div>
      </div>

      {/* Target Outcomes Table */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
              Target Outcomes: The EmoSpot Solution
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Projected improvements achieved through proactive signal detection and coordinated routing.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
            Target Outcomes (Not Invented Data)
          </span>
        </div>

        <div className="space-y-4">
          {targetOutcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover-lift space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-heading font-bold text-base text-brand-navy flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-50 text-brand-primary text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  {item.title}
                </h4>
                <span className="text-xs font-bold text-brand-primary bg-indigo-50 px-2.5 py-1 rounded-xl border border-indigo-100">
                  Target: {item.target}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                <div className="bg-rose-50/60 p-3 rounded-2xl border border-rose-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
                    Without EmoSpot (Challenge Reality)
                  </span>
                  <p className="text-slate-700">{item.challenge}</p>
                </div>

                <div className="bg-emerald-50/60 p-3 rounded-2xl border border-emerald-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    With EmoSpot Architecture
                  </span>
                  <p className="text-slate-700">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
