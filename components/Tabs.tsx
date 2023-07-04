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

  const tags = useMemo(() => {
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
      {
        tags.map((tag) => (
          <div key={tag} className={`items-center flex-grow  gap-2 ${tags.length > 2 ? "flex" : "hidden"}`}>
            <CheckCircle
              className={`md:hidden ${selectedCategory === tag ? "text-green-400" : "opacity-0"
                } `}
            />
            <button
              type="button"
              className={`text-2xl md:text-xl font-bold px-4 py-2 flex-grow  text-gray-800  dark:text-white rounded-lg  ${selectedCategory === tag
                ? "bg-indigo-400 focus-visible:outline-indigo-500 focus-visible:outline"
                : "focus-visible:bg-gray-400 dark:focus-visible:bg-gray-500 focus-visible:outline-gray-500 focus-visible:outline-2 dark:hover:bg-slate-800/50 hover:bg-slate-300/50"
                }`}
              onClick={() => handleCategoryChange(tag)}
            >
              {tag}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Tabs;
