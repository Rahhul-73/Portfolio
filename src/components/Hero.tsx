import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-sm text-[var(--color-muted)]"
          >
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text block">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-lg text-[var(--color-muted)] md:text-xl"
          >
            <span className="text-white">{profile.role}</span>
            <span className="text-white/30">·</span>
            <span>{profile.college}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono text-sm tracking-wider text-[var(--color-accent-2)]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#7c3aed] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-glow)] transition hover:scale-[1.02] hover:shadow-xl"
            >
              More About Me
              <ArrowDown
                size={16}
                className="transition group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full justify-center lg:justify-end"
        >
          {/* Ambient Outer Glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-br from-[var(--color-accent)]/35 via-cyan-400/20 to-[var(--color-accent-2)]/30 blur-3xl" />

          {/* Outer Wrapper for Photo & Text Ring */}
          <div className="relative flex aspect-square w-full max-w-[320px] sm:max-w-[380px] items-center justify-center p-8">
            
            {/* Rotating Full Stack Developer Text Ring — Completely OUTSIDE the Circle Photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="pointer-events-none absolute -inset-6 sm:-inset-8 z-30 flex items-center justify-center"
            >
              <svg viewBox="0 0 340 340" className="h-full w-full">
                <path
                  id="outerTextCirclePath"
                  d="M 170, 170 m -152, 0 a 152,152 0 1,1 304,0 a 152,152 0 1,1 -304,0"
                  fill="none"
                />
                <text className="fill-cyan-300 text-[11.5px] font-extrabold uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  <textPath href="#outerTextCirclePath" startOffset="0%">
                    ★ FULL STACK DEVELOPER ★ FULL STACK DEVELOPER ★ FULL STACK DEVELOPER 
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Glowing Gradient Ring & Circular Photo */}
            <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-[var(--color-accent)] via-cyan-400 to-[var(--color-accent-2)] p-[4px] shadow-2xl shadow-[var(--color-glow)]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--color-void)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(167,139,250,0.25),transparent_70%)]" />
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="relative z-10 h-full w-full rounded-full object-cover object-center scale-105 transition-transform duration-500 hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 z-20 rounded-full bg-gradient-to-t from-[var(--color-void)]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Attractive Outer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-2 -right-1 z-40 sm:-bottom-4 sm:-right-2"
            >
              <div className="flex items-center gap-2 rounded-full border border-cyan-400/50 bg-[#090d16]/90 px-4 py-2 shadow-xl shadow-cyan-500/20 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-cyan-200">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-muted)]"
      >
        <span>Scroll</span>
        <ArrowDown size={18} className="animate-bounce text-[var(--color-accent)]" />
      </motion.a>
    </section>
  )
}
