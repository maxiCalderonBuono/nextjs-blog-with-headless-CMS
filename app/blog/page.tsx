import React from "react";
import type { Metadata } from "next";
import getAllPosts from "~/lib/getAllPosts";
import { Post } from "~/types";
import Article from "~/components/article";

export const metadata: Metadata = {
  title: "Blog",
};

interface PostData {
  data: Post[];
}

export default async function BlogPage() {
  const postsData: PostData = await getAllPosts();

  const posts = postsData.data;

  return (
    <main>
      <h2>Blog</h2>

      <ul>
        {posts.map((post) => (
          <Article key={post.id} attributes={post.attributes} />
        ))}
      </ul>
    </main>
  );
}
