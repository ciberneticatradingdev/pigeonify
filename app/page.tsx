"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ContractAddress from "@/components/ContractAddress";
import Gallery from "@/components/Gallery";
import UploadZone from "@/components/UploadZone";
import ResultView from "@/components/ResultView";
import LoadingAnimation from "@/components/LoadingAnimation";

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
    <main className="min-h-screen">
      <Hero />
      <ContractAddress />

      <section id="upload" className="max-w-4xl mx-auto px-4 py-16">
        {!originalImage && !isLoading && <UploadZone onUpload={handleUpload} />}

        {isLoading && <LoadingAnimation />}

        {error && (
          <div className="text-center space-y-4">
            <div className="glass rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-red-400 text-lg">⚠️ {error}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[var(--pigeon-steel)] hover:bg-[var(--pigeon-iridescent)] rounded-xl transition-colors font-semibold"
            >
              Try Again
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

      <Gallery />

      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-800">
        <p>PIGEONIFY 🐦 — No pigeons were harmed in the making of this app</p>
        <p className="mt-1">Powered by AI & questionable life choices</p>
      </footer>
    </main>
  );
}
