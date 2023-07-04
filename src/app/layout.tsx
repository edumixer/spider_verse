"use client"

import "./globals.scss";
import NavbarHero from "./navbarHero";

export const metadata = {
  title: 'Spider-Verse',
  description: 'Carrossel Parallax do Aranhaverso feito com React 18, Next.js 13 e Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <body>
        <NavbarHero />
        {children}
      </body>
    </html>
  );
}
