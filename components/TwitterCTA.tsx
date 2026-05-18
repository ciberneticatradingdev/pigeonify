export default function TwitterCTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="glass-strong rounded-3xl overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[var(--pigeon-iridescent)]/10 rounded-full blur-[100px]" />

        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          {/* Left — Bot explanation */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--pigeon-iridescent)]/10 border border-[var(--pigeon-iridescent)]/20 text-xs font-bold text-[var(--pigeon-iridescent)] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live on X
            </div>
            <h2 className="text-2xl md:text-3xl font-black">
              Pigeonify on 𝕏 too
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Don&apos;t want to leave X? Just tweet any photo and tag{" "}
              <a
                href="https://x.com/PigeonifyOG"
                target="_blank"
                rel="noopener"
                className="text-[var(--pigeon-iridescent)] font-bold hover:underline"
              >
                @PigeonifyOG
              </a>
              . Our bot will automatically reply with the pigeonified version. Free. 24/7. No mercy.
            </p>
            <a
              href="https://x.com/PigeonifyOG"
              target="_blank"
              rel="noopener"
              className="btn-primary inline-block px-8 py-3.5 rounded-xl font-bold"
            >
              <span className="relative z-10">Follow @PigeonifyOG</span>
            </a>
          </div>

          {/* Right — How it works on X */}
          <div className="space-y-4">
            <div className="glass rounded-xl p-4 flex items-start gap-3 hover:border-[var(--pigeon-iridescent)]/20 transition-colors">
              <span className="text-2xl shrink-0">1️⃣</span>
              <div>
                <p className="font-bold text-sm">Tweet a photo</p>
                <p className="text-gray-500 text-xs">Any photo with a person — selfie, meme, whatever</p>
              </div>
            </div>
            <div className="glass rounded-xl p-4 flex items-start gap-3 hover:border-[var(--pigeon-iridescent)]/20 transition-colors">
              <span className="text-2xl shrink-0">2️⃣</span>
              <div>
                <p className="font-bold text-sm">Tag @PigeonifyOG</p>
                <p className="text-gray-500 text-xs">Mention us in the tweet with the photo</p>
              </div>
            </div>
            <div className="glass rounded-xl p-4 flex items-start gap-3 hover:border-[var(--pigeon-iridescent)]/20 transition-colors">
              <span className="text-2xl shrink-0">3️⃣</span>
              <div>
                <p className="font-bold text-sm">Get pigeonified 🐦</p>
                <p className="text-gray-500 text-xs">Bot replies with your pigeon version in ~30 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
