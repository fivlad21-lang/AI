import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🎂 Pokémon CEO Birthday Quest",
  description:
    "Интерактивная открытка в стиле Game Boy — команда покемонов поздравляет CEO Пикачу с Днём Рождения",
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
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
