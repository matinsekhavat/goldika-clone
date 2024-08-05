import Link from "next/link";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 ">
      <div className="container-fluid flex items-center justify-between py-3  bg-slate-950">
        {/* Mobile mode */}
        <nav className="flex items-center gap-4">
          <button>
            <AlignJustify />
          </button>
          <Logo />
        </nav>
        {/* auth Badge */}
        <Link href="/auth" className="">
          <span className="text-[14px] border text-yellow-500 border-yellow-700 p-1 rounded-lg hover:bg-yellow-600/10  transition-all font-semibold">
            ورود | ثبت نام
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
