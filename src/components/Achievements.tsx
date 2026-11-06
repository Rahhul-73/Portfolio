import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          label="ACHIEVEMENTS"
          title="Beyond Academics"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-8 transition hover:border-[var(--color-accent-2)]/40"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="mt-4 block font-mono text-xs text-[var(--color-muted)]">
                {item.id}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
