"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { spidermanFont } from "@/fonts";

import "./globals.scss";

export const metadata = {
  title: 'Spider-Verse',
  description: 'Carrossel Parallax do Aranhaverso feito com React 18, Next.js 13 e Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <html lang="pt-BR">
      <body>
        <header className={isMenuOpen ? 'open' : ''}>
          <Image
            src="/icons/menu.svg"
            alt="Menu options"
            width={36}
            height={25}
            priority
            style={{cursor: 'pointer'}}
            onClick={toggleMenu}
          />
          <Link href="/">
            <Image
              src="/avengers-logo.svg"
              alt="Heroes"
              width={360}
              height={140}
              priority
            />
          </Link>
          <Image
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36}            
            priority
          />
        </header>

        {isMenuOpen && (
          <nav className="open">
            <ul>
              <li>
                <Link href="/spiderman" className={`${spidermanFont.className}`}>Spider Man</Link>
              </li>
              <li>
                <Link href="/deadpool" className={`${spidermanFont.className}`}>Deadpool</Link>
              </li>

            </ul>
          </nav>
          )}

        {children}
      </body>
    </html>
  );
}
