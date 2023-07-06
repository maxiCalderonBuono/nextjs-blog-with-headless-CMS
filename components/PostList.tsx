import React from "react";
import { Items } from "~/types";
import HorizontalCard from "./HorizontaLCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


interface PostListProps {
  posts: Items[];
  navigation?: boolean;
}

const PostList = ({ posts, navigation }: PostListProps) => {
  return (
    <section className="py-4">
      {posts.map((post) => (
        <div key={post.sys.id} >
          <HorizontalCard attributes={{ content: post.fields, date: post.sys }} />

          <hr className="mt-2 md:hidden" />
        </div>
      ))}
      <div
        className={`flex justify-center py-5 ${navigation ? "" : "hidden"} `}
      >
        <Link
          href="/blog"
          className="flex justify-center items-center w-fit px-4 py-2 rounded-md hover:bg-slate-300/50 dark:hover:bg-slate-800/50 font-bold dark:text-indigo-300 text-[#434982] text-lg hover:scale-[102%] focus:outline-indigo-500 focus:outline focus:outline-2"
        >
          Todos los posts <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default PostList;
