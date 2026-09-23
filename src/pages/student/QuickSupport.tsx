import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Wind,
  Brain,
  Hand,
  Timer,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  LifeBuoy,
  CheckCircle2,
  RotateCcw,
  Play,
  Pause
} from 'lucide-react';
import { BreathingExercise } from '../../components/student/BreathingExercise';
import { GroundingTool } from '../../components/student/GroundingTool';

export const QuickSupport: React.FC = () => {
  const { requestHumanSupport, navigateTo } = useApp();

  const [activeTool, setActiveTool] = useState<
    'breath' | 'thinking' | 'ground' | 'step' | 'reach'
  >('breath');

  // Study Reset Timer State
  const [timerSeconds, setTimerSeconds] = useState(15 * 60);
  const [timerActive, setTimerActive] = useState(false);

  React.useEffect(() => {
    let t: any;
    if (timerActive && timerSeconds > 0) {
      t = setInterval(() => setTimerSeconds((s) => s - 1), 1000);
    }
    return () => clearInterval(t);
  }, [timerActive, timerSeconds]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-0 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          MindShift-Inspired Micro-Tools
        </span>
        <h1 className="font-heading font-extrabold text-3xl text-brand-navy">
          Quick Wellbeing Tools
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Gentle, 2-to-5 minute interactive resets to regulate your nervous system and regain clarity.
        </p>
      </div>

      {/* 5 Tool Selector Cards (Mandated categories from spec) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        
        {/* Tool 1: Take a Breath */}
        <button
          onClick={() => setActiveTool('breath')}
          className={`p-4 rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
            activeTool === 'breath'
              ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-200 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            <Wind className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-brand-navy">
              Take a Breath
            </h3>
            <p className="text-[10px] text-slate-500 mt-0.5">
              4-7-8 Breathing
            </p>
          </div>
        </button>

        {/* Tool 2: Shift Your Thinking */}
        <button
          onClick={() => setActiveTool('thinking')}
          className={`p-4 rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
            activeTool === 'thinking'
              ? 'bg-violet-50 border-violet-400 ring-2 ring-violet-200 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-brand-navy">
              Shift Your Thinking
            </h3>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Thought Reframing
            </p>
          </div>
        </button>

        {/* Tool 3: Ground Yourself */}
        <button
          onClick={() => setActiveTool('ground')}
          className={`p-4 rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
            activeTool === 'ground'
              ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-200 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Hand className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-brand-navy">
              Ground Yourself
            </h3>
            <p className="text-[10px] text-slate-500 mt-0.5">
              5-4-3-2-1 Sensory
            </p>
          </div>
        </button>

        {/* Tool 4: Take a Small Step */}
        <button
          onClick={() => setActiveTool('step')}
          className={`p-4 rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
            activeTool === 'step'
              ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-200 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-brand-navy">
              Take a Small Step
            </h3>
            <p className="text-[10px] text-slate-500 mt-0.5">
              15-Min Study Sprint
            </p>
          </div>
        </button>

        {/* Tool 5: Reach Out */}
        <button
          onClick={() => setActiveTool('reach')}
          className={`p-4 rounded-3xl border transition-all text-left flex flex-col justify-between space-y-3 ${
            activeTool === 'reach'
              ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-200 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-brand-navy">
              Reach Out
            </h3>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Campus Support
            </p>
          </div>
        </button>

      </div>

      {/* Active Interactive Stage */}
      <div className="py-2">
        {activeTool === 'breath' && <BreathingExercise />}

        {activeTool === 'ground' && <GroundingTool />}

        {activeTool === 'thinking' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card max-w-lg mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Cognitive Defusion Prompt
              </span>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                Shift Your Thinking
              </h3>
              <p className="text-xs text-slate-500">
                Challenge self-critical automatic assumptions when exam stress spikes.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200">
                <span className="font-bold text-rose-800 uppercase tracking-wider text-[10px] block mb-1">
                  Automatic Anxious Thought
                </span>
                <p className="text-slate-700 italic">
                  “I’m falling so far behind in coursework that I will never catch up.”
                </p>
              </div>

              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
                <span className="font-bold text-emerald-800 uppercase tracking-wider text-[10px] block mb-1">
                  Balanced Compassionate Reframe
                </span>
                <p className="text-slate-700">
                  “I have a demanding week, but one challenging assignment does not define my capability.
                  If I focus on just the next 30 minutes, I make tangible progress.”
                </p>
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1">
                  Try reframing your current stressor:
                </label>
                <textarea
                  rows={3}
                  placeholder="What is a kinder, more realistic perspective on what you are facing today?"
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-brand-primary"
                />
              </div>
            </div>
          </div>
        )}

        {activeTool === 'step' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card max-w-lg mx-auto text-center space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Low-Friction Action
              </span>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy mt-1">
                Take a Small Step: 15-Minute Study Sprint
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Bypass avoidance paralysis. Commit to just 15 minutes of non-judgmental work.
              </p>
            </div>

            <div className="w-44 h-44 mx-auto rounded-full bg-slate-900 text-white flex flex-col items-center justify-center shadow-lg">
              <span className="text-4xl font-extrabold font-mono text-amber-300">
                {formatTimer(timerSeconds)}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                {timerActive ? 'Sprint Active' : 'Ready'}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setTimerActive(!timerActive)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold text-white transition-all flex items-center gap-1.5 ${
                  timerActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-brand-primary hover:bg-brand-light'
                }`}
              >
                {timerActive ? (
                  <>
                    <Pause className="w-4 h-4" /> Pause Sprint
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" /> Start 15 Min
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setTimerActive(false);
                  setTimerSeconds(15 * 60);
                }}
                className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-slate-800"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeTool === 'reach' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card max-w-lg mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 mx-auto flex items-center justify-center shadow-xs">
              <HeartHandshake className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                You Deserve Human Support
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                No app can replace a kind, listening human. Connect with your university student support team.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>Zero clinical judgment or psychiatric labeling</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>Confidential coordination with coursework advisors</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-brand-navy">
                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                <span>Connect via portal message, email, or a 20-min chat</span>
              </div>
            </div>

            <button
              onClick={() => {
                requestHumanSupport();
                navigateTo('student-journey');
              }}
              className="w-full py-3 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-soft transition-all flex items-center justify-center gap-2"
            >
              <LifeBuoy className="w-4 h-4" />
              Request Confidential Human Support
            </button>
          </div>
        )}
      </div>

      {/* Mandatory 'Need human support?' Banner */}
      <div className="bg-gradient-to-r from-brand-navy via-brand-indigo to-brand-primary text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-card">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-sky-300 uppercase tracking-wider">
            <LifeBuoy className="w-3.5 h-3.5" />
            Need Human Support?
          </div>
          <h4 className="font-heading font-extrabold text-lg text-white">
            Sometimes self-care tools aren't enough.
          </h4>
          <p className="text-xs text-indigo-200 max-w-md">
            Our campus support specialists are ready to help with coursework stress, sleep changes, and personal hurdles.
          </p>
        </div>

        <button
          onClick={() => {
            requestHumanSupport();
            navigateTo('student-journey');
          }}
          className="px-6 py-3 rounded-full bg-brand-softBlue hover:bg-sky-200 text-brand-navy font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          Reach Out Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
