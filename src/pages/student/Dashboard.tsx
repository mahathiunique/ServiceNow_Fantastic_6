import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MoodType } from '../../types';
import {
  Sparkles,
  HeartHandshake,
  Calendar,
  Milestone,
  ArrowRight,
  LifeBuoy,
  Target,
  BookOpen,
  CheckCircle2,
  Clock,
  ChevronRight,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { SupportJourneyVisual } from '../../components/student/SupportJourneyVisual';

export const Dashboard: React.FC = () => {
  const { student, navigateTo, submitCheckIn, goals, appointments, journeys, requestHumanSupport } = useApp();

  const [selectedMood, setSelectedMood] = useState<MoodType>('low');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['Academic pressure', 'Sleep difficulty']);

  const moods: { type: MoodType; label: string; emoji: string }[] = [
    { type: 'great', label: 'Great', emoji: '✨' },
    { type: 'good', label: 'Good', emoji: '😊' },
    { type: 'okay', label: 'Okay', emoji: '😐' },
    { type: 'low', label: 'Low', emoji: '😔' },
    { type: 'awful', label: 'Awful', emoji: '🌧️' }
  ];

  const concernsList = [
    'Academic pressure',
    'Sleep difficulty',
    'Relationships',
    'Financial stress',
    'Loneliness',
    'Workload',
    'General wellbeing',
    'Something else'
  ];

  const toggleConcern = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter((c) => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleQuickCheckInSubmit = () => {
    submitCheckIn({
      mood: selectedMood,
      concerns: selectedConcerns,
      changeRecent: 'Felt noticeable fatigue in algorithms coursework and late nights',
      supportRequested: 'yes'
    });
    navigateTo('student-summary');
  };

  const nextAppointment = appointments.find((a) => a.studentId === student.id && a.status === 'Scheduled');

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      
      {/* Warm Header */}
      <div className="bg-gradient-to-r from-brand-indigo via-indigo-900 to-brand-navy rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-softBlue text-xs font-semibold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Voluntary Student Early-Support</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
            Good morning, {student.name}
          </h1>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-lg leading-relaxed">
            Welcome to your safe campus space. No pressure, no judgment—just small signals
            to help you stay balanced and supported throughout the semester.
          </p>
        </div>

        {/* Action button */}
        <div className="shrink-0 flex flex-col gap-2">
          <button
            onClick={() => navigateTo('student-checkin')}
            className="px-5 py-3 rounded-full bg-brand-softBlue hover:bg-sky-200 text-brand-navy font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            Full 5-Step Check-In
          </button>
          <span className="text-[10px] text-center text-indigo-300">
            Takes ~45 seconds
          </span>
        </div>
      </div>

      {/* Main Grid: Check-in Card + Next Appointment & Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Check-In Card (Mandated in section 9 of prompt) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
            
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                Daily Wellbeing Reflection
              </span>
              <h2 className="font-heading font-extrabold text-xl text-brand-navy mt-1">
                How are you feeling today?
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Select the option closest to your current state:
              </p>
            </div>

            {/* Mood Options */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {moods.map((m) => {
                const isSelected = selectedMood === m.type;
                return (
                  <button
                    key={m.type}
                    type="button"
                    onClick={() => setSelectedMood(m.type)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-indigo-50/90 border-brand-primary ring-2 ring-indigo-200 text-brand-primary shadow-xs scale-105'
                        : 'bg-slate-50/60 border-slate-200/80 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl mb-1">{m.emoji}</span>
                    <span className="text-xs font-bold">{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* What's been affecting you */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider">
                What's been affecting you?
              </label>
              <div className="flex flex-wrap gap-2">
                {concernsList.map((concern) => {
                  const isChecked = selectedConcerns.includes(concern);
                  return (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => toggleConcern(concern)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium border transition-all ${
                        isChecked
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {concern}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Signals are completely private & student-owned.
              </span>
              <button
                onClick={handleQuickCheckInSubmit}
                className="px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2"
              >
                Complete Check-In <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Support Journey Snapshot */}
          <SupportJourneyVisual isCompact={true} />
        </div>

        {/* Right Column: Upcoming Care, Quick Support Tools, Goals */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Upcoming Appointment Card */}
          {nextAppointment ? (
            <div className="bg-gradient-to-br from-indigo-900 to-brand-navy text-white rounded-3xl p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-softBlue flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Upcoming Conversation
                </span>
                <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                  Confirmed
                </span>
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-base text-white">
                  {nextAppointment.type}
                </h4>
                <p className="text-xs text-indigo-200 mt-1">
                  With <strong>{nextAppointment.staffName}</strong> ({nextAppointment.department})
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-sky-200 font-mono bg-white/10 p-2.5 rounded-xl border border-white/15">
                  <Clock className="w-4 h-4 text-sky-300" />
                  <span>{nextAppointment.date} • {nextAppointment.time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs">
                <button
                  onClick={() => navigateTo('student-appointments')}
                  className="text-brand-softBlue hover:underline font-semibold"
                >
                  Manage Appointment & Details
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Campus Support
                </span>
                <LifeBuoy className="w-4 h-4 text-brand-primary" />
              </div>
              <h4 className="font-heading font-bold text-base text-brand-navy">
                Need someone to talk with?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our student support specialists are here for a gentle, zero-pressure conversation anytime.
              </p>
              <button
                onClick={() => requestHumanSupport()}
                className="w-full py-2.5 bg-indigo-50 hover:bg-indigo-100 text-brand-primary font-bold text-xs rounded-xl border border-indigo-200 transition-colors"
              >
                Request Friendly Support
              </button>
            </div>
          )}

          {/* Quick Support Tools Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-heading font-bold text-sm text-brand-navy">
                  Quick Reset Tools
                </h3>
                <p className="text-xs text-slate-500">2-minute interactive relief</p>
              </div>
              <button
                onClick={() => navigateTo('student-quick-tools')}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => navigateTo('student-quick-tools')}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/70 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                    4-7-8
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-navy group-hover:text-brand-primary">
                      Take a Breath
                    </h5>
                    <p className="text-[11px] text-slate-500">Guided vagus nerve reset</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('student-quick-tools')}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/70 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                    5-4-3
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-navy group-hover:text-brand-primary">
                      Ground Yourself
                    </h5>
                    <p className="text-[11px] text-slate-500">Sensory room scan</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Non-Competitive Goals Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-heading font-bold text-sm text-brand-navy">
                  Micro-Wellbeing Goals
                </h3>
                <p className="text-xs text-slate-500">Gentle personal habits</p>
              </div>
              <button
                onClick={() => navigateTo('student-goals')}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                Manage
              </button>
            </div>

            <div className="space-y-2">
              {goals.slice(0, 3).map((g) => (
                <div
                  key={g.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs"
                >
                  <span className={`font-medium ${g.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                    {g.title}
                  </span>
                  <span className="text-[10px] font-bold text-brand-primary bg-indigo-50 px-2 py-0.5 rounded">
                    {g.streakDays}d streak
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
