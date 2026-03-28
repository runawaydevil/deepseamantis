import { HeroOverlay } from './components/HeroOverlay'
import { HeroVideo } from './components/HeroVideo'

function App() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-void text-mist">
      <header className="relative flex min-h-dvh flex-col overflow-hidden">
        <HeroVideo />
        <HeroOverlay />

        <div className="relative z-10 flex flex-1 flex-col justify-between gap-10 px-5 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-12 md:px-14">
          <p className="hero-animate-in hero-animate-delay-1 text-center font-display text-[0.65rem] font-semibold tracking-[0.4em] text-mist/50 sm:text-left sm:text-xs sm:tracking-[0.55em]">
            EXPERIMENTAL
          </p>

          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <h1 className="hero-animate-in hero-animate-delay-2 text-balance-soft px-2 font-display text-[2.6rem] font-semibold tracking-[0.18em] text-mist text-glow-soft sm:text-5xl sm:tracking-[0.24em] md:text-6xl lg:text-7xl">
              Pablo
            </h1>
            <p className="hero-animate-in hero-animate-delay-3 text-pretty-soft mt-6 max-w-[18rem] px-1 font-editorial text-[1.35rem] font-normal italic leading-snug text-mist/75 sm:mt-8 sm:max-w-md sm:text-2xl md:max-w-lg md:text-[1.65rem]">
              The deep remembers what the surface forgets.
            </p>
            <p className="hero-animate-in mt-4 max-w-[19rem] px-1 font-display text-[0.68rem] font-medium tracking-[0.24em] text-bloom/80 sm:max-w-sm sm:text-xs sm:tracking-[0.35em]">
              SILENT · LOOP · NO EXIT REQUIRED
            </p>
          </div>

          <div className="hero-animate-in hero-animate-delay-3 flex justify-center sm:justify-end">
            <span className="font-display text-[0.6rem] tracking-[0.35em] text-mist/35 sm:tracking-[0.5em]">
              MMXXVI
            </span>
          </div>
        </div>
      </header>

      <main>
        <section
          id="atmosphere"
          className="scroll-mt-24 border-t border-mist/[0.06] px-5 py-20 sm:px-10 sm:py-24 md:px-14 md:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-xs font-semibold tracking-[0.35em] text-bloom/70 sm:tracking-[0.45em]">
              ATMOSPHERE
            </h2>
            <p className="text-pretty-soft mt-8 font-editorial text-[1.7rem] font-normal leading-relaxed text-mist/80 sm:mt-10 sm:text-2xl md:text-3xl">
              Not a statement, but a soft distortion in the air. Silk drifting
              through moonlit depths, a hush of impossible light, a fever dream
              exhaling in slow blue tides.
            </p>
            <p className="text-pretty-soft mt-6 max-w-2xl font-display text-sm font-normal leading-relaxed tracking-wide text-mist/45 sm:mt-8">
              We dissolve meaning until only sensation remains. The first thing
              you feel is the door.
            </p>
          </div>
        </section>

        <section className="border-t border-mist/[0.06] bg-gradient-to-b from-abyss/50 to-void px-5 py-20 sm:px-10 sm:py-24 md:px-14 md:py-32">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display text-xs font-semibold tracking-[0.35em] text-bloom/70 sm:tracking-[0.45em]">
                VISUAL INTENT
              </h2>
              <p className="text-pretty-soft mt-6 max-w-xl font-editorial text-[1.3rem] italic leading-relaxed text-mist/70 sm:mt-8 sm:text-xl md:text-2xl">
                Hypnotic motion, infernal-futurist calm, oceanic dread wrapped
                in silk.
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <ul className="space-y-5 font-display text-[0.68rem] tracking-[0.18em] text-mist/40 sm:text-[0.7rem] sm:tracking-[0.25em]">
                <li className="flex items-start gap-4 border-b border-mist/[0.06] pb-5">
                  <span className="text-bloom/50">01</span>
                  <span>BIOLUMINESCENCE AS SIGNAL</span>
                </li>
                <li className="flex items-start gap-4 border-b border-mist/[0.06] pb-5">
                  <span className="text-bloom/50">02</span>
                  <span>VOID AS LUXURY</span>
                </li>
                <li className="flex items-start gap-4 pb-1">
                  <span className="text-bloom/50">03</span>
                  <span>IDENTITY AS TEMPERATURE</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-mist/[0.06] px-5 py-14 sm:px-10 sm:py-16 md:px-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-center sm:text-left">
          <p className="font-display text-[0.65rem] tracking-[0.3em] text-mist/35 sm:tracking-[0.4em]">
            Pablo
          </p>
          <p className="text-pretty-soft max-w-xs font-editorial text-sm italic text-mist/30 sm:max-w-none">
            Conceptual surface. No newsletter. No noise.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
