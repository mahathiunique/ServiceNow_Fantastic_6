import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Wind, Heart, Sparkles } from 'lucide-react';

export const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [countdown, setCountdown] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    let timer: any;
    if (isActive) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (phase === 'inhale') {
              setPhase('hold');
              return 7;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return 8;
            } else {
              setPhase('inhale');
              setCompletedCycles((c) => c + 1);
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setCountdown(4);
    setCompletedCycles(0);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale':
        return 'from-sky-400 to-indigo-500 text-sky-900';
      case 'hold':
        return 'from-violet-400 to-indigo-600 text-violet-900';
      case 'exhale':
        return 'from-teal-400 to-emerald-500 text-emerald-900';
    }
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'inhale':
        return 'Inhale deeply through your nose...';
      case 'hold':
        return 'Hold your breath gently...';
      case 'exhale':
        return 'Release slowly through your mouth...';
    }
  };

  const getCircleScale = () => {
    if (!isActive) return 'scale-100';
    if (phase === 'inhale') return 'scale-125';
    if (phase === 'hold') return 'scale-125 ring-8 ring-indigo-200/50';
    return 'scale-90';
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card text-center max-w-lg mx-auto">
      <div className="flex items-center justify-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
        <Wind className="w-4 h-4" />
        4-7-8 Rhythmic Breathing Pacer
      </div>
      <h3 className="font-heading font-extrabold text-xl text-brand-navy">
        Take a Mindful Breath
      </h3>
      <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1 mb-8">
        Scientifically designed to stimulate the vagus nerve and down-regulate sympathetic tension.
      </p>

      {/* Visual Expanding Circle */}
      <div className="relative w-56 h-56 mx-auto flex items-center justify-center my-6">
        {/* Outer ambient glow */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr ${getPhaseColor()} opacity-20 blur-xl transition-all duration-1000 ${
            isActive ? 'scale-110' : 'scale-90'
          }`}
        />

        {/* Animated breathing circle */}
        <div
          className={`w-44 h-44 rounded-full bg-gradient-to-tr ${getPhaseColor()} flex flex-col items-center justify-center shadow-float text-white transition-all duration-1000 ease-in-out ${getCircleScale()}`}
        >
          <span className="text-4xl font-extrabold font-mono tracking-tight">
            {countdown}
          </span>
          <span className="text-xs uppercase font-bold tracking-widest mt-1 opacity-90">
            {phase}
          </span>
        </div>
      </div>

      {/* Instruction text */}
      <p className="text-sm font-semibold text-brand-navy h-6 transition-all duration-300">
        {isActive ? getPhaseInstruction() : 'Press Start to begin breathing together'}
      </p>

      {/* Cycle counter */}
      <div className="flex items-center justify-center gap-2 my-4 text-xs font-medium text-slate-500">
        <Sparkles className="w-3.5 h-3.5 text-brand-softBlue" />
        <span>Completed breath cycles:</span>
        <span className="font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
          {completedCycles}
        </span>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
            isActive
              ? 'bg-amber-500 text-white hover:bg-amber-600'
              : 'bg-brand-primary text-white hover:bg-brand-light hover:shadow-md'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" /> Start Breathing
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          className="p-2.5 rounded-full text-slate-500 hover:text-brand-navy hover:bg-slate-100 border border-slate-200 transition-colors"
          title="Reset timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
