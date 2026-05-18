"use client";

import { useCallback, useState, useRef } from "react";

interface UploadZoneProps {
  onUpload: (file: File) => void;
}

export default function UploadZone({ onUpload }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file (JPG, PNG, WebP)");
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        alert("Image too large. Max 20MB.");
        return;
      }
      onUpload(file);
    },
    [onUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onClick={() => fileInputRef.current?.click()}
      className={`
        relative cursor-pointer rounded-3xl border-2 border-dashed p-12 md:p-16
        transition-all duration-500 text-center group
        ${
          isDragging
            ? "border-[var(--pigeon-iridescent)] bg-[var(--pigeon-iridescent)]/5 scale-[1.02]"
            : "border-white/10 hover:border-[var(--pigeon-steel)]/50 upload-zone-idle"
        }
      `}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-[var(--pigeon-iridescent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative space-y-6">
        <div className={`text-6xl md:text-8xl transition-transform duration-300 ${isDragging ? "scale-110" : "group-hover:scale-105"}`}>
          {isDragging ? "🐦" : "📸"}
        </div>

        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-bold text-gray-200">
            {isDragging
              ? "Drop it — let's pigeonify!"
              : "Drop your photo here"}
          </p>
          <p className="text-gray-500 text-sm">
            or click to select • JPG, PNG, WebP • Max 20MB
          </p>
        </div>

        <div className="inline-block px-6 py-3 rounded-xl font-semibold text-sm
                        bg-[var(--pigeon-iridescent)]/10 text-[var(--pigeon-iridescent)] 
                        border border-[var(--pigeon-iridescent)]/20
                        group-hover:bg-[var(--pigeon-iridescent)]/20 transition-all duration-300">
          Choose Photo
        </div>
      </div>
    </div>
  );
}
