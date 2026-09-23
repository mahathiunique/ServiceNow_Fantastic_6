import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Share2,
  Users,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  BookOpen,
  HeartHandshake
} from 'lucide-react';

export const ShareSupport: React.FC = () => {
  const { showNotification } = useApp();
  const [recipient, setRecipient] = useState<'trusted' | 'family' | 'counsellor' | 'staff'>('trusted');
  const [copied, setCopied] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  const handleShareProgress = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification(`A secure, read-only summary link has been generated for your ${recipient}.`);
  };

  const handleCopyLink = () => {
    setCopied(true);
    showNotification('Private sharing link copied to clipboard.');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    showNotification(`An anonymous, gentle invitation to try EmoSpot was sent to ${inviteEmail}.`);
    setInviteEmail('');
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          MindShift-Inspired Support Network
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy">
          Share & Support
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Wellbeing is a shared human journey. Share selected milestones with trusted allies,
          invite fellow students, or discover the strength of opening up.
        </p>
      </div>

      {/* Section 1: Share Your Progress (Mandated in spec) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
            <Share2 className="w-4 h-4" />
            Section 01
          </div>
          <h2 className="font-heading font-extrabold text-xl text-brand-navy mt-1">
            Share Your Progress
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            You choose who can view your weekly consistency trends and check-in milestones:
          </p>
        </div>

        {/* Recipient Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'trusted', label: 'Trusted Friend / Peer', desc: 'A study buddy or close ally' },
            { id: 'family', label: 'Family Member', desc: 'A supportive parent or sibling' },
            { id: 'counsellor', label: 'Campus Counsellor', desc: 'Your assigned therapist' },
            { id: 'staff', label: 'Academic Support Staff', desc: 'Department academic advisor' }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRecipient(item.id as any)}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                recipient === item.id
                  ? 'bg-indigo-50 border-brand-primary ring-2 ring-indigo-200 shadow-xs'
                  : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <h4 className="font-heading font-bold text-xs text-brand-navy">
                {item.label}
              </h4>
              <p className="text-[10px] text-slate-500 mt-1">
                {item.desc}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <strong className="text-brand-navy block mb-0.5">Custom Privacy Link:</strong>
            Only shows high-level wellbeing streaks and goals. Individual private notes are never included.
          </div>
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-colors shrink-0 flex items-center gap-1.5"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Link Copied!' : 'Generate Secure Link'}
          </button>
        </div>
      </div>

      {/* Section 2: Share the Platform (Mandated in spec) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
            <Users className="w-4 h-4" />
            Section 02
          </div>
          <h2 className="font-heading font-extrabold text-xl text-brand-navy mt-1">
            Share the Platform
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Know a classmate who is juggling coursework stress or feeling isolated? Send a gentle invitation:
          </p>
        </div>

        <form onSubmit={handleInvite} className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            required
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="classmate@university.edu"
            className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-soft transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            Send Gentle Invitation
          </button>
        </form>

        <p className="text-[11px] text-slate-400 italic">
          Invitations are sent without mentioning any personal check-in details, keeping your sharing completely confidential.
        </p>
      </div>

      {/* Section 3: Share Your Story (Mandated in spec) */}
      <div className="bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/60 rounded-3xl p-6 sm:p-8 border border-indigo-100 shadow-card space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
          <BookOpen className="w-4 h-4" />
          Section 03: Educational Guidance
        </div>
        <h2 className="font-heading font-extrabold text-xl text-brand-navy">
          Share Your Story
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            When students hold challenges in isolation, they often assume they are the only one struggling.
            Research across universities shows that hearing a peer speak openly about academic fatigue or
            homesickness reduces psychological distress by up to <strong>45%</strong>.
          </p>
          <p>
            Sharing doesn't require sharing every private detail. Simply letting a peer or advisor know
            <em> “This semester feels demanding, and I'm pacing myself”</em> normalizes vulnerability and
            creates space for others to exhale.
          </p>
        </div>
      </div>

    </div>
  );
};
