"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "~/utils/Icons";
import { Switch } from "@headlessui/react";

const ToggleMode = () => {
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative flex items-center w-[26px] h-[26px]">
      <Switch
        checked={enabled}
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
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
