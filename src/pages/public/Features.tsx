import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Milestone,
  Cpu,
  Building2,
  Lock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  LifeBuoy,
  BookOpen,
  Target,
  Users
} from 'lucide-react';

export const Features: React.FC = () => {
  const { navigateTo, setRole } = useApp();

  const studentFeatures = [
    { title: 'Voluntary Check-In', desc: '30-second mood, sleep, and pressure reflection designed for busy student schedules.' },
    { title: 'Support Journey Visualizer', desc: 'Real-time visibility into who is supporting you, scheduled sessions, and next steps.' },
    { title: 'Quick Support Tools', desc: 'Interactive 4-7-8 breathing pacer, 5-4-3-2-1 sensory grounding, and study reset timers.' },
    { title: 'Evidence-Based Learn Library', desc: 'Non-clinical guides on managing academic stress, dorm sleep habits, and campus resources.' },
    { title: 'Non-Competitive Goals', desc: 'Gentle micro-habits like 10-minute walks and regular bedtimes that build personal resilience.' },
    { title: 'Moderated Peer Community', desc: 'Anonymous peer-encouragement spaces protected by university moderation.' },
  ];

  const staffFeatures = [
    { title: 'Prioritized Attention Table', desc: 'Sort students needing follow-up by signal change, key concerns, and days since last contact.' },
    { title: 'Transparent Signal Explanations', desc: 'Full audit of why support was recommended under transparent rule-based logic.' },
    { title: 'Multi-Channel Outreach Suite', desc: 'Reach out via portal notifications, university email, or direct appointment booking.' },
    { title: 'AI-Assisted Compassionate Phrasing', desc: 'Pre-drafted warm, non-diagnostic messaging that saves staff time while respecting student dignity.' },
    { title: 'Cross-Department Coordination', desc: 'Collaborate seamlessly between Academic Advising, ResLife, Counselling, and Financial Aid.' },
    { title: 'Aggregated Campus Trends', desc: 'Track macro stress spikes around exam seasons without exposing individual student records.' },
  ];

  const corePillars = [
    { title: 'Early Support', desc: 'Reaching out before concerns compound into academic disruption or acute crisis.' },
    { title: 'Human-in-the-Loop', desc: 'Algorithms flag signals; certified university staff provide compassionate support.' },
    { title: 'Continuous Journey', desc: 'Support follows the student from check-in to resolution—not just a closed ticket.' },
    { title: 'Explainable Signals', desc: 'Zero black-box decisions. Staff and students understand the logic behind recommendations.' },
    { title: 'Role-Based Privacy', desc: 'Strict FERPA/HIPAA tier gating prevents student information from leaking across offices.' },
    { title: 'Support, Not Surveillance', desc: 'A firm ethical boundary: voluntary participation, no intrusive tracking.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Platform Capabilities
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          Purpose-Built for Two Campus Roles
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          EmoSpot delivers tailored interfaces for students seeking gentle care and university
          staff coordinating proactive support across 12 departments.
        </p>
      </div>

      {/* Two Column Role Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Student Column */}
        <div className="bg-white rounded-3xl p-8 border border-indigo-100 shadow-card space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                  Student Experience
                </h3>
                <p className="text-xs text-brand-primary font-medium">
                  Warm, Empowering & Non-Clinical
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
            >
              Open Portal <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {studentFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-brand-navy">
                    {f.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Column */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-card space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600/50 text-sky-300 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Staff Experience
                </h3>
                <p className="text-xs text-sky-300 font-medium">
                  Enterprise-Grade & FERPA Protected
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setRole('staff');
                navigateTo('staff-dashboard');
              }}
              className="text-xs font-bold text-sky-300 hover:underline flex items-center gap-1"
            >
              Open Portal <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {staffFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-white">
                    {f.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6 Core Architectural Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Our Architectural Novelty
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            What distinguishes EmoSpot from traditional ticketing portals or generic wellness apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {corePillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover-lift space-y-2"
            >
              <span className="text-xs font-mono font-bold text-brand-primary">
                0{idx + 1}
              </span>
              <h4 className="font-heading font-bold text-sm text-brand-navy">
                {p.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
