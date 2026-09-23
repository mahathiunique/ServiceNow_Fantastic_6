import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Role,
  Student,
  StaffMember,
  CheckIn,
  SupportJourney,
  Appointment,
  OutreachRecord,
  StaffNote,
  StudentGoal,
  CommunityPost,
  SupportSignalType,
  MoodType
} from '../types';
import {
  CURRENT_STUDENT,
  CURRENT_STAFF,
  INITIAL_STUDENTS,
  INITIAL_CHECKINS,
  INITIAL_JOURNEYS,
  INITIAL_APPOINTMENTS,
  INITIAL_OUTREACH,
  INITIAL_NOTES,
  INITIAL_GOALS,
  COMMUNITY_POSTS
} from '../data/mockData';

export type PageId =
  // Public
  | 'home'
  | 'about'
  | 'how-it-works'
  | 'features'
  | 'impact'
  | 'team'
  | 'contact'
  // Auth
  | 'role-select'
  | 'student-login'
  | 'staff-login'
  // Student Portal
  | 'student-dashboard'
  | 'student-checkin'
  | 'student-summary'
  | 'student-wellbeing'
  | 'student-quick-tools'
  | 'student-learn'
  | 'student-goals'
  | 'student-community'
  | 'student-share'
  | 'student-appointments'
  | 'student-journey'
  | 'student-profile'
  | 'student-privacy'
  // Staff Portal
  | 'staff-dashboard'
  | 'staff-attention'
  | 'staff-student-detail'
  | 'staff-outreach'
  | 'staff-appointments'
  | 'staff-analytics'
  | 'staff-reports'
  | 'staff-settings';

interface AppContextType {
  role: Role;
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
  setRole: (role: Role) => void;
  
  // Active Entities
  student: Student;
  staff: StaffMember;
  selectedStudentId: string;
  setSelectedStudentId: (id: string) => void;
  
  // Data Collections
  students: Student[];
  checkins: CheckIn[];
  latestCheckInResult: CheckIn | null;
  journeys: Record<string, SupportJourney>;
  appointments: Appointment[];
  outreachRecords: OutreachRecord[];
  notes: StaffNote[];
  goals: StudentGoal[];
  posts: CommunityPost[];

  // Toast / System Notification
  notification: string | null;
  showNotification: (msg: string) => void;
  dismissNotification: () => void;

  // Actions
  submitCheckIn: (input: {
    mood: MoodType;
    concerns: string[];
    changeRecent: string;
    supportRequested: 'yes' | 'resources' | 'unsure' | 'not_now';
    notes?: string;
  }) => CheckIn;
  requestHumanSupport: (studentId?: string) => void;
  sendOutreach: (params: {
    studentId: string;
    channel: 'Portal Notification' | 'University Email' | 'SMS Direct';
    message: string;
    subject?: string;
    scheduleMeeting?: boolean;
    meetingDate?: string;
    meetingTime?: string;
  }) => void;
  toggleGoal: (goalId: string) => void;
  addGoal: (title: string, category: StudentGoal['category']) => void;
  addCommunityPost: (content: string, tag: string) => void;
  likeCommunityPost: (postId: string) => void;
  addStaffNote: (studentId: string, content: string, category?: StaffNote['category']) => void;
  scheduleAppointment: (apt: Omit<Appointment, 'id'>) => void;
  resetDemoData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>('public');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('stu-mahathi');
  const [notification, setNotification] = useState<string | null>(null);

  // Load from LocalStorage if available for persistence across refreshes
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('emospot_students');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [checkins, setCheckins] = useState<CheckIn[]>(() => {
    const saved = localStorage.getItem('emospot_checkins');
    return saved ? JSON.parse(saved) : INITIAL_CHECKINS;
  });

  const [latestCheckInResult, setLatestCheckInResult] = useState<CheckIn | null>(() => {
    const saved = localStorage.getItem('emospot_latest_checkin');
    return saved ? JSON.parse(saved) : INITIAL_CHECKINS[0] || null;
  });

