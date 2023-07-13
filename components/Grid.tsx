import React from "react";
import { Items } from "~/types";
import { Card } from "./Card";


interface PostListProps {
  posts: Items[];
}

const Grid = ({ posts }: PostListProps) => {

  const textSize = posts.length > 1 ? "text-2xl" : "text-2xl md:text-4xl"



  return (
    <section className="my-8">
      <h1 className="py-5 mb-5 text-5xl font-extrabold text-center lg:text-6xl md:text-left font-heading">DESTACADOS</h1>
      <div className={`grid gap-10 grid-cols-1 mb-10 ${posts.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
        {posts.map((post, index) => (
          <Card key={post.sys.id} attributes={post.fields} textSize={textSize} priority={index <= 1 ? true : false} />
        ))}
      </div>
    </section>
  );
};

export default Grid;
