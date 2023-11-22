import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Movies",
    link: "/movies",
  },
  {
    title: "TV Shows",
    link: "/tv",
  },
];

export default function Navbar() {
  return (
    <div className="flex items-center py-6 bg-slate-900">
      <Link href="/">
        <Icons.logo className="translate-x-4 ml-auto cursor-pointer" />
      </Link>
      <ul className="flex mx-auto text-amber-100 gap-4 cursor-pointer">
        {links.map((link) => (
          <li className="link link-underline" key={link.title}>
            <a className="hover:text-white" href={link.link}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
