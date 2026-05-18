"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ContractAddress from "@/components/ContractAddress";
import Gallery from "@/components/Gallery";
import UploadZone from "@/components/UploadZone";
import ResultView from "@/components/ResultView";
import LoadingAnimation from "@/components/LoadingAnimation";
import HowItWorks from "@/components/HowItWorks";
import TwitterCTA from "@/components/TwitterCTA";

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [pigeonifiedImage, setPigeonifiedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    setError(null);
    setIsLoading(true);
    setPigeonifiedImage(null);

    const reader = new FileReader();
    reader.onload = (e) => setOriginalImage(e.target?.result as string);
    reader.readAsDataURL(file);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/transform", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Pigeonification failed!");
      }

      const data = await response.json();
      setPigeonifiedImage(data.image);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. The pigeon gods are displeased."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setPigeonifiedImage(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen relative">
      <div className="bg-blobs" />
      <div className="noise" />

      <div className="relative z-10">
        <Hero />
        <ContractAddress />

        <section id="upload" className="max-w-4xl mx-auto px-4 py-16">
          {!originalImage && !isLoading && (
            <UploadZone onUpload={handleUpload} />
          )}

          {isLoading && <LoadingAnimation />}

          {error && (
            <div className="text-center space-y-4 fade-in-up">
              <div className="glass-strong rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-red-400 text-lg">⚠️ {error}</p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 btn-primary rounded-xl font-semibold relative z-10"
              >
                <span className="relative z-10">Try Again</span>
              </button>
            </div>
          )}

          {pigeonifiedImage && originalImage && (
            <ResultView
              original={originalImage}
              pigeonified={pigeonifiedImage}
              onReset={handleReset}
            />
          )}
        </section>

        <HowItWorks />
        <TwitterCTA />
        <Gallery />

        <footer className="text-center py-10 text-gray-600 text-sm border-t border-white/5">
          <p className="text-gray-400">
            PIGEONIFY 🐦 — No pigeons were harmed in the making of this app
          </p>
          <p className="mt-1">Powered by AI & questionable life choices</p>
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-600">
            <a
              href="https://x.com/PigeonifyOG"
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--pigeon-iridescent)] transition-colors"
            >
              𝕏 @PigeonifyOG
            </a>
            <a
              href="https://pump.fun/coin/FEc5dkHy8zD8YD3Y9NpPmyvAEZY4AkxgpeH6K2LVpump"
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--pigeon-gold)] transition-colors"
            >
              pump.fun
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
