import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Appointment } from '../../types';
import {
  Calendar,
  Clock,
  User,
  Plus,
  CheckCircle2,
  CalendarDays,
  MapPin,
  X,
  Search,
  Building2
} from 'lucide-react';

export const StaffAppointments: React.FC = () => {
  const { appointments, students, staff, scheduleAppointment, showNotification } = useApp();

  const [modalOpen, setModalOpen] = useState(false);
  const [studentId, setStudentId] = useState(students[0]?.id || 'stu-mahathi');
  const [aptType, setAptType] = useState('Wellbeing Check-in & Academic Planning');
  const [date, setDate] = useState('Tomorrow, Sep 24');
  const [time, setTime] = useState('2:30 PM – 3:00 PM');
  const [location, setLocation] = useState('Support Suite 304 or Zoom Link');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const targetStudent = students.find((s) => s.id === studentId) || students[0];

    scheduleAppointment({
      studentId: targetStudent.id,
      studentName: targetStudent.name,
      staffId: staff.id,
      staffName: staff.name,
      department: staff.department,
      date,
      time,
      type: aptType,
      location,
      status: 'Scheduled',
      notes: 'Scheduled via staff portal.'
    });

    setModalOpen(false);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Department Coordination
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-brand-navy mt-1">
            Supportive Appointments
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage upcoming 1-on-1 conversations scheduled across campus specialists.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-light text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Book New Session
        </button>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((apt) => (
          <div
            key={apt.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card hover-lift space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                {apt.department}
              </span>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {apt.status}
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-base text-brand-navy">
                {apt.type}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Student: <strong className="text-brand-navy">{apt.studentName}</strong> • Specialist: {apt.staffName}
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70 text-xs space-y-1 font-mono">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-3.5 h-3.5 text-brand-primary" />
                <span>{apt.date} • {apt.time}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-sans text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{apt.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-400 text-[11px]">
                FERPA protected record
              </span>
              <button
                onClick={() => showNotification(`Session details opened for ${apt.studentName}.`)}
                className="text-xs font-bold text-brand-primary hover:underline"
              >
                View Case Notes →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Booking New Appointment */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-heading font-bold text-base text-brand-navy">
                Schedule Support Appointment
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
                  Select Student
                </label>
                <select
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.studentId} • {s.department})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Session Type
                </label>
                <input
                  type="text"
                  required
                  value={aptType}
                  onChange={(e) => setAptType(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Time Window
                  </label>
                  <input
                    type="text"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Format / Location
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200"
                />
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
                  className="px-5 py-2.5 bg-brand-primary text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
