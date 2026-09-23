import React from 'react';
import {
  WellbeingTrendsChart,
  ConcernsDistributionChart,
  DepartmentCoordinationChart
} from '../../components/staff/StaffCharts';
import {
  BarChart3,
  TrendingDown,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Campus-Wide Intelligence
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
          Trends & Wellbeing Analytics
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Aggregated, anonymized telemetry tracking campus stress curves, response times, and coordination efficacy.
        </p>
      </div>

      {/* KPI Metrics Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Avg Outreach Response
          </span>
          <span className="text-3xl font-extrabold font-heading text-emerald-600 block">
            1.8 hrs
          </span>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <TrendingDown className="w-3.5 h-3.5" /> -92% vs 3-week baseline
          </span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Follow-Up Completion
          </span>
          <span className="text-3xl font-extrabold font-heading text-brand-primary block">
            94.2%
          </span>
          <span className="text-[11px] text-slate-500">
            Closed loop confirmation
          </span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Students in Early Support
          </span>
          <span className="text-3xl font-extrabold font-heading text-sky-600 block">
            184
          </span>
          <span className="text-[11px] text-slate-500">
            Supported prior to midterms
          </span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Coordination Efficiency
          </span>
          <span className="text-3xl font-extrabold font-heading text-teal-600 block">
            96%
          </span>
          <span className="text-[11px] text-slate-500">
            Across 12 university departments
          </span>
        </div>

      </div>

      {/* Main Charts */}
      <div className="space-y-8">
        <WellbeingTrendsChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConcernsDistributionChart />
          <DepartmentCoordinationChart />
        </div>
      </div>

      {/* Privacy Callout */}
      <div className="bg-indigo-50/70 rounded-3xl p-6 border border-indigo-100 flex items-start gap-4 text-xs text-slate-700">
        <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
        <div>
          <strong className="text-brand-navy block mb-1">Differential Privacy & FERPA Compliance:</strong>
          All analytics in this dashboard reflect aggregated cohorts of 10+ students to prevent de-anonymization.
          Individual check-in notes or names are strictly excluded from campus-wide analytical exports.
        </div>
      </div>

    </div>
  );
};
