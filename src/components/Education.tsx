import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="EDUCATION"
          title="Academic Journey"
          subtitle={`[${String(profile.education.length).padStart(2, '0')}] academic records`}
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {profile.education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 hidden h-4 w-4 shrink-0 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-void)] md:mt-6 md:block md:h-5 md:w-5" />
                <div className="glass flex-1 rounded-2xl p-6 md:p-8">
                  <span className="font-mono text-xs text-[var(--color-accent)]">
                    {item.id}
                  </span>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[var(--color-muted)]">{item.institution}</p>
                  <p className="mt-3 text-sm font-medium text-white/80">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
