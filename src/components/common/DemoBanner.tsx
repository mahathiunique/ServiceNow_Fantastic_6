import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, User, ShieldCheck, RefreshCw, Compass } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const { role, setRole, navigateTo, resetDemoData, currentPage } = useApp();

  return (
    <div className="bg-gradient-to-r from-brand-indigo via-brand-deep to-brand-primary text-white text-xs sm:text-sm py-2 px-4 shadow-md sticky top-0 z-50 transition-all border-b border-indigo-400/20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-semibold text-brand-softBlue bg-white/10 px-2.5 py-0.5 rounded-full border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            DEMO MODE
          </span>
          <span className="hidden md:inline text-indigo-100/90 font-medium">
            Active view:{' '}
            <strong className="text-white capitalize">
              {role === 'public'
                ? 'Public Showcase'
                : role === 'student'
                ? 'Student: Mahathi (CS, 2nd Yr)'
                : 'Staff: Dr. Aris Thorne (Counselling Dept)'}
            </strong>
          </span>
        </div>

        {/* Quick Switch Buttons for effortless judges presentation */}
        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              setRole('public');
              navigateTo('home');
            }}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              role === 'public'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Compass className="w-3 h-3" />
            Public Site
          </button>

          <button
            onClick={() => {
              setRole('student');
              navigateTo('student-dashboard');
            }}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              role === 'student'
                ? 'bg-brand-softBlue text-brand-navy font-semibold shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <User className="w-3 h-3" />
            Student Demo (Mahathi)
          </button>

          <button
            onClick={() => {
              setRole('staff');
              navigateTo('staff-dashboard');
            }}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              role === 'staff'
                ? 'bg-brand-mint text-brand-navy font-semibold shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            Staff Demo (Dr. Aris)
          </button>

          <button
            onClick={resetDemoData}
            title="Reset to clean baseline for rehearsal"
            className="p-1.5 rounded-full bg-white/10 text-indigo-200 hover:text-white hover:bg-white/20 transition-all ml-1"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
