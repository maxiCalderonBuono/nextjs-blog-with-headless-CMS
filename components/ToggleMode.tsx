"use client";
import { useState, Fragment } from "react";
import { Moon, Sun } from "~/utils/Icons";
import { Switch } from "@headlessui/react";

const ToggleMode = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex items-center w-[26px] h-[26px]">
      <Switch checked={enabled} onChange={setEnabled}>
        <Sun
          mode={`transition transform absolute top-0 left-0 ${
            enabled ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        />

        <Moon
          mode={`transition transform absolute top-0 left-0 ${
            enabled ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
      </Switch>
    </div>
  );
};

export default ToggleMode;
