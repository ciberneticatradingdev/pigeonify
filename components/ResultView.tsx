"use client";

import Image from "next/image";

interface ResultViewProps {
  original: string;
  pigeonified: string;
  onReset: () => void;
}

export default function ResultView({
  original,
  pigeonified,
  onReset,
}: ResultViewProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pigeonified;
    link.download = "pigeonified.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const text = encodeURIComponent(
      "I just got pigeonified 🐦 Check it out at pigeonify.vercel.app\n\n@PigeonifyOG"
    );
    window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-8 fade-in-up">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-black gradient-text">
          You&apos;ve Been Pigeonified!
        </h2>
        <p className="text-gray-500 mt-2 text-sm">Before → After</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Original */}
        <div className="space-y-3">
          <p className="text-center text-gray-500 font-semibold text-xs uppercase tracking-[0.2em]">
            👤 Human (boring)
          </p>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass">
            <Image
              src={original}
              alt="Original photo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Pigeonified */}
        <div className="space-y-3">
          <p className="text-center text-[var(--pigeon-iridescent)] font-semibold text-xs uppercase tracking-[0.2em]">
            🐦 Pigeonified (superior)
          </p>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass-strong ring-2 ring-[var(--pigeon-iridescent)]/30 glow-pulse">
            <Image
              src={pigeonified}
              alt="Pigeonified result"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={handleDownload}
          className="btn-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2"
        >
          <span className="relative z-10">⬇️ Download</span>
        </button>
        <button
          onClick={handleShare}
          className="px-8 py-3 rounded-xl font-bold border border-white/10
                     hover:border-[var(--pigeon-iridescent)]/40 hover:bg-white/5
                     transition-all duration-300 flex items-center gap-2"
        >
          𝕏 Share on X
        </button>
        <button
          onClick={onReset}
          className="px-8 py-3 rounded-xl font-bold border border-white/10
                     hover:border-white/20 hover:bg-white/5
                     transition-all duration-300"
        >
          🔄 Another
        </button>
      </div>
    </div>
  );
}
