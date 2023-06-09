import React from "react";
import { Baseline } from "lucide-react";
import Link from "next/link";
import ToggleMode from "./ToggleMode";
import SlideOver from "./SlideOver";
import NavLinks from "./NavlLinks";

import { client } from "~/lib/contentful/client";
import { Instagram } from "~/utils/Icons";

export default async function MainNavBar() {
  const response = await client.getEntries({ content_type: "blog" });

  const data = response.items;

  return (
    <nav className="px-3 py-4 shadow-lg md:px-5 dark:bg-gray-900/70">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center p-2 space-x-2 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2 dark:hover:bg-slate-800/50 hover:bg-slate-300/50">
            <Baseline />
            <span className="text-lg font-bold ">Mindenkié</span>
          </Link>

          <NavLinks />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://www.instagram.com/mindenkie/" target="_blank" title="se abre en una nueva ventana" className="flex items-center p-2 space-x-2 rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2 hover:bg-slate-300/50 dark:hover:bg-slate-800/50" aria-label="Ir al perfil de Instagram de Mindenkié">
            <Instagram />
            <span className="absolute w-[1px] h-[1px] -top-[10px] overflow-hidden">Ir al perfil de Instagram de Mindenkié</span>
          </Link>
          <ToggleMode />
          <SlideOver posts={data} />
        </div>
      </div>
    </nav>
  );
}
