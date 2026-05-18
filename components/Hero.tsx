export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Responsive background images */}
      <picture className="absolute inset-0">
        <source media="(max-width: 640px)" srcSet="/hero-mobile.png" />
        <source media="(max-width: 1024px)" srcSet="/hero-tablet.png" />
        <img
          src="/hero-desktop.png"
          alt="Pigeonify hero"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Dark overlay gradient — heavier at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/30 via-transparent to-transparent" />

      {/* Content pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 pb-12 md:pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter gradient-text leading-none drop-shadow-lg">
            PIGEONIFY
          </h1>
          <p className="text-xs md:text-sm font-mono text-[var(--pigeon-steel)] tracking-[0.3em] uppercase">
            The OG Pigeon Transformation
          </p>

          {/* Tagline */}
          <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Upload your photo. Get{" "}
            <span className="text-[var(--pigeon-iridescent)] font-bold">
              pigeonified
            </span>
            .
            <br />
            <span className="text-gray-400 text-sm">
              AI-powered human-to-pigeon transformation — no one is safe
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#upload"
              className="btn-primary px-10 py-4 rounded-2xl text-lg font-bold w-full sm:w-auto"
            >
              <span className="relative z-10">🐦 Pigeonify Me</span>
            </a>
            <a
              href="https://x.com/PigeonifyOG"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 rounded-2xl text-lg font-bold border border-white/15
                         hover:border-[var(--pigeon-iridescent)]/40 hover:bg-white/10
                         backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              𝕏 Follow @PigeonifyOG
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-1 text-gray-400 text-xs md:text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Bot Active
            </span>
            <span className="hidden sm:inline">•</span>
            <span>100% Pigeon Guarantee</span>
            <span className="hidden sm:inline">•</span>
            <span>Coo Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
