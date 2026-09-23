import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Settings,
  ShieldCheck,
  Building2,
  Bell,
  Clock,
  Lock,
  User,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const StaffSettings: React.FC = () => {
  const { staff, showNotification } = useApp();

  const [slaHours, setSlaHours] = useState('24');
  const [notifyNewSignal, setNotifyNewSignal] = useState(true);
  const [notifyOptIn, setNotifyOptIn] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Department configuration and SLA settings updated.');
  };

  const auditLogs = [
    { timestamp: 'Today, 9:35 AM', action: 'Outreach Sent', student: 'Mahathi (STU-2024-8841)', user: staff.name },
    { timestamp: 'Today, 9:20 AM', action: 'Case File Accessed', student: 'Mahathi (STU-2024-8841)', user: staff.name },
    { timestamp: 'Yesterday, 4:45 PM', action: 'Appointment Scheduled', student: 'Priya Patel (STU-2022-7729)', user: staff.name },
    { timestamp: 'Yesterday, 2:10 PM', action: 'Department Referral Routed', student: 'Aditi R. (STU-2023-3921)', user: staff.name }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Departmental Configuration
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
          Staff Profile & Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Authorized personnel credentials, SLA thresholds, and FERPA Tier 2 access compliance logs.
        </p>
      </div>

      {/* Staff Identity Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col sm:flex-row items-center gap-6">
        <img
          src={staff.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"}
          alt={staff.name}
          className="w-20 h-20 rounded-3xl object-cover ring-4 ring-indigo-100 shadow-md shrink-0"
        />

        <div className="space-y-1 text-center sm:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h2 className="font-heading font-extrabold text-2xl text-brand-navy">
              {staff.name}
            </h2>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Authorized Specialist
            </span>
          </div>

          <p className="text-xs font-semibold text-brand-primary">
            {staff.title} • {staff.department}
          </p>

          <p className="text-xs text-slate-400 font-mono">
            {staff.email} • ID: {staff.id}
          </p>
        </div>
      </div>

      {/* Grid: SLA Settings + FERPA Audit Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SLA & Alert Rules Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Clock className="w-4 h-4 text-brand-primary" />
            <h3 className="font-heading font-extrabold text-base text-brand-navy">
              Response SLA & Notification Alerts
            </h3>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Proactive Outreach Target SLA (Hours)
              </label>
              <select
                value={slaHours}
                onChange={(e) => setSlaHours(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white"
              >
                <option value="12">12 Hours (High Priority Sprint)</option>
                <option value="24">24 Hours (Standard Department Target)</option>
                <option value="48">48 Hours (Relaxed Routine Window)</option>
              </select>
            </div>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">New Support Signal Alerts</span>
                <span className="text-slate-500 text-[11px]">Notify when a student check-in triggers 'Support recommended'</span>
              </div>
              <input
                type="checkbox"
                checked={notifyNewSignal}
                onChange={(e) => setNotifyNewSignal(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <div>
                <span className="font-bold text-brand-navy block">Student Support Request Opt-Ins</span>
                <span className="text-slate-500 text-[11px]">Immediate priority banner when a student requests outreach</span>
              </div>
              <input
                type="checkbox"
                checked={notifyOptIn}
                onChange={(e) => setNotifyOptIn(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Save Department Configuration
            </button>
          </form>
        </div>

        {/* FERPA Compliance Audit Log */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-primary" />
              <h3 className="font-heading font-extrabold text-base text-brand-navy">
                FERPA Security Audit Trail
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Encrypted Log</span>
          </div>

          <p className="text-xs text-slate-500">
            Every staff access of student wellbeing records is cryptographically stamped for university audit integrity.
          </p>

          <div className="space-y-2.5 pt-1">
            {auditLogs.map((log, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex items-center justify-between text-slate-500">
                  <strong className="text-brand-navy font-mono text-[11px]">{log.action}</strong>
                  <span className="text-[10px]">{log.timestamp}</span>
                </div>
                <div className="text-slate-600">
                  Target: <strong className="text-slate-800">{log.student}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
