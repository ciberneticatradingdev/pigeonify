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
];

export default function LoadingAnimation() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-8 py-12">
      <div className="text-8xl md:text-9xl pigeon-bounce">🐦</div>

      <div className="relative mx-auto w-20 h-20">
        <div className="absolute inset-0 border-4 border-[var(--pigeon-steel)]/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-[var(--pigeon-iridescent)] rounded-full spin-slow" />
      </div>

      <div className="space-y-2">
        <p className="text-xl font-bold text-[var(--pigeon-iridescent)] animate-pulse">
          Pigeonifying...
        </p>
        <p className="text-gray-500 text-sm">{messages[msgIndex]}</p>
        <p className="text-gray-600 text-xs mt-4">
          This usually takes 10-30 seconds
        </p>
      </div>
    </div>
  );
}
