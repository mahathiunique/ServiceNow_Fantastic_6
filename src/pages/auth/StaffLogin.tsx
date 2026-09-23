import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Lock, Mail, ArrowRight, Building2, Sparkles } from 'lucide-react';

export const StaffLogin: React.FC = () => {
  const { setRole, navigateTo } = useApp();
  const [email, setEmail] = useState('a.thorne@university.edu');
  const [password, setPassword] = useState('••••••••••••');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setRole('staff');
    navigateTo('staff-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-indigo-900 text-sky-300 mx-auto flex items-center justify-center font-bold shadow-md">
          <ShieldCheck className="w-6 h-6 text-brand-softBlue" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl text-brand-navy">
          Department Staff Portal
        </h1>
        <p className="text-xs text-slate-500">
          Turn early signals into meaningful support.
        </p>
      </div>

      {/* 1-Click Demo Shortcut Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 text-center space-y-2 shadow-md">
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-softBlue block">
          Authorized Staff Demo
        </span>
        <p className="text-xs text-slate-300">
          Sign in as <strong>Dr. Aris Thorne</strong> (Lead Coordinator, Counselling & Student Support).
        </p>
        <button
          onClick={() => {
            setRole('staff');
            navigateTo('staff-dashboard');
          }}
          className="w-full py-2.5 bg-gradient-to-r from-brand-primary to-indigo-600 hover:brightness-110 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-200" />
          1-Click Staff Demo (Dr. Aris Thorne)
        </button>
      </div>

      {/* Professional Staff Credentials Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              University Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2.5 text-[11px] text-slate-500 flex items-center gap-2 border border-slate-100">
            <Building2 className="w-4 h-4 text-brand-primary shrink-0" />
            <span>SSO 2FA Authentication Enabled (FERPA / HIPAA Tier 2)</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
          >
            Access Staff Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <button
            onClick={() => navigateTo('student-login')}
            className="text-xs text-slate-500 hover:text-brand-primary"
          >
            Are you a student? <strong>Switch to Student Portal</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
