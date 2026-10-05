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

// Include the supplied workflow screens in their numbered order.
const n8nModules = import.meta.glob([
  '../n8n1.png', '../n8n2.png', '../n8n3.png',
  '../n8n4.png', '../n8n5.png', '../n8n6.png',
], {
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
  slug: 'n8n-workflow-automation',
  title: 'n8n Workflow Automation',
  category: 'AUTOMATION / INTEGRATIONS',
  description: 'A collection of workflow automations built with n8n to streamline repetitive tasks, connect tools, and automate practical digital processes.',
  overview: 'Practical n8n workflows that connect tools, reduce manual handoffs, and turn repeatable digital tasks into reliable automated processes.',
  problem: 'Routine work across disconnected tools creates avoidable repetition, missed handoffs, and inconsistent results.',
  solution: 'Purpose-built n8n workflows connect services and coordinate each step in a transparent, maintainable automation flow.',
  features: ['Connected workflows', 'Automated task routing', 'Tool integrations', 'Repeatable processes', 'AI-assisted automation', 'Visual workflow monitoring'],
  tools: ['n8n', 'Workflow Automation', 'Process Automation', 'Integrations', 'AI Automation'],
  images: n8nImages,
  cover: n8nImages[0],
}];
