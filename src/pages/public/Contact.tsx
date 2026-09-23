import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Contact: React.FC = () => {
  const { showNotification } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Counselling & Psychological Services',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showNotification('Inquiry sent. University student support coordination will reply within 24 hours.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Connect With University Support
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy leading-tight">
          We Are Here to Listen & Coordinate
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Whether you are a student exploring campus resources, faculty coordinating departmental support,
          or a campus leader evaluating EmoSpot deployment: reach out below.
        </p>
      </div>

      {/* Emergency Notice */}
      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-amber-950">
              Immediate Campus Crisis Assistance
            </h4>
            <p className="text-xs text-amber-900/80">
              EmoSpot is not monitored for instant emergency dispatch. If someone is in immediate danger, contact Campus Safety.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono font-bold bg-amber-200/80 text-amber-950 px-3 py-1.5 rounded-xl border border-amber-300">
            Campus Safety: Ext. 5555
          </span>
          <span className="text-xs font-mono font-bold bg-white text-slate-800 px-3 py-1.5 rounded-xl border border-amber-200">
            National: 988
          </span>
        </div>
      </div>

      {/* Main Grid: Info + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-6">
            <h3 className="font-heading font-extrabold text-lg text-brand-navy">
              Campus Wellbeing Headquarters
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-navy block">Student Support Suite 304</strong>
                  <span>Main Quad Student Services Building, Central Campus</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-navy block">Direct Coordinator Desk</strong>
                  <span>(555) 019-8841 (Mon–Fri, 8:30 AM – 5:00 PM)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-navy block">Support Routing Inbox</strong>
                  <span>wellbeing.support@university.edu</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-navy block">12 Coordinating Departments</strong>
                  <span>Counselling, Advising, Housing, Health Center, Accessibility, Financial Aid...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-brand-navy">
                  Thank you for reaching out
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Your message has been confidentially logged with our Student Support Office. A coordinator will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-indigo-50 text-brand-primary font-bold text-xs rounded-xl"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-1">
                  Send a Support Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  All messages are routed confidentially to authorized university student support staff.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mahathi M."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      University Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@university.edu"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Select University Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100 bg-white"
                  >
                    <option>Counselling & Psychological Services</option>
                    <option>Student Academic Advisory</option>
                    <option>Residence Life & Housing</option>
                    <option>Disability & Accessibility Services</option>
                    <option>Financial Aid Emergency Relief</option>
                    <option>Student Health Center</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Subject / Concern
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Inquiring about study workload support"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can assist you..."
                    className="w-full text-xs p-3.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-primary hover:bg-brand-light text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Confidential Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
