export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--pigeon-dark)] via-transparent to-transparent opacity-60" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter gradient-text">
            PIGEONIFY
          </h1>
          <div className="text-5xl md:text-7xl">🐦</div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Upload your photo. Get{" "}
          <span className="text-[var(--pigeon-iridescent)] font-bold">
            pigeonified
          </span>
          .
          <br />
          <span className="text-gray-500 text-lg">
            AI-powered human-to-pigeon transformation
          </span>
        </p>

        <a
          href="#upload"
          className="inline-block px-8 py-4 bg-[var(--pigeon-steel)] hover:bg-[var(--pigeon-iridescent)]
                     rounded-2xl text-lg font-bold transition-all duration-300
                     hover:scale-105 hover:shadow-lg hover:shadow-[var(--pigeon-iridescent)]/30"
        >
          🐦 Pigeonify Me
        </a>

        <div className="flex justify-center gap-8 pt-4 text-gray-500 text-sm">
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
