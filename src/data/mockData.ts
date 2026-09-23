import {
  Student,
  StaffMember,
  CheckIn,
  SupportJourney,
  Appointment,
  OutreachRecord,
  StaffNote,
  StudentGoal,
  ResourceArticle,
  CommunityPost,
  DepartmentSummary
} from '../types';

export const CURRENT_STUDENT: Student = {
  id: 'stu-mahathi',
  name: 'Mahathi',
  email: 'mahathi.m@university.edu',
  studentId: 'STU-2024-8841',
  department: 'Computer Science & Engineering',
  year: '2nd Year Undergraduate',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  latestCheckin: 'Today, 9:15 AM',
  signalChange: 'changed',
  signalType: 'support_recommended',
  supportStatus: 'Pending Follow-Up',
  priority: 'Priority 1',
  keyConcerns: ['Academic pressure', 'Sleep difficulty', 'Workload'],
  lastContact: 'Pending outreach',
  nextAction: 'Review check-in & send support outreach',
  notesCount: 2
};

export const CURRENT_STAFF: StaffMember = {
  id: 'staff-aris',
  name: 'Dr. Aris Thorne',
  email: 'a.thorne@university.edu',
  department: 'Counselling & Student Support',
  title: 'Lead Wellbeing Coordinator',
  role: 'Authorized Department Specialist',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250'
};

export const INITIAL_STUDENTS: Student[] = [
  CURRENT_STUDENT,
  {
    id: 'stu-aditi',
    name: 'Aditi R.',
    email: 'aditi.r@university.edu',
    studentId: 'STU-2023-3921',
    department: 'Mechanical Engineering',
    year: '3rd Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
    latestCheckin: '2 hours ago',
    signalChange: 'changed',
    signalType: 'support_recommended',
    supportStatus: 'Pending Follow-Up',
    priority: 'Priority 1',
    keyConcerns: ['Academic pressure', 'Exam anxiety'],
    lastContact: '2 days ago',
    nextAction: 'Reach out via portal message',
    notesCount: 3
  },
  {
    id: 'stu-karthik',
    name: 'Karthik S.',
    email: 'karthik.s@university.edu',
    studentId: 'STU-2025-1049',
    department: 'Bioengineering',
    year: '1st Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    latestCheckin: 'Yesterday, 4:30 PM',
    signalChange: 'changed',
    signalType: 'support_recommended',
    supportStatus: 'Pending Follow-Up',
    priority: 'Priority 1',
    keyConcerns: ['Sleep difficulty', 'Campus transition'],
    lastContact: 'Yesterday',
    nextAction: 'Schedule conversation',
    notesCount: 1
  },
  {
    id: 'stu-liam',
    name: 'Liam Chen',
    email: 'l.chen@university.edu',
    studentId: 'STU-2024-5512',
    department: 'Economics',
    year: '2nd Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250',
    latestCheckin: '3 days ago',
    signalChange: 'changed',
    signalType: 'followup_helpful',
    supportStatus: 'Outreach Sent',
    priority: 'Priority 2',
    keyConcerns: ['Loneliness', 'Study-life balance'],
    lastContact: '1 day ago',
    nextAction: 'Awaiting student reply',
    notesCount: 4
  },
  {
    id: 'stu-priya',
    name: 'Priya Patel',
    email: 'p.patel@university.edu',
    studentId: 'STU-2022-7729',
    department: 'Architecture & Design',
    year: '4th Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    latestCheckin: '4 days ago',
    signalChange: 'steady',
    signalType: 'followup_helpful',
    supportStatus: 'Appointment Scheduled',
    priority: 'Priority 2',
    keyConcerns: ['Studio deadlines', 'Fatigue'],
    lastContact: '2 days ago',
    nextAction: 'Session on Thursday at 2:00 PM',
    notesCount: 5
  },
  {
    id: 'stu-marcus',
    name: 'Marcus Vance',
    email: 'm.vance@university.edu',
    studentId: 'STU-2025-4102',
    department: 'Information Science',
    year: '1st Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=250',
    latestCheckin: '5 days ago',
    signalChange: 'improving',
    signalType: 'steady_support',
    supportStatus: 'Self-Care',
    priority: 'Standard',
    keyConcerns: ['General wellbeing'],
    lastContact: '1 week ago',
    nextAction: 'Routine voluntary check-in next week',
    notesCount: 2
  },
  {
    id: 'stu-elena',
    name: 'Elena Rostova',
    email: 'e.rostova@university.edu',
    studentId: 'STU-2023-8820',
    department: 'Chemistry & Chemical Biology',
    year: '3rd Year Undergraduate',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
    latestCheckin: '1 week ago',
    signalChange: 'improving',
    signalType: 'steady_support',
    supportStatus: 'Completed',
    priority: 'Standard',
    keyConcerns: ['Research lab stress'],
    lastContact: '3 days ago',
    nextAction: 'Follow-up completed; student doing well',
    notesCount: 6
  }
];

