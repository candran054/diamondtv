import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "../lib/auth";

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

export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <div className="flex w-full justify-center px-2 h-24 bg-neutral-100">
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <Icons.logo className="translate-x-4 ml-auto cursor-pointer" />
        </Link>
        <ul className="flex font-semibold gap-4 cursor-pointer">
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
        {session?.user ? (
          <p>{session?.user?.name}</p>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
