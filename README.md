🧩 About the Codebase

This project is built with modern frontend architecture, focused on performance, responsiveness, and maintainability.

The codebase is modular, reusable, and optimized for low bandwidth usage and smooth animations.

📁 Project Structure
src/
│
├── assets/
│   ├── hero-bg.jpg
│   ├── ssm.png
│   ├── smartiva.png
│   └── icons/
│
├── components/
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── CountdownTimer.tsx
│   ├── WhatsAppWidget.tsx
│   ├── RegisterSection.tsx
│   ├── TeamSection.tsx
│   ├── TracksSection.tsx
│   ├── TimelineSection.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   └── ShortlistPopup.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Shortlist.tsx
│   └── NotFound.tsx
│
├── hooks/
│   ├── useInView.ts
│   ├── useIsMobile.ts
│   └── useLocalStorage.ts
│
├── styles/
│   └── index.css
│
├── utils/
│   ├── constants.ts
│   └── helpers.ts
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts

🧠 Core Components Explained
🔹 HeroSection.tsx

Landing section with animated background

Event title, college & partner logos

Countdown timer

CTA buttons

Optimized to prevent scroll overflow on all screens

🔹 Navbar.tsx

Responsive navigation bar

Desktop and mobile layouts

Smooth animated mobile menu

Scroll-based background blur effect

🔹 CountdownTimer.tsx

Live countdown to registration date

Auto-updates every second

Lightweight and optimized for performance

🔹 WhatsAppWidget.tsx

Floating WhatsApp button

Auto popup shown once per hour

LocalStorage-based popup control

Professional modal with join link

🔹 RegisterSection.tsx

Registration & PPT submission portal

Status-based UI (Open / Closed / Coming Soon)

Animated upload orb

Automatic PPT format download support

🔹 TeamSection.tsx

Displays Detroit core team

Animated hologram-style avatars

Responsive grid for mobile & desktop

Smooth hover and entry animations

🔹 TracksSection.tsx

Lists hackathon tracks

Color-coded animated cards

Optimized hover and motion effects

🔹 TimelineSection.tsx

Event timeline (desktop & mobile versions)

Animated center line and nodes

Mobile-friendly stacked layout

🔹 FAQSection.tsx

Accordion-style FAQ

Smooth open/close animations

Keyboard & mobile friendly

🔹 Footer.tsx

Contact links

College & organizer info

Social media icons

🎨 Styling System
🔸 Tailwind CSS

Utility-first styling

Custom cyberpunk design system

Mobile-safe layout rules

Overflow prevention across all breakpoints

🔸 index.css

CSS variables for colors & themes

Font separation:

Headings → Orbitron / Rajdhani

Content → Space Grotesk

Mobile performance optimizations

Glow & blur containment rules

⚡ Performance Optimizations

No unnecessary realtime listeners

Minimal animation reflows

svh units for mobile viewport safety

Overflow clipping to avoid horizontal scroll

LocalStorage caching for popups

🧪 Development Stack

React + TypeScript

Vite

Tailwind CSS

Framer Motion

Firebase (optimized usage)

🛠 Best Practices Followed

Component-based architecture

Reusable hooks

Clean folder separation

Mobile-first design

Accessibility-friendly layouts

Optimized Firebase bandwidth usage

💡 Developer Notes

This project is structured so future developers can:

Add new sections easily

Replace Firebase with another backend

Extend animations safely

Reuse components for other hackathons


deploy in friebase
 
npm run build
firebase deploy