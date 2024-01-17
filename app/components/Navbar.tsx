import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Browse",
    link: "/browse",
  },
  {
    title: "My Collection",
    link: "/collection",
  },
];

export default function Navbar() {
  return (
    <div className="flex items-center h-24 bg-neutral-100">
      {/* <Link href="/">
        <Icons.logo className="translate-x-4 ml-auto cursor-pointer" />
      </Link> */}
      <ul className="flex mx-auto font-semibold gap-4 cursor-pointer">
        {links.map((link) => (
          <li className="link link-underline" key={link.title}>
            <a
              className="text-black hover:text-[#c8b806] transition-colors duration-150"
              href={link.link}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
