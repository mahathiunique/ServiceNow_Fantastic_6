import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Student } from '../../types';
import {
  Users,
  AlertCircle,
  Clock,
  HeartHandshake,
  Send,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  TrendingDown,
  Building2,
  CheckCircle2
} from 'lucide-react';
import {
  WellbeingTrendsChart,
  ConcernsDistributionChart,
  DepartmentCoordinationChart
} from '../../components/staff/StaffCharts';
import { OutreachModal } from '../../components/staff/OutreachModal';

export const StaffDashboard: React.FC = () => {
  const { students, staff, navigateTo, setSelectedStudentId, outreachRecords, appointments } = useApp();

  const [activeOutreachStudent, setActiveOutreachStudent] = useState<Student | null>(null);

  // Derived KPI calculations
  const totalStudents = 1420;
  const needingAttentionCount = students.filter(
    (s) => s.supportStatus === 'Pending Follow-Up' || s.priority === 'Priority 1'
  ).length;
  const followUpsPending = students.filter((s) => s.supportStatus === 'Pending Follow-Up').length;
  const supportRequests = students.filter((s) => s.signalType === 'support_recommended').length;
  const avgResponseTime = '1.8 hrs';

  const studentsNeedingFollowUp = students.slice(0, 4);

  const handleOpenStudent = (studentId: string) => {
    setSelectedStudentId(studentId);
    navigateTo('staff-student-detail');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Staff Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 text-sky-300 text-xs font-semibold border border-indigo-800/60">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
            <span>Authorized Department View: {staff.department}</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Student Wellbeing Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Welcome back, {staff.name}. Review voluntary check-in signals, prioritize compassionate follow-up,
            and coordinate timely early support across campus services.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={() => navigateTo('staff-attention')}
            className="px-5 py-3 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4" />
            View Attention Queue ({needingAttentionCount})
          </button>
        </div>
      </div>

      {/* 5 KPI Cards (Mandated in section 20 of prompt) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1: Total Students */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Total Students
            </span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-navy block">
            {totalStudents}
          </span>
          <p className="text-[11px] text-slate-500">Under department scope</p>
        </div>

        {/* Card 2: Students Needing Attention */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <div className="flex items-center justify-between text-rose-500">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
              Needing Attention
            </span>
            <AlertCircle className="w-4 h-4" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold font-heading text-rose-600 block">
            {needingAttentionCount}
          </span>
          <p className="text-[11px] text-slate-500">Signal changed recently</p>
        </div>

        {/* Card 3: Follow-Ups Pending */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <div className="flex items-center justify-between text-amber-500">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
              Follow-Ups Pending
            </span>
            <Clock className="w-4 h-4" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-600 block">
            {followUpsPending}
          </span>
          <p className="text-[11px] text-slate-500">Awaiting initial outreach</p>
        </div>

        {/* Card 4: Support Requests */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1">
          <div className="flex items-center justify-between text-brand-primary">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary">
              Support Requests
            </span>
            <HeartHandshake className="w-4 h-4" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-primary block">
            {supportRequests}
          </span>
          <p className="text-[11px] text-slate-500">Opted in for contact</p>
        </div>

        {/* Card 5: Average Response Time */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-1 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-emerald-600">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              Avg Response Time
            </span>
            <TrendingDown className="w-4 h-4" />
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-600 block">
            {avgResponseTime}
          </span>
          <p className="text-[11px] text-emerald-700 font-semibold">Reduced from 21 days</p>
        </div>

      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <WellbeingTrendsChart />
        </div>
        <div className="lg:col-span-4">
          <ConcernsDistributionChart />
        </div>
      </div>

      {/* Priority Table: "Students Needing Follow-Up" (Mandated neutral phrasing, no risk leaderboard) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
              <h3 className="font-heading font-extrabold text-lg text-brand-navy">
                Students Needing Follow-Up
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Prioritized by recent voluntary check-in changes and student opt-in preferences.
            </p>
          </div>

          <button
            onClick={() => navigateTo('staff-attention')}
            className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            Open Full Filterable Table <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Students List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="pb-3 font-bold">Priority</th>
                <th className="pb-3 font-bold">Student</th>
                <th className="pb-3 font-bold">Latest Check-In</th>
                <th className="pb-3 font-bold">Signal Change</th>
                <th className="pb-3 font-bold">Key Concern</th>
                <th className="pb-3 font-bold">Last Contact</th>
                <th className="pb-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {studentsNeedingFollowUp.map((s, idx) => (
                <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        s.priority === 'Priority 1'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      #{idx + 1} • {s.priority}
                    </span>
                  </td>

                  <td className="py-3.5">
                    <button
                      onClick={() => handleOpenStudent(s.id)}
                      className="flex items-center gap-2.5 text-left group"
                    >
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                      />
                      <div>
                        <strong className="text-brand-navy font-heading font-bold block group-hover:text-brand-primary transition-colors">
                          {s.name}
                        </strong>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {s.studentId} • {s.department.split('&')[0]}
                        </span>
                      </div>
                    </button>
                  </td>

                  <td className="py-3.5 text-slate-600">
                    {s.latestCheckin}
                  </td>

                  <td className="py-3.5">
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      Support recommended
                    </span>
                  </td>

                  <td className="py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {s.keyConcerns.slice(0, 2).map((c, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="py-3.5 text-slate-500">
                    {s.lastContact}
                  </td>

                  <td className="py-3.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveOutreachStudent(s)}
                        className="px-3 py-1.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-[11px] rounded-lg shadow-xs transition-all flex items-center gap-1"
                      >
                        <Send className="w-3 h-3" /> Reach Out
                      </button>
                      <button
                        onClick={() => handleOpenStudent(s.id)}
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800"
                        title="View Case Details"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Department Coordination Row */}
      <DepartmentCoordinationChart />

      {/* Outreach Modal Trigger */}
      {activeOutreachStudent && (
        <OutreachModal
          student={activeOutreachStudent}
          isOpen={!!activeOutreachStudent}
          onClose={() => setActiveOutreachStudent(null)}
        />
      )}

    </div>
  );
};
