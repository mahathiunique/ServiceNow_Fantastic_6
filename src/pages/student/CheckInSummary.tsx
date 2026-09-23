import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  HeartHandshake,
  LifeBuoy,
  BookOpen,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Smile,
  Activity,
  Milestone
} from 'lucide-react';

export const CheckInSummary: React.FC = () => {
  const { latestCheckInResult, student, navigateTo, requestHumanSupport } = useApp();

  const concerns = latestCheckInResult?.concerns || student.keyConcerns;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-0 space-y-8 animate-in fade-in duration-300">
      
      {/* Supportive Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-6 text-center">
        
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-brand-primary mx-auto flex items-center justify-center shadow-xs">
          <HeartHandshake className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Check-In Received
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy">
            Thanks for checking in, {student.name}.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Your responses suggest that some <strong>additional support may be helpful right now</strong>.
          </p>
        </div>

        {/* Self-Reported Signal Highlights */}
        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 text-left space-y-3">
          <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500">
            Summary of Shared Indicators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Wellbeing Pulse
              </span>
              <span className="text-sm font-bold text-brand-navy capitalize mt-0.5 block">
                {latestCheckInResult?.mood || 'Low'} Energy
              </span>
              <span className="text-[11px] text-slate-500">Signal changed</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Workload Factor
              </span>
              <span className="text-sm font-bold text-brand-navy mt-0.5 block">
                Academic Pressure
              </span>
              <span className="text-[11px] text-slate-500">Heavy coursework</span>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Physical Rhythm
              </span>
              <span className="text-sm font-bold text-brand-navy mt-0.5 block">
                Sleep Difficulty
              </span>
              <span className="text-[11px] text-slate-500">Winding down delay</span>
            </div>

          </div>
        </div>

        {/* Non-Diagnostic Ethical Assurance (Mandated in spec) */}
        <div className="bg-indigo-50/60 rounded-2xl p-4 border border-indigo-100 flex items-start gap-3 text-left">
          <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-brand-navy block mb-0.5">Non-Clinical Assurance:</strong>
            EmoSpot does not evaluate medical depression, anxiety disorders, or mental illness.
            Our signals exist solely to guide proactive, gentle human connection across campus.
          </div>
        </div>

      </div>

      {/* Recommended Next Steps Section (Mandated in section 11 of prompt) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-extrabold text-xl text-brand-navy">
            Recommended Next Steps
          </h2>
          <span className="text-xs text-slate-400">Choose what feels best</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Step 1: Explore quick support tools */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy">
                1. Explore Quick Support Tools
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Take 3 minutes to try our 4-7-8 breathing pacer or 5-4-3-2-1 sensory grounding exercise.
              </p>
            </div>
            <button
              onClick={() => navigateTo('student-quick-tools')}
              className="mt-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-brand-navy font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              Open Quick Tools <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 2: View relevant resources */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy">
                2. View Relevant Resources
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Read bite-sized guides on breaking up coursework overwhelm and dorm sleep routines.
              </p>
            </div>
            <button
              onClick={() => navigateTo('student-learn')}
              className="mt-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-brand-navy font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              Explore Learn Library <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3: Request human support */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy">
                3. Request Human Support
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Let an authorized coordinator from student support reach out warmly via your portal.
              </p>
            </div>
            <button
              onClick={() => {
                requestHumanSupport();
                navigateTo('student-journey');
              }}
              className="mt-2 w-full py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              Request Support Outreach <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 4: Schedule a conversation */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-700 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy">
                4. Schedule a Conversation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Review available times for a 20-minute coffee or virtual check-in with your support team.
              </p>
            </div>
            <button
              onClick={() => navigateTo('student-appointments')}
              className="mt-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-brand-navy font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              View Appointments <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* View Support Journey CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('student-journey')}
          className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
        >
          Track your updated Continuous Support Journey <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
