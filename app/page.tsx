"use client";

import { useState } from "react";

import Tabs from "~/components/Tabs";
import useSWR, { Fetcher } from "swr";
import { Filter, Post } from "~/types";
import getAllPosts from "~/lib/getAllPosts";
import PostList from "~/components/PostList";

const Home = () => {
  const [filters, setFilters] = useState<Record<string, Filter>>({
    category: null,
  });

  const {
    data: res,
    error,
    isLoading,
  } = useSWR("http://127.0.0.1:1337/api/blogs?populate=deep", getAllPosts);

  if (isLoading) {
    return;
  }

  const { data: posts } = res;

  console.log(res);

  return (
    <main className="flex flex-col max-w-5xl items-center mx-auto min-h-[calc(100vh-108px)] justify-evenly">
      <Tabs
        posts={posts}
        onChange={(filter: Filter) =>
          setFilters((filters) => ({ ...filters, category: filter }))
        }
      />
      <PostList posts={posts} />
    </main>
  );
};

export default Home;
