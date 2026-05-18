"use client";

import { useEffect, useState } from "react";

const messages = [
  "Growing feathers...",
  "Shaping the beak...",
  "Fluffing plumage...",
  "Channeling inner pigeon...",
  "Cooing intensifies...",
  "Practicing head bobbing...",
  "Scoping out breadcrumbs...",
  "Adjusting neck shimmer...",
];

export default function LoadingAnimation() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 8, 90));
    }, 1000);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="text-center space-y-8 py-12 fade-in-up">
      <div className="text-7xl md:text-8xl pigeon-bounce">🐦</div>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto">
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--pigeon-steel)] to-[var(--pigeon-iridescent)] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xl font-bold text-[var(--pigeon-iridescent)] animate-pulse">
          Pigeonifying...
        </p>
        <p className="text-gray-500 text-sm h-5 transition-all duration-300">
          {messages[msgIndex]}
        </p>
        <p className="text-gray-600 text-xs mt-4">
          Usually takes 15-30 seconds
        </p>
      </div>
    </div>
  );
}
