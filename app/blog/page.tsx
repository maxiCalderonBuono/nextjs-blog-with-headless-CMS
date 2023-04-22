import React from "react";
import type { Metadata } from "next";
import getAllPosts from "~/lib/getAllPosts";
import { Post } from "~/types";
import Article from "~/components/Article";
import Link from "next/link";

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
    <main className="max-w-5xl py-10 mx-auto">
      <ul>
        {posts.map((post) => (
          <Link href="blog/posts/3" key={post.id}>
            <Article attributes={post.attributes} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
