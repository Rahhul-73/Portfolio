export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div
        className="float-orb absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)',
        }}
      />
      <div
        className="float-orb absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse, rgba(167,139,250,0.3) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