export const INITIAL_CHECKINS: CheckIn[] = [
  {
    id: 'chk-01',
    studentId: 'stu-mahathi',
    timestamp: '2 days ago',
    mood: 'okay',
    concerns: ['Academic pressure'],
    changeRecent: 'Slightly higher stress than last month',
    supportRequested: 'resources',
    notes: 'Exams are approaching in advanced algorithms.',
    signalResult: 'followup_helpful',
    summaryExplanation: 'Student noted mild workload pressure and browsed study reset tools.'
  },
  {
    id: 'chk-00',
    studentId: 'stu-mahathi',
    timestamp: '10 days ago',
    mood: 'good',
    concerns: ['General wellbeing'],
    changeRecent: 'Normal routine',
    supportRequested: 'not_now',
    signalResult: 'steady_support',
    summaryExplanation: 'Routine check-in completed. No assistance requested.'
  }
];

export const INITIAL_JOURNEYS: Record<string, SupportJourney> = {
  'stu-mahathi': {
    studentId: 'stu-mahathi',
    currentStepIndex: 2,
    steps: [
      {
        step: 1,
        title: 'Check-In Completed',
        status: 'completed',
        date: 'Today, 9:15 AM',
        description: 'You voluntarily shared how you are feeling and highlighted recent academic & sleep pressure.'
      },
      {
        step: 2,
        title: 'Support Recommended',
        status: 'completed',
        date: 'Today, 9:16 AM',
        description: 'Transparent signal engine noticed change in sleep and academic pressure indicators.'
      },
      {
        step: 3,
        title: 'Support Request Submitted',
        status: 'in_progress',
        date: 'Today, 9:18 AM',
        description: 'You opted in for a friendly member of the university student support team to reach out.'
      },
      {
        step: 4,
        title: 'Staff Assigned & Outreach',
        status: 'upcoming',
        description: 'An authorized support specialist reviews your check-in context and sends a warm greeting.'
      },
      {
        step: 5,
        title: 'Appointment Scheduled',
        status: 'upcoming',
        description: 'A 25-minute supportive conversation tailored to your schedule and preferences.'
      },
      {
        step: 6,
        title: 'Continuous Follow-Up',
        status: 'upcoming',
        description: 'Light-touch check-ins to make sure you have everything you need throughout the semester.'
      },
      {
        step: 7,
        title: 'Support Completed',
        status: 'upcoming',
        description: 'Resolution recorded with student satisfaction and ongoing access to resources.'
      }
    ]
  }
};

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-01',
    studentId: 'stu-mahathi',
    studentName: 'Mahathi',
    staffId: 'staff-aris',
    staffName: 'Dr. Aris Thorne',
    department: 'Counselling & Student Support',
    date: 'Tomorrow, Sep 24',
    time: '2:30 PM – 3:00 PM',
    type: 'Wellbeing Check-in & Academic Planning',
    location: 'Support Suite 304 or Zoom (Student Choice)',
    status: 'Scheduled',
    notes: 'Focus on sleep routines and balancing coursework milestones.'
  },
  {
    id: 'apt-02',
    studentId: 'stu-priya',
    studentName: 'Priya Patel',
    staffId: 'staff-aris',
    staffName: 'Dr. Aris Thorne',
    department: 'Counselling & Student Support',
    date: 'Thursday, Sep 25',
    time: '11:00 AM – 11:45 AM',
    type: 'Final Year Project Workload Coaching',
    location: 'Virtual Room B',
    status: 'Scheduled'
  }
];

