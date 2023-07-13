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

    for (const filter of filtersToApply) {
      if (filter) {
        matches = matches.filter(filter);
      }
    }

    const sortedPosts = [...matches].sort((a, b) => Number(new Date(b.sys.createdAt)) - Number(new Date(a.sys.createdAt)));

    return sortedPosts;
  }, [filters, data]);

  return (
    <div className="flex flex-col w-full max-w-5xl px-6">
      <div className="hidden md:block">
        <Tabs posts={data} />
      </div>
      <Grid posts={matches.slice(0,4)} />
      <h2 className="text-3xl font-bold uppercase md:text-4xl">
        Recientes
      </h2>
      <PostList posts={matches} navigation={true} />
    </div>
  )
};

export default Home;
