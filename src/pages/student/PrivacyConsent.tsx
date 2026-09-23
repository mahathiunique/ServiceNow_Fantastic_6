import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Lock,
  Eye,
  CheckCircle2,
  FileCheck,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';

export const PrivacyConsent: React.FC = () => {
  const { showNotification } = useApp();
  const [voluntaryShare, setVoluntaryShare] = useState(true);
  const [crossDeptCoordination, setCrossDeptCoordination] = useState(true);
  const [anonymizedTrends, setAnonymizedTrends] = useState(true);

  const handleUpdate = () => {
    showNotification('Privacy and data consent preferences updated.');
  };

  const principles = [
    {
      title: 'Student Control',
      desc: 'You choose when to check in, what factors to highlight, and whether you want staff outreach.'
    },
    {
      title: 'Minimum Necessary Data',
      desc: 'We collect only what is strictly required to offer early support. No location, biometric, or private device tracking.'
    },
    {
      title: 'Role-Based Access',
      desc: 'Strict authorization barriers prevent instructors, classmates, or employers from ever viewing your signals.'
    },
    {
      title: 'Active Consent',
      desc: 'Support is voluntary and collaborative. You can adjust your sharing boundaries at any moment.'
    },
    {
      title: 'Complete Transparency',
      desc: 'No black-box scoring. You can view the exact rules and signals that triggered support recommendations.'
    },
    {
      title: 'Human Review',
      desc: 'No automated disciplinary or academic actions. All decisions and outreach are led by caring humans.'
    },
    {
      title: 'Secure FERPA/HIPAA Handling',
      desc: 'Bank-grade encryption in transit and at rest, adhering strictly to university educational privacy standards.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-12">
      
      {/* Header with Core Brand Motto */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Ethical Technology Framework
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
          Privacy & Student Agency
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Our sacred promise to every student who trusts EmoSpot with their daily reflection.
        </p>
      </div>

      {/* Strong Brand Message Banner (Mandated in spec) */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-indigo to-brand-primary text-white rounded-3xl p-8 sm:p-10 shadow-card text-center space-y-3">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-sky-300 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          Our Uncompromising Creed
        </div>
        <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl text-white max-w-xl mx-auto leading-tight">
          “EmoSpot supports people.<br />
          It does not label them.”
        </blockquote>
        <p className="text-xs text-indigo-200 max-w-lg mx-auto">
          We reject medical diagnostic labeling, surveillance scorecards, and punitive tracking.
          Our technology exists to empower human kindness early.
        </p>
      </div>

      {/* 7 Core Privacy Principles Grid */}
      <div className="space-y-4">
        <h3 className="font-heading font-extrabold text-xl text-brand-navy">
          Our 7 Data Principles
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft hover-lift space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-50 text-brand-primary text-xs flex items-center justify-center font-bold">
                  0{idx + 1}
                </span>
                <h4 className="font-heading font-bold text-sm text-brand-navy">
                  {p.title}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed pl-8">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Consent Management Toggles */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="font-heading font-extrabold text-lg text-brand-navy">
            Manage Your Consent Settings
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure how your voluntary data operates within campus support services:
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
            <div>
              <span className="font-bold text-brand-navy block">Voluntary Check-In Processing</span>
              <span className="text-slate-500 text-[11px]">
                Allow the transparent rule engine to identify early signals from your check-ins.
              </span>
            </div>
            <input
              type="checkbox"
              checked={voluntaryShare}
              onChange={(e) => setVoluntaryShare(e.target.checked)}
              className="w-4 h-4 rounded text-brand-primary"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
            <div>
              <span className="font-bold text-brand-navy block">Cross-Department Coordination</span>
              <span className="text-slate-500 text-[11px]">
                Permit authorized staff (e.g. Advising + Counselling) to coordinate support on your behalf.
              </span>
            </div>
            <input
              type="checkbox"
              checked={crossDeptCoordination}
              onChange={(e) => setCrossDeptCoordination(e.target.checked)}
              className="w-4 h-4 rounded text-brand-primary"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
            <div>
              <span className="font-bold text-brand-navy block">Anonymized Campus Trend Aggregation</span>
              <span className="text-slate-500 text-[11px]">
                Contribute anonymized statistics to help the university notice campus-wide exam stress spikes.
              </span>
            </div>
            <input
              type="checkbox"
              checked={anonymizedTrends}
              onChange={(e) => setAnonymizedTrends(e.target.checked)}
              className="w-4 h-4 rounded text-brand-primary"
            />
          </label>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={handleUpdate}
            className="px-6 py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            Save Privacy Preferences
          </button>
        </div>
      </div>

    </div>
  );
};
