import React from 'react';
import { useApp } from '../../context/AppContext';
import { User, ShieldCheck, ArrowRight, HeartHandshake, Sparkles, Building2, Lock } from 'lucide-react';

export const RoleSelect: React.FC = () => {
  const { setRole, navigateTo } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Campus Portal Authentication
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
          Select Your Campus Role
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          EmoSpot provides strictly role-gated experiences. Choose your portal to proceed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Student Role Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card hover-lift transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
              <User className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                  Student Portal
                </h3>
                <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded">
                  Personal & Private
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Log daily check-ins, access guided quick support tools, track your personalized support journey,
                and connect with friendly campus specialists.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Access only your personal data
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Non-clinical self-care and goals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Full student agency and privacy control
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 pt-4">
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="w-full py-3 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              1-Click Student Demo (Mahathi)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('student-login')}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all"
            >
              Standard Student Login
            </button>
          </div>
        </div>

        {/* Staff Role Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-card hover-lift transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/50 text-sky-300 flex items-center justify-center font-bold">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Department Staff
                </h3>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  FERPA Gated
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Review early student signals, coordinate support across 12 departments, prioritize follow-up,
                and initiate compassionate human outreach.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Authorized departmental scope only
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Prioritized "Students Needing Follow-Up"
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Multi-channel outreach & appointment booking
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 pt-4">
            <button
              onClick={() => {
                setRole('staff');
                navigateTo('staff-dashboard');
              }}
              className="w-full py-3 bg-gradient-to-r from-brand-primary to-indigo-600 hover:brightness-110 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              1-Click Staff Demo (Dr. Aris Thorne)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('staff-login')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition-all"
            >
              Staff SSO / Credentials Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
