import React from "react";
import { Copyright } from "~/utils/Icons";
import { getYear } from "date-fns";
import ToggleMode from "./ToggleMode";
import { Baseline } from "lucide-react";

const SiteFooter = () => {
  const currentDate = new Date();
  const currentYear = getYear(currentDate);
  return (
    <footer className="flex flex-col items-center justify-between max-w-6xl py-10 mx-auto md:flex-row">
      <div className="flex flex-col items-center gap-1 md:flex-row">
        <Baseline />
        <span>{currentYear}</span>
        <Copyright />
        <p>presentado por Mindenkié. Todos los derechos reservados.</p>
      </div>

      <ToggleMode />
    </footer>
  );
};

export default SiteFooter;
