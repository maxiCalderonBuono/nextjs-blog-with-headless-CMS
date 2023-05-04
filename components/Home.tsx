"use client";

import { useMemo, useState } from "react";
import { Filter, Response } from "~/types";
import Tabs from "~/components/Tabs";
import PostList from "./PostList";
import Grid from "./Grid";

interface HompeProps {
  data: Response;
}

const Home = ({ data: res }: HompeProps) => {
  const [filters, setFilters] = useState<Record<string, Filter>>({
    category: null,
  });

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
      <Tabs
        posts={posts}
        onChange={(filter: Filter) =>
          setFilters((filters) => ({ ...filters, category: filter }))
        }
      />
      <Grid posts={matches} />
      <h2 className="text-4xl font-bold uppercase">Continuar leyendo</h2>
      <PostList posts={matches} />
    </div>
  );
};

export default Home;
