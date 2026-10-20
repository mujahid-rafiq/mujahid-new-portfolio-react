import cervelloImg from "./assets/CERVELLO.PNG"
import cervelloGlobalImg from "./assets/cervelloGlobal.PNG"
import ciataImg from "./assets/ciata.png"
import strataImg from "./assets/stratasfr.PNG"
import taxTrackerImg from "./assets/taxtracker.PNG"
import christopherImg from "./assets/with cristopher.jpg"
import juliaImg from "./assets/with julia.jpg"
import mujahidPic from "./assets/mujahidpic.png"

export const profile = {
  name: "Mujahid Rafiq",
  role: "Software Engineer",
  location: "Lahore, Pakistan",
  phone: "+92 305 4142588",
  phoneHref: "tel:+923054142588",
  email: "mujaahidrafiq@gmail.com",
  linkedin: "https://www.linkedin.com/in/mujahid-rafique/",
  linkedinLabel: "linkedin.com/in/mujahid-rafique",
  cvUrl: "/Mujahid-Rafiq-CV.pdf",
  photo: mujahidPic,
  availability: "Open to opportunities",
}

export const summary =
  "Full Stack Developer specializing in building and independently owning scalable, production-grade web applications using React.js, Next.js, NestJS, Node.js, TypeScript, MySQL and MongoDB. Delivered end-to-end systems supporting 1,000+ concurrent users, real-time communication with Socket.io, and AI-powered features including OCR and LLM integration, from architecture through deployment on AWS."

export const stats = [
  { value: "1,000+", label: "Concurrent users in production" },
  { value: "5,000+", label: "Daily active users served" },
  { value: "500+", label: "Live WebSocket sessions" },
  { value: "99%+", label: "OCR field extraction accuracy" },
]

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "React Query",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "TypeORM",
      "RESTful APIs",
      "Swagger / OpenAPI",
      "Socket.io",
      "JWT & MFA",
      "RBAC",
    ],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "Material-UI", "Bootstrap", "Styled Components", "Radix UI"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Amplify)",
      "Vercel",
      "Netlify",
      "Docker",
      "CI/CD pipelines",
      "GitHub",
      "Bitbucket",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
]

