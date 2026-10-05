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

const caregiverModules = import.meta.glob('../CAH*.jpg', {eager:true,query:'?url',import:'default'}) as Record<string,string>;
const caregiverImages = Object.entries(caregiverModules).sort(([a],[b]) => Number(a.match(/CAH(\d+)\.jpg$/)?.[1])-Number(b.match(/CAH(\d+)\.jpg$/)?.[1])).map(([,url])=>url);

// These are discovered case-insensitively so the exact repository filenames are
// always preserved by Vite. The project is shown only when its real images exist.
const n8nModules = import.meta.glob(['../n8n*.png','../N8N*.png'], {eager:true,query:'?url',import:'default'}) as Record<string,string>;
const n8nImages = Object.entries(n8nModules).sort(([a],[b]) => Number(a.match(/n8n(\d+)\.png$/i)?.[1])-Number(b.match(/n8n(\d+)\.png$/i)?.[1])).map(([,url])=>url);

const projectList: Project[] = [{
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
},{
  id:2, slug:'caregiver-timesheet-qr', title:'CAREGIVER TIMESHEET QR SYSTEM', category:'ATTENDANCE / CARE',
  description:'A caregiver attendance and timesheet system that uses QR-based workflows to simplify time tracking, attendance monitoring, and caregiver record management.',
  overview:'A focused web application for keeping caregiver attendance, working time, and related records organized through a straightforward QR workflow.',
  problem:'Manual attendance and timesheet processes can be slow to record and difficult to review consistently.',
  solution:'The system combines QR-based attendance with accessible timesheet and caregiver management screens in one workflow.',
  features:['QR attendance','Timesheet tracking','Attendance monitoring','Caregiver records','Responsive web application'],
  tools:['QR Attendance','Timesheet Tracking','Caregiver Management','Web Application','Workflow Automation'], images:caregiverImages, cover:caregiverImages[0],
}];

if(n8nImages.length) projectList.push({
  id:3, slug:'n8n-workflow-automation', title:'n8n WORKFLOW AUTOMATION', category:'AUTOMATION / INTEGRATIONS',
  description:'A collection of workflow automations built with n8n to streamline repetitive tasks, connect apps, and automate digital processes efficiently.',
  overview:'These real workflow screens demonstrate practical automation design and process integration experience with n8n.',
  problem:'Repetitive handoffs between digital tools take time and make routine processes harder to manage.',
  solution:'Visual n8n workflows connect steps and applications so repeatable processes can run in a clearer, more efficient way.',
  features:['Visual workflow design','Process automation','App integrations','AI-assisted workflows','Repeatable task flows'],
  tools:['n8n','Workflow Automation','Process Automation','Integrations','AI Automation'], images:n8nImages, cover:n8nImages[0],
});

export const projects = projectList;
