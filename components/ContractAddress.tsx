"use client";

import { useState } from "react";

const CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
  "FEc5dkHy8zD8YD3Y9NpPmyvAEZY4AkxgpeH6K2LVpump";

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONTRACT_ADDRESS;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-4">
      <div
        onClick={handleCopy}
        className="glass-strong rounded-2xl p-4 cursor-pointer group glow-pulse
                   hover:border-[var(--pigeon-iridescent)]/40 transition-all duration-300
                   hover:scale-[1.01] active:scale-[0.99]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[var(--pigeon-iridescent)]/10 flex items-center justify-center shrink-0">
              <span className="text-xl">🐦</span>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[var(--pigeon-gold)] uppercase tracking-[0.2em] font-bold mb-0.5">
                $PIGEONIFY — Contract Address
              </p>
              <p className="text-sm font-mono text-[var(--pigeon-iridescent)] truncate">
                {CONTRACT_ADDRESS}
              </p>
            </div>
          </div>

          <button
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300
              ${
                copied
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-white/5 text-gray-400 border border-white/10 group-hover:text-[var(--pigeon-iridescent)] group-hover:border-[var(--pigeon-iridescent)]/30"
              }`}
          >
            {copied ? "✓ Copied!" : "Copy CA"}
          </button>
        </div>
      </div>
    </section>
  );
}
