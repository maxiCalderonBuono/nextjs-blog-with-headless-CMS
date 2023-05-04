import React from "react";
import { Post } from "~/types";
import { Card } from "./Card";

interface PostListProps {
  posts: Post[];
}

const Grid = ({ posts }: PostListProps) => {
  return (
    <section className="my-20">
      <h1 className="py-5 text-4xl font-extrabold lg:text-6xl">PRINCIPALES</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post, index) => (
          <Card key={post.id} attributes={post.attributes} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