export const INITIAL_OUTREACH: OutreachRecord[] = [
  {
    id: 'out-01',
    studentId: 'stu-liam',
    studentName: 'Liam Chen',
    staffName: 'Dr. Aris Thorne',
    channel: 'Portal Notification',
    subject: 'Checking in on your week',
    message: 'Hi Liam, noticed you indicated recent study-life balance pressures. Just letting you know our peer study lounges and support team are here if you would like a brief chat.',
    sentAt: 'Yesterday at 3:15 PM',
    status: 'Sent'
  },
  {
    id: 'out-02',
    studentId: 'stu-priya',
    studentName: 'Priya Patel',
    staffName: 'Dr. Aris Thorne',
    channel: 'University Email',
    subject: 'Follow-up regarding studio deadlines',
    message: 'Hi Priya, thanks for connecting. Looking forward to our session Thursday. We will draft a manageable studio schedule together.',
    sentAt: '2 days ago',
    status: 'Follow-Up Scheduled'
  }
];

export const INITIAL_NOTES: StaffNote[] = [
  {
    id: 'note-01',
    studentId: 'stu-mahathi',
    authorName: 'Dr. Aris Thorne',
    department: 'Counselling & Student Support',
    timestamp: 'Today, 9:30 AM',
    category: 'Check-In Review',
    content: 'Student submitted voluntary check-in noting sleep changes and exam pressure in Computer Science. Requested friendly follow-up. Preparing supportive outreach.'
  },
  {
    id: 'note-02',
    studentId: 'stu-mahathi',
    authorName: 'Sarah Jenkins',
    department: 'Student Academic Advisory',
    timestamp: 'Last month',
    category: 'Academic Coordination',
    content: 'Completed mid-term degree audit. High academic performance, recommended maintaining balanced course load for semester 4.'
  }
];

