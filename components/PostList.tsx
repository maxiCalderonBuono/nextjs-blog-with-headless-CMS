import React from "react";
import { Post } from "~/types";
import HorizontalCard from "./HorizontaLCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <Link
        href="/blog"
        className="flex justify-end w-full py-5 font-bold ¿ text-indigo-400 text-md hover:scale-[102%]"
      >
        Más <ArrowRight />
      </Link>
    </section>
  );
};

export default PostList;
