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
    <nav className="px-5 py-4 shadow-lg dark:bg-gray-900/70">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Baseline />
            <span className="text-lg font-bold">Mindenkié</span>
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