export const projects = [
  {
    id: "cervello-logistics",
    index: "01",
    name: "Cervello Logistics",
    type: "Logistics management platform",
    period: "Jul 2025 — Present",
    url: "https://cervello-logistics.com",
    urlLabel: "cervello-logistics.com",
    image: cervelloImg,
    summary:
      "Enterprise logistics platform for shipment booking, quote negotiation, dispatching, and real-time tracking — with secure role-based workflows across 8+ user types.",
    points: [
      "Scaled NestJS + TypeScript services with RBAC for 1,000+ concurrent users, including email verification, password reset, MFA, and permission-gated navigation.",
      "Architected Customer, Quote Manager, and Dispatcher microservices with Socket.io, handling 500+ concurrent live sessions.",
      "Improved operational efficiency by replacing manual coordination with real-time, role-aware workflows.",
    ],
    stack: ["NestJS", "TypeScript", "Socket.io", "RBAC", "MFA", "Microservices"],
  },
  {
    id: "tax-tracker",
    index: "02",
    name: "Tax Tracker",
    type: "Expense management platform",
    period: "Jan 2025 — Jun 2025",
    url: "https://taxtracker.pk",
    urlLabel: "taxtracker.pk",
    image: taxTrackerImg,
    summary:
      "Expense platform with OCR receipt scanning, automated record management, and conversational tax guidance for non-accountants.",
    points: [
      "Shipped a responsive React.js frontend serving 5,000+ daily active users with live financial dashboards.",
      "Delivered OCR invoice upload with 99%+ accuracy extracting tax-relevant fields.",
      "Integrated AI query APIs at ~200ms response times for conversational tax support.",
    ],
    stack: ["React.js", "OCR", "LLM APIs", "Dashboards", "TypeScript"],
  },
  {
    id: "cervello-global",
    index: "03",
    name: "Cervello Global",
    type: "Corporate website",
    period: "Sep 2024 — Dec 2024",
    url: "https://cervello.global",
    urlLabel: "cervello.global",
    image: cervelloGlobalImg,
    summary:
      "Mobile-first corporate site for service presentation, hiring, and in-platform engagement.",
    points: [
      "Built a responsive React.js and Tailwind CSS site focused on clarity and conversion.",
      "Synced a job listings section with Cervello Logistics for direct in-platform applications.",
      "Added floating customer support chat and a custom homepage slider, lifting content engagement by ~20%.",
    ],
    stack: ["React.js", "Tailwind CSS", "Chat module", "CMS-style content"],
  },
  {
    id: "strata",
    index: "04",
    name: "STRATA-SFR",
    type: "Real estate investment platform",
    period: "Jan 2024 — Mar 2024",
    url: "https://stratasfr.com",
    urlLabel: "stratasfr.com",
    image: strataImg,
    summary:
      "US real estate investment platform giving investors access to SFR, Build-for-Rent, and land deals.",
    points: [
      "Built with Next.js App Router, TypeScript, Redux Toolkit, and accessible Radix UI / Tailwind components.",
      "Integrated REST APIs via React Query for real-time property data.",
      "Configured JWT auth for brokers, investors, and admins, and mentored teammates — raising team productivity by 15%.",
    ],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "React Query", "Radix UI"],
  },
  {
    id: "caita",
    index: "05",
    name: "CAITA",
    type: "AI mental health support",
    period: "Apr 2024 — Aug 2024",
    url: null,
    urlLabel: null,
    image: ciataImg,
    summary:
      "Multi-role, AI-powered mental health platform delivering CBT-style conversations through a real-time chat interface for therapists, patients, and admins.",
    points: [
      "Delivered the UI with Next.js App Router, TypeScript, Redux Toolkit, Radix UI, and Tailwind.",
      "Wired REST services via React Query for live data updates.",
      "Configured JWT authentication with role-differentiated access across the product.",
    ],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "React Query", "Radix UI", "JWT"],
  },
]

export const experience = {
  title: "Software Engineer",
  company: "Code Upscale",
  period: "Jul 2024 — Present",
  note: "Delivered client products as part of a product engineering team, owning features from design through deployment.",
}

export const achievements = [
  "Recognized as Rising Star at Code Upscale, receiving a certificate of appreciation from CTO Christopher Jenison.",
  "Deployed and managed production apps on AWS (EC2, S3), Netlify, and Vercel with CI/CD via GitHub and Bitbucket.",
  "Containerized applications with Docker, improving deployment consistency across environments.",
  "Reduced application load time by up to 30% using code splitting, lazy loading, and memoization.",
  "Architected systems supporting 1,000+ concurrent users and 500+ live WebSocket sessions in production.",
  "Shipped AI-powered OCR image-to-text at 95%+ accuracy across platforms with large active user bases.",
]

export const recognition = [
  {
    image: christopherImg,
    alt: "Mujahid Rafiq receiving a Rising Star certificate of appreciation from CTO Christopher Jenison",
    title: "Rising Star Award",
    caption: "Receiving a certificate of appreciation and shield from Christopher Jenison, CTO.",
  },
  {
    image: juliaImg,
    alt: "Mujahid Rafiq with Julia at the Code Upscale and AutyCloud town hall",
    title: "Code Upscale Town Hall",
    caption: "With Julia at Down Town.",
  },
]

export const education = {
  degree: "Master of Science (MSc) in Information Technology",
  school: "University of Education, Lahore",
  gpa: "CGPA 3.32 / 4.00",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management",
    "Web Engineering",
    "Mobile Application Development",
    "Machine Learning",
    "AI",
    "Object-Oriented Programming",
    "Java",
  ],
}

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]
