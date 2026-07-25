import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎂 Pokémon BOSS Birthday Quest",
  description:
    "Интерактивная открытка в стиле Pokémon — команда поздравляет BOSS Пикачу с Днём Рождения",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
        {/* VT323 for readable RU dialogue; Press Start for labels */}
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
