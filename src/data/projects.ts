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

const imageNumber = (path: string) => Number(path.match(/AETS(\d+)\.png$/)?.[1] ?? 0);
const aetsImages = Object.entries(imageModules)
  .sort(([a], [b]) => imageNumber(a) - imageNumber(b))
  .map(([, url]) => url);

// AETS4 is the clearest dashboard view in the supplied set, so it leads the case study.
const dashboardCover = Object.entries(imageModules).find(([path]) => /AETS4\.png$/.test(path))?.[1] ?? aetsImages[0];

export const projects: Project[] = [{
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
}];
