import React from 'react';
import { useApp, PageId } from '../../context/AppContext';
import {
  LayoutDashboard,
  AlertCircle,
  UserCheck,
  Send,
  Calendar,
  BarChart3,
  FileText,
  Settings,
  ShieldCheck,
  LogOut,
  Building2,
  Users
} from 'lucide-react';

export const StaffSidebar: React.FC = () => {
  const { currentPage, navigateTo, staff, setRole, students } = useApp();

  const pendingAttentionCount = students.filter(
    (s) => s.supportStatus === 'Pending Follow-Up' || s.priority === 'Priority 1'
  ).length;

  const navItems: { id: PageId; label: string; icon: React.ElementType; badge?: string | number }[] = [
    { id: 'staff-dashboard', label: 'Wellbeing Overview', icon: LayoutDashboard },
    {
      id: 'staff-attention',
      label: 'Students Needing Attention',
      icon: AlertCircle,
      badge: pendingAttentionCount > 0 ? pendingAttentionCount : undefined
    },
    { id: 'staff-student-detail', label: 'Student Case Drilldown', icon: UserCheck },
    { id: 'staff-outreach', label: 'Outreach & Messaging', icon: Send },
    { id: 'staff-appointments', label: 'Department Appointments', icon: Calendar },
    { id: 'staff-analytics', label: 'Campus Wellbeing Trends', icon: BarChart3 },
    { id: 'staff-reports', label: 'Coordination Reports', icon: FileText },
    { id: 'staff-settings', label: 'Settings & Permissions', icon: Settings },
  ];

  return (
    <aside className="w-72 bg-brand-navy text-slate-300 border-r border-slate-800 flex flex-col h-full select-none shrink-0">
      {/* Staff Identity Card */}
      <div className="p-4 border-b border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3">
          <img
            src={staff.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"}
            alt={staff.name}
            className="w-11 h-11 rounded-2xl object-cover ring-2 ring-indigo-500/50 shadow-md"
          />
          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5">
              <h3 className="font-heading font-bold text-sm text-white truncate">
                {staff.name}
              </h3>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-mint shrink-0" />
            </div>
            <p className="text-[11px] text-brand-softBlue font-medium truncate">
              {staff.department}
            </p>
            <span className="inline-block text-[10px] text-slate-400 font-mono">
              Authorized Specialist
            </span>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-3 bg-indigo-950/80 rounded-xl p-2 flex items-center justify-between border border-indigo-800/40">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-indigo-300">
            <Building2 className="w-3 h-3 text-sky-400" />
            <span>FERPA / HIPAA Tier 2 Scope</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
          Authorized Staff Portal
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-rose-500 text-white'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Switcher */}
      <div className="p-3 border-t border-slate-800 bg-slate-900/40 space-y-2">
        <button
          onClick={() => {
            navigateTo('staff-attention');
          }}
          className="w-full py-2 px-3 bg-gradient-to-r from-brand-primary to-indigo-600 text-white font-bold text-xs rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <Send className="w-3.5 h-3.5" />
          Proactive Outreach Queue
        </button>

        <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 px-1">
          <button
            onClick={() => {
              setRole('student');
              navigateTo('student-dashboard');
            }}
            className="hover:text-brand-softBlue transition-colors flex items-center gap-1"
          >
            <Users className="w-3 h-3 text-sky-400" />
            Switch to Student Demo
          </button>
          <button
            onClick={() => {
              setRole('public');
              navigateTo('home');
            }}
            className="hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            <LogOut className="w-3 h-3" />
            Exit
          </button>
        </div>
      </div>
    </aside>
  );
};
