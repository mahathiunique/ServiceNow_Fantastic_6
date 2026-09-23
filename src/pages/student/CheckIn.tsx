import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MoodType } from '../../types';
import {
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
  Smile,
  Info
} from 'lucide-react';

export const CheckIn: React.FC = () => {
  const { submitCheckIn, navigateTo } = useApp();

  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<MoodType>('low');
  const [concerns, setConcerns] = useState<string[]>(['Academic pressure', 'Sleep difficulty']);
  const [changeRecent, setChangeRecent] = useState('Feeling more fatigued and sleep-deprived over the last 1–2 weeks');
  const [supportRequested, setSupportRequested] = useState<'yes' | 'resources' | 'unsure' | 'not_now'>('yes');
  const [personalNote, setPersonalNote] = useState('');
  const [consentConfirmed, setConsentConfirmed] = useState(true);

  const moods: { type: MoodType; label: string; emoji: string; desc: string }[] = [
    { type: 'great', label: 'Great', emoji: '✨', desc: 'Energized, balanced, and productive' },
    { type: 'good', label: 'Good', emoji: '😊', desc: 'Managing well with general ease' },
    { type: 'okay', label: 'Okay', emoji: '😐', desc: 'Neutral, slightly busy but steady' },
    { type: 'low', label: 'Low', emoji: '😔', desc: 'Feeling drained, overwhelmed, or stuck' },
    { type: 'awful', label: 'Awful', emoji: '🌧️', desc: 'Struggling heavily right now' }
  ];

  const availableConcerns = [
    'Academic pressure',
    'Sleep difficulty',
    'Relationships & Friends',
    'Financial stress',
    'Loneliness / Homesickness',
    'Heavy course workload',
    'General wellbeing',
    'Exam anxiety',
    'Physical fatigue',
    'Something else'
  ];

  const changeOptions = [
    'Noticeably harder over the past 1–2 weeks',
    'Started feeling this way recently (past 48 hours)',
    'About the same as usual',
    'Feeling slightly lighter than last week'
  ];

  const supportOptions: {
    type: 'yes' | 'resources' | 'unsure' | 'not_now';
    label: string;
    desc: string;
  }[] = [
    {
      type: 'yes',
      label: 'Yes, I’d like someone to reach out',
      desc: 'An authorized support specialist from student services will send a warm, friendly message.'
    },
    {
      type: 'resources',
      label: 'Show me resources first',
      desc: 'Browse tailored guides, breathing exercises, and study tools on your own time.'
    },
    {
      type: 'unsure',
      label: 'I’m not sure right now',
      desc: 'Keep this check-in in your personal timeline. You can opt-in for support anytime.'
    },
    {
      type: 'not_now',
      label: 'Not right now',
      desc: 'Just recording for my personal self-reflection.'
    }
  ];

  const toggleConcern = (item: string) => {
    if (concerns.includes(item)) {
      setConcerns(concerns.filter((c) => c !== item));
    } else {
      setConcerns([...concerns, item]);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    } else {
      submitCheckIn({
        mood,
        concerns,
        changeRecent,
        supportRequested,
        notes: personalNote
      });
      navigateTo('student-summary');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-0 space-y-6">
      
      {/* Header and Step Indicator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold uppercase tracking-wider text-brand-primary">
            Voluntary Wellbeing Check-In
          </span>
          <span className="font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            Step {step} of 5
          </span>
        </div>

        {/* 5-Step Progress Bar */}
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i <= step ? 'bg-brand-primary' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Interactive Check-In Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-8 animate-in fade-in duration-200">
        
        {/* STEP 1: How are you feeling today? */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 01
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy mt-1">
                How are you feeling today?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Take a quiet breath and choose the option that best reflects where you are at:
              </p>
            </div>

            <div className="space-y-3">
              {moods.map((m) => {
                const isSelected = mood === m.type;
                return (
                  <button
                    key={m.type}
                    type="button"
                    onClick={() => setMood(m.type)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-50/90 border-brand-primary ring-2 ring-indigo-200 shadow-xs'
                        : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{m.emoji}</span>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-brand-navy">
                          {m.label}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-brand-primary bg-brand-primary text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: What's affecting you? */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 02
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy mt-1">
                What’s been affecting you?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select any areas that have been feeling heavier or demanding extra energy:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableConcerns.map((item) => {
                const isChecked = concerns.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleConcern(item)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-xs font-semibold border transition-all text-left ${
                      isChecked
                        ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item}</span>
                    <span
                      className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        isChecked ? 'border-white bg-white/20' : 'border-slate-300'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Optional note to self or support staff
              </label>
              <textarea
                rows={2}
                value={personalNote}
                onChange={(e) => setPersonalNote(e.target.value)}
                placeholder="Anything specific on your mind? (e.g. CS204 project deadline this Thursday)"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
        )}

        {/* STEP 3: How has this changed recently? */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 03
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy mt-1">
                How has this changed recently?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tracking shifts over time helps distinguish between a single tough day and sustained friction:
              </p>
            </div>

            <div className="space-y-3">
              {changeOptions.map((opt) => {
                const isSelected = changeRecent === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setChangeRecent(opt)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-50/90 border-brand-primary ring-2 ring-indigo-200 text-brand-primary shadow-xs'
                        : 'bg-slate-50/50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-brand-primary bg-brand-primary text-white'
                          : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Would you like support? */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 04
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy mt-1">
                Would you like support?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                You decide how you want to be supported. We never force contact:
              </p>
            </div>

            <div className="space-y-3">
              {supportOptions.map((opt) => {
                const isSelected = supportRequested === opt.type;
                return (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => setSupportRequested(opt.type)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-50/90 border-brand-primary ring-2 ring-indigo-200 shadow-xs'
                        : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-bold text-sm text-brand-navy">
                        {opt.label}
                      </h4>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-brand-primary bg-brand-primary text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">
                      {opt.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Consent & Privacy */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Step 05
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-brand-navy mt-1">
                Consent & Privacy Assurance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Clear boundaries that honor your student agency and data ownership:
              </p>
            </div>

            {/* Mandatory Privacy text from spec */}
            <div className="bg-indigo-50/80 rounded-2xl p-5 border border-indigo-100 space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-brand-primary text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Your Data Boundary</span>
              </div>
              <p className="font-medium text-slate-800 text-sm italic">
                “Your responses help us personalize support. You control what you share.”
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li>Your check-in responses are not visible to instructors, classmates, or employers.</li>
                <li>Only authorized student wellbeing coordinators have access to follow up if requested.</li>
                <li>EmoSpot does not generate clinical diagnoses or clinical records.</li>
              </ul>
            </div>

            <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={consentConfirmed}
                onChange={(e) => setConsentConfirmed(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary focus:ring-indigo-400 border-slate-300 mt-0.5"
              />
              <span className="text-xs font-semibold text-slate-700">
                I understand this check-in informs voluntary campus support and agree to submit my responses.
              </span>
            </label>
          </div>
        )}

        {/* Stepper Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="px-4 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            disabled={step === 5 && !consentConfirmed}
            className={`px-6 py-3 rounded-full text-xs font-bold text-white transition-all flex items-center gap-2 shadow-soft ${
              step === 5 && !consentConfirmed
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-brand-primary hover:bg-brand-light hover:shadow-glow'
            }`}
          >
            {step === 5 ? (
              <>
                <Sparkles className="w-4 h-4 text-sky-200" /> Submit Check-In
              </>
            ) : (
              <>
                Continue <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </div>

      <div className="text-center text-[11px] text-slate-400">
        EmoSpot is an early support platform. In immediate danger, contact campus emergency dispatch (ext 5555).
      </div>
    </div>
  );
};
