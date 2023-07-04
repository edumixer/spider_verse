import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { spidermanFont } from "@/fonts";

export default function NavbarHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isMenuOpen ? "open" : ""}>
      <Image
        src="/icons/menu.svg"
        alt="Menu options"
        width={36}
        height={25}
        priority
        style={{ cursor: "pointer", zIndex: 10 }}
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

      {isMenuOpen && (
        <nav className="open">
          <ul>
            <li>
              <Link href="/spiderman" className={`${spidermanFont.className}`} onClick={closeMenu}>
                Spider Man
              </Link>
            </li>
            <li>
              <Link href="/deadpool" className={`${spidermanFont.className}`} onClick={closeMenu}>
                Deadpool
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}