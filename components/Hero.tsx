import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4">
      {/* Top gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--pigeon-iridescent)]/10 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Hero image */}
        <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 float">
          <Image
            src="/hero.png"
            alt="Pigeonify mascot"
            fill
            className="object-contain drop-shadow-[0_0_40px_rgba(155,126,189,0.3)]"
            priority
          />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter gradient-text leading-none">
            PIGEONIFY
          </h1>
          <p className="text-sm md:text-base font-mono text-[var(--pigeon-steel)] tracking-[0.3em] uppercase">
            The OG Pigeon Transformation
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Upload your photo. Get{" "}
          <span className="text-[var(--pigeon-iridescent)] font-bold">
            pigeonified
          </span>
          .
          <br />
          <span className="text-gray-500 text-base">
            AI-powered human-to-pigeon transformation — no one is safe
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#upload"
            className="btn-primary px-10 py-4 rounded-2xl text-lg font-bold"
          >
            <span className="relative z-10">🐦 Pigeonify Me</span>
          </a>
          <a
            href="https://x.com/PigeonifyOG"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 rounded-2xl text-lg font-bold border border-white/10 
                       hover:border-[var(--pigeon-iridescent)]/40 hover:bg-white/5
                       transition-all duration-300"
          >
            𝕏 Follow @PigeonifyOG
          </a>
        </div>

        {/* Fun stats */}
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-gray-500 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Bot Active
          </span>
          <span>•</span>
          <span>100% Pigeon Guarantee</span>
          <span>•</span>
          <span>No Humans Spared</span>
          <span>•</span>
          <span>Coo Approved</span>
        </div>
      </div>
    </section>
  );
}
