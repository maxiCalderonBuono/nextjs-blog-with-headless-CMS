"use client";

import { useMemo } from "react";
import { Filter, Items } from "~/types";
import { useFilterContext } from "./filter";

type Props = {
  posts: Items[];
  onChange: (filter: Filter) => void;
};

const TabsMobile: React.FC<Props> = ({ posts, onChange }) => {
  const { selectedCategory, setSelectedCategory, setFilters } =
    useFilterContext();

  const tabs = useMemo(() => {
    const buffer: Set<string> = new Set(["Todas"]);

    for (const post of posts) {
      buffer.add(post.fields.filter);
    }
    return Array.from(buffer);
  }, [posts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filter =
      category === "Todas"
        ? null
        : (post: Items) => post.fields.filter === category;

    setFilters({ category: filter });
  };

  function handleOnChange(index: number) { }

  return (
    <div className="flex flex-col items-start gap-3 mx-8 my-8 shadow-xl sm:px-0">
      <p className="opacity-80">¿Qué puedo leer?</p>
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab}
          className={`text-2xl font-bold px-4 py-2 ${selectedCategory === tab ? "bg-gray-700 rounded-lg" : ""
            }`}
          onClick={() => handleCategoryChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsMobile;
