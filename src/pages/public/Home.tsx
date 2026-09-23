import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Shield,
  HeartHandshake,
  Users,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  Smile,
  Activity,
  Milestone,
  ArrowUpRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const { navigateTo, setRole } = useApp();

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-lavender via-brand-sky to-brand-mintLight rounded-full blur-3xl opacity-60 -z-10" />

        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Developed by Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-brand-primary text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>Developed by <strong className="text-indigo-900">FANTASTIC_6</strong> • Track 02 Early Warning</span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.1]">
            Small Signals.<br />
            <span className="bg-gradient-to-r from-brand-primary via-indigo-600 to-brand-softBlue bg-clip-text text-transparent">
              Brighter Tomorrows.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            EmoSpot helps universities notice changes in voluntary student wellbeing signals,
            connect students with the right support, and empower staff to reach out
            before concerns become harder to address.
          </p>

          {/* Primary CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-light text-white text-sm font-bold shadow-soft hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              Get Started (Student Demo)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('how-it-works')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              See How It Works
            </button>
          </div>

          {/* Role-Specific CTAs */}
          <div className="pt-3 flex items-center justify-center gap-3 text-xs">
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="font-semibold text-brand-primary hover:text-indigo-800 hover:underline flex items-center gap-1"
            >
              I'm a Student <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => {
                setRole('staff');
                navigateTo('staff-dashboard');
              }}
              className="font-semibold text-slate-600 hover:text-brand-navy hover:underline flex items-center gap-1"
            >
              I'm Department Staff <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Floating Showcase Cards */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          
          {/* Main Visual Board */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
            
            {/* Top Bar of Mock App */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-slate-400 ml-2">emospot.university.edu</span>
              </div>
              <span className="text-xs font-semibold text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Connected Campus Ecosystem
              </span>
            </div>

            {/* Split Preview Grid: Student vs Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Student View Mock Preview */}
              <div className="bg-gradient-to-br from-indigo-50/60 to-white rounded-2xl p-5 border border-indigo-100/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Student Experience
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    Warm & Non-Clinical
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-brand-navy">
                  “Good morning, Mahathi”
                </h4>
                <p className="text-xs text-slate-500">
                  How are you feeling today? Tap to log a 30-second voluntary check-in.
                </p>
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  {['Great', 'Good', 'Okay', 'Low', 'Awful'].map((m, i) => (
                    <div
                      key={m}
                      className={`text-center py-2 px-1 rounded-xl text-[10px] font-bold border ${
                        i === 3
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff View Mock Preview */}
              <div className="bg-gradient-to-br from-slate-900 to-brand-navy text-white rounded-2xl p-5 border border-slate-800 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Authorized Staff Dashboard
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                    FERPA Compliant
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  Students Needing Follow-Up
                </h4>
                <p className="text-xs text-slate-300">
                  Early signals prioritize compassionate human outreach across 12 departments.
                </p>
                <div className="bg-slate-800/80 rounded-xl p-2.5 text-xs flex items-center justify-between border border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Mahathi (CS, 2nd Yr)</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded">
                    Support Recommended
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* 5 Subtle Floating UI Cards as mandated in spec */}
          {/* Card 1: Check-in completed */}
          <div className="hidden lg:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-float border border-slate-200 absolute -top-5 -left-8 animate-float-slow">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              Check-in completed
            </span>
          </div>

          {/* Card 2: Support recommended */}
          <div className="hidden lg:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-float border border-indigo-200 absolute -top-6 -right-6 animate-float-slow" style={{ animationDelay: '1.5s' }}>
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-brand-primary">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-brand-primary">
              Support recommended
            </span>
          </div>

          {/* Card 3: Follow-up scheduled */}
          <div className="hidden lg:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-float border border-slate-200 absolute bottom-12 -left-10 animate-float-slow" style={{ animationDelay: '3s' }}>
            <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              Follow-up scheduled
            </span>
          </div>

          {/* Card 4: Student reached */}
          <div className="hidden lg:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-float border border-slate-200 absolute -bottom-5 right-20 animate-float-slow" style={{ animationDelay: '2.2s' }}>
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800">
              Student reached
            </span>
          </div>

          {/* Card 5: 3 departments coordinated */}
          <div className="hidden lg:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-float border border-violet-200 absolute top-1/2 -right-12 -translate-y-1/2 animate-float-slow" style={{ animationDelay: '0.8s' }}>
            <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-700">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-violet-900">
              3 departments coordinated
            </span>
          </div>

        </div>

      </section>

      {/* Challenge Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-indigo to-brand-navy rounded-3xl p-8 sm:p-12 text-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-1 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-softBlue">
                The University Scenario
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                A student wellbeing crisis the university cannot easily see.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When students struggle quietly, help often arrives too late. EmoSpot builds the missing bridge
                between voluntary check-in signals and timely human care.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-softBlue block">
                  +40%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block mt-1">
                  Mental Health Referrals
                </span>
                <p className="text-[11px] text-slate-300 mt-2">
                  Challenge context: Steep surge straining campus resources without early visibility.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-amber-300 block">
                  12
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block mt-1">
                  Fragmented Services
                </span>
                <p className="text-[11px] text-slate-300 mt-2">
                  Challenge context: Disconnected silos where student signals get lost between offices.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-rose-300 block">
                  3 Weeks
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block mt-1">
                  Initial Wait Times
                </span>
                <p className="text-[11px] text-slate-300 mt-2">
                  Challenge context: Delayed intervention allows manageable stress to intensify.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 5-Step Connected Workflow Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Challenge Track 02 — Early Warning System
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-brand-navy">
            How EmoSpot Connects Campus Care
          </h2>
          <p className="text-sm text-slate-600">
            A continuous, transparent loop from voluntary student reflection to ongoing follow-up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Student Check-In', desc: 'Voluntary 30s check-in on mood, sleep, workload & support wishes.' },
            { step: '02', title: 'Signal Analysis', desc: 'Transparent rule-based detection noticing multi-day changes over time.' },
            { step: '03', title: 'Early Support Signal', desc: 'Non-diagnostic indicator: "Support recommended" rather than risk tags.' },
            { step: '04', title: 'Authorized Dashboard', desc: 'Department staff see context, history, and suggested next steps.' },
            { step: '05', title: 'Human Outreach', desc: 'Staff reaches out warmly via portal, email, or scheduled session.' },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-soft hover-lift space-y-2 relative"
            >
              <div className="text-2xl font-black font-mono text-indigo-100">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-sm text-brand-navy">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigateTo('how-it-works')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
          >
            Explore the complete interactive workflow <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Core Values / Non-Diagnostic Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50/70 rounded-3xl p-8 sm:p-12 border border-indigo-100 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Our Core Architecture
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
              “EmoSpot supports people. It does not label them.”
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We reject cold algorithmic risk scores and sensational alerts. Human connection is the antidote to campus isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-brand-primary font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-navy">
                Privacy & Student Control
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Students decide what to share, when to request help, and which departments coordinate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-brand-softBlue font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-navy">
                Human-in-the-Loop
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Technology alerts staff to subtle trends; compassionate university staff provide real support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 font-bold">
                <Milestone className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-navy">
                Continuous Support Journey
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Support doesn't end when a ticket is closed. It follows the student until stability is restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Golden Flow CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy via-brand-indigo to-brand-primary text-white rounded-3xl p-8 sm:p-12 shadow-card text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-softBlue">
            Experience the 2-Minute Demo
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl max-w-2xl mx-auto">
            Ready to experience early-support in action?
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto">
            Check in as <strong>Mahathi</strong>, submit a wellbeing check-in, then switch to the staff portal
            to view the real-time signal and initiate personalized outreach.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setRole('student');
                navigateTo('student-dashboard');
              }}
              className="px-6 py-3 rounded-full bg-brand-softBlue text-brand-navy font-bold text-xs hover:bg-sky-200 transition-all shadow-md"
            >
              Start Student Demo (Mahathi)
            </button>
            <button
              onClick={() => {
                setRole('staff');
                navigateTo('staff-dashboard');
              }}
              className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/20 transition-all"
            >
              Start Staff Demo (Dr. Aris Thorne)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
