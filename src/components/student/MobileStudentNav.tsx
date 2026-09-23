import React, { useState } from 'react';
import { useApp, PageId } from '../../context/AppContext';
import {
  LayoutDashboard,
  HeartHandshake,
  LifeBuoy,
  Milestone,
  MoreHorizontal,
  X,
  BookOpen,
  Target,
  Users,
  Calendar,
  User,
  ShieldCheck,
  Activity,
  Share2
} from 'lucide-react';

export const MobileStudentNav: React.FC = () => {
  const { currentPage, navigateTo } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const primaryTabs: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'student-dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'student-checkin', label: 'Check-In', icon: HeartHandshake },
    { id: 'student-quick-tools', label: 'Tools', icon: LifeBuoy },
    { id: 'student-journey', label: 'Journey', icon: Milestone },
  ];

  const moreItems: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'student-wellbeing', label: 'My Wellbeing', icon: Activity },
    { id: 'student-learn', label: 'Learn & Resources', icon: BookOpen },
    { id: 'student-goals', label: 'Wellbeing Goals', icon: Target },
    { id: 'student-community', label: 'Peer Community', icon: Users },
    { id: 'student-share', label: 'Share & Support', icon: Share2 },
    { id: 'student-appointments', label: 'Appointments', icon: Calendar },
    { id: 'student-profile', label: 'Student Profile', icon: User },
    { id: 'student-privacy', label: 'Privacy & Consent', icon: ShieldCheck },
  ];

  return (
    <>
      {/* Bottom Sticky Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-1 flex items-center justify-around shadow-lg">
        {primaryTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                navigateTo(tab.id);
                setDrawerOpen(false);
              }}
              className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all ${
                isActive ? 'text-brand-primary font-bold' : 'text-slate-500 font-medium'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110 text-brand-primary' : ''}`} />
              <span className="text-[10px] mt-0.5">{tab.label}</span>
            </button>
          );
        })}

        <button
          onClick={() => setDrawerOpen(true)}
          className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all ${
            drawerOpen ? 'text-brand-primary font-bold' : 'text-slate-500 font-medium'
          }`}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">More</span>
        </button>
      </nav>

      {/* More Drawer Modal for Mobile */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl p-5 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-base text-brand-navy">
                Student Features
              </h3>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {moreItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigateTo(item.id);
                      setDrawerOpen(false);
                    }}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl text-left text-xs font-semibold border transition-all ${
                      isActive
                        ? 'bg-indigo-50 border-indigo-200 text-brand-primary shadow-xs'
                        : 'bg-slate-50/80 border-slate-200/60 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-xl bg-white flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4 text-brand-primary" />
                    </div>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
