import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Clock, CircleDot, ArrowDown, Shield, LifeBuoy, Sparkles } from 'lucide-react';

interface SupportJourneyVisualProps {
  studentId?: string;
  isCompact?: boolean;
}

export const SupportJourneyVisual: React.FC<SupportJourneyVisualProps> = ({
  studentId = 'stu-mahathi',
  isCompact = false
}) => {
  const { journeys, requestHumanSupport } = useApp();
  const journey = journeys[studentId] || journeys['stu-mahathi'];

  if (!journey) return null;

  return (
    <div className={`bg-white rounded-3xl ${isCompact ? 'p-5' : 'p-6 sm:p-8'} border border-slate-200 shadow-card`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
            <Sparkles className="w-3.5 h-3.5 text-brand-softBlue" />
            Novelty Feature: Continuous Support Journey
          </div>
          <h3 className="font-heading font-extrabold text-xl text-brand-navy mt-0.5">
            Your Personalized Pathway
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xl">
            EmoSpot connects every touchpoint—from voluntary check-in to human coordination and follow-up.
            You remain in control of each step.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[11px] font-semibold text-slate-500">Status:</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-brand-primary border border-indigo-200">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Stage {journey.currentStepIndex || 2} of 7
          </span>
        </div>
      </div>

      {/* Stepper Timeline */}
      <div className="pt-8 pb-4 relative">
        <div className="space-y-6">
          {journey.steps.map((step, idx) => {
            const isCompleted = step.status === 'completed';
            const isInProgress = step.status === 'in_progress';
            const isUpcoming = step.status === 'upcoming';

            return (
              <div key={step.step} className="relative flex items-start gap-4 group">
                {/* Connecting Line */}
                {idx < journey.steps.length - 1 && (
                  <div
                    className={`absolute left-5 top-10 bottom-0 w-0.5 -ml-[1px] transition-colors ${
                      isCompleted ? 'bg-brand-primary' : 'bg-slate-200'
                    }`}
                    style={{ height: 'calc(100% + 8px)' }}
                  />
                )}

                {/* Step Icon */}
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 z-10 transition-all ${
                    isCompleted
                      ? 'bg-brand-primary text-white shadow-sm ring-4 ring-indigo-50'
                      : isInProgress
                      ? 'bg-brand-softBlue text-brand-navy ring-4 ring-sky-100 animate-pulse font-bold'
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : isInProgress ? (
                    <CircleDot className="w-5 h-5 text-brand-navy" />
                  ) : (
                    <span className="text-xs font-bold">{step.step}</span>
                  )}
                </div>

                {/* Step Details */}
                <div className="flex-1 bg-slate-50/70 hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/70 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Step 0{step.step}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-brand-navy">
                        {step.title}
                      </h4>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : isInProgress
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isCompleted ? 'Completed' : isInProgress ? 'Active Stage' : 'Upcoming'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {step.date && (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{step.date}</span>
                    </div>
                  )}

                  {/* Dynamic Action Trigger if Stage 3 (Support Request) is available */}
                  {step.step === 3 && isInProgress && (
                    <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-2">
                      <button
                        onClick={() => requestHumanSupport(studentId)}
                        className="px-3.5 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-xl hover:bg-brand-light transition-all flex items-center gap-1.5 shadow-xs"
                      >
                        <LifeBuoy className="w-3.5 h-3.5" />
                        Opt-In For Support Staff Outreach
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Safety & Student Ownership Footer Note */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
        <Shield className="w-4 h-4 text-brand-primary shrink-0" />
        <span>
          <strong>Student Ownership:</strong> You have full control over each stage of this journey.
          Support is voluntary and collaborative, honoring your agency at all times.
        </span>
      </div>
    </div>
  );
};
