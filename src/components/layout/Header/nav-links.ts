import { Url } from "next/dist/shared/lib/router/router";
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";
import React from "react";

type NavLink = {
  url: Url;
  name: String;
  linkIcon?: any;
};

export const navLinks: NavLink[] = [
  { url: "/projects", name: "Projects", linkIcon: CodeIcon },
  { url: "/contact", name: "Contact", linkIcon: MailIcon },
];
