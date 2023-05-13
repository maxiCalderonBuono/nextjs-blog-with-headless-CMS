"use client";

import { useMemo } from "react";
import { useFilterContext } from "./filter";
import { CheckCircle } from "lucide-react";
import { Items } from "~/types";

type TabsProps = {
  posts: Items[];
  onChange?: () => void;
};

const Tabs = ({ posts, onChange }: TabsProps) => {
  const { selectedCategory, setSelectedCategory, setFilters } =
    useFilterContext();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filter =
      category === "Todas"
        ? null
        : (post: Items) => post.fields.filter === category;

    setFilters({ category: filter });

    if (onChange) {
      onChange();
    }
  };

  const tabs = useMemo(() => {
    const buffer: Set<string> = new Set(["Todas"]);

    for (const post of posts) {
      buffer.add(post.fields.filter);
    }
    return Array.from(buffer);
  }, [posts]);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col items-start gap-3 mx-8 my-8 dark:shadow-xl md:flex-row">
      <p className=" opacity-80 md:hidden">¿Qué puedo leer?</p>
      {tabs.map((tab) => (
        <div key={tab} className="flex items-center flex-grow gap-2">
          <CheckCircle
            className={`md:hidden ${
              selectedCategory === tab ? "text-green-400" : "opacity-0"
            }`}
          />
          <button
            type="button"
            className={`text-2xl md:text-xl font-bold px-4 py-2 flex-grow text-gray-800 dark:text-white focus:rounded-lg focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-500 ${
              selectedCategory === tab ? "bg-indigo-400 rounded-lg" : ""
            }`}
            onClick={() => handleCategoryChange(tab)}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
