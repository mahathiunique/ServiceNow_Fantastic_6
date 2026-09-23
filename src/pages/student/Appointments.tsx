import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  UserCheck,
  Building2,
  MapPin,
  CheckCircle2,
  CalendarPlus,
  RefreshCw,
  XCircle,
  Sparkles,
  LifeBuoy
} from 'lucide-react';

export const Appointments: React.FC = () => {
  const { appointments, student, showNotification, requestHumanSupport } = useApp();
  const [reschedulingId, setReschedulingId] = useState<string | null>(null);

  const studentAppointments = appointments.filter((a) => a.studentId === student.id);

  const handleReschedule = (id: string) => {
    showNotification('Reschedule request sent. A coordinator will provide alternate time windows.');
    setReschedulingId(null);
  };

  const handleCancel = (id: string) => {
    showNotification('Appointment cancelled. You can reschedule anytime.');
  };

  const handleAddToCalendar = (apt: any) => {
    showNotification(`Mock event added to your university calendar: "${apt.type} with ${apt.staffName}"`);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-0 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Coordinated Care Sessions
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Your Support Appointments
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Compassionate 1-on-1 check-ins with authorized university student support specialists.
          </p>
        </div>

        <button
          onClick={() => requestHumanSupport()}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <LifeBuoy className="w-4 h-4" /> Request New Session
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-6">
        {studentAppointments.length > 0 ? (
          studentAppointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card hover-lift space-y-6"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-brand-navy">
                      {apt.type}
                    </h3>
                    <span className="text-xs text-brand-primary font-semibold">
                      {apt.department}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {apt.status}
                </span>
              </div>

              {/* Appointment Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Date & Time
                  </span>
                  <span className="font-bold text-slate-800 text-sm block">
                    {apt.date}
                  </span>
                  <span className="text-slate-500 font-mono">
                    {apt.time}
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                    <UserCheck className="w-3 h-3" /> Support Specialist
                  </span>
                  <span className="font-bold text-slate-800 text-sm block">
                    {apt.staffName}
                  </span>
                  <span className="text-slate-500">
                    Lead Wellbeing Coordinator
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70 space-y-1 sm:col-span-2 md:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Location / Format
                  </span>
                  <span className="font-bold text-slate-800 text-sm block">
                    {apt.location}
                  </span>
                  <span className="text-slate-500">
                    In-person or private virtual link
                  </span>
                </div>
              </div>

              {apt.notes && (
                <div className="bg-indigo-50/60 p-3.5 rounded-2xl border border-indigo-100 text-xs text-slate-600">
                  <strong className="text-brand-navy">Focus Area:</strong> {apt.notes}
                </div>
              )}

              {/* Action Buttons: Reschedule, Cancel, Add to Calendar (Mandated in spec) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleAddToCalendar(apt)}
                  className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-brand-primary font-bold text-xs rounded-xl border border-indigo-200 transition-colors flex items-center gap-1.5"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  Add to Calendar (Mock)
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleReschedule(apt.id)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancel(apt.id)}
                    className="px-4 py-2 text-rose-600 hover:bg-rose-50 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-4">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-brand-navy">
              No Upcoming Appointments
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              You currently do not have a scheduled support session. If you would like to connect with someone,
              tap below anytime.
            </p>
            <button
              onClick={() => requestHumanSupport()}
              className="px-5 py-2.5 bg-brand-primary text-white font-bold text-xs rounded-xl"
            >
              Request a Friendly Check-In
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
