"use client";

import useDetectOutsideClick from "@/src/hooks/useOutsideClick";
import Modal from "../Modal";
import Overlay from "../Overlay";
import { useState, useRef, forwardRef } from "react";

function TransactionFees() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  function openModalHandler() {
    setIsModalOpen(true);
  }
  function closeModalHandler() {
    setIsModalOpen(false);
  }

  useDetectOutsideClick(modalRef, closeModalHandler);

  return (
    <div className="flex justify-end items-center">
      <button
        className="text-left mt-4 text-yellow-600 font-semibold  hover:bg-yellow-600/30 rounded-md p-2"
        onClick={openModalHandler}
      >
        کارمزد معاملات؟
      </button>
      <Overlay show={isModalOpen}>
        <Modal ref={modalRef} isOpen={isModalOpen}>
          <div className="bg-slate-500">
            نحوه محاسبه‌ی کارمزد در گلدیکا کارمزد معاملات اکثر اوقات حدوداً ۱٪
            در سمت خرید و ۱٪ در سمت فروش است که با توجه به مزایای گلدیکا از جمله
            امکان معامله خرد، امکان معامله آنلاین در هر ساعتی از شبانه روز حتی
            ایام تعطیل، قانونی بودن معاملات و ارائه فاکتور رسمی، طوری تنظیم شده
            است که علاوه بر پوشش ریسک نوسانات قیمت طلا برای کاربران نیز به صرفه
            باشد. - این کارمزد در ایام پر نوسان و ایام تعطیلی بازار ممکن است با
            اندکی افزایش همراه باشد.
          </div>
        </Modal>
      </Overlay>
    </div>
  );
}

export default TransactionFees;
