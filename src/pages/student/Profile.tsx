import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  User,
  Mail,
  Building2,
  GraduationCap,
  Bell,
  Phone,
  Download,
  ShieldCheck,
  CheckCircle2,
  Trash2
} from 'lucide-react';

export const Profile: React.FC = () => {
  const { student, showNotification } = useApp();
  const [notifyPortal, setNotifyPortal] = useState(true);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySMS, setNotifySMS] = useState(false);

  const handleExportData = () => {
    const dataStr = JSON.stringify(student, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `emospot_student_export_${student.studentId}.json`;
    a.click();
    showNotification('Personal wellbeing data archive downloaded (FERPA Data Portability).');
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Notification and privacy preferences successfully saved.');
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Student Account & Preferences
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
          Student Profile
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Manage your verified campus credentials, communication preferences, and data privacy rights.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col sm:flex-row items-center gap-6">
        <img
          src={student.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"}
          alt={student.name}
          className="w-24 h-24 rounded-3xl object-cover ring-4 ring-indigo-100 shadow-md shrink-0"
        />

        <div className="space-y-1 text-center sm:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h2 className="font-heading font-extrabold text-2xl text-brand-navy">
              {student.name}
            </h2>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Active Student
            </span>
          </div>

          <p className="text-xs font-semibold text-brand-primary">
            {student.department} • {student.year}
          </p>

          <p className="text-xs text-slate-400 font-mono">
            Student ID: {student.studentId} • {student.email}
          </p>
        </div>
      </div>

      {/* Grid: Preferences + Data Rights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Notification Preferences */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Bell className="w-4 h-4 text-brand-primary" />
            <h3 className="font-heading font-extrabold text-base text-brand-navy">
              Communication Preferences
            </h3>
          </div>

          <form onSubmit={handleSavePreferences} className="space-y-4 text-xs">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">Portal In-App Notifications</span>
                <span className="text-slate-500 text-[11px]">Receive gentle support alerts and reminders</span>
              </div>
              <input
                type="checkbox"
                checked={notifyPortal}
                onChange={(e) => setNotifyPortal(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">University Email Updates</span>
                <span className="text-slate-500 text-[11px]">Appointment confirmations and resource summaries</span>
              </div>
              <input
                type="checkbox"
                checked={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">SMS Direct Text Messages (Mock)</span>
                <span className="text-slate-500 text-[11px]">Urgent appointment reminders via text</span>
              </div>
              <input
                type="checkbox"
                checked={notifySMS}
                onChange={(e) => setNotifySMS(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Save Communication Preferences
            </button>
          </form>
        </div>

        {/* Emergency Contact & Data Ownership */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <h3 className="font-heading font-extrabold text-base text-brand-navy">
              Data Rights & Emergency Contact
            </h3>
          </div>

          <div className="space-y-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Designated Emergency Contact
              </span>
              <span className="font-bold text-slate-800 block">
                Priya M. (Guardian / Parent)
              </span>
              <span className="text-slate-500">
                +1 (555) 392-8812 • Notified strictly under immediate safety policies.
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <span className="font-bold text-slate-700 block">FERPA Data Portability</span>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                You can download a complete copy of your voluntary check-in signals and self-care logs anytime.
              </p>
              <button
                type="button"
                onClick={handleExportData}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Personal Data (JSON)
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
