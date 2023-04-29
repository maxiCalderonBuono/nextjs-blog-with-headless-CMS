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
    <main className="max-w-5xl py-10 mx-auto">
      <PostList posts={posts} />
    </main>
  );
}
