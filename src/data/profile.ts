/**
 * Edit your details here — the whole site reads from this file.
 */
export const profile = {
  name: 'Rahul Voruganti',
  shortName: 'RAHUL VORUGANTI',
  photoUrl: '/profile.jpg',
  tagline: 'design. code. ship. iterate.',
  role: 'Full Stack Developer',
  college: 'Vardhaman College of Engineering',
  heroSubtitle: 'Building thoughtful software with clean interfaces and strong fundamentals.',
  year: '3rd',
  branch: 'IT',
  about: [
    "I'm Rahul Voruganti, a passionate 3rd year B.Tech student in Information Technology at Vardhaman College of Engineering.",
    'I enjoy turning ideas into polished web experiences — from UI craft to backend logic — and I learn fastest by building real projects.',
    "I'm especially interested in full-stack development, data structures & algorithms, and how great design makes technology feel human.",
    "Right now I'm focused on sharpening my problem-solving, shipping more projects, and growing as a developer through consistent practice.",
  ],
  resumeUrl: '#', // replace with your resume PDF link
  social: {
    email: 'rahulvoruganti73@gmail.com',
    github: 'https://github.com/rahulvoruganti',
    linkedin: 'https://www.linkedin.com/in/rahul-voruganti-b10257361/',
  },
  skills: [
    { name: 'Java', category: 'Languages', icon: '☕' },
    { name: 'Python', category: 'Languages', icon: '🐍' },
    { name: 'C', category: 'Languages', icon: '⚙️' },
    { name: 'HTML', category: 'Web', icon: '🌐' },
    { name: 'CSS', category: 'Web', icon: '🎨' },
    { name: 'JavaScript', category: 'Web', icon: '⚡' },
    { name: 'React', category: 'Web', icon: '⚛️' },
    { name: 'TypeScript', category: 'Web', icon: '📘' },
    { name: 'GitHub', category: 'Tools', icon: '🐙' },
    { name: 'VS Code', category: 'Tools', icon: '💻' },

  ],
  projects: [
    {
      id: '01',
      title: 'Portfolio OS',
      description:
        'A cinematic personal portfolio with glassmorphism, scroll-driven animations, and a single config file for all content — built to stand out while staying fast.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      status: 'live' as const,
      link: '#',
    },
    {
      id: '02',
      title: 'ResumeOptimizer',
      description:
        'Optimize the resume and modified Proper ATS score and mock tests , Interview Questions according to role and company . It is easy to get jobs for Fresher',
      tags: ['React', 'Local Storage', 'Charts'],
      status: 'live' as const,
      link: '#',
    },
    {
      id: '03',
      title: 'Next Build',
      description:
        'Currently designing an AI-assisted study companion for DSA practice. Stay tuned.',
      tags: ['In Planning'],
      status: 'upcoming' as const,
      link: null,
    },
  ],
  education: [
    {
      id: '01',
      period: '2024 – 2028',
      title: 'B.Tech in Information Technology',
      institution: 'Vardhaman College of Engineering',
      detail: 'Currently 3rd year ',
    },
    {
      id: '02',
      period: 'Intermediate',
      title: 'Class XII (MPC)',
      institution: 'Sri Chaitanya Junior College',
      detail: 'Percentage: 90%',
    },
    {
      id: '03',
      period: 'School',
      title: 'Class X (SSC)',
      institution: 'Sri Sai Raghavendra High School',
      detail: 'Percentage: 90%',
    },
  ],
  achievements: [
    {
      id: '01',
      icon: '🏆',
      title: 'Academic Excellence',
      description:
        'Consistently strong academic performance with focus on core CS fundamentals and practical application.',
    },
    {
      id: '02',
      icon: '💡',
      title: 'Hackathon Participant',
      description:
        'Built and pitched web prototypes under time pressure, collaborating with peers on real-world problem statements.',
    },
    {
      id: '03',
      icon: '🎯',
      title: 'Problem Solver',
      description:
        'Active on competitive programming platforms, strengthening logic and algorithmic thinking daily.',
    },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
}
