import React from "react";
import { Baseline } from "lucide-react";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import SlideOver from "./SlideOver";
import getAllPosts from "~/lib/getAllPosts";
import NavLinks from "./NavlLinks";

import { client } from "~/lib/contentful/client";

export default async function MainNavBar() {
  const response = await client.getEntries({ content_type: "blog" });

  const data = response.items;

  return (
    <nav className="px-3 py-4 shadow-lg md:px-5 dark:bg-gray-900/70">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center p-2 space-x-2 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2">
            <Baseline />
            <span className="text-lg font-bold ">Mindenkié</span>
          </Link>

          <NavLinks />
        </div>
        <div className="flex items-center gap-3">
          <ToggleMode />
          <SlideOver posts={data} />
        </div>
      </div>
    </nav>
  );
}
