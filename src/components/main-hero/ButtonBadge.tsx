import React, { ReactNode } from "react";

function ButtonBadge({ children }: { children: ReactNode }) {
  return (
    <span className="p-1 rounded-xl text-nowrap text-yellow-500 border border-yellow-500 bg-yellow-500/10">
      {children}
    </span>
  );
}

export default ButtonBadge;
