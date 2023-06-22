import React from "react";
import { Items } from "~/types";
import { Card } from "./Card";
import PostList from "./PostList";

interface PostListProps {
  posts: Items[];
}

const Grid = ({ posts }: PostListProps) => {


  const gridSize = posts.length > 1 ? 2 : 1
  const textSize = posts.length > 1 ? "text-2xl" : "text-2xl md:text-4xl"



  return (
    <section className="my-10 md:my-20">
      <h1 className="py-5 mb-5 text-5xl font-extrabold text-center lg:text-6xl md:text-left">DESTACADOS</h1>
      <div className={`grid gap-10 sm:grid-cols-1 md:grid-cols-${gridSize}`}>
        {posts.map((post, index) => (
          <Card key={post.sys.id} attributes={post.fields} textSize={textSize}/>
        ))}
      </div>
    </section>
  );
};

export default Grid;
