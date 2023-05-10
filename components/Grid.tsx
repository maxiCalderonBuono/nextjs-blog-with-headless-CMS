import React from "react";
import { Items } from "~/types";
import { Card } from "./Card";
import PostList from "./PostList";

interface PostListProps {
  posts: Items[];
}

const Grid = ({ posts }: PostListProps) => {
  return (
    <section className="my-10 md:my-20">
      <h1 className="py-5 text-5xl font-extrabold lg:text-6xl">PRINCIPALES</h1>
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post, index) => (
          <Card key={post.sys.id} attributes={post.fields} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
