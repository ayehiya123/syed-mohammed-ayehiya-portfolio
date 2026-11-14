// ============================================================
// portfolioData.js — Developer Portfolio Data
// All content and links for the website are centralized here.
// ============================================================

export const personalInfo = {
  name: "Syed Mohammed Ayehiya",
  firstName: "Syed Mohammed Ayehiya",
  brandName: "Syed Mohammed Ayehiya", // shown in the preloader, navbar and footer
  title: "Data Analytics Trainee",
  location: "Bengaluru, India",
  emails: {
    primary: "syedayehiya27@gmail.com",
    secondary: "",
  },
  summary: "Aspiring data analyst who cleans and analyzes data using Python, Pandas, and MySQL.",
  resumeUrl: "/S.Ayehiya-resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/ayehiya123",
  linkedin: "https://www.linkedin.com/in/syedmohammed-ayehiya",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Syed Mohammed Ayehiya",
  titleHighlight: "Data Analytics Trainee",
  subtitle: "I turn raw data into clear insights using Python, Pandas, NumPy, and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:syedayehiya27@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/S.Ayehiya-resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Syed Mohammed Ayehiya</span>, a Data Analytics Trainee based in Bengaluru, India. I completed my Bachelor of Computer Applications (BCA) in 2026 at Dr Jyothirmayi Degree College, and I am now sharpening my skills through the placement training program at TAP Academy. I enjoy cleaning data, finding patterns, and presenting simple, actionable insights to solve real-world problems.`,
  techStack: ["Python", "Pandas", "NumPy", "MySQL", "Jupyter Notebook", "Git"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn raw data into actionable insights",
  description: "A systematic approach to data collection, cleaning, analysis, and reporting.",
  cards: [
    { number: "01", title: "Research", text: "Understand business objectives and identify relevant data sources." },
    { number: "02", title: "Design", text: "Structure database queries and map out key metrics and validation rules." },
    { number: "03", title: "Develop", text: "Clean, transform, and analyze datasets using Python, Pandas, and MySQL." },
    { number: "04", title: "Deploy", text: "Deliver clear reports and visualizations that support data-driven decision making." },
  ],
  endText: "Ready to deliver actionable insights!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }],
    },
    {
      title: "Data Libraries",
      skills: [{ name: "NumPy" }, { name: "Pandas" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Jupyter Notebook" }, { name: "Git" }, { name: "GitHub" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Troubleshoot data anomalies and craft efficient, logical solutions." },
  { name: "Analytical Thinking", icon: "📈", desc: "Uncover trends and correlations to transform raw metrics into clear conclusions." },
  { name: "Communication", icon: "💬", desc: "Present data findings and technical insights in simple, understandable terms." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritize analysis tasks effectively to deliver accurate results on schedule." },
];

export const projects = [];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/syedmohammed-ayehiya",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Dr Jyothirmayi Degree College",
  cgpa: "Completed 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analytics Trainee", "Python · Pandas · MySQL", "Turning Data into Insights"],
  credential: "Bachelor of Computer Applications (BCA)",
  copyright: `© ${new Date().getFullYear()} Syed Mohammed Ayehiya | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
