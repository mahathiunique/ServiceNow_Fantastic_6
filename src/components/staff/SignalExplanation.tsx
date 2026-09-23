import React from 'react';
import { Student } from '../../types';
import { HelpCircle, CheckCircle2, AlertTriangle, ShieldCheck, Scale, Info } from 'lucide-react';

interface SignalExplanationProps {
  student: Student;
}

export const SignalExplanation: React.FC<SignalExplanationProps> = ({ student }) => {
  return (
    <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200/80 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-brand-primary" />
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy">
            Explainable Transparent Signal Engine
          </h4>
        </div>
        <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-500">
          Rule-Based Deterministic
        </span>
      </div>

      <div className="space-y-2.5 text-xs text-slate-600">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
          <div>
            <strong className="text-brand-navy">Voluntary Signal Detected:</strong> Student indicated
            change in daily routine during check-in ({student.latestCheckin}).
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
          <div>
            <strong className="text-brand-navy">Correlated Focus Areas:</strong>{' '}
            <span className="inline-flex flex-wrap gap-1 mt-0.5">
              {student.keyConcerns.map((c, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-full"
                >
                  {c}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
          <div>
            <strong className="text-brand-navy">Support Recommendation Logic:</strong> Evaluated under Rule{' '}
            <code>SR-02 (Voluntary Academic & Sleep Indicator Co-occurrence)</code>. Support is recommended to prevent
            academic disruption and mid-semester burnout.
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200/70 flex items-start gap-2.5 text-[11px] text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Non-Diagnostic Assurance:</strong> EmoSpot does not evaluate clinical mental health disorders or assign psychiatric classifications.
          Signals represent voluntary campus stress indicators to facilitate timely human assistance.
        </div>
      </div>
    </div>
  );
};
