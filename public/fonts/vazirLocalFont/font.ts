import localFont from "next/font/local";

export const Vazirmatn = localFont({
  src: [
    {
      path: "./../webfonts/Vazirmatn-Thin.woff2",
      weight: "100",
    },
    {
      path: "./../webfonts/Vazirmatn-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "./../webfonts/Vazirmatn-Light.woff2",
      weight: "300",
    },
    {
      path: "./../webfonts/Vazirmatn-Regular.woff2",
      weight: "400",
    },
    {
      path: "./../webfonts/Vazirmatn-Medium.woff2",
      weight: "500",
    },
    {
      path: "./../webfonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./../webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
    },
    {
      path: "./../webfonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./../webfonts/Vazirmatn-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-vazir",
});
