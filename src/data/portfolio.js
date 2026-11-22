export const profile = {
  name: 'Bharath T',
  headline: 'Aspiring Software Developer',
  email: 'bharathcse1122@gmail.com',
  phone: '9361163518',
  location: 'Dindigul, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/bharath-t-530475329',
  github: 'https://github.com/BHARATH-eng-cs',
  resume: '/assets/resume-bharath-t.pdf',
}

export const skills = [
  { group: 'Programming', icon: '⌘', items: ['Java', 'Python', 'JavaScript'] },
  { group: 'Web technologies', icon: '⌁', items: ['HTML5', 'CSS3', 'Responsive UI'] },
  { group: 'Software testing', icon: '◈', items: ['Manual Testing', 'Test Automation concepts', 'Test Case Development', 'Debugging'] },
  { group: 'Networking', icon: '⌘', items: ['Computer Networking', 'TCP/IP', 'Network Troubleshooting'] },
  { group: 'Security', icon: '⛨', items: ['Cybersecurity Fundamentals', 'Computer Security'] },
  { group: 'Analytics', icon: '▥', items: ['IBM Cognos Analytics', 'Data Visualization'] },
  { group: 'Tools', icon: '⌬', items: ['Git', 'GitHub', 'VS Code'] },
]

export const projects = [
  {
    id: 'finance', title: 'Finance Management System', category: 'Web', status: 'Project',
    description: 'A browser-based application concept for organizing income, expenses and personal financial records.',
    details: 'Built a web interface with HTML, CSS and JavaScript to help organize financial records. The current resume describes this as a browser-based application concept; additional backend, authentication and reporting capabilities are intentionally not claimed.',
    stack: ['HTML', 'CSS', 'JavaScript'], github: null, demo: null, visual: 'finance',
  },
  {
    id: 'milk', title: 'Milk Measurement & Data Storage', category: 'Web', status: 'Project',
    description: 'A web interface to enter and manage milk measurement records.',
    details: 'Created a web interface for entering and managing milk measurement records using HTML, CSS and JavaScript. A verified public repository or live deployment has not yet been supplied.',
    stack: ['HTML', 'CSS', 'JavaScript'], github: null, demo: null, visual: 'milk',
  },
  {
    id: 'expense', title: 'Expense Tracker', category: 'Web', status: 'Internship project',
    description: 'A PHP full-stack project focused on recording and reviewing income and expense transactions.',
    details: 'The internship report describes an Expense Tracker developed with HTML, CSS, JavaScript, PHP and MySQL in a local XAMPP environment. The report covers transaction entry, categories, history and financial totals. Confirm the final implementation and add screenshots before publishing.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], github: null, demo: null, visual: 'expense',
  },
  {
    id: 'vehicle', title: 'Vehicle Service & Maintenance Tracker', category: 'Web', status: 'Exploration',
    description: 'A selected application concept for keeping vehicle service and maintenance information organized.',
    details: 'This project has been discussed as a development topic. No completed feature set, repository or live demo has been provided, so it is presented as an exploration rather than a completed product.',
    stack: ['Project concept'], github: null, demo: null, visual: 'vehicle',
  },
]

export const experience = [
  { role: 'Artificial Intelligence Training', company: 'Cholix Technologies', date: 'Currently ongoing', type: 'Training', note: 'Ongoing training in Artificial Intelligence, as stated in the portfolio brief.', tags: ['Artificial Intelligence'] },
  { role: 'Java Full Stack Development', company: 'Cytronix Technologies Pvt. Ltd.', date: '01 June – 30 June 2026', type: 'Internship', note: 'One-month training focused on Java full-stack development.', tags: ['Java', 'Full Stack Development'] },
  { role: 'IBM Cognos Analytics', company: 'Adroit Technologies Innovative Solutions Pvt. Ltd.', date: '09 March – 10 April 2026', type: 'Training', note: 'Training focused on IBM Cognos Analytics.', tags: ['IBM Cognos Analytics', 'Data Visualization'] },
  { role: 'Web Development Intern', company: 'Brioworkx IT Services Private Limited', date: '01 June – 30 June 2026', type: 'Internship · Resume-listed', note: 'The resume records a 30-day web development internship covering HTML5, CSS3/Tailwind, JavaScript, front-end frameworks, Node.js workflows, databases, authentication, API endpoints and testing.', tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'APIs'] },
]
