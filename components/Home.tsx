"use client";

import { useMemo, useState } from "react";
import { Filter, Response } from "~/types";
import Tabs from "~/components/Tabs";
import PostList from "./PostList";
import Grid from "./Grid";
import { useFilterContext } from "./filter";

interface HompeProps {
  data: Response;
}

const Home = ({ data: res }: HompeProps) => {
  const { filters } = useFilterContext();

  const { data: posts } = res;

  const matches = useMemo(() => {
    const filtersToApply = Object.values(filters).filter(Boolean);

    let matches = posts;

    for (let filter of filtersToApply) {
      if (filter) {
        matches = matches.filter(filter);
      }
    }

    return matches;
  }, [filters, posts]);

  return (
    <div className="w-full max-w-5xl px-6">
      <div className="hidden md:block">
        <Tabs posts={posts} />
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
