import { Url } from "next/dist/shared/lib/router/router";

type NavLink = {
  url: Url;
  name: String;
};

export const navLinks: NavLink[] = [
  { url: "/apps", name: "Apps" },
  { url: "/contact", name: "Contact" },
  { url: "/resume", name: "Resume" },
];
