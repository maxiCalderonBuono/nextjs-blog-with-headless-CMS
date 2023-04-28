"use client";

import { useState } from "react";
import { Filter, Post, Response } from "~/types";
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

  return (
    <div className="w-full max-w-5xl ">
      <Tabs
        posts={posts}
        onChange={(filter: Filter) =>
          setFilters((filters) => ({ ...filters, category: filter }))
        }
      />
      <Grid posts={posts} />
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
