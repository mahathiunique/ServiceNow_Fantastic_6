import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Heart,
  Shield,
  Clock,
  Users,
  Compass,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

export const About: React.FC = () => {
  const { navigateTo } = useApp();

  const values = [
    {
      name: 'Empathy',
      desc: 'Approaching every student signal with non-judgmental warmth and understanding.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    },
    {
      name: 'Privacy',
      desc: 'Transparent data boundaries where students control what they share and who sees it.',
      icon: Shield,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      name: 'Early Support',
      desc: 'Intervening gently at early friction points rather than waiting for acute crises.',
      icon: Clock,
      color: 'text-sky-600 bg-sky-50 border-sky-100'
    },
    {
      name: 'Human Connection',
      desc: 'Algorithms highlight signals; compassionate human specialists provide the care.',
      icon: Users,
      color: 'text-teal-600 bg-teal-50 border-teal-100'
    },
    {
      name: 'Inclusivity',
      desc: 'Accessible support frameworks designed for students from all backgrounds and needs.',
      icon: Compass,
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      name: 'Collaboration',
      desc: 'Bridging 12 university departments to ensure no student falls through administrative cracks.',
      icon: Building2,
      color: 'text-violet-600 bg-violet-50 border-violet-100'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header / Core Thesis */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Our Foundation & Philosophy
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          A student may experience one problem.<br />
          <span className="text-brand-primary">
            The university sees it across 12 disconnected services.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          EmoSpot exists to eliminate campus silos. We connect voluntary student reflection
          with proactive, compassionate care—fostering resilience before challenges multiply.
        </p>
      </div>

      {/* Purpose & Approach Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Purpose */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-brand-navy">
            Our Purpose
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            University students navigate unprecedented academic, financial, and social demands.
            Too often, support resources remain reactive: waiting for students to reach an acute
            breaking point before appointments are scheduled.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            EmoSpot transforms this dynamic. By inviting students to share brief, low-friction
            check-ins, universities notice subtle changes in sleep, workload, and routine early.
            We empower authorized department teams to offer quiet, supportive check-ins long before
            students face academic probation or severe distress.
          </p>
        </div>

        {/* Approach */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-brand-softBlue flex items-center justify-center font-bold">
            <Compass className="w-6 h-6 text-sky-600" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-brand-navy">
            Our Approach
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We operate on a simple yet rigorous philosophy: <strong>Support, Not Surveillance</strong>.
            EmoSpot is firmly non-diagnostic. We do not predict depression, assign clinical labels,
            or replace certified counsellors.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Instead, our transparent rule engine identifies changes in self-reported wellbeing
            patterns, flags “support may be helpful”, and equips authorized staff with contextual,
            compassionate outreach tools to start a human conversation.
          </p>
        </div>

      </div>

      {/* Values Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Our Core Values
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            The ethical pillars guiding every screen, algorithm, and notification in EmoSpot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover-lift space-y-3"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${v.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">
                  {v.name}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-white">
            See the 5-Step Early Support Architecture
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-md">
            Learn how voluntary check-ins travel through our signal engine to authorized staff dashboards.
          </p>
        </div>
        <button
          onClick={() => navigateTo('how-it-works')}
          className="px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-light text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-md"
        >
          View How It Works <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
