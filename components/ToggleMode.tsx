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
    <Switch
      checked={enabled}
      onChange={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex items-center justify-center p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <div className="relative md:w-[26px] md:h-[26px] w-6 h-6">
        <Sun
          mode={`transition transform absolute ${currentTheme === "light"
            ? "rotate-0 opacity-0"
            : "rotate-90 opacity-100"
            }`}
        />

        <Moon
          mode={`transition transform absolute ${currentTheme === "light"
            ? "rotate-0 opacity-100"
            : "rotate-90 opacity-0"
            }`}
        />
      </div>
    </Switch>
  );
};

export default ToggleMode;
