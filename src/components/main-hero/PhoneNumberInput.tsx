"use client";

import { ArrowLeft, ChevronLeft } from "lucide-react";
import { useState } from "react";

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return (
    <div className="flex items-center h-14 border border-stone-400 rounded-xl p-2 gap-2 ">
      <input
        type="number"
        className="border-none outline-none flex-1 h-full bg-transparent text-stone-300 "
        placeholder="شماره تلفن همراه خود را وارد کنید "
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <button className="w-20 justify-evenly flex items-center  bg-tr bg-yellow-600 rounded-xl text-black h-full text-[14px]">
        شروع <ChevronLeft size={18} />
      </button>
    </div>
  );
}

export default PhoneNumberInput;
