export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tools: string[];
  images: string[];
  cover: string;
}

// Vite resolves the real source assets at build time. Sorting by the number in
// each filename means newly added AETS screenshots are picked up automatically.
const imageModules = import.meta.glob('../AETS*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const imageNumber = (path: string) => Number(path.match(/(\d+)\.(?:png|jpg)$/i)?.[1] ?? 0);
const aetsImages = Object.entries(imageModules)
  .sort(([a], [b]) => imageNumber(a) - imageNumber(b))
  .map(([, url]) => url);

// AETS4 is the clearest dashboard view in the supplied set, so it leads the case study.
const dashboardCover = Object.entries(imageModules).find(([path]) => /AETS4\.png$/.test(path))?.[1] ?? aetsImages[0];

const aetsProject: Project = {
  id: 1,
  slug: 'automated-expense-tracking',
  title: 'AUTOMATED EXPENSE TRACKING & BUDGET MONITORING SYSTEM',
  category: 'FINANCE / EDUCATION',
  description: 'A budget and expense management system developed for PUP Ragay Branch, featuring dashboards, expense tracking, receipt processing, reports, notifications, and role-based workflows.',
  overview: 'The system brings budget monitoring, departmental expenses, receipt uploads, reports, notifications, student management, and administrative approvals into one focused experience.',
  problem: 'Budget records, receipts, approvals, and student information need a clear shared workflow so teams can understand current spending and act on requests efficiently.',
  solution: 'Role-based dashboards connect budget collection, expense monitoring, OCR-assisted receipt capture, notifications, approvals, search, and PDF reports.',
  features: [
    'Admin dashboard', 'Student dashboard', 'Department budget tracking',
    'Expense monitoring', 'Budget collection management', 'Budget reports',
    'Receipt uploads', 'OCR-assisted receipt extraction', 'Student account management',
    'Notifications', 'Budget request approval', 'Search and filtering',
    'PDF reporting', 'Role-based access',
  ],
  tools: ['Budget Tracking', 'Expense Monitoring', 'OCR Receipt Processing', 'Admin Dashboard', 'Student Dashboard', 'Reports', 'Notifications'],
  images: aetsImages,
  cover: dashboardCover,
};

const cahModules = import.meta.glob('../CAH*.{png,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const cahImages = Object.entries(cahModules)
  .sort(([a], [b]) => imageNumber(a) - imageNumber(b))
  .map(([, url]) => url);

const caregiverProject: Project = {
  id: 2,
  slug: 'caregiver-timesheet-qr-system',
  title: 'CAREGIVER TIMESHEET QR SYSTEM',
  category: 'ATTENDANCE / WORKFLOW',
  description: 'A caregiver attendance and timesheet system that uses QR scanning to help simplify time-in/time-out recording, caregiver tracking, and timesheet monitoring.',
  overview: 'A focused web application for recording caregiver attendance through QR scanning and keeping timesheet activity easier to review.',
  problem: 'Manual time-in and time-out records can make caregiver attendance and timesheet monitoring difficult to maintain consistently.',
  solution: 'A QR-based attendance workflow connects caregiver records with time-in, time-out, and timesheet monitoring in one system.',
  features: ['QR attendance', 'Time-in and time-out recording', 'Timesheet tracking', 'Caregiver management', 'Workflow automation'],
  tools: ['QR Attendance', 'Timesheet Tracking', 'Caregiver Management', 'Web Application', 'Workflow Automation'],
  images: cahImages,
  cover: cahImages[0] ?? '',
};

// Keep the showcase free of placeholders: the caregiver case study appears as
// soon as at least one real CAH screenshot exists in src.
export const projects: Project[] = [aetsProject, ...(cahImages.length ? [caregiverProject] : [])];
