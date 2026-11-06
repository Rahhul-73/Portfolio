import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] md:flex-row">
        <p>
          © {year} {profile.name}. Crafted with React & passion.
        </p>
        <p className="font-mono text-xs tracking-wider">{profile.tagline}</p>
      </div>
    </footer>
  )
}
