import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIGEONIFY 🐦 | Transform Anyone Into a Pigeon",
  description:
    "Upload any photo and watch AI transform it into a glorious pigeon. The internet's #1 pigeonification tool. Coo coo.",
  metadataBase: new URL("https://pigeonify.vercel.app"),
  openGraph: {
    title: "PIGEONIFY 🐦 — Get Pigeonified",
    description: "Upload your photo. Become pigeon. No questions asked.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIGEONIFY 🐦",
    description: "Upload your photo. Become pigeon.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
