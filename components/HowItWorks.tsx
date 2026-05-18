const steps = [
  {
    emoji: "📸",
    title: "Upload a Photo",
    desc: "Any photo with a person. Selfie, group pic, your boss — no one is safe.",
  },
  {
    emoji: "🤖",
    title: "AI Does Its Thing",
    desc: "Our pigeon AI analyzes the photo and transforms the subject into a glorious pigeon.",
  },
  {
    emoji: "🐦",
    title: "Get Pigeonified",
    desc: "Download your masterpiece and share it with the world. You're welcome.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black gradient-text mb-3">
          How It Works
        </h2>
        <p className="text-gray-500">Three steps to pigeon perfection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-8 text-center group hover:border-[var(--pigeon-iridescent)]/30
                       hover:bg-[var(--pigeon-iridescent)]/5 transition-all duration-300"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {step.emoji}
            </div>
            <div className="text-xs text-[var(--pigeon-steel)] font-mono mb-2">
              STEP {i + 1}
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
