import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="SKILLS"
          title="Technologies I Work With"
          subtitle={`[${String(profile.skills.length).padStart(2, '0')}] core technologies`}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {profile.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group glass cursor-default rounded-2xl p-6 text-center transition hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-glow)]"
            >
              <span className="text-3xl transition group-hover:scale-110 inline-block">
                {skill.icon}
              </span>
              <h3 className="mt-3 font-semibold text-white">{skill.name}</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
