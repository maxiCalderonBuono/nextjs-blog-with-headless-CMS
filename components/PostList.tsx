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
      {posts.map((post) => (
        <div key={post.id}>
          <HorizontalCard attributes={post.attributes} />
          <hr className="mt-2 md:hidden" />
        </div>
      ))}
      {/* <Link
        href="/posts"
        className={`flex justify-end w-full py-5 font-bold ¿ text-indigo-400 text-md hover:scale-[102%] ${
          options.show ? "" : "hidden"
        }`}
      >
        Más <ArrowRight />
      </Link> */}
    </section>
  );
};

export default PostList;
