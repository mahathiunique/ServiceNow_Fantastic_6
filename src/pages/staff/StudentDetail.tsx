import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  ArrowLeft,
  Calendar,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  BookOpen,
  Building2,
  Milestone,
  FileText,
  Plus
} from 'lucide-react';
import { SignalExplanation } from '../../components/staff/SignalExplanation';
import { SupportJourneyVisual } from '../../components/student/SupportJourneyVisual';
import { OutreachModal } from '../../components/staff/OutreachModal';

export const StudentDetail: React.FC = () => {
  const {
    selectedStudentId,
    students,
    navigateTo,
    checkins,
    notes,
    addStaffNote,
    appointments,
    outreachRecords
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'history' | 'concerns' | 'notes' | 'appointments' | 'journey'
  >('overview');

  const [outreachModalOpen, setOutreachModalOpen] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');

  // Find target student (defaults to Mahathi)
  const student = students.find((s) => s.id === selectedStudentId) || students[0];

  const studentCheckins = checkins.filter(
    (c) => c.studentId === student.id || (student.id === 'stu-mahathi' && c.studentId === 'stu-mahathi')
  );

  const studentNotes = notes.filter((n) => n.studentId === student.id);
  const studentAppointments = appointments.filter((a) => a.studentId === student.id);
  const studentOutreach = outreachRecords.filter((o) => o.studentId === student.id);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim()) return;
    addStaffNote(student.id, newNoteContent.trim(), 'General');
    setNewNoteContent('');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Back Button & Top Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('staff-attention')}
          className="text-xs font-bold text-slate-500 hover:text-brand-navy flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Students Queue
        </button>

        <button
          onClick={() => setOutreachModalOpen(true)}
          className="px-5 py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-full shadow-soft transition-all flex items-center gap-2"
        >
          <Send className="w-3.5 h-3.5" /> Reach Out to {student.name.split(' ')[0]}
        </button>
      </div>

      {/* Student Profile Header Card (Mandated in spec) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-20 h-20 rounded-3xl object-cover ring-4 ring-indigo-100 shadow-md"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h1 className="font-heading font-extrabold text-2xl text-brand-navy">
                {student.name}
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                {student.priority}
              </span>
            </div>

            <p className="text-xs font-semibold text-brand-primary">
              {student.department} • {student.year}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-0.5">
              <span>ID: {student.studentId}</span>
              <span>•</span>
              <span>{student.email}</span>
            </div>
          </div>
        </div>

        {/* Current Support Status Pill */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left md:text-right space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Current Support Status
          </span>
          <span className="text-sm font-extrabold text-brand-navy block">
            {student.supportStatus}
          </span>
          <span className="text-xs text-slate-500 block">
            Latest Check-In: {student.latestCheckin}
          </span>
        </div>
      </div>

      {/* Tabs Navigation (Mandated: Overview, Check-In History, Concerns, Notes, Appointments, Support Journey) */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 overflow-x-auto pb-1">
        {[
          { id: 'overview', label: 'Case Overview' },
          { id: 'history', label: `Check-In History (${studentCheckins.length})` },
          { id: 'concerns', label: 'Reported Concerns' },
          { id: 'notes', label: `Staff Notes (${studentNotes.length})` },
          { id: 'appointments', label: `Appointments (${studentAppointments.length})` },
          { id: 'journey', label: 'Continuous Journey' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold transition-all shrink-0 border-b-2 -mb-[2px] ${
              activeTab === tab.id
                ? 'border-brand-primary text-brand-primary bg-indigo-50/50'
                : 'border-transparent text-slate-500 hover:text-brand-navy'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid: Active Tab Content (Left 8 Cols) + Suggested Next Steps (Right 4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Tab Views */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Explainable Signals Component */}
              <SignalExplanation student={student} />

              {/* Quick Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Latest Voluntary Signal
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="text-sm font-bold text-brand-navy">
                      Wellbeing Signal Changed (Moderate Load)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Academic pressure and late sleep patterns reported in latest check-in.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-card space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Support Opt-In Status
                  </span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-emerald-800">
                      Student Requested Support Outreach
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Consented to friendly coordinator reach-out via student portal.
                  </p>
                </div>
              </div>

              {/* Outreach History Snippet */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
                <h3 className="font-heading font-extrabold text-sm text-brand-navy">
                  Recent Outreach Records
                </h3>
                {studentOutreach.length > 0 ? (
                  studentOutreach.map((out) => (
                    <div key={out.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-brand-navy">{out.channel}</strong>
                        <span className="text-slate-400 text-[10px]">{out.sentAt}</span>
                      </div>
                      <p className="text-slate-600 italic">“{out.message}”</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    No outreach sent yet. Click "Reach Out" to initiate contact.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CHECK-IN HISTORY */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-extrabold text-base text-brand-navy">
                Voluntary Check-In Timeline
              </h3>
              <div className="space-y-3">
                {studentCheckins.map((chk) => (
                  <div key={chk.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                      <span className="font-bold text-brand-navy">Check-In ({chk.timestamp})</span>
                      <span className="text-[10px] font-bold text-brand-primary capitalize bg-white px-2 py-0.5 rounded border border-slate-200">
                        Mood: {chk.mood}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {chk.concerns.map((c, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600">
                      <strong>Change:</strong> {chk.changeRecent || 'Steady routine'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CONCERNS */}
          {activeTab === 'concerns' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-extrabold text-base text-brand-navy">
                Key Concern Categories Reported
              </h3>
              <div className="space-y-3">
                {student.keyConcerns.map((concern, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-xs text-brand-navy">{concern}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Identified in voluntary reflection</p>
                    </div>
                    <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                      Active Factor
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: NOTES */}
          {activeTab === 'notes' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-heading font-extrabold text-base text-brand-navy">
                  Authorized Department Staff Notes
                </h3>
                <span className="text-[10px] text-slate-400">FERPA Protected Log</span>
              </div>

              {/* Add Note Form */}
              <form onSubmit={handleAddNote} className="space-y-3">
                <textarea
                  rows={3}
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  placeholder="Record confidential observation or departmental follow-up notes..."
                  className="w-full text-xs p-3.5 rounded-2xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Note to Case
                  </button>
                </div>
              </form>

              {/* Notes List */}
              <div className="space-y-3 pt-2">
                {studentNotes.map((n) => (
                  <div key={n.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-500">
                      <div>
                        <strong className="text-brand-navy">{n.authorName}</strong>
                        <span className="text-[11px] text-slate-400 ml-1.5">({n.department})</span>
                      </div>
                      <span className="text-[10px] font-mono">{n.timestamp}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: APPOINTMENTS */}
          {activeTab === 'appointments' && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-extrabold text-base text-brand-navy">
                Scheduled Supportive Sessions
              </h3>
              {studentAppointments.length > 0 ? (
                studentAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-brand-navy font-heading">{apt.type}</strong>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {apt.status}
                      </span>
                    </div>
                    <p className="text-slate-600">
                      {apt.date} • {apt.time} • Specialist: {apt.staffName}
                    </p>
                    <span className="text-slate-400 block text-[11px]">{apt.location}</span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-400 italic">No appointments scheduled.</p>
              )}
            </div>
          )}

          {/* TAB 6: SUPPORT JOURNEY */}
          {activeTab === 'journey' && (
            <SupportJourneyVisual studentId={student.id} isCompact={false} />
          )}

        </div>

        {/* Right Column: "Suggested Next Steps" (Mandated in section 22 of prompt) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Suggested Next Steps
              </span>
              <h3 className="font-heading font-extrabold text-base text-brand-navy mt-0.5">
                Recommended Actions
              </h3>
              <p className="text-xs text-slate-400">
                Contextual guidelines based on current signal
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              
              {/* Action 1 */}
              <button
                onClick={() => setOutreachModalOpen(true)}
                className="w-full p-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100/80 border border-indigo-200/80 text-left transition-all group flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-brand-navy block group-hover:text-brand-primary">
                    Send Follow-Up Message
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    Use warm AI-assisted compassionate template
                  </span>
                </div>
              </button>

              {/* Action 2 */}
              <button
                onClick={() => setOutreachModalOpen(true)}
                className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-all group flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-brand-navy block group-hover:text-brand-primary">
                    Schedule 20-Min Conversation
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    Offer virtual or coffee check-in slot
                  </span>
                </div>
              </button>

              {/* Action 3 */}
              <button
                onClick={() => setOutreachModalOpen(true)}
                className="w-full p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-all group flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-brand-navy block group-hover:text-brand-primary">
                    Share Relevant Resources
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    Curate sleep routine & study guides
                  </span>
                </div>
              </button>

              {/* Action 4 */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-brand-navy block">
                    Coordinate Department
                  </strong>
                  <span className="text-[11px] text-slate-500 block mb-1">
                    Route academic pressure to Advising
                  </span>
                  <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    Auto-Coordinated
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Outreach Modal */}
      {outreachModalOpen && (
        <OutreachModal
          student={student}
          isOpen={outreachModalOpen}
          onClose={() => setOutreachModalOpen(false)}
        />
      )}

    </div>
  );
};
