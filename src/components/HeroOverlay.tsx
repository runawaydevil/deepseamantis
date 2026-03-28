export function HeroOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      {/* Base darkening */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85"
        style={{ mixBlendMode: 'multiply' }}
      />
      {/* Vertical vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_40%,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      {/* Bioluminescent bloom */}
      <div className="hero-glow-breathe absolute -top-1/4 left-1/2 h-[85%] w-[120%] max-w-none -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(57,255,156,0.14)_0%,rgba(0,80,60,0.06)_35%,transparent_65%)] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-void via-void/80 to-transparent" />
      {/* Subtle film grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
