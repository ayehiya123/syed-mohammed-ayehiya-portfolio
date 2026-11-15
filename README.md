# Syed Mohammed Ayehiya — Portfolio

A high-performance, responsive single-page developer portfolio website showcasing data analytics workflows, database management, and web development capabilities.

**Live site:** [https://my-portfolio-one-omega.vercel.app](https://my-portfolio-one-omega.vercel.app)

## Tech Stack
- **React 19** — Component-driven frontend user interface
- **Vite** — Next-generation frontend tooling and rapid development server
- **Tailwind CSS 4** — Modern utility-first styling with custom animation keyframes
- **Framer Motion** — Physics-based spring animations, parallax effects, and smooth layout transitions
- **AOS (Animate on Scroll)** — Scroll-triggered viewport entrance animations
- **EmailJS** — Client-side email dispatch with automatic fallback handling
- **WebGL** — Hardware-accelerated graphics capabilities

## Run Locally

```bash
# Clone the repository
git clone https://github.com/ayehiya123/my-portfolio.git

# Navigate to the project directory
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To enable contact form submissions via EmailJS, create a `.env.local` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted or left blank, the contact form automatically falls back to opening the visitor's default email client).*

---

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
