import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="ABOUT"
          title="Who I Am"
          subtitle="A builder at heart — curious, consistent, and always shipping."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-30"
              style={{
                background:
                  'radial-gradient(circle, var(--color-accent), transparent)',
              }}
            />
            <div className="relative space-y-5 text-[var(--color-muted)] leading-relaxed">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            {[
              { emoji: '🚀', title: 'Ship Fast', desc: 'Turn ideas into working prototypes quickly.' },
              { emoji: '🎨', title: 'Design Aware', desc: 'Interfaces that feel intentional and modern.' },
              { emoji: '🧠', title: 'Always Learning', desc: 'DSA, web, and new tools — every single day.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-elevated)] p-5 transition hover:border-[var(--color-accent)]/30"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
