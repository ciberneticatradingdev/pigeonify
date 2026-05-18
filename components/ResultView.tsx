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

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-black gradient-text">
          You&apos;ve Been Pigeonified! 🐦
        </h2>
        <p className="text-gray-400 mt-2">Before &amp; After</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-center text-gray-400 font-semibold text-sm uppercase tracking-wider">
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

        <div className="space-y-3">
          <p className="text-center text-[var(--pigeon-iridescent)] font-semibold text-sm uppercase tracking-wider">
            🐦 Pigeonified (superior)
          </p>
          <div className="relative aspect-square rounded-2xl overflow-hidden glass ring-2 ring-[var(--pigeon-iridescent)]/50">
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

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-[var(--pigeon-steel)] hover:bg-[var(--pigeon-iridescent)]
                     rounded-xl font-bold transition-all duration-300 hover:scale-105
                     flex items-center gap-2"
        >
          ⬇️ Download Pigeonified
        </button>
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold
                     transition-all duration-300 border border-gray-600"
        >
          🔄 Pigeonify Another
        </button>
      </div>
    </div>
  );
}
