import Image from "next/image";
import { ReactNode } from "react";

interface GovCertificateProps {
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
  children: ReactNode;
}

function GovCertificate({
  width = 100,
  height = 100,
  alt = "test",
  src = "/samandehi.png",
  children,
}: GovCertificateProps) {
  return (
    <div className="bg-stone-300 rounded-2xl flex flex-col items-center p-2 min-h-[150px]">
      <div className="w-24 h-24 relative">
        <Image fill alt={alt} src={src} className=" object-contain " />
      </div>
      <p className="text-center text-black text-xs mt-2">{children}</p>
    </div>
  );
}

export default GovCertificate;
