import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, Sparkles, Shield, Code, Palette, Cpu, Users } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mahathi M.',
      role: 'Lead Full-Stack Architect & Product Designer',
      expertise: 'React, TypeScript, Scalable Data Flow & UX Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      tag: 'Architecture'
    },
    {
      name: 'Aravind K.',
      role: 'Early Warning Engine & Signal Modeling Lead',
      expertise: 'Transparent Rule Engines & Time-Series Behavioral Indicators',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
      tag: 'Signal Logic'
    },
    {
      name: 'Sanya R.',
      role: 'Student Wellbeing UX & Accessibility Specialist',
      expertise: 'Cognitive Load Reduction, WCAG AAA, MindShift Micro-interactions',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250',
      tag: 'Wellbeing UX'
    },
    {
      name: 'Devansh T.',
      role: 'Enterprise Platform & Security Engineer',
      expertise: 'FERPA/HIPAA Tier Role-Based Access & Data Encryption',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      tag: 'Security & Auth'
    },
    {
      name: 'Kavya S.',
      role: 'Campus Services & Multi-Department Coordinator',
      expertise: '12-Department Workflow Mapping & Staff Outreach Tooling',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=250',
      tag: 'Department Flow'
    },
    {
      name: 'Nikhil P.',
      role: 'Rapid Prototyping & Recharts Analytics Engineer',
      expertise: 'Real-time State Synchronization & Interactive Data Visualization',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
      tag: 'Visualization'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Developed by FANTASTIC_6</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          Meet the Minds Behind EmoSpot
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We came together as <strong>FANTASTIC_6</strong> with a shared conviction: technology
          should listen to small signals early, keeping students supported and universities connected.
        </p>
      </div>

      {/* Motto Showcase Banner */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-indigo to-brand-primary text-white rounded-3xl p-8 sm:p-10 shadow-card text-center space-y-3">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          The FANTASTIC_6 Motto
        </div>
        <blockquote className="text-xl sm:text-2xl font-heading font-bold text-white max-w-3xl mx-auto italic">
          “Every student deserves to be heard, supported, and never left alone.”
        </blockquote>
        <p className="text-xs text-indigo-200 max-w-xl mx-auto">
          This guiding principle informs every line of code, non-clinical phrasing, and privacy safeguard in EmoSpot.
        </p>
      </div>

      {/* 6 Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((m, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={m.avatar}
                alt={m.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-100 shadow-sm"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                  {m.tag}
                </span>
                <h3 className="font-heading font-bold text-base text-brand-navy mt-1">
                  {m.name}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-brand-primary">
                {m.role}
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {m.expertise}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
