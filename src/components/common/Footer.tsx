import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeartHandshake, Shield, Sparkles, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, setRole } = useApp();

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section with Brand & Motto */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-light flex items-center justify-center text-white shadow-md">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  Emo<span className="text-brand-softBlue">Spot</span>
                </span>
                <p className="text-xs text-indigo-300 font-medium">
                  Small signals. Brighter tomorrows.
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              EmoSpot connects voluntary student wellbeing check-ins with transparent early signals,
              enabling authorized university support teams to proactively reach out before concerns
              become overwhelming.
            </p>

            {/* University Motto Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 max-w-md">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Our Platform Motto
              </div>
              <p className="text-sm font-medium text-white italic">
                “Every student deserves to be heard, supported, and never left alone.”
              </p>
            </div>
          </div>

          {/* Public & Student Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Explore EmoSpot
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home / Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Our Purpose
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('how-it-works')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  5-Step Workflow
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('impact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Campus Impact & Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('team')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Meet FANTASTIC_6
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  University Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Portals & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Access & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    setRole('student');
                    navigateTo('student-dashboard');
                  }}
                  className="text-brand-softBlue hover:underline flex items-center gap-1.5"
                >
                  Student Portal (Mahathi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setRole('staff');
                    navigateTo('staff-dashboard');
                  }}
                  className="text-brand-mint hover:underline flex items-center gap-1.5"
                >
                  Department Staff Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setRole('student');
                    navigateTo('student-privacy');
                  }}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-indigo-400" />
                  Privacy & Data Principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('role-select')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Role Switcher
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                24/7 Campus Crisis Line:
              </span>
              <span className="text-xs font-bold text-sky-300">
                Ext. 5555 / 1-800-273-TALK
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Developed by FANTASTIC_6 and Non-Diagnostic Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Developed with passion by</span>
            <span className="font-bold text-white tracking-wide bg-indigo-900/60 text-indigo-200 px-2 py-0.5 rounded border border-indigo-700/50 flex items-center gap-1">
              FANTASTIC_6 <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
            </span>
            <span>for university student wellbeing.</span>
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] leading-relaxed text-slate-400">
            <strong>Important notice:</strong> EmoSpot is an early support coordination platform.
            It is <em>not</em> a medical diagnosis system and does not clinically evaluate mental illness or replace certified counsellors.
          </div>
        </div>

      </div>
    </footer>
  );
};
