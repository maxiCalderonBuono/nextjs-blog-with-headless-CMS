import React from "react";
import ToggleMode from "./ToggleMode";
import { Baseline } from "lucide-react";
import DateLabel from "./UI/DateLabel";



const SiteFooter = () => {


  return (
    <footer className="flex flex-col items-center justify-between w-full max-w-6xl gap-3 px-6 py-10 mx-auto md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Baseline />
        <p className="text-center"><DateLabel year>{new Date()}</DateLabel> © presentado por Mindenkié. Todos los derechos reservados.</p>
      </div>
      <ToggleMode />
    </footer>
  );
};

export default SiteFooter;
