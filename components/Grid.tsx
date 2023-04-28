import React from "react";
import { Post } from "~/types";
import { Card } from "./Card";

interface PostListProps {
  posts: Post[];
}

const Grid = ({ posts }: PostListProps) => {
  return (
    <section className="py-4">
      <h1 className="py-5 text-6xl font-extrabold">PRINCIPALES</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.id} attributes={post.attributes} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
