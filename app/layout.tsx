import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIGEONIFY 🐦 | Transform Yourself Into a Pigeon",
  description:
    "Upload your photo and let AI transform you into a magnificent pigeon. The internet's favorite pigeonification tool.",
  openGraph: {
    title: "PIGEONIFY 🐦",
    description: "Transform yourself into a pigeon with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
