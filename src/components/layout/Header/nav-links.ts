import { Url } from "next/dist/shared/lib/router/router";

type NavLink = {
  url: Url;
  name: String;
};

export const navLinks: NavLink[] = [
  { url: "/projects", name: "Projects" },
  { url: "/contact", name: "Contact" },
  { url: "/resume", name: "Resume" },
];
