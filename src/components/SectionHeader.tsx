import { motion } from 'framer-motion'

type Props = {
  index: string
  label: string
  title: string
  subtitle?: string
}

export function SectionHeader({ index, label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="mb-2 font-mono text-xs tracking-widest text-[var(--color-accent)]">
        [{index}] {label}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-[var(--color-muted)]">{subtitle}</p>
      )}
    </motion.div>
  )
}
