import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { User, Lock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const StudentLogin: React.FC = () => {
  const { setRole, navigateTo } = useApp();
  const [email, setEmail] = useState('mahathi.m@university.edu');
  const [password, setPassword] = useState('••••••••••••');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setRole('student');
    navigateTo('student-dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-primary mx-auto flex items-center justify-center font-bold shadow-xs">
          <User className="w-6 h-6" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl text-brand-navy">
          Student Portal Sign In
        </h1>
        <p className="text-xs text-slate-500">
          Access your private daily check-in, wellbeing goals, and personalized support journey.
        </p>
      </div>

      {/* 1-Click Demo Shortcut Card */}
      <div className="bg-indigo-50/80 rounded-2xl p-4 border border-indigo-200/80 text-center space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block">
          Demo Presentation Mode
        </span>
        <p className="text-xs text-slate-600">
          Instantly sign in as student <strong>Mahathi (CS, 2nd Year)</strong> with preloaded check-in data.
        </p>
        <button
          onClick={() => {
            setRole('student');
            navigateTo('student-dashboard');
          }}
          className="w-full py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-200" />
          1-Click Demo Login as Mahathi
        </button>
      </div>

      {/* Standard Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              University Email or Student ID
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
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

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-brand-primary border-slate-300" />
              <span>Remember me</span>
            </label>
            <a href="#reset" onClick={(e) => e.preventDefault()} className="text-brand-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
          >
            Sign In to Student Portal <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <button
            onClick={() => navigateTo('staff-login')}
            className="text-xs text-slate-500 hover:text-brand-primary"
          >
            Are you university staff? <strong>Sign in to Staff Portal</strong>
          </button>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
        <span>Your data is strictly confidential and protected by FERPA.</span>
      </div>
    </div>
  );
};
