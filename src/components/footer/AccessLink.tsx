import React from "react";
import { AccessLinkProps } from "../Footer";

function AccessLink({ title, href }: AccessLinkProps) {
  return <li className="list-none">{title}</li>;
}

export default AccessLink;
