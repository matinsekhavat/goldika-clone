import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "@/public/fonts/vazirLocalFont/font";

export const metadata: Metadata = {
  title: "گلدیکا",
  description: "خرید طلای آب شده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`font-vazir  bg-dark-900 text-stone-100 ${Vazirmatn.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
