import { motion } from 'framer-motion'
import { ArrowUpRight, Lock } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="PROJECTS"
          title="Curated Work"
          subtitle={`[${String(profile.projects.length).padStart(2, '0')}] selected builds`}
        />

        <div className="space-y-6">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group glass relative overflow-hidden rounded-3xl p-8 md:p-10 ${
                project.status === 'upcoming' ? 'opacity-80' : ''
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {project.id} /
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                    {project.status === 'upcoming' ? (
                      <span className="flex items-center gap-2">
                        <Lock size={22} className="text-[var(--color-muted)]" />
                        {project.title}
                      </span>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
                {project.link && project.status === 'live' && (
                  <a
                    href={project.link}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] text-white transition group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
                {project.status === 'upcoming' && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400">
                    In Development
                  </span>
                )}
              </div>

              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-0 transition group-hover:opacity-20"
                style={{
                  background:
                    'radial-gradient(circle, var(--color-accent), transparent)',
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
