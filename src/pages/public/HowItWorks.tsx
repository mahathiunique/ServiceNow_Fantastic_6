import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  HeartHandshake,
  Cpu,
  Sparkles,
  LayoutDashboard,
  Send,
  ArrowRight,
  Shield,
  CheckCircle2,
  Info
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { navigateTo, setRole } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Student Check-In',
      subtitle: 'Voluntary & Low-Friction Reflection',
      icon: HeartHandshake,
      color: 'from-indigo-500 to-indigo-700 text-white',
      badge: 'Step 1: Voluntary Input',
      description:
        'Students take 30–60 seconds to voluntarily log how they are feeling today, what is affecting their routine (academic workload, sleep difficulty, relationships, financial stress), and whether they would welcome human outreach.',
      examples: ['Mood selection (Great to Awful)', 'Sleep & workload indicators', 'Support preference opt-in', 'Private student notes'],
      privacyNote: 'Students retain complete control over what they choose to share and when.'
    },
    {
      num: '02',
      title: 'Signal Analysis',
      subtitle: 'Transparent Deterministic Rules',
      icon: Cpu,
      color: 'from-sky-500 to-blue-700 text-white',
      badge: 'Step 2: Signal Engine',
      description:
        'Instead of opaque black-box machine learning, EmoSpot analyzes submitted check-in patterns over time using transparent, explainable campus guidelines. The system identifies sustained shifts in sleep disruption, academic pressure, or multi-day low mood.',
      examples: ['Multi-day shift detection', 'Co-occurrence of workload + fatigue', 'Rule-based categorization', 'Zero psychiatric diagnostic claims'],
      privacyNote: 'Explicitly non-clinical: We analyze routine friction, not mental pathology.'
    },
    {
      num: '03',
      title: 'Early Support Signal',
      subtitle: 'Dignified & Compassionate Notification',
      icon: Sparkles,
      color: 'from-violet-500 to-indigo-700 text-white',
      badge: 'Step 3: Signal Triaging',
      description:
        'Rather than generating alarming labels like "high-risk student" or "critical alert", EmoSpot generates compassionate, solution-focused signals such as "Support recommended" or "Follow-up may be helpful".',
      examples: ['“Support recommended”', '“Consider reaching out”', '“Wellbeing signal changed”', 'No scary red alerts or risk leaderboards'],
      privacyNote: 'Language is deliberately chosen to reduce stigma and maintain student dignity.'
    },
    {
      num: '04',
      title: 'Authorized Staff Dashboard',
      subtitle: 'Contextual Department Coordination',
      icon: LayoutDashboard,
      color: 'from-teal-500 to-emerald-700 text-white',
      badge: 'Step 4: Department Visibility',
      description:
        'Authorized university specialists (Counselling, Academic Advising, Residence Life) view relevant student signals within their authorized department scope. Staff see recent check-in context, previous notes, and suggested next steps.',
      examples: ['FERPA-compliant role gating', 'Cross-department referral status', 'Contextual check-in history', 'Suggested non-clinical actions'],
      privacyNote: 'Strictly restricted to authorized personnel who have a legitimate educational interest.'
    },
    {
      num: '05',
      title: 'Human-Led Outreach',
      subtitle: 'Compassionate, Student-Led Connection',
      icon: Send,
      color: 'from-brand-navy to-slate-900 text-white',
      badge: 'Step 5: Human Action',
      description:
        'A university staff member contacts the student via their preferred communication channel (Portal notification, university email, or scheduled conversation). The student retains full agency in how they participate.',
      examples: ['AI-assisted warm messaging', 'Provisional appointment booking', 'Tailored resource sharing', 'Ongoing follow-up journey'],
      privacyNote: 'Students choose whether to participate, with emergency safeguarding protocols applied only for immediate harm.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Challenge Track 02 — Early Warning Architecture
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          The 5-Step Early Support Workflow
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          From voluntary student self-reflection to authorized team coordination and continuous care:
          explore how EmoSpot connects signals without surveillance.
        </p>
      </div>

      {/* 5-Step Stepper Cards */}
      <div className="space-y-10">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover-lift transition-all relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-softBlue opacity-80" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Badge & Number */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-2xl font-black font-mono text-brand-navy">
                        STEP {s.num}
                      </span>
                      <p className="text-xs text-brand-primary font-bold">
                        {s.badge}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {s.subtitle}
                  </p>
                </div>

                {/* Right Description & Details */}
                <div className="lg:col-span-8 space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Bullet points of features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {s.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>

                  {/* Privacy / Ethics Callout */}
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600">
                    <Shield className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-brand-navy">Privacy Assurance:</strong> {s.privacyNote}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Flow CTA */}
      <div className="bg-gradient-to-r from-brand-indigo via-brand-deep to-brand-primary rounded-3xl p-8 sm:p-12 text-white shadow-card text-center space-y-6">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
          Test This Workflow In Demo Mode
        </h3>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto">
          Experience Step 1 by submitting Mahathi's check-in, then immediately switch to the
          Staff Portal to execute Steps 4 and 5 in real-time.
        </p>
        <button
          onClick={() => {
            setRole('student');
            navigateTo('student-checkin');
          }}
          className="px-6 py-3 rounded-full bg-brand-softBlue text-brand-navy font-bold text-xs hover:bg-sky-200 transition-all shadow-md inline-flex items-center gap-2"
        >
          Begin Step 1: Student Check-In <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
