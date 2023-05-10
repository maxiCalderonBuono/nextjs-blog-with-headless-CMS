"use client";

import { useMemo } from "react";
import { Items } from "~/types";
import Tabs from "~/components/Tabs";
import PostList from "./PostList";
import Grid from "./Grid";
import { useFilterContext } from "./filter";

interface HompeProps {
  data: Items[];
}

const Home = ({ data }: HompeProps) => {
  const { filters } = useFilterContext();

  const matches = useMemo(() => {
    const filtersToApply = Object.values(filters).filter(Boolean);

    let matches = data;

    for (let filter of filtersToApply) {
      if (filter) {
        matches = matches.filter(filter);
      }
    }

    return matches;
  }, [filters, data]);

  return (
    <div className="w-full max-w-5xl px-6">
      <div className="hidden md:block">
        <Tabs posts={data} />
      </div>
      <Grid posts={matches} />
      <h2 className="text-3xl font-bold uppercase md:text-4xl">
        Continuar leyendo
      </h2>
      <PostList posts={matches} />
    </div>
  );
};

export default Home;
