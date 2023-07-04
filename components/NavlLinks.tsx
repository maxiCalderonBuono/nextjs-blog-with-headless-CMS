"use client";
import { NAVLINKS } from "~/utils/consts/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = () => {
  const pathname = usePathname();

  const filteredNavLinks = NAVLINKS.filter(
    (navlink) => navlink.path !== pathname
  );

  return (
    <ul className="flex gap-3">
      {filteredNavLinks.map((navlink) => (
        <Link
          key={navlink.name}
          href={navlink.path}
          className="hidden p-2 text-lg rounded-md sm:inline-block focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2 hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
        >
          {navlink.name}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
