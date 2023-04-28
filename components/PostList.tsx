import React from "react";
import { Post } from "~/types";
import HorizontalCard from "./HorizontaLCard";
import { ArrowRight } from "lucide-react";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <section className="py-4">
      <h2 className="py-10 text-2xl font-extrabold">CONTINUAR LEYENDO</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <HorizontalCard attributes={post.attributes} />
          <div className="my-0 divider-gray-800 divider" />
        </div>
      ))}
      <button className="flex justify-end w-full py-5 font-bold ¿ text-indigo-400 text-md">
        Leer más <ArrowRight />
      </button>
    </section>
  );
};

export default PostList;
