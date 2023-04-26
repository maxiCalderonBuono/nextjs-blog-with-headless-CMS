import React from "react";
import { Baseline } from "lucide-react";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import Dropdown from "./Dropdown";

const MainNavBar = () => {
  return (
    <nav className="px-5 py-4 shadow-lg">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Baseline />
            <span className="text-lg font-bold ">Mindenkié</span>
          </Link>
          <Link href="/blog" className="hidden text-lg sm:inline-block">
            Blog
          </Link>
          <Link href="/about" className="hidden text-lg sm:inline-block">
            About
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ToggleMode />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