export const INITIAL_GOALS: StudentGoal[] = [
  {
    id: 'goal-01',
    studentId: 'stu-mahathi',
    title: 'Sleep before 11:30 PM on weeknights',
    category: 'Sleep',
    completed: false,
    streakDays: 4
  },
  {
    id: 'goal-02',
    studentId: 'stu-mahathi',
    title: 'Take a 10-minute fresh air walk between lectures',
    category: 'Physical',
    completed: true,
    streakDays: 6
  },
  {
    id: 'goal-03',
    studentId: 'stu-mahathi',
    title: 'Talk to a friend or study buddy this week',
    category: 'Social',
    completed: true,
    streakDays: 3
  },
  {
    id: 'goal-04',
    studentId: 'stu-mahathi',
    title: 'Complete one 45-minute distraction-free study sprint',
    category: 'Academic',
    completed: false,
    streakDays: 2
  },
  {
    id: 'goal-05',
    studentId: 'stu-mahathi',
    title: 'Attend upcoming supportive conversation',
    category: 'Mindfulness',
    completed: false,
    streakDays: 1
  }
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'res-stress',
    title: 'Understanding Stress & Your Body\'s Early Signals',
    category: 'Wellbeing',
    readTime: '3 min read',
    summary: 'How subtle physical signs like shoulder tension and irregular sleep tell you it\'s time to pause before feeling drained.',
    content: [
      'Stress is not a personal failure; it is the body\'s natural neurological response to demanding environmental inputs. In university life, deadlines, social dynamics, and personal expectations can keep the sympathetic nervous system on high alert.',
      'Early signals often appear subtly: mild difficulty winding down at night, feeling slightly irritable over small setbacks, or catching yourself holding your breath while reading coursework.',
      'Noticing these early signals without judgment allows you to activate gentle rest mechanisms before exhaustion sets in.'
    ],
    actionTips: [
      'Practice 2-minute physiological sighs (two quick inhales through the nose, one long exhale through the mouth).',
      'Set an alarm that tells you to step outside rather than just studying more.',
      'Remember that taking a pause preserves your long-term focus.'
    ]
  },
  {
    id: 'res-workload',
    title: 'When Coursework Feels Overwhelming: The Slice Technique',
    category: 'Academic Stress',
    readTime: '4 min read',
    summary: 'Break intimidating assignments into micro-actions to bypass paralysis without burning out.',
    content: [
      'Academic overwhelm frequently stems from looking at entire syllabi or 20-page deliverables at once. This triggers avoidance behavior, which ironically compounds future stress.',
      'The "Slice Technique" asks you to define the absolute smallest non-threatening starting increment: writing just one paragraph outline, reading for exactly 8 minutes, or opening the project repository.',
      'By removing the psychological weight of "finishing everything today," motivation naturally rebounds.'
    ],
    actionTips: [
      'Choose one task and set a timer for 15 minutes. When it rings, give yourself full permission to stop.',
      'Separate outlining from drafting; never attempt to write and edit simultaneously.',
      'Reach out to academic advisors early if prerequisites or assignment deadlines overlap heavily.'
    ]
  },
  {
    id: 'res-sleep',
    title: 'Building Better Sleep Habits in Campus Environments',
    category: 'Sleep',
    readTime: '3 min read',
    summary: 'Practical dorm and apartment strategies for winding down when rooms are noisy or screens are everywhere.',
    content: [
      'Sleep is the single most potent emotional buffer available to university students. Even a 45-minute deficit over three consecutive days can heighten emotional reactivity by up to 60%.',
      'Late-night screen illumination keeps cortisol elevated, fooling the circadian clock into delaying melatonin synthesis.',
      'Establishing a clear "buffer zone" between work and bed allows your brain to transition smoothly.'
    ],
    actionTips: [
      'Create a 20-minute shutdown ritual: close study tabs, charge devices across the room.',
      'If noisy roommates or dorm halls keep you awake, try pink noise or gentle rain frequencies.',
      'Keep your sleeping space cool and dark whenever possible.'
    ]
  },
  {
    id: 'res-reachout',
    title: 'When Should I Reach Out? (Hint: Earlier Than You Think)',
    category: 'Getting Support',
    readTime: '2 min read',
    summary: 'Why waiting until an academic or emotional breaking point is unnecessary. Early support is designed for everyday hurdles.',
    content: [
      'Many students believe campus wellbeing services are reserved solely for acute crises. This misconception causes many to endure weeks of quiet hardship alone.',
      'University support coordinators are trained to help with everyday challenges: organizing your week, addressing homesickness, navigating roommate tensions, or simply talking through feeling unmotivated.',
      'Connecting early takes far less emotional energy than waiting until deadlines have already passed.'
    ],
    actionTips: [
      'Remember: You don\'t need to have a formulated problem to talk to a support specialist.',
      'Conversations are private, collaborative, and entirely at your pace.',
      'Asking for guidance is a skill of resilient professionals.'
    ]
  },
  {
    id: 'res-peer',
    title: 'How Peer Support Can Ease Campus Isolation',
    category: 'Relationships',
    readTime: '3 min read',
    summary: 'Discovering that what you are feeling is quietly shared by dozens of classmates sitting right next to you.',
    content: [
      'The "duck syndrome" is well documented on university campuses: students appear serene and effortless on the surface while paddling furiously underwater.',
      'When students open up in moderated, safe spaces, the illusion dissolves. Hearing peers say "I struggled with that midterm too" validates your humanity.',
      'Peer connections create informal safety nets that enrich your entire university experience.'
    ],
    actionTips: [
      'Join department study circles or peer mentorship lounges.',
      'Engage in moderated community channels under a nickname if you prefer privacy.',
      'Check in on one friend this week with a genuine "How are you really doing?"'
    ]
  },
  {
    id: 'res-campus',
    title: 'Finding Support on Campus: A Guide to the 12 Departments',
    category: 'Getting Support',
    readTime: '4 min read',
    summary: 'Navigate the university\'s support ecosystem with clarity—from academic accommodations to emergency financial grants.',
    content: [
      'A university can feel like a labyrinth of departments: Academic Advising, Residence Life, Student Health, Financial Aid, Accessibility Services, and more.',
      'EmoSpot was built specifically so you don\'t have to figure out which office handles what. Our coordinated early-support team ensures that when you indicate a need, the right people connect seamlessly behind the scenes.',
      'You are never expected to navigate university bureaucracy on your own.'
    ],
    actionTips: [
      'Use the EmoSpot Support Journey tab to track which support resources are aligned to you.',
      'Speak to your student advisor or residential assistant if you need in-person introductions.'
    ]
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-01',
    nickname: 'NightOwlCoder',
    department: 'Computer Science',
    timestamp: '3 hours ago',
    tag: 'Exam Season',
    content: 'Shoutout to everyone juggling algorithms project deadlines and midterm prep this week. Remember that your GPA doesn\'t define your worth as a human being. Take a breath and drink some water today! 💙',
    encouragements: 38,
    replies: [
      {
        id: 'rep-01',
        nickname: 'CampusGardener',
        text: 'Really needed to hear this today. Stepping away for a 15-minute walk outside.',
        timestamp: '2 hours ago'
      },
      {
        id: 'rep-02',
        nickname: 'BlueSkiesAhead',
        text: 'Rooting for all CS sophomores right now! We will get through this sprint together.',
        timestamp: '1 hour ago'
      }
    ]
  },
  {
    id: 'post-02',
    nickname: 'EcoExplorer',
    department: 'Economics',
    timestamp: '5 hours ago',
    tag: 'Healthy Habits',
    content: 'Small win: I managed to close my laptop at 11 PM last night and got 8 hours of sleep for the first time all semester. Woke up without the brain fog. Highly recommend the sleep goals tool!',
    encouragements: 52,
    replies: [
      {
        id: 'rep-03',
        nickname: 'MorningCoffeeFan',
        text: 'That is huge! Sleep makes everything 10x more manageable.',
        timestamp: '4 hours ago'
      }
    ]
  },
  {
    id: 'post-03',
    nickname: 'StudioDreamer',
    department: 'Architecture & Design',
    timestamp: 'Yesterday',
    tag: 'Peer Encouragement',
    content: 'To anyone feeling isolated in their dorm or apartment: you are not invisible. Reach out to one person today, or use the quick check-in here. The campus support folks are actually super kind and non-judgmental.',
    encouragements: 44,
    replies: [
      {
        id: 'rep-04',
        nickname: 'QuietVoyager',
        text: 'I booked a 20-minute chat yesterday and it took such a weight off my chest.',
        timestamp: 'Yesterday'
      }
    ]
  }
];

