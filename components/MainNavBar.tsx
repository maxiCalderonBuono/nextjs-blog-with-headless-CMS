import React from "react";

import { Baseline, Moon, Sun } from "lucide-react";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import Dropdown from "./Dropdown";

const MainNavBar = () => {
  return (
    <nav className="py-4 shadow-lg">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Baseline />
            <span className="text-xl font-bold ">Mindenkié</span>
          </Link>
          <Link href="/blog" className="hidden text-xl sm:inline-block">
            Blog
          </Link>
          <Link href="/blog" className="hidden text-xl sm:inline-block">
            About
          </Link>
        </div>
        <div className="flex items-center h-12">
          <ToggleMode />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
