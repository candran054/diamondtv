import React from "react";

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
    <div className="py-6 bg-slate-900">
      <ul className="flex text-amber-100 justify-center gap-4 cursor-pointer">
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