export const UNIVERSITY_DEPARTMENTS: DepartmentSummary[] = [
  { id: 'dept-counsel', name: 'Counselling & Psychological Services', shortName: 'Counselling', coordinatingStaff: 14, activeFollowUps: 48, avgResponseHours: 1.8, leadCoordinator: 'Dr. Aris Thorne' },
  { id: 'dept-academic', name: 'Student Academic Advisory', shortName: 'Academic Advising', coordinatingStaff: 22, activeFollowUps: 36, avgResponseHours: 2.4, leadCoordinator: 'Sarah Jenkins' },
  { id: 'dept-housing', name: 'Residence Life & Housing Support', shortName: 'ResLife', coordinatingStaff: 18, activeFollowUps: 24, avgResponseHours: 1.5, leadCoordinator: 'Marcus Brody' },
  { id: 'dept-access', name: 'Disability & Accessibility Services', shortName: 'Accessibility', coordinatingStaff: 9, activeFollowUps: 15, avgResponseHours: 3.1, leadCoordinator: 'Elena Rostova' },
  { id: 'dept-finance', name: 'Financial Aid & Emergency Relief', shortName: 'Financial Aid', coordinatingStaff: 11, activeFollowUps: 19, avgResponseHours: 2.0, leadCoordinator: 'David Kalu' },
  { id: 'dept-intl', name: 'International Student Services', shortName: 'Intl Support', coordinatingStaff: 8, activeFollowUps: 14, avgResponseHours: 2.6, leadCoordinator: 'Mei-Ling Zhou' },
  { id: 'dept-health', name: 'Student Health & Wellness Center', shortName: 'Health Center', coordinatingStaff: 16, activeFollowUps: 29, avgResponseHours: 1.2, leadCoordinator: 'Dr. Rebecca Vance' },
  { id: 'dept-career', name: 'Career Center & Professional Growth', shortName: 'Career Center', coordinatingStaff: 12, activeFollowUps: 11, avgResponseHours: 4.0, leadCoordinator: 'Julian Sterling' },
  { id: 'dept-affairs', name: 'Dean of Students / Student Affairs', shortName: 'Student Affairs', coordinatingStaff: 7, activeFollowUps: 8, avgResponseHours: 1.6, leadCoordinator: 'Dean Angela Moore' },
  { id: 'dept-athletics', name: 'Athletics & Recreation Wellbeing', shortName: 'Recreation', coordinatingStaff: 6, activeFollowUps: 9, avgResponseHours: 3.2, leadCoordinator: 'Coach Tyler Hayes' },
  { id: 'dept-grad', name: 'Graduate Student Support Center', shortName: 'Grad Support', coordinatingStaff: 8, activeFollowUps: 17, avgResponseHours: 2.8, leadCoordinator: 'Dr. Sanjay Sen' },
  { id: 'dept-faith', name: 'Multifaith & Spiritual Life Center', shortName: 'Multifaith', coordinatingStaff: 5, activeFollowUps: 6, avgResponseHours: 2.5, leadCoordinator: 'Rev. Miriam Davis' }
];

export const MOCK_WELLBEING_TRENDS = [
  { week: 'Week 1', positive: 78, moderate: 18, supportNeeded: 4 },
  { week: 'Week 2', positive: 74, moderate: 21, supportNeeded: 5 },
  { week: 'Week 3', positive: 70, moderate: 23, supportNeeded: 7 },
  { week: 'Week 4', positive: 65, moderate: 27, supportNeeded: 8 },
  { week: 'Week 5', positive: 58, moderate: 31, supportNeeded: 11 },
  { week: 'Week 6 (Midterms)', positive: 49, moderate: 35, supportNeeded: 16 },
  { week: 'Week 7 (Now)', positive: 52, moderate: 33, supportNeeded: 15 }
];

export const MOCK_CONCERN_DISTRIBUTION = [
  { name: 'Academic Pressure', percentage: 41, count: 328, color: '#4338CA' },
  { name: 'Sleep Difficulty', percentage: 26, count: 208, color: '#38BDF8' },
  { name: 'Campus Transition & Social', percentage: 14, count: 112, color: '#8B5CF6' },
  { name: 'Financial Concerns', percentage: 11, count: 88, color: '#10B981' },
  { name: 'General Wellbeing', percentage: 8, count: 64, color: '#F59E0B' }
];

export const MOCK_DEPARTMENT_COORDINATION = [
  { name: 'Counselling', referrals: 142, coordinated: 138 },
  { name: 'Academic Advising', referrals: 120, coordinated: 114 },
  { name: 'ResLife', referrals: 84, coordinated: 80 },
  { name: 'Health Center', referrals: 68, coordinated: 66 },
  { name: 'Accessibility', referrals: 51, coordinated: 49 },
  { name: 'Financial Aid', referrals: 44, coordinated: 41 }
];
