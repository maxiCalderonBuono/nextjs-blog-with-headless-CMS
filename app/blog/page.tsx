import React from "react";
import type { Metadata } from "next";
import PostList from "~/components/PostList";
import { client } from "~/lib/contentful/client";

export const metadata: Metadata = {
  title: "Blog",
};


const BlogPage = async () => {
  const response = await client.getEntries({ content_type: "blog" });

  const data = response.items;

  const sortedPosts = [...data].sort((a, b) => Number(new Date(b.sys.createdAt)) - Number(new Date(a.sys.createdAt)));

  return (
    <main className="max-w-6xl px-6 py-10 mx-auto ">
      <h2 className="text-3xl text-center uppercase font-heading lg:text-5xl md:text-left whitespace-nowrap">
        Todos los artículos
      </h2>
      <PostList posts={sortedPosts} />
    </main>
  );
};

export default BlogPage;
