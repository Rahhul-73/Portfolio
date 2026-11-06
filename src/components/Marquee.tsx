import { profile } from '../data/profile'

export function Marquee() {
  const text = `${profile.shortName} · ${profile.role} · `
  const repeated = Array(6).fill(text).join('')

  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-4">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-white/20 md:text-4xl">
          {repeated}
        </span>
        <span
          className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-white/20 md:text-4xl"
          aria-hidden
        >
          {repeated}
        </span>
      </div>
    </div>
  )
}
