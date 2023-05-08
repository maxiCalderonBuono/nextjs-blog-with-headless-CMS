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
          className="hidden text-lg sm:inline-block"
        >
          {navlink.name}
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;