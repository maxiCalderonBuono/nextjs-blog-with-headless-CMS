import React from "react";
import { Copyright } from "~/utils/Icons";
import { getYear } from "date-fns";
import ToggleMode from "./ToggleMode";
import { Baseline } from "lucide-react";

const SiteFooter = () => {
  const currentDate = new Date();
  const currentYear = getYear(currentDate);
  return (
    <footer className="flex flex-col items-center justify-between max-w-6xl gap-3 px-6 py-10 mx-auto md:flex-row">
      <Baseline />

      <p className="text-center">{`${currentYear} © presentado por Mindenkié. Todos los derechos reservados.`}</p>

      <ToggleMode />
    </footer>
  );
};

export default SiteFooter;
