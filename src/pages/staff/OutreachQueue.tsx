import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Send,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { OutreachModal } from '../../components/staff/OutreachModal';

export const OutreachQueue: React.FC = () => {
  const { outreachRecords, students, setSelectedStudentId, navigateTo } = useApp();
  const [filterChannel, setFilterChannel] = useState<string>('All');
  const [activeOutreachStudent, setActiveOutreachStudent] = useState<any | null>(null);

  const filtered = filterChannel === 'All'
    ? outreachRecords
    : outreachRecords.filter((r) => r.channel.toLowerCase().includes(filterChannel.toLowerCase()));

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Proactive Communication Hub
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Outreach & Messaging Queue
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Track compassionate messages, student replies, and scheduled support sessions.
          </p>
        </div>

        <button
          onClick={() => setActiveOutreachStudent(students[0])}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Send className="w-4 h-4" /> New Outreach Message
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {['All', 'Portal', 'Email', 'SMS'].map((ch) => (
          <button
            key={ch}
            onClick={() => setFilterChannel(ch)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterChannel === ch
                ? 'bg-brand-primary text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {ch === 'All' ? 'All Channels' : `${ch} Records`}
          </button>
        ))}
      </div>

      {/* Outreach Records Feed */}
      <div className="space-y-4">
        {filtered.map((record) => (
          <div
            key={record.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
                  {record.channel.includes('Email') ? (
                    <Mail className="w-5 h-5" />
                  ) : record.channel.includes('SMS') ? (
                    <Smartphone className="w-5 h-5" />
                  ) : (
                    <MessageSquare className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-navy">
                    Outreach to {record.studentName}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Sender: {record.staffName} • {record.sentAt}
                  </span>
                </div>
              </div>

              <span
                className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto ${
                  record.status === 'Follow-Up Scheduled'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-sky-100 text-sky-800'
                }`}
              >
                {record.status}
              </span>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 text-xs text-slate-700 leading-relaxed space-y-1">
              <strong className="text-brand-navy block">{record.subject || 'Follow-up regarding your recent check-in'}</strong>
              <p className="italic">“{record.message}”</p>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-[11px] text-slate-400">
                Delivery Channel: <strong>{record.channel}</strong>
              </span>

              <button
                onClick={() => {
                  setSelectedStudentId(record.studentId);
                  navigateTo('staff-student-detail');
                }}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                View Student Case File →
              </button>
            </div>
          </div>
        ))}
      </div>

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