  const [journeys, setJourneys] = useState<Record<string, SupportJourney>>(() => {
    const saved = localStorage.getItem('emospot_journeys');
    return saved ? JSON.parse(saved) : INITIAL_JOURNEYS;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('emospot_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  const [outreachRecords, setOutreachRecords] = useState<OutreachRecord[]>(() => {
    const saved = localStorage.getItem('emospot_outreach');
    return saved ? JSON.parse(saved) : INITIAL_OUTREACH;
  });

  const [notes, setNotes] = useState<StaffNote[]>(() => {
    const saved = localStorage.getItem('emospot_notes');
    return saved ? JSON.parse(saved) : INITIAL_NOTES;
  });

  const [goals, setGoals] = useState<StudentGoal[]>(() => {
    const saved = localStorage.getItem('emospot_goals');
    return saved ? JSON.parse(saved) : INITIAL_GOALS;
  });

  const [posts, setPosts] = useState<CommunityPost[]>(() => {
    const saved = localStorage.getItem('emospot_posts');
    return saved ? JSON.parse(saved) : COMMUNITY_POSTS;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('emospot_students', JSON.stringify(students));
    localStorage.setItem('emospot_checkins', JSON.stringify(checkins));
    localStorage.setItem('emospot_journeys', JSON.stringify(journeys));
    localStorage.setItem('emospot_appointments', JSON.stringify(appointments));
    localStorage.setItem('emospot_outreach', JSON.stringify(outreachRecords));
    localStorage.setItem('emospot_notes', JSON.stringify(notes));
    localStorage.setItem('emospot_goals', JSON.stringify(goals));
    localStorage.setItem('emospot_posts', JSON.stringify(posts));
    if (latestCheckInResult) {
      localStorage.setItem('emospot_latest_checkin', JSON.stringify(latestCheckInResult));
    }
  }, [students, checkins, journeys, appointments, outreachRecords, notes, goals, posts, latestCheckInResult]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const dismissNotification = () => setNotification(null);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    if (newRole === 'student') {
      navigateTo('student-dashboard');
    } else if (newRole === 'staff') {
      navigateTo('staff-dashboard');
    } else {
      navigateTo('home');
    }
  };

  // Find active student (Mahathi by default)
  const currentStudent = students.find((s) => s.id === 'stu-mahathi') || CURRENT_STUDENT;

  // Deterministic Transparent Signal Engine
  const evaluateSignal = (
    mood: MoodType,
    concerns: string[],
    supportRequested: 'yes' | 'resources' | 'unsure' | 'not_now'
  ): SupportSignalType => {
    const isLowMood = mood === 'low' || mood === 'awful';
    const hasPressure = concerns.some((c) =>
      ['Academic pressure', 'Sleep', 'Sleep difficulty', 'Financial stress', 'Loneliness'].includes(c)
    );

    if (supportRequested === 'yes' || (isLowMood && hasPressure)) {
      return 'support_recommended';
    }
    if (isLowMood || hasPressure || supportRequested === 'resources' || supportRequested === 'unsure') {
      return 'followup_helpful';
    }
    return 'steady_support';
  };

  const submitCheckIn = (input: {
    mood: MoodType;
    concerns: string[];
    changeRecent: string;
    supportRequested: 'yes' | 'resources' | 'unsure' | 'not_now';
    notes?: string;
  }): CheckIn => {
    const signalResult = evaluateSignal(input.mood, input.concerns, input.supportRequested);

    const newCheckIn: CheckIn = {
      id: `chk-${Date.now()}`,
      studentId: 'stu-mahathi',
      timestamp: 'Just now',
      mood: input.mood,
      concerns: input.concerns,
      changeRecent: input.changeRecent,
      supportRequested: input.supportRequested,
      notes: input.notes,
      signalResult,
      summaryExplanation:
        signalResult === 'support_recommended'
          ? 'Your responses suggest that some additional support may be helpful right now.'
          : signalResult === 'followup_helpful'
          ? 'A mild change in your routine was noticed. Light self-care tools or a friendly chat are recommended.'
          : 'Thank you for checking in. Your wellbeing signals appear balanced.'
    };

    setCheckins((prev) => [newCheckIn, ...prev]);
    setLatestCheckInResult(newCheckIn);

    // Update Student entity
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === 'stu-mahathi') {
          return {
            ...s,
            latestCheckin: 'Just now',
            signalChange: signalResult === 'steady_support' ? 'steady' : 'changed',
            signalType: signalResult,
            priority: signalResult === 'support_recommended' ? 'Priority 1' : 'Priority 2',
            supportStatus: input.supportRequested === 'yes' ? 'Pending Follow-Up' : s.supportStatus,
            keyConcerns: input.concerns.length > 0 ? input.concerns : s.keyConcerns,
            nextAction:
              input.supportRequested === 'yes'
                ? 'Review check-in & send support outreach'
                : 'Share relevant resources'
          };
        }
        return s;
      })
    );

    // Update Support Journey
    setJourneys((prev) => {
      const existing = prev['stu-mahathi'] || INITIAL_JOURNEYS['stu-mahathi'];
      const updatedSteps = [...existing.steps];

      // Step 1: Check-in completed
      updatedSteps[0] = {
        ...updatedSteps[0],
        status: 'completed',
        date: 'Just now',
        description: 'Voluntary check-in successfully submitted with self-reported wellbeing indicators.'
      };

      // Step 2: Signal noticed
      updatedSteps[1] = {
        ...updatedSteps[1],
        status: 'completed',
        date: 'Just now',
        description:
          signalResult === 'support_recommended'
            ? 'Transparent signal engine noticed change in wellbeing and workload indicators.'
            : 'Signals recorded in your private wellbeing timeline.'
      };

      // Step 3: Support requested
      if (input.supportRequested === 'yes') {
        updatedSteps[2] = {
          ...updatedSteps[2],
          status: 'completed',
          date: 'Just now',
          description: 'You opted in for a friendly member of the university student support team to reach out.'
        };
        // Step 4: Staff Assigned
        updatedSteps[3] = {
          ...updatedSteps[3],
          status: 'in_progress',
          description: 'Authorized department staff reviewing check-in context for compassionate outreach.'
        };
      }

      return {
        ...prev,
        ['stu-mahathi']: {
          ...existing,
          currentStepIndex: input.supportRequested === 'yes' ? 4 : 2,
          steps: updatedSteps
        }
      };
    });

    showNotification('Wellbeing check-in submitted successfully. Small signals lead to brighter tomorrows.');
    return newCheckIn;
  };

  const requestHumanSupport = (studentId = 'stu-mahathi') => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          return {
            ...s,
            supportStatus: 'Pending Follow-Up',
            priority: 'Priority 1',
            nextAction: 'Reach out to schedule conversation'
          };
        }
        return s;
      })
    );

    setJourneys((prev) => {
      const existing = prev[studentId] || INITIAL_JOURNEYS['stu-mahathi'];
      const updated = [...existing.steps];
      updated[2] = {
        ...updated[2],
        status: 'completed',
        date: 'Just now',
        description: 'You requested confidential human support from university student services.'
      };
      updated[3] = {
        ...updated[3],
        status: 'in_progress',
        description: 'Authorized staff coordinator is reviewing your request to reach out via your preferred channel.'
      };
      return {
        ...prev,
        [studentId]: {
          ...existing,
          currentStepIndex: 4,
          steps: updated
        }
      };
    });

    showNotification('Support request sent. An authorized coordinator will gently reach out.');
  };

  const sendOutreach = (params: {
    studentId: string;
    channel: 'Portal Notification' | 'University Email' | 'SMS Direct';
    message: string;
    subject?: string;
    scheduleMeeting?: boolean;
    meetingDate?: string;
    meetingTime?: string;
  }) => {
    const targetStudent = students.find((s) => s.id === params.studentId) || currentStudent;

    const newRecord: OutreachRecord = {
      id: `out-${Date.now()}`,
      studentId: params.studentId,
      studentName: targetStudent.name,
      staffName: CURRENT_STAFF.name,
      channel: params.channel,
      subject: params.subject || 'Follow-up regarding your recent check-in',
      message: params.message,
      sentAt: 'Just now',
      status: params.scheduleMeeting ? 'Follow-Up Scheduled' : 'Sent'
    };

    setOutreachRecords((prev) => [newRecord, ...prev]);

    // Add note
    const newNote: StaffNote = {
      id: `note-${Date.now()}`,
      studentId: params.studentId,
      authorName: CURRENT_STAFF.name,
      department: CURRENT_STAFF.department,
      timestamp: 'Just now',
      category: 'Outreach',
      content: `Sent compassionate outreach via ${params.channel}: "${params.message.slice(0, 80)}..."`
    };
    setNotes((prev) => [newNote, ...prev]);

    // Schedule appointment if chosen
    if (params.scheduleMeeting) {
      const newApt: Appointment = {
        id: `apt-${Date.now()}`,
        studentId: params.studentId,
        studentName: targetStudent.name,
        staffId: CURRENT_STAFF.id,
        staffName: CURRENT_STAFF.name,
        department: CURRENT_STAFF.department,
        date: params.meetingDate || 'Tomorrow',
        time: params.meetingTime || '2:00 PM – 2:30 PM',
        type: 'Supportive Check-In & Action Plan',
        location: 'Support Suite 304 or Video Link',
        status: 'Scheduled',
        notes: 'Human-led conversation following early wellbeing signal.'
      };
      setAppointments((prev) => [newApt, ...prev]);
    }

    // Update Student Status
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === params.studentId) {
          return {
            ...s,
            supportStatus: params.scheduleMeeting ? 'Appointment Scheduled' : 'Outreach Sent',
            lastContact: 'Just now',
            nextAction: params.scheduleMeeting
              ? 'Prepare notes for scheduled session'
              : 'Awaiting student response to outreach'
          };
        }
        return s;
      })
    );

    // Update Journey
    setJourneys((prev) => {
      const existing = prev[params.studentId] || INITIAL_JOURNEYS['stu-mahathi'];
      const updated = [...existing.steps];
      // Step 4 complete
      updated[3] = {
        ...updated[3],
        status: 'completed',
        date: 'Just now',
        description: `Support coordinator ${CURRENT_STAFF.name} sent friendly outreach via ${params.channel}.`
      };
      if (params.scheduleMeeting) {
        // Step 5 complete or in progress
        updated[4] = {
          ...updated[4],
          status: 'completed',
          date: params.meetingDate || 'Tomorrow',
          description: `Supportive conversation scheduled with ${CURRENT_STAFF.name} (${params.meetingTime || '2:00 PM'}).`
        };
        updated[5] = {
          ...updated[5],
          status: 'in_progress',
          description: 'Follow-up plan will be established after your conversation.'
        };
      } else {
        updated[4] = {
          ...updated[4],
          status: 'in_progress',
          description: 'Awaiting student reply to finalize a convenient conversation time.'
        };
      }

      return {
        ...prev,
        [params.studentId]: {
          ...existing,
          currentStepIndex: params.scheduleMeeting ? 6 : 5,
          steps: updated
        }
      };
    });

    showNotification(
      `Outreach sent to ${targetStudent.name} via ${params.channel}${
        params.scheduleMeeting ? ' and appointment scheduled!' : '.'
      }`
    );
  };

  const toggleGoal = (goalId: string) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const nextCompleted = !g.completed;
          return {
            ...g,
            completed: nextCompleted,
            streakDays: nextCompleted ? g.streakDays + 1 : Math.max(0, g.streakDays - 1)
          };
        }
        return g;
      })
    );
  };

  const addGoal = (title: string, category: StudentGoal['category']) => {
    const newGoal: StudentGoal = {
      id: `goal-${Date.now()}`,
      studentId: 'stu-mahathi',
      title,
      category,
      completed: false,
      streakDays: 0
    };
    setGoals((prev) => [newGoal, ...prev]);
    showNotification(`New goal added: "${title}"`);
  };

  const addCommunityPost = (content: string, tag: string) => {
    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      nickname: 'MahathiM',
      department: 'Computer Science',
      timestamp: 'Just now',
      tag,
      content,
      encouragements: 1,
      replies: []
    };
    setPosts((prev) => [newPost, ...prev]);
    showNotification('Your encouraging post was published to the moderated peer space!');
  };

  const likeCommunityPost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, encouragements: p.encouragements + 1 } : p))
    );
  };

  const addStaffNote = (studentId: string, content: string, category: StaffNote['category'] = 'General') => {
    const newNote: StaffNote = {
      id: `note-${Date.now()}`,
      studentId,
      authorName: CURRENT_STAFF.name,
      department: CURRENT_STAFF.department,
      timestamp: 'Just now',
      category,
      content
    };
    setNotes((prev) => [newNote, ...prev]);
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, notesCount: s.notesCount + 1 } : s))
    );
    showNotification('Note added to student support record.');
  };

  const scheduleAppointment = (apt: Omit<Appointment, 'id'>) => {
    const newApt: Appointment = {
      ...apt,
      id: `apt-${Date.now()}`
    };
    setAppointments((prev) => [newApt, ...prev]);
    showNotification(`Appointment scheduled for ${apt.studentName} on ${apt.date}.`);
  };

  const resetDemoData = () => {
    localStorage.clear();
    setStudents(INITIAL_STUDENTS);
    setCheckins(INITIAL_CHECKINS);
    setLatestCheckInResult(INITIAL_CHECKINS[0]);
    setJourneys(INITIAL_JOURNEYS);
    setAppointments(INITIAL_APPOINTMENTS);
    setOutreachRecords(INITIAL_OUTREACH);
    setNotes(INITIAL_NOTES);
    setGoals(INITIAL_GOALS);
    setPosts(COMMUNITY_POSTS);
    setSelectedStudentId('stu-mahathi');
    showNotification('Demo state reset to clean initial baseline.');
  };

  return (
    <AppContext.Provider
      value={{
        role,
        currentPage,
        navigateTo,
        setRole,
        student: currentStudent,
        staff: CURRENT_STAFF,
        selectedStudentId,
        setSelectedStudentId,
        students,
        checkins,
        latestCheckInResult,
        journeys,
        appointments,
        outreachRecords,
        notes,
        goals,
        posts,
        notification,
        showNotification,
        dismissNotification,
        submitCheckIn,
        requestHumanSupport,
        sendOutreach,
        toggleGoal,
        addGoal,
        addCommunityPost,
        likeCommunityPost,
        addStaffNote,
        scheduleAppointment,
        resetDemoData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
