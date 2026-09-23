import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Student } from '../../types';
import {
  AlertCircle,
  Search,
  Filter,
  Send,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { OutreachModal } from '../../components/staff/OutreachModal';

export const AttentionList: React.FC = () => {
  const { students, setSelectedStudentId, navigateTo } = useApp();

  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState<string>('All');
  const [activeOutreachStudent, setActiveOutreachStudent] = useState<Student | null>(null);

  const filtered = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.department.toLowerCase().includes(search.toLowerCase()) ||
      s.keyConcerns.some((c) => c.toLowerCase().includes(search.toLowerCase()));

    if (filterPriority === 'All') return matchesSearch;
    if (filterPriority === 'Priority 1') return matchesSearch && s.priority === 'Priority 1';
    if (filterPriority === 'Pending Follow-Up') return matchesSearch && s.supportStatus === 'Pending Follow-Up';
    if (filterPriority === 'Outreach Sent') return matchesSearch && s.supportStatus === 'Outreach Sent';
    return matchesSearch;
  });

  const handleOpenStudent = (id: string) => {
    setSelectedStudentId(id);
    navigateTo('staff-student-detail');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Authorized Case Management
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Students Needing Follow-Up
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Voluntary wellbeing signals prioritized for proactive, dignified campus outreach.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-semibold text-slate-500">Active in Queue:</span>
          <span className="text-xs font-bold bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-200">
            {filtered.length} Students
          </span>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student, department, or concern..."
            className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Priority 1', 'Pending Follow-Up', 'Outreach Sent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterPriority(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                filterPriority === tab
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

      </div>

      {/* Main Table with all required columns */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-4 px-4 font-bold">Priority</th>
                <th className="py-4 px-4 font-bold">Student</th>
                <th className="py-4 px-4 font-bold">Latest Check-In</th>
                <th className="py-4 px-4 font-bold">Signal Change</th>
                <th className="py-4 px-4 font-bold">Key Concern</th>
                <th className="py-4 px-4 font-bold">Last Contact</th>
                <th className="py-4 px-4 font-bold">Next Action</th>
                <th className="py-4 px-4 font-bold">Status</th>
                <th className="py-4 px-4 font-bold text-right">Outreach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((s, idx) => (
                <tr key={s.id} className="hover:bg-indigo-50/40 transition-colors">
                  
                  {/* Priority Column */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        s.priority === 'Priority 1'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      #{idx + 1} • {s.priority}
                    </span>
                  </td>

                  {/* Student Column */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <button
                      onClick={() => handleOpenStudent(s.id)}
                      className="flex items-center gap-3 text-left group"
                    >
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 shadow-xs"
                      />
                      <div>
                        <strong className="text-brand-navy font-heading font-bold block group-hover:text-brand-primary transition-colors">
                          {s.name}
                        </strong>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {s.studentId} • {s.department}
                        </span>
                      </div>
                    </button>
                  </td>

                  {/* Latest Check-In */}
                  <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                    {s.latestCheckin}
                  </td>

                  {/* Signal Change */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      Wellbeing signal changed
                    </span>
                  </td>

                  {/* Key Concern */}
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {s.keyConcerns.map((c, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Last Contact */}
                  <td className="py-4 px-4 text-slate-500 whitespace-nowrap">
                    {s.lastContact}
                  </td>

                  {/* Next Action */}
                  <td className="py-4 px-4 text-slate-700 font-medium">
                    {s.nextAction}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        s.supportStatus === 'Pending Follow-Up'
                          ? 'bg-amber-100 text-amber-800'
                          : s.supportStatus === 'Outreach Sent'
                          ? 'bg-sky-100 text-sky-800'
                          : s.supportStatus === 'Appointment Scheduled'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {s.supportStatus}
                    </span>
                  </td>

                  {/* Outreach Action Button */}
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setActiveOutreachStudent(s)}
                        className="px-3.5 py-1.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                      >
                        <Send className="w-3 h-3" />
                        Reach Out
                      </button>
                      <button
                        onClick={() => handleOpenStudent(s.id)}
                        className="p-1.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800"
                        title="Open Case File"
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

      {/* Active Outreach Modal */}
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
