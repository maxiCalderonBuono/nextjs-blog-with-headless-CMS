import React from "react";
import type { Metadata } from "next";
import getAllPosts from "~/lib/getAllPosts";
import { Post } from "~/types";
import PostList from "~/components/PostList";
import { client } from "~/lib/contentful/client";

export const metadata: Metadata = {
  title: "Blog",
};

// interface PostData {
//   data: Post[];
// }

const BlogPage = async () => {
  const response = await client.getEntries({ content_type: "blog" });

  const data = response.items;

  return (
    <main className="max-w-5xl px-6 py-10 mx-auto ">
      <h2 className="text-3xl font-bold uppercase lg:text-5xl font-heading">
        Todos los artículos
      </h2>
      <PostList posts={data} />
    </main>
  );
};

export default BlogPage;
