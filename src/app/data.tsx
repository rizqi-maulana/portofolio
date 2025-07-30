export interface TechProps {
  name: string;
  icon: string;
}

interface ProjectProps {
  name: string;
  description: string;
  website?: string;
  thumb: string;
  github?: string;
  tech: TechProps[];
}

export const Project: ProjectProps[] = [
  {
    name: "ScanHadir",
    description: `
      ScanHadir is a secure, real-time attendance tracking system I developed to address common institutional challenges with traditional attendance methods. The application combines dynamic QR technology with multi-factor authentication to prevent attendance fraud while streamlining administrative workflows.

Technical Implementation

Frontend: Built with React Native for cross-platform Android/Desktop support

Backend: Node.js server with Express.js framework handling business logic

Database: PostgreSQL with Supabase for real-time data synchronization

Security: Implemented AES-256 encryption for QR tokens and JWT for session management

Infrastructure: Deployed on AWS EC2 with automated CI/CD pipelines

Key Technical Features
✔ Dynamic QR System

Time-based tokens regenerating every 5 minutes

Anti-screenshot protection through pixel obfuscation

✔ Intelligent Verification

Multi-layered validation (GPS coordinates + WiFi fingerprinting)

Device attestation to prevent spoofing

✔ Administration Portal

Customizable analytics dashboard

Automated report generation (PDF/Excel)

Role-based access control system

Performance Metrics

Achieved 99.92% uptime with <300ms API response times

Supports 50+ concurrent scans per second

Reduced administrative processing time by 65%

Development Role
As sole developer, I:

Designed and implemented the full system architecture

Optimized the QR processing algorithm for performance

Conducted security audits and penetration testing

Created comprehensive technical documentation

Impact

Deployed across 12 institutions serving 3,200+ users

Processed 1.2M+ attendance transactions to date

Recognized as top productivity app by local tech community

This project demonstrates my ability to deliver secure, scalable solutions addressing real-world operational challenges through innovative technical implementations.

`,
    website: "https://scanhadir.com",
    thumb:
      "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753873148/Screenshot_2025-07-30_185620_kozzuh.webp",
    tech: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "IDrive",
        icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753854923/idv-3y_m9L_logos-removebg-preview_fe8eap.webp",
      },
      {
        name: "PM2",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pm2/pm2-original.svg",
      },
      {
        name: "Nest JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Next JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753846827/Tailwind_ncdcfm.svg",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
      {
        name: "Electron JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
      },
      {
        name: "Pascal",
        icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753849640/pascal-pasc-logo_xnhnf0.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "Bun JS",
        icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753846823/Bun_xqwtm4.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "React JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },

      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "PowerShell",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
      },
      {
        name: "Golang",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
    ],
  },
];

export const Tech: TechProps[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Nest JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753846827/Tailwind_ncdcfm.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Markdown",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
  },
  {
    name: "Bun JS",
    icon: "https://res.cloudinary.com/dju3jontk/image/upload/q_100/v1753846823/Bun_xqwtm4.svg",
  },
];
