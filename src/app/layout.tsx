import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RIHAN SHAIKH | Software · Game · Android Developer",
  description:
    "Software Engineer, Unity Game Developer, and Android Developer. Building immersive 3D experiences and optimized mobile apps.",
  keywords: ["Software Engineer", "Game Developer", "Android Developer", "Unity", "React", "Portfolio"],
  authors: [{ name: "RIHAN SHAIKH" }],
  openGraph: {
    title: "RIHAN SHAIKH | Developer Portfolio",
    description: "Software Engineer, Game Developer, and Android Developer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIHAN SHAIKH | Developer Portfolio",
    description: "Software Engineer, Game Developer, and Android Developer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
