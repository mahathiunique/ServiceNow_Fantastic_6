import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notification, dismissNotification } = useApp();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-brand-navy text-white p-4 rounded-2xl shadow-float border border-indigo-500/30 flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-indigo-600/50 flex items-center justify-center shrink-0 mt-0.5 text-brand-softBlue">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">
            EmoSpot Notice
          </p>
          <p className="text-sm text-slate-100 font-medium mt-0.5 leading-snug">
            {notification}
          </p>
        </div>
        <button
          onClick={dismissNotification}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
