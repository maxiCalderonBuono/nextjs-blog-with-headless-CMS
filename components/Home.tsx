"use client";

import { useState } from "react";
import { Filter, Post, Response } from "~/types";
import Tabs from "~/components/Tabs";
import PostList from "./PostList";

interface HompeProps {
  data: Response;
}

const Home = ({ data: res }: HompeProps) => {
  const [filters, setFilters] = useState<Record<string, Filter>>({
    category: null,
  });

  const { data: posts } = res;

  return (
    <div className="w-full max-w-4xl ">
      {/* <Tabs
        posts={posts}
        onChange={(filter: Filter) =>
          setFilters((filters) => ({ ...filters, category: filter }))
        }
      /> */}
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
