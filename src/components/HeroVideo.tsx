import { useEffect, useRef, useState } from 'react'

const POSTER = '/assets/green-poster.webp'

const DESKTOP = {
  webm: '/assets/green-hero.webm',
  mp4: '/assets/green-hero.mp4',
} as const

const MOBILE = {
  webm: '/assets/green-hero-mobile.webm',
  mp4: '/assets/green-hero-mobile.mp4',
} as const

function useNarrowHero() {
  const [narrow, setNarrow] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 768px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const apply = () => setNarrow(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return narrow
}

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const narrow = useNarrowHero()
  const sources = narrow ? MOBILE : DESKTOP

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || reduceMotion) return
    el.load()
    void el.play().catch(() => {})
  }, [sources.webm, reduceMotion])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduceMotion) {
      el.pause()
      el.removeAttribute('autoplay')
    } else {
      void el.play().catch(() => {})
    }
  }, [reduceMotion])

  return (
    <div className="absolute inset-0 overflow-hidden bg-void" aria-hidden>
      {!reduceMotion ? (
        <video
          key={sources.webm}
          ref={ref}
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
          autoPlay
          muted
          playsInline
          loop
          poster={POSTER}
        >
          <source src={sources.webm} type="video/webm" />
          <source src={sources.mp4} type="video/mp4" />
        </video>
      ) : (
        <img
          src={POSTER}
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      )}
    </div>
  )
}
