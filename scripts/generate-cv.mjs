import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

const teal = rgb(0.12, 0.45, 0.48)
const ink = rgb(0.07, 0.08, 0.1)
const muted = rgb(0.32, 0.35, 0.4)

function wrap(text, font, size, maxWidth) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ""

  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      line = next
    } else {
      if (line) lines.push(line)
      line = word
    }
  }

  if (line) lines.push(line)
  return lines
}

async function build() {
  const pdf = await PDFDocument.create()
  const regular = await pdf.embedFont(StandardFonts.Helvetica)
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
  const pageSize = [595.28, 841.89]
  let page = pdf.addPage(pageSize)
  const margin = 48
  const maxWidth = pageSize[0] - margin * 2
  let y = 792

  const ensure = (needed) => {
    if (y - needed < 48) {
      page = pdf.addPage(pageSize)
      y = 792
    }
  }

  const draw = (text, options) => {
    page.drawText(text, options)
  }

  draw("MUJAHID RAFIQ", {
    x: margin,
    y,
    size: 22,
    font: bold,
    color: ink,
  })
  y -= 18
  draw("Software Engineer", {
    x: margin,
    y,
    size: 12,
    font: regular,
    color: teal,
  })
  y -= 16
  const contacts = [
    "+92 305 4142588",
    "mujaahidrafiq@gmail.com",
    "linkedin.com/in/mujahid-rafique",
    "Lahore, Pakistan",
  ].join("  |  ")
  draw(contacts, {
    x: margin,
    y,
    size: 8.5,
    font: regular,
    color: muted,
  })
  y -= 14
  page.drawLine({
    start: { x: margin, y },
    end: { x: pageSize[0] - margin, y },
    thickness: 1,
    color: teal,
  })
  y -= 22

  const heading = (title) => {
    ensure(28)
    draw(title.toUpperCase(), {
      x: margin,
      y,
      size: 10,
      font: bold,
      color: teal,
    })
    y -= 6
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageSize[0] - margin, y },
      thickness: 0.4,
      color: rgb(0.82, 0.84, 0.87),
    })
    y -= 14
  }

  const paragraph = (text, size = 9.2, leading = 12.4) => {
    const lines = wrap(text, regular, size, maxWidth)
    for (const line of lines) {
      ensure(leading)
      draw(line, { x: margin, y, size, font: regular, color: ink })
      y -= leading
    }
  }

  const bullet = (text) => {
    const lines = wrap(text, regular, 9, maxWidth - 14)
    lines.forEach((line, index) => {
      ensure(12.2)
      if (index === 0) {
        draw("•", { x: margin, y, size: 9, font: regular, color: teal })
      }
      draw(line, { x: margin + 12, y, size: 9, font: regular, color: ink })
      y -= 12.2
    })
  }

  heading("Professional Summary")
  paragraph(
    "Full Stack Developer specializing in building and independently owning scalable, production-grade web applications using React.js, Next.js, NestJS, Node.js, TypeScript, MySQL and MongoDB. Delivered end-to-end systems supporting 1,000+ concurrent users, real-time communication with Socket.io, and AI-powered features including OCR and LLM integration, from architecture through deployment on AWS. Skilled in designing secure REST APIs, role-based access control, and responsive user interfaces for high-traffic production environments. Proven ability to independently lead features from requirements through deployment while collaborating across cross-functional product teams.",
  )
  y -= 8

  heading("Technical Skills")
  const skills = [
    ["Frontend", "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, React Query, Redux Toolkit"],
    ["Backend", "NestJS, Node.js, TypeORM, RESTful APIs, Swagger/OpenAPI, Socket.io, JWT, MFA, RBAC"],
    ["Styling & UI", "Tailwind CSS, Material-UI, Bootstrap, Styled Components, Radix UI"],
    ["Cloud & DevOps", "AWS (EC2, S3, Amplify), Vercel, Netlify, Docker, CI/CD Pipelines, GitHub, Bitbucket"],
    ["Databases", "PostgreSQL, MySQL, MongoDB"],
  ]
  for (const [label, value] of skills) {
    ensure(24)
    draw(`${label}:`, { x: margin, y, size: 9, font: bold, color: ink })
    const labelWidth = bold.widthOfTextAtSize(`${label}: `, 9)
    const lines = wrap(value, regular, 9, maxWidth - labelWidth)
    lines.forEach((line, index) => {
      ensure(12)
      draw(line, {
        x: index === 0 ? margin + labelWidth : margin + 12,
        y,
        size: 9,
        font: regular,
        color: ink,
      })
      y -= 12
    })
  }
  y -= 6

  heading("Experience")
  draw("Software Engineer, Code Upscale", { x: margin, y, size: 10.5, font: bold, color: ink })
  const period = "Jan 2024 - Present"
  draw(period, {
    x: pageSize[0] - margin - regular.widthOfTextAtSize(period, 9),
    y,
    size: 9,
    font: regular,
    color: muted,
  })
  y -= 13
  paragraph(
    "Delivered the following client projects as part of a product engineering team, owning features from design through deployment.",
    9,
    12,
  )
  y -= 4

  const jobs = [
    {
      title: "Cervello Logistics — Logistics Management Platform",
      meta: "Jul 2025 - Present  |  cervello-logistics.com",
      points: [
        "Developed a scalable enterprise logistics platform enabling shipment booking, quote negotiation, dispatching, and real-time tracking, with secure role-based workflows across 8+ user types.",
        "Engineered backend services using NestJS and TypeScript with RBAC to support 1,000+ concurrent users, including authentication flows (email verification, password reset, MFA) and permission-gated navigation.",
        "Architected scalable microservices (Customer, Quote Manager, Dispatcher) with real-time updates via Socket.io, handling 500+ concurrent live sessions.",
      ],
    },
    {
      title: "Tax Tracker — Expense Management Platform",
      meta: "Jan 2025 - Jun 2025  |  taxtracker.pk",
      points: [
        "Built an expense management platform with OCR-based receipt scanning and automated record management.",
        "Developed a responsive React.js frontend serving 5,000+ daily active users with real-time financial dashboards and OCR invoice upload achieving 99%+ accuracy.",
        "Integrated AI query APIs delivering ~200ms response times for conversational tax guidance.",
      ],
    },
    {
      title: "Cervello Global — Corporate Website",
      meta: "Sep 2024 - Dec 2024  |  cervello.global",
      points: [
        "Developed a responsive, mobile-first corporate website using React.js and Tailwind CSS.",
        "Integrated a job listings section synced with Cervello Logistics for direct in-platform applications.",
        "Built a floating customer support chat module and a custom homepage image slider, improving content engagement by ~20%.",
      ],
    },
    {
      title: "CAITA — AI-Based Mental Health Support Platform",
      meta: "Apr 2024 - Aug 2024",
      points: [
        "Built a multi-role, AI-powered mental health support platform delivering CBT-style conversations through a real-time AI chat interface.",
        "Delivered the UI with Next.js (App Router), TypeScript, Redux Toolkit, Radix UI, and Tailwind, integrated with REST services.",
        "Customized RESTful APIs via React Query for real-time data updates and configured JWT authentication with role-differentiated access.",
      ],
    },
    {
      title: "STRATA-SFR — Real Estate Investment Platform",
      meta: "Jan 2024 - Mar 2024  |  stratasfr.com",
      points: [
        "Built a real estate investment platform for a US firm using Next.js (App Router), TypeScript, Redux Toolkit, and accessible Radix UI/Tailwind components.",
        "Integrated APIs via React Query for real-time property data updates and configured JWT authentication for brokers, investors, and admins.",
        "Increased team productivity by 15% through technical mentoring and skill development training.",
      ],
    },
  ]

  for (const job of jobs) {
    ensure(40)
    draw(job.title, { x: margin, y, size: 10, font: bold, color: ink })
    y -= 12
    draw(job.meta, { x: margin, y, size: 8.5, font: regular, color: muted })
    y -= 13
    job.points.forEach((point) => bullet(point))
    y -= 6
  }

  heading("Key Achievements")
  ;[
    "Deployed and managed production applications on AWS (EC2, S3), Netlify, and Vercel with CI/CD pipelines via GitHub and Bitbucket.",
    "Containerized applications with Docker, improving deployment consistency across environments.",
    "Reduced application load time by up to 30% using code splitting, lazy loading, and memoization.",
    "Architected and delivered systems supporting 1,000+ concurrent users and 500+ live WebSocket sessions in production.",
    "Shipped AI-powered features, including OCR image-to-text at 95%+ accuracy, used across platforms serving large active user bases.",
  ].forEach((item) => bullet(item))
  y -= 8

  heading("Education")
  draw("Master of Science (MSc) in Information Technology", {
    x: margin,
    y,
    size: 10,
    font: bold,
    color: ink,
  })
  y -= 12
  draw("University of Education, Lahore  |  CGPA: 3.32 / 4.00", {
    x: margin,
    y,
    size: 9,
    font: regular,
    color: muted,
  })
  y -= 13
  paragraph(
    "Coursework: Data Structures & Algorithms, Database Management, Web Engineering, Mobile Application Development, Machine Learning, AI, Object-Oriented Programming, Java.",
    9,
    12,
  )

  const bytes = await pdf.save()
  const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "Mujahid-Rafiq-CV.pdf")
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, bytes)
  console.log(`Wrote ${out}`)
}

build().catch((error) => {
  console.error(error)
  process.exit(1)
})
