import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Student } from '../../types';
import {
  X,
  Send,
  Sparkles,
  Calendar,
  MessageSquare,
  Mail,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface OutreachModalProps {
  student: Student;
  isOpen: boolean;
  onClose: () => void;
}

export const OutreachModal: React.FC<OutreachModalProps> = ({ student, isOpen, onClose }) => {
  const { sendOutreach, staff } = useApp();

  const [channel, setChannel] = useState<'Portal Notification' | 'University Email' | 'SMS Direct'>(
    'Portal Notification'
  );

  const initialMessage = `Hi ${student.name.split(' ')[0]},
We noticed you recently indicated that some additional support may be useful regarding your ${student.keyConcerns.slice(0, 2).join(' and ') || 'studies'}.

Would you like to talk with someone from the university student support team? We can chat virtually, over coffee, or simply connect you with course resources—entirely at your pace.`;

  const [message, setMessage] = useState(initialMessage);
  const [scheduleMeeting, setScheduleMeeting] = useState(true);
  const [meetingDate, setMeetingDate] = useState('Tomorrow, Sep 24');
  const [meetingTime, setMeetingTime] = useState('2:30 PM – 3:00 PM');
  const [template, setTemplate] = useState<'gentle' | 'academic' | 'resource'>('gentle');

  if (!isOpen) return null;

  const handleTemplateChange = (type: 'gentle' | 'academic' | 'resource') => {
    setTemplate(type);
    const firstName = student.name.split(' ')[0];
    if (type === 'gentle') {
      setMessage(`Hi ${firstName},
We noticed you recently indicated that some additional support may be useful regarding your ${student.keyConcerns.slice(0, 2).join(' and ') || 'studies'}.

Would you like to talk with someone from the university student support team? We can chat virtually, over coffee, or simply connect you with helpful resources—entirely at your pace.`);
    } else if (type === 'academic') {
      setMessage(`Hi ${firstName},
Dr. Thorne here from student support. I saw your recent check-in mentioned academic workload and sleep pressures.

Midterms can feel intense, but you don't have to navigate them alone. Would a 20-minute planning session this week help relieve some pressure?`);
    } else {
      setMessage(`Hi ${firstName},
Thank you for checking in on EmoSpot today. I've curated a few tailored study-reset and sleep-routine resources for you in your student portal.

If you ever want to talk through them together, our team is right here.`);
    }
  };

  const handleSend = () => {
    sendOutreach({
      studentId: student.id,
      channel,
      message,
      scheduleMeeting,
      meetingDate,
      meetingTime
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-brand-navy text-white p-5 flex items-center justify-between border-b border-indigo-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-sm">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-base text-white">
                  Compassionate Outreach
                </h3>
                <span className="text-[10px] uppercase font-bold bg-indigo-500/30 text-sky-200 px-2 py-0.5 rounded border border-indigo-400/30">
                  Human-Led Support
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Reaching out to <strong className="text-white">{student.name}</strong> ({student.studentId} • {student.department})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* Why Outreach was triggered */}
          <div className="bg-indigo-50/80 rounded-2xl p-3.5 border border-indigo-100 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="text-brand-navy block mb-0.5">Signal Context:</strong>
              Student indicated <em>{student.keyConcerns.join(', ') || 'support requested'}</em>.
              Voluntary check-in submitted {student.latestCheckin}. This outreach respects student agency and uses non-diagnostic language.
            </div>
          </div>

          {/* Outreach Channel Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Delivery Channel
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setChannel('Portal Notification')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all ${
                  channel === 'Portal Notification'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Portal Message
              </button>

              <button
                type="button"
                onClick={() => setChannel('University Email')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all ${
                  channel === 'University Email'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                University Email
              </button>

              <button
                type="button"
                onClick={() => setChannel('SMS Direct')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all ${
                  channel === 'SMS Direct'
                    ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                SMS (Mock)
              </button>
            </div>
          </div>

          {/* AI-Assisted Compassionate Phrasing Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                AI-Assisted Suggested Phrasing
              </label>
              <span className="text-[10px] text-slate-400">Non-diagnostic & warm</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleTemplateChange('gentle')}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                  template === 'gentle'
                    ? 'bg-violet-50 text-violet-800 border-violet-300 font-bold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Gentle Wellbeing Check-in
              </button>
              <button
                type="button"
                onClick={() => handleTemplateChange('academic')}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                  template === 'academic'
                    ? 'bg-violet-50 text-violet-800 border-violet-300 font-bold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Midterm & Workload Focus
              </button>
              <button
                type="button"
                onClick={() => handleTemplateChange('resource')}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                  template === 'resource'
                    ? 'bg-violet-50 text-violet-800 border-violet-300 font-bold'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Resource Sharing & Invitation
              </button>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Personalized Message (Editable)
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs p-3.5 rounded-2xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-indigo-100 transition-all text-slate-800 font-normal leading-relaxed"
            />
          </div>

          {/* Schedule Meeting Checkbox */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={scheduleMeeting}
                onChange={(e) => setScheduleMeeting(e.target.checked)}
                className="w-4 h-4 rounded text-brand-primary focus:ring-indigo-400 border-slate-300"
              />
              <span className="text-xs font-bold text-brand-navy">
                Attach provisional appointment slot
              </span>
            </label>

            {scheduleMeeting && (
              <div className="grid grid-cols-2 gap-3 pl-6 pt-1 animate-in fade-in duration-150">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                    Proposed Date
                  </label>
                  <input
                    type="text"
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                    Proposed Time Window
                  </label>
                  <input
                    type="text"
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
            <span>Authorized coordinator: {staff.name}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-light transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              Send Outreach & Update Journey
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
