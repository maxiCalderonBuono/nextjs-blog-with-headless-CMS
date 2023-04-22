import React from "react";

import { Baseline } from "lucide-react";
import Link from "next/link";

const MainNavBar = () => {
  return (
    <nav className="py-4 shadow-lg">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="items-center hidden space-x-2 md:flex">
            <Baseline />
            <span className="hidden text-xl font-bold sm:inline-block">
              Mi Blog
            </span>
          </Link>
          <Link href="/blog" className="text-xl">
            Blog
          </Link>
        </div>
        <button
          type="button"
          className="px-4 py-2 font-bold text-white bg-black rounded-lg"
        >
          Conversemos
        </button>
      </div>
    </nav>
  );
};

export default MainNavBar;
