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
  cover?: string;
}

const numericImages = (modules: Record<string, string>) => Object.entries(modules)
  .sort(([a], [b]) => Number(a.match(/(\d+)\.(?:png|jpg)$/i)?.[1] ?? 0) - Number(b.match(/(\d+)\.(?:png|jpg)$/i)?.[1] ?? 0))
  .map(([, url]) => url);

const aetsImages = numericImages(import.meta.glob('../AETS*.png', {eager: true, query: '?url', import: 'default'}) as Record<string, string>);
const caregiverImages = numericImages(import.meta.glob('../CAH*.jpg', {eager: true, query: '?url', import: 'default'}) as Record<string, string>);
const n8nImages = numericImages(import.meta.glob('../n8n*.png', {eager: true, query: '?url', import: 'default'}) as Record<string, string>);
// EL6 is a JPG in the current repository; both real formats are intentionally included.
const elearningImages = numericImages(import.meta.glob('../EL*.{png,jpg}', {eager: true, query: '?url', import: 'default'}) as Record<string, string>);

const project = (value: Project): Project => ({...value, cover: value.cover ?? value.images[0]});

export const projects: Project[] = [
  project({
    id: 1, slug: 'automated-expense-tracking', title: 'Automated Expense Tracking & Budget Monitoring System', category: 'Budget management',
    description: 'A budget and expense management system developed for PUP Ragay Branch with dashboards, expense tracking, budget monitoring, reports, notifications, and role-based workflows.',
    overview: 'A practical platform that brings budget monitoring, departmental expenses, receipt uploads, reports, notifications, and approvals into one workflow.',
    problem: 'Budget records, receipts, and approvals need a clear shared workflow so teams can understand spending and act on requests efficiently.',
    solution: 'Role-based dashboards connect expense monitoring, OCR-assisted receipt capture, notifications, approvals, search, and reporting.',
    features: ['Admin dashboard', 'Student dashboard', 'Budget tracking', 'Expense monitoring', 'OCR receipt processing', 'Reports and notifications', 'Role-based workflows'],
    tools: ['Budget Tracking', 'Expense Monitoring', 'OCR Receipt Processing', 'Admin Dashboard', 'Student Dashboard', 'Reports', 'Notifications'], images: aetsImages,
    cover: aetsImages[3] ?? aetsImages[0],
  }),
  project({
    id: 2, slug: 'caregiver-timesheet-qr', title: 'Caregiver Timesheet QR System', category: 'Attendance workflow',
    description: 'A caregiver attendance and timesheet system that uses QR-based workflows to simplify time tracking, attendance monitoring, and caregiver record management.',
    overview: 'A QR-supported web application for recording caregiver attendance and keeping timesheet information organized.',
    problem: 'Manual attendance recording can make daily time tracking and caregiver record management harder to review.',
    solution: 'The system connects QR-based attendance steps with timesheet and caregiver management screens.',
    features: ['QR attendance', 'Timesheet tracking', 'Caregiver records', 'Attendance monitoring'],
    tools: ['QR Attendance', 'Timesheet Tracking', 'Caregiver Management', 'Web Application', 'Workflow Automation'], images: caregiverImages,
  }),
  project({
    id: 3, slug: 'n8n-workflow-automation', title: 'n8n Workflow Automation', category: 'Process automation',
    description: 'A collection of workflow automations built with n8n to streamline repetitive tasks, connect applications, and automate practical digital processes.',
    overview: 'Practical n8n workflows focused on reducing repeat work and moving information reliably between connected applications.',
    problem: 'Repeated manual handoffs consume time and can make otherwise simple operational processes inconsistent.',
    solution: 'Visual n8n workflows connect triggers, application steps, and automated actions into maintainable processes.',
    features: ['Visual workflows', 'Application integrations', 'Automated actions', 'Process automation'],
    tools: ['n8n', 'Workflow Automation', 'Process Automation', 'Integrations', 'AI Automation'], images: n8nImages,
  }),
  project({
    id: 4, slug: 'elearning-certification-generator', title: 'eLearning with Certification Generator', category: 'Education technology',
    description: 'An eLearning web application with certification generation features designed to support digital learning, course completion, and certificate-based workflows.',
    overview: 'A web-based learning experience that brings course activity and certificate generation into one digital workflow.',
    problem: 'Digital learning needs a straightforward way to connect course completion with certification.',
    solution: 'The application supports the learning journey and generates certificates through a clear web interface.',
    features: ['Digital learning', 'Course completion', 'Certificate generation', 'Learning workflow'],
    tools: ['eLearning', 'Certification Generator', 'Web Application', 'Education Technology', 'Digital Workflow'], images: elearningImages,
  }),
];
