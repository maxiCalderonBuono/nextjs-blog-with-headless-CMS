import React from "react";
import { Items } from "~/types";
import HorizontalCard from "./HorizontaLCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "./Card";

interface PostListProps {
  posts: Items[];
  navigation?: boolean;
}

const PostList = ({ posts, navigation }: PostListProps) => {
  return (
    <section className="py-4">
      {posts.map((post) => (
        <div key={post.sys.id}>
          <HorizontalCard attributes={post.fields} />

          <hr className="mt-2 md:hidden" />
        </div>
      ))}
      <div
        className={`flex justify-center py-5 ${navigation ? "" : "hidden"} `}
      >
        <Link
          href="/blog"
          className="flex justify-center items-center w-fit px-4 py-2 rounded-md hover:bg-gray-800  font-bold ¿ text-indigo-400 text-lg hover:scale-[102%]"
        >
          Todos los posts <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default PostList;
