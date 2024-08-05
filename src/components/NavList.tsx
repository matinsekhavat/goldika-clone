"use client";

import Link from "next/link";
import Overlay from "./Overlay";
import { Dispatch, useRef } from "react";
import useDetectOutsideClick from "../hooks/useOutsideClick";

type NavlistProps = {
  isOpen: boolean;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
};

function NavList({ isOpen = false, setIsMenuOpen }: NavlistProps) {
  const navRef = useRef<HTMLDivElement>(null);
  function closeHandler() {
    setIsMenuOpen(false);
  }
  useDetectOutsideClick(navRef, closeHandler);
  return (
    // mobile
    <>
      <Overlay show={isOpen}>
        <div
          className={`sm:hidden flex flex-col bg-dark-900 fixed top-0 bottom-0 w-56 ${
            isOpen ? "right-0" : "-right-56"
          } transition-all`}
          ref={navRef}
        >
          <ul className="p-8">
            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
            <li>
              <Link href="/faq">سوالات متدوال</Link>
            </li>
            <li>
              <Link href="/contact">ارتباط با ما</Link>
            </li>
          </ul>
        </div>
      </Overlay>

      {/* desktop */}
      <div>
        <ul className="sm:items-center sm:gap-2 hidden sm:flex">
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
          <li>
            <Link href="/faq">سوالات متدوال</Link>
          </li>
          <li>
            <Link href="/contact">ارتباط با ما</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavList;
