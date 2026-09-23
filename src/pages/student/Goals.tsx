import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StudentGoal } from '../../types';
import {
  Target,
  Plus,
  CheckCircle2,
  Circle,
  Sparkles,
  Flame,
  Calendar,
  X,
  Heart
} from 'lucide-react';

export const Goals: React.FC = () => {
  const { goals, toggleGoal, addGoal } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<StudentGoal['category']>('Sleep');

  const categories: StudentGoal['category'][] = [
    'Sleep',
    'Physical',
    'Social',
    'Academic',
    'Mindfulness'
  ];

  const completedCount = goals.filter((g) => g.completed).length;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addGoal(newTitle.trim(), newCategory);
    setNewTitle('');
    setModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Gentle Self-Care
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Wellbeing Micro-Goals
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Non-competitive personal habits. Celebrate gentle consistency rather than perfection.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add Personal Goal
        </button>
      </div>

      {/* Progress Card (Non-competitive) */}
      <div className="bg-gradient-to-r from-brand-indigo to-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-softBlue flex items-center justify-center sm:justify-start gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Your Daily Rhythm
          </span>
          <h3 className="font-heading font-extrabold text-xl text-white">
            {completedCount} of {goals.length} micro-goals completed today
          </h3>
          <p className="text-xs text-indigo-200 max-w-md">
            Small daily actions reinforce emotional stability and prevent academic burnout.
          </p>
        </div>

        <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-sky-400 flex items-center justify-center font-heading font-extrabold text-2xl text-white shrink-0">
          {Math.round((completedCount / (goals.length || 1)) * 100)}%
        </div>
      </div>

      {/* Goals List */}
      <div className="space-y-3">
        {goals.map((goal) => {
          return (
            <div
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                goal.completed
                  ? 'bg-emerald-50/50 border-emerald-200/80 text-slate-400'
                  : 'bg-white border-slate-200 shadow-xs hover:border-indigo-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  aria-label="Toggle goal status"
                  className={`w-6 h-6 rounded-xl flex items-center justify-center transition-colors ${
                    goal.completed
                      ? 'bg-emerald-500 text-white'
                      : 'border-2 border-slate-300 group-hover:border-brand-primary'
                  }`}
                >
                  {goal.completed && <CheckCircle2 className="w-4 h-4" />}
                </button>

                <div>
                  <span className={`text-xs sm:text-sm font-semibold block ${goal.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {goal.title}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {goal.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{goal.streakDays}d streak</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Goal Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-base text-brand-navy">
                Create a Wellbeing Goal
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Goal Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Turn screens off 30m before sleep"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setNewCategory(cat)}
                      className={`text-xs py-2 px-1 rounded-xl border font-semibold transition-all ${
                        newCategory === cat
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
