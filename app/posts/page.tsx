import React from "react";
import type { Metadata } from "next";
import getAllPosts from "~/lib/getAllPosts";
import { Post } from "~/types";
import PostList from "~/components/PostList";

export const metadata: Metadata = {
  title: "Blog",
};

interface PostData {
  data: Post[];
}

export default async function BlogPage() {
  const data = await getAllPosts();
  const { data: posts } = data;
  return (
    <main className="max-w-5xl px-6 py-10 mx-auto ">
      <h2 className="text-3xl font-bold uppercase lg:text-5xl font-heading">
        Todos los artículos
      </h2>
      <PostList posts={posts} />
    </main>
  );
}
