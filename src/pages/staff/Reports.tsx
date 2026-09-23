import React from 'react';
import { UNIVERSITY_DEPARTMENTS } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Download,
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export const Reports: React.FC = () => {
  const { showNotification } = useApp();

  const handleDownloadReport = (type: string) => {
    showNotification(`Generated official report: "${type} (PDF/CSV Archive)"`);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Administrative & Governance Intelligence
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Department Coordination Reports
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Inter-departmental referral volumes, response time metrics, and institutional early-support logs.
          </p>
        </div>

        <button
          onClick={() => handleDownloadReport('Semester 1 Executive Early-Warning Summary')}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Download className="w-4 h-4" /> Download Executive Digest (PDF)
        </button>
      </div>

      {/* 12 Coordinating Departments Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-extrabold text-lg text-brand-navy">
              Campus 12-Department Coordination Status
            </h3>
            <p className="text-xs text-slate-500">
              Active staff members, open follow-ups, and response times per service unit
            </p>
          </div>
          <span className="text-xs font-bold text-brand-mint bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            12 of 12 Connected
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3.5 px-4 font-bold">Department Service</th>
                <th className="py-3.5 px-4 font-bold">Lead Coordinator</th>
                <th className="py-3.5 px-4 font-bold">Coordinating Staff</th>
                <th className="py-3.5 px-4 font-bold">Active Follow-Ups</th>
                <th className="py-3.5 px-4 font-bold">Avg Response SLA</th>
                <th className="py-3.5 px-4 font-bold text-right">Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {UNIVERSITY_DEPARTMENTS.map((dept) => (
                <tr key={dept.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <strong className="text-brand-navy font-heading font-bold block">
                      {dept.name}
                    </strong>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {dept.shortName}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-700">
                    {dept.leadCoordinator}
                  </td>

                  <td className="py-3.5 px-4 font-mono text-slate-600">
                    {dept.coordinatingStaff} Specialists
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="text-xs font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {dept.activeFollowUps} Active
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {dept.avgResponseHours} hrs
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDownloadReport(`${dept.name} Audit Log`)}
                      className="text-xs font-bold text-brand-primary hover:underline"
                    >
                      Export CSV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
