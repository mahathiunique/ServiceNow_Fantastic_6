export type Role = 'public' | 'student' | 'staff';

export type MoodType = 'great' | 'good' | 'okay' | 'low' | 'awful';

export type SupportSignalType = 'support_recommended' | 'followup_helpful' | 'steady_support';

export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  department: string;
  year: string;
  avatar?: string;
  latestCheckin: string;
  signalChange: 'changed' | 'steady' | 'improving';
  signalType: SupportSignalType;
  supportStatus: 'Pending Follow-Up' | 'Outreach Sent' | 'Appointment Scheduled' | 'Under Support' | 'Completed' | 'Self-Care';
  priority: 'Priority 1' | 'Priority 2' | 'Standard';
  keyConcerns: string[];
  lastContact: string;
  nextAction: string;
  notesCount: number;
}

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  department: string;
  title: string;
  role: string;
  avatar?: string;
}

export interface CheckIn {
  id: string;
  studentId: string;
  timestamp: string;
  mood: MoodType;
  concerns: string[];
  changeRecent: string;
  supportRequested: 'yes' | 'resources' | 'unsure' | 'not_now';
  notes?: string;
  signalResult: SupportSignalType;
  summaryExplanation?: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  date?: string;
  description: string;
}

export interface SupportJourney {
  studentId: string;
  currentStepIndex: number;
  steps: JourneyStep[];
}

export interface Appointment {
  id: string;
  studentId: string;
  studentName: string;
  staffId: string;
  staffName: string;
  department: string;
  date: string;
  time: string;
  type: string;
  location: string;
  status: 'Scheduled' | 'Rescheduled' | 'Completed' | 'Cancelled';
  notes?: string;
}

export interface OutreachRecord {
  id: string;
  studentId: string;
  studentName: string;
  staffName: string;
  channel: 'Portal Notification' | 'University Email' | 'SMS Direct';
  subject?: string;
  message: string;
  sentAt: string;
  status: 'Sent' | 'Read' | 'Follow-Up Scheduled';
}

export interface StaffNote {
  id: string;
  studentId: string;
  authorName: string;
  department: string;
  timestamp: string;
  category: 'Check-In Review' | 'Outreach' | 'Academic Coordination' | 'General';
  content: string;
}

export interface StudentGoal {
  id: string;
  studentId: string;
  title: string;
  category: 'Sleep' | 'Physical' | 'Social' | 'Academic' | 'Mindfulness';
  completed: boolean;
  streakDays: number;
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'Wellbeing' | 'Academic Stress' | 'Sleep' | 'Relationships' | 'Mindfulness' | 'Study Pressure' | 'Self-Care' | 'Getting Support';
  readTime: string;
  summary: string;
  content: string[];
  actionTips: string[];
}

export interface CommunityPost {
  id: string;
  nickname: string;
  department: string;
  timestamp: string;
  tag: string;
  content: string;
  encouragements: number;
  replies: {
    id: string;
    nickname: string;
    text: string;
    timestamp: string;
  }[];
}

export interface DepartmentSummary {
  id: string;
  name: string;
  shortName: string;
  coordinatingStaff: number;
  activeFollowUps: number;
  avgResponseHours: number;
  leadCoordinator: string;
}
