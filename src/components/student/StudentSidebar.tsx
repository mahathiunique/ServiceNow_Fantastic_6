import React from 'react';
import { useApp, PageId } from '../../context/AppContext';
import {
  LayoutDashboard,
  HeartHandshake,
  Sparkles,
  BookOpen,
  Target,
  Users,
  Share2,
  Calendar,
  Milestone,
  User,
  ShieldCheck,
  LifeBuoy,
  LogOut,
  ChevronRight,
  Activity
} from 'lucide-react';

export const StudentSidebar: React.FC = () => {
  const { currentPage, navigateTo, student, setRole, requestHumanSupport } = useApp();

  const navItems: { id: PageId; label: string; icon: React.ElementType; badge?: string }[] = [
    { id: 'student-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'student-checkin', label: 'Daily Check-In', icon: HeartHandshake, badge: 'Daily' },
    { id: 'student-summary', label: 'Check-In Result', icon: Sparkles },
    { id: 'student-wellbeing', label: 'My Wellbeing', icon: Activity },
    { id: 'student-quick-tools', label: 'Quick Support Tools', icon: LifeBuoy },
    { id: 'student-learn', label: 'Learn & Resources', icon: BookOpen },
    { id: 'student-goals', label: 'Wellbeing Goals', icon: Target },
    { id: 'student-community', label: 'Peer Community', icon: Users },
    { id: 'student-share', label: 'Share & Support', icon: Share2 },
    { id: 'student-appointments', label: 'Appointments', icon: Calendar },
    { id: 'student-journey', label: 'My Support Journey', icon: Milestone, badge: 'Active' },
    { id: 'student-profile', label: 'Student Profile', icon: User },
    { id: 'student-privacy', label: 'Privacy & Consent', icon: ShieldCheck },
  ];

  return (
    <aside className="w-68 bg-white border-r border-slate-200 flex flex-col h-full select-none shrink-0">
      {/* Student Profile Card */}
      <div className="p-4 border-b border-slate-100 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="flex items-center gap-3">
          <img
            src={student.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"}
            alt={student.name}
            className="w-11 h-11 rounded-2xl object-cover ring-2 ring-indigo-200 shadow-sm"
          />
          <div className="overflow-hidden">
            <h3 className="font-heading font-bold text-sm text-brand-navy truncate">
              {student.name}
            </h3>
            <p className="text-[11px] text-brand-primary font-medium truncate">
              {student.department}
            </p>
            <span className="inline-block text-[10px] text-slate-500 font-mono">
              {student.studentId}
            </span>
          </div>
        </div>

        {/* Quick check-in prompt pill */}
        <div className="mt-3 bg-indigo-50/80 rounded-xl p-2.5 flex items-center justify-between border border-indigo-100">
          <div className="text-[11px] text-slate-700">
            <span className="font-semibold block text-brand-primary">Wellbeing pulse:</span>
            <span className="text-[10px] text-slate-500">{student.latestCheckin}</span>
          </div>
          <button
            onClick={() => navigateTo('student-checkin')}
            className="text-[10px] font-bold text-white bg-brand-primary px-2.5 py-1 rounded-lg hover:bg-brand-light transition-colors shadow-xs"
          >
            Check In
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
          Student Portal
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100/80'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-100 text-brand-primary'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Human Support CTA Card */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/60">
        <div className="bg-gradient-to-br from-indigo-900 to-brand-navy text-white rounded-2xl p-3.5 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-300 mb-1">
            <LifeBuoy className="w-3.5 h-3.5" />
            Need human support?
          </div>
          <p className="text-[11px] text-slate-300 leading-snug mb-2.5">
            Connect confidentially with your university support coordinator.
          </p>
          <button
            onClick={() => requestHumanSupport()}
            className="w-full py-1.5 px-2 bg-brand-softBlue text-brand-navy font-bold text-xs rounded-xl hover:bg-sky-300 transition-colors shadow-xs"
          >
            Reach Out Now
          </button>
        </div>

        {/* Switch Role or Exit */}
        <div className="mt-2 flex items-center justify-between pt-2 text-[11px] text-slate-500 px-1">
          <button
            onClick={() => {
              setRole('staff');
              navigateTo('staff-dashboard');
            }}
            className="hover:text-brand-primary transition-colors flex items-center gap-1"
          >
            <ShieldCheck className="w-3 h-3 text-indigo-500" />
            Switch to Staff View
          </button>
          <button
            onClick={() => {
              setRole('public');
              navigateTo('home');
            }}
            className="hover:text-rose-600 transition-colors flex items-center gap-0.5"
          >
            <LogOut className="w-3 h-3" />
            Exit
          </button>
        </div>
      </div>
    </aside>
  );
};
