"use client";

import { useState } from "react";
import Logo from "./Logo";
import dynamic from "next/dynamic";
import { AlignJustify } from "lucide-react";
const Navlist = dynamic(() => import("@/src/components/NavList"), {
  ssr: true,
});

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <nav className="flex items-center gap-4">
      {/* mobile design */}

      <button
        className="sm:hidden p-2  rounded-xl"
        onClick={() => setIsMenuOpen(true)}
      >
        <AlignJustify />
      </button>
      <Logo />

      {/* SHOW ONLY IN MOBILE */}
      <Navlist isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
}

export default NavBar;
