"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Filter } from "~/types";

interface FilterContextData {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filters: Record<string, Filter>;
  setFilters: (filter: Record<string, Filter>) => void;
}

const initialFilterContextData: FilterContextData = {
  selectedCategory: "Todas",
  setSelectedCategory: () => {},
  filters: { category: null },
  setFilters: () => {},
};

const FilterContext = createContext<FilterContextData>(
  initialFilterContextData
);

export const useFilterContext = () => useContext(FilterContext);

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const [filters, setFilters] = useState<Record<string, Filter>>({
    category: null,
  });

  const contextValue: FilterContextData = {
    selectedCategory,
    setSelectedCategory,
    filters,
    setFilters,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
