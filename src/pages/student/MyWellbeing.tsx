import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Activity,
  Heart,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Smile,
  Moon,
  BookOpen
} from 'lucide-react';

export const MyWellbeing: React.FC = () => {
  const { checkins, student, navigateTo } = useApp();

  const studentCheckins = checkins.filter((c) => c.studentId === student.id || c.studentId === 'stu-mahathi');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Self-Awareness & Consistency
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            My Wellbeing Trends
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Your private history of voluntary check-ins, self-reported shifts, and self-care notes.
          </p>
        </div>

        <button
          onClick={() => navigateTo('student-checkin')}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Activity className="w-4 h-4" /> Log Today's Reflection
        </button>
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Total Check-Ins
          </span>
          <span className="text-3xl font-extrabold font-heading text-brand-navy block">
            {studentCheckins.length}
          </span>
          <p className="text-xs text-slate-500">Consistent self-reflection</p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Primary Correlated Factor
          </span>
          <span className="text-sm font-extrabold font-heading text-brand-primary block truncate">
            {student.keyConcerns[0] || 'Academic Workload'}
          </span>
          <p className="text-xs text-slate-500">Self-reported coursework stress</p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Current Signal Status
          </span>
          <span className="text-sm font-extrabold font-heading text-amber-600 block">
            Support Recommended
          </span>
          <p className="text-xs text-slate-500">Early assistance available</p>
        </div>
      </div>

      {/* Check-In History Log */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <h3 className="font-heading font-extrabold text-lg text-brand-navy">
          Your Voluntary Check-In History
        </h3>

        <div className="space-y-4">
          {studentCheckins.map((chk) => (
            <div
              key={chk.id}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                  <span className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy">
                    Check-In ({chk.timestamp})
                  </span>
                </div>
                <span className="text-xs font-bold text-brand-primary capitalize bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100 self-start sm:self-auto">
                  Mood: {chk.mood}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Areas of Focus
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {chk.concerns.map((c, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Recent Change
                  </span>
                  <p className="text-slate-600 italic">
                    “{chk.changeRecent || 'Steady routine'}”
                  </p>
                </div>
              </div>

              {chk.summaryExplanation && (
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <strong className="text-brand-navy">Support Indicator:</strong> {chk.summaryExplanation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
