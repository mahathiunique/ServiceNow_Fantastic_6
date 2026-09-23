import React, { useState } from 'react';
import { Eye, Hand, Volume2, Flower2, Heart, CheckCircle2, ChevronRight, RotateCcw } from 'lucide-react';

export const GroundingTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: 5,
      icon: Eye,
      title: '5 Things You Can See',
      description: 'Look around your room or desk right now. Notice 5 distinct physical details (e.g. the grain on the table, a plant leaf, light hitting the window).',
      placeholder: 'Type what you notice around you...',
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      num: 4,
      icon: Hand,
      title: '4 Things You Can Physically Feel',
      description: 'Bring awareness to physical contact: the pressure of your feet on the floor, the texture of your sweater, or the temperature of the air on your hands.',
      placeholder: 'Notice 4 textures or physical sensations...',
      color: 'text-sky-600 bg-sky-50 border-sky-200'
    },
    {
      num: 3,
      icon: Volume2,
      title: '3 Things You Can Hear',
      description: 'Listen closely to the room or outside. A hum of air conditioning, distant footsteps, or leaves in the wind.',
      placeholder: 'Notice 3 subtle sounds...',
      color: 'text-violet-600 bg-violet-50 border-violet-200'
    },
    {
      num: 2,
      icon: Flower2,
      title: '2 Things You Can Smell',
      description: 'Breathe in gently. Fresh air, coffee, rain, clean laundry, or the aroma of your study space.',
      placeholder: 'Notice scents around you...',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      num: 1,
      icon: Heart,
      title: '1 Positive Thing About Yourself',
      description: 'Name one kind truth: you are trying your best, you have overcome difficult weeks before, or you deserve rest and kindness today.',
      placeholder: 'A kind word to yourself...',
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    }
  ];

  const current = steps[currentStep];
  const Icon = current.icon;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          5-4-3-2-1 Sensory Reset
        </span>
        <span className="text-xs font-semibold text-brand-primary bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
          Step {currentStep + 1} of 5
        </span>
      </div>

      {/* Progress Bars */}
      <div className="grid grid-cols-5 gap-1.5 mb-6">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i <= currentStep ? 'bg-brand-primary' : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Active Step Content */}
      <div className="text-center py-2 space-y-4">
        <div className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center border shadow-xs ${current.color}`}>
          <Icon className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Level {current.num}
          </span>
          <h3 className="font-heading font-extrabold text-xl text-brand-navy mt-0.5">
            {current.title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto mt-2">
            {current.description}
          </p>
        </div>

        <input
          type="text"
          placeholder={current.placeholder}
          className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100 transition-all text-slate-700 bg-slate-50/50"
        />
      </div>

      {/* Step Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
        <button
          onClick={() => setCurrentStep(0)}
          className="text-xs font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Start Over
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-brand-primary text-white hover:bg-brand-light transition-all flex items-center gap-1.5 shadow-sm"
          >
            Next Step <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(0)}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" /> Grounding Complete
          </button>
        )}
      </div>
    </div>
  );
};
