export default function TwitterCTA() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[var(--pigeon-iridescent)]/10 rounded-full blur-[80px]" />

        <div className="relative space-y-6">
          <div className="text-5xl">🐦</div>
          <h2 className="text-2xl md:text-3xl font-black">
            Too lazy to upload?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Just tag{" "}
            <span className="text-[var(--pigeon-iridescent)] font-bold">
              @PigeonifyOG
            </span>{" "}
            on X with any photo and our bot will pigeonify it automatically.
            Free. 24/7. No mercy.
          </p>
          <a
            href="https://x.com/PigeonifyOG"
            target="_blank"
            rel="noopener"
            className="btn-primary inline-block px-10 py-4 rounded-2xl text-lg font-bold"
          >
            <span className="relative z-10">Follow @PigeonifyOG on 𝕏</span>
          </a>
        </div>
      </div>
    </section>
  );
}
