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

const caregiverModules = import.meta.glob('../CAH*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const caregiverNumber = (path: string) => Number(path.match(/CAH(\d+)\.jpg$/)?.[1] ?? 0);
const caregiverImages = Object.entries(caregiverModules)
  .sort(([a], [b]) => caregiverNumber(a) - caregiverNumber(b))
  .map(([, url]) => url);

// The workflow captures are kept separate from the application screenshots and
// use the exact lowercase n8n filenames supplied in src.
const n8nModules = import.meta.glob('../n8n*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
const n8nNumber = (path: string) => Number(path.match(/n8n(\d+)\.png$/)?.[1] ?? 0);
const n8nImages = Object.entries(n8nModules)
  .sort(([a], [b]) => n8nNumber(a) - n8nNumber(b))
  .map(([, url]) => url);

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
}, {
  id: 2,
  slug: 'caregiver-timesheet-qr-system',
  title: 'CAREGIVER TIMESHEET QR SYSTEM',
  category: 'ATTENDANCE / CARE',
  description: 'A caregiver timesheet and attendance system using QR-based workflows to simplify time tracking, caregiver records, and daily attendance monitoring.',
  overview: 'A practical web application that brings caregiver records, QR attendance, and timesheet tracking into one straightforward workflow.',
  problem: 'Manual attendance and timesheet processes can make daily records slower to capture, review, and organize.',
  solution: 'QR-based check-ins connect attendance records and caregiver information in a focused system designed for routine daily use.',
  features: ['QR-based attendance', 'Timesheet tracking', 'Caregiver records', 'Daily attendance monitoring', 'Streamlined record review'],
  tools: ['QR Attendance', 'Timesheet Tracking', 'Caregiver Management', 'Web Application', 'Workflow Automation'],
  images: caregiverImages,
  cover: caregiverImages[0],
}];

const n8nProject: Project = {
  id: 3,
  slug: 'n8n-workflow-automation',
  title: 'n8n WORKFLOW AUTOMATION',
  category: 'AUTOMATION / INTEGRATIONS',
  description: 'A collection of workflow automations built with n8n to streamline repetitive tasks, connect apps, and automate digital processes efficiently.',
  overview: 'These workflow captures demonstrate practical automation design and process integration experience using n8n.',
  problem: 'Repetitive handoffs and disconnected tools add unnecessary steps to otherwise straightforward digital processes.',
  solution: 'Visual n8n workflows connect process steps and integrations so recurring tasks can run more consistently with less manual work.',
  features: ['Visual workflow design', 'Process automation', 'Application integrations', 'Connected workflow steps', 'AI-assisted automation'],
  tools: ['n8n', 'Workflow Automation', 'Process Automation', 'Integrations', 'AI Automation'],
  images: n8nImages,
  cover: n8nImages[0],
};

// This checkout may predate the newly uploaded workflow captures. Avoid a
// broken card when assets are absent; the project is added automatically as
// soon as the real n8n screenshots from main are present.
if (n8nImages.length > 0) projects.push(n8nProject);
