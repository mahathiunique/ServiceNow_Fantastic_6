import React from 'react';
import { AppProvider, useApp, PageId } from './context/AppContext';
import { DemoBanner } from './components/common/DemoBanner';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { NotificationToast } from './components/common/NotificationToast';
import { StudentSidebar } from './components/student/StudentSidebar';
import { MobileStudentNav } from './components/student/MobileStudentNav';
import { StaffSidebar } from './components/staff/StaffSidebar';

// Public Pages
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { HowItWorks } from './pages/public/HowItWorks';
import { Features } from './pages/public/Features';
import { Impact } from './pages/public/Impact';
import { Team } from './pages/public/Team';
import { Contact } from './pages/public/Contact';

// Auth Pages
import { RoleSelect } from './pages/auth/RoleSelect';
import { StudentLogin } from './pages/auth/StudentLogin';
import { StaffLogin } from './pages/auth/StaffLogin';

// Student Pages
import { Dashboard } from './pages/student/Dashboard';
import { CheckIn } from './pages/student/CheckIn';
import { CheckInSummary } from './pages/student/CheckInSummary';
import { MyWellbeing } from './pages/student/MyWellbeing';
import { QuickSupport } from './pages/student/QuickSupport';
import { Learn } from './pages/student/Learn';
import { Goals } from './pages/student/Goals';
import { Community } from './pages/student/Community';
import { ShareSupport } from './pages/student/ShareSupport';
import { Appointments } from './pages/student/Appointments';
import { MySupportJourney } from './pages/student/MySupportJourney';
import { Profile } from './pages/student/Profile';
import { PrivacyConsent } from './pages/student/PrivacyConsent';

// Staff Pages
import { StaffDashboard } from './pages/staff/StaffDashboard';
import { AttentionList } from './pages/staff/AttentionList';
import { StudentDetail } from './pages/staff/StudentDetail';
import { OutreachQueue } from './pages/staff/OutreachQueue';
import { StaffAppointments } from './pages/staff/StaffAppointments';
import { Analytics } from './pages/staff/Analytics';
import { Reports } from './pages/staff/Reports';
import { StaffSettings } from './pages/staff/StaffSettings';

import { ShieldAlert, ArrowLeft, HeartHandshake, ShieldCheck, User } from 'lucide-react';

const MainRouter: React.FC = () => {
  const { role, currentPage, navigateTo, setRole, student, staff } = useApp();

  // Role-Based Access Control Guard
  const isStaffPage = currentPage.startsWith('staff-');
  const isStudentPage = currentPage.startsWith('student-');

  if (role === 'student' && isStaffPage) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-200 shadow-card text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 mx-auto flex items-center justify-center font-bold">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-extrabold text-xl text-brand-navy">
            Access Restricted
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            You don't have permission to view this area. This section is restricted to authorized
            university department staff.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => navigateTo('student-dashboard')}
              className="w-full py-2.5 bg-brand-primary text-white font-bold text-xs rounded-xl"
            >
              Return to Student Dashboard
            </button>
            <button
              onClick={() => {
                setRole('staff');
                navigateTo('staff-dashboard');
              }}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
            >
              Switch to Staff Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 1. PUBLIC EXPERIENCE
  if (role === 'public') {
    return (
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-1">
          {currentPage === 'home' && <Home />}
          {currentPage === 'about' && <About />}
          {currentPage === 'how-it-works' && <HowItWorks />}
          {currentPage === 'features' && <Features />}
          {currentPage === 'impact' && <Impact />}
          {currentPage === 'team' && <Team />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'role-select' && <RoleSelect />}
          {currentPage === 'student-login' && <StudentLogin />}
          {currentPage === 'staff-login' && <StaffLogin />}
        </main>
        <Footer />
      </div>
    );
  }

  // 2. STUDENT PORTAL EXPERIENCE
  if (role === 'student') {
    return (
      <div className="min-h-screen flex bg-brand-bg overflow-x-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <StudentSidebar />
        </div>

        {/* Main Content Pane */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar for Student Portal */}
          <header className="glass-nav h-16 px-4 sm:px-8 flex items-center justify-between border-b border-slate-200/80 sticky top-10 z-30">
            <div className="flex items-center gap-3">
              <span className="font-heading font-extrabold text-lg text-brand-navy tracking-tight">
                Emo<span className="text-brand-primary">Spot</span>
              </span>
              <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 hidden sm:inline-block">
                Student Sanctuary
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-brand-navy block">
                  {student.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {student.studentId}
                </span>
              </div>
              <img
                src={student.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"}
                alt={student.name}
                className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-200"
              />
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
            {currentPage === 'student-dashboard' && <Dashboard />}
            {currentPage === 'student-checkin' && <CheckIn />}
            {currentPage === 'student-summary' && <CheckInSummary />}
            {currentPage === 'student-wellbeing' && <MyWellbeing />}
            {currentPage === 'student-quick-tools' && <QuickSupport />}
            {currentPage === 'student-learn' && <Learn />}
            {currentPage === 'student-goals' && <Goals />}
            {currentPage === 'student-community' && <Community />}
            {currentPage === 'student-share' && <ShareSupport />}
            {currentPage === 'student-appointments' && <Appointments />}
            {currentPage === 'student-journey' && <MySupportJourney />}
            {currentPage === 'student-profile' && <Profile />}
            {currentPage === 'student-privacy' && <PrivacyConsent />}
          </main>

          {/* Mobile Bottom Navigation */}
          <MobileStudentNav />
        </div>
      </div>
    );
  }

  // 3. STAFF PORTAL EXPERIENCE
  return (
    <div className="min-h-screen flex bg-slate-100 overflow-x-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <StaffSidebar />
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar for Staff Portal */}
        <header className="bg-white h-16 px-4 sm:px-8 flex items-center justify-between border-b border-slate-200 sticky top-10 z-30">
          <div className="flex items-center gap-3">
            <span className="font-heading font-extrabold text-lg text-brand-navy tracking-tight">
              Emo<span className="text-brand-primary">Spot</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Department Staff Specialist Scope
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-brand-navy block">
                {staff.name}
              </span>
              <span className="text-[10px] text-brand-primary font-medium">
                {staff.department}
              </span>
            </div>
            <img
              src={staff.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"}
              alt={staff.name}
              className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-200"
            />
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {currentPage === 'staff-dashboard' && <StaffDashboard />}
          {currentPage === 'staff-attention' && <AttentionList />}
          {currentPage === 'staff-student-detail' && <StudentDetail />}
          {currentPage === 'staff-outreach' && <OutreachQueue />}
          {currentPage === 'staff-appointments' && <StaffAppointments />}
          {currentPage === 'staff-analytics' && <Analytics />}
          {currentPage === 'staff-reports' && <Reports />}
          {currentPage === 'staff-settings' && <StaffSettings />}
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <DemoBanner />
      <MainRouter />
      <NotificationToast />
    </AppProvider>
  );
}

export default App;
