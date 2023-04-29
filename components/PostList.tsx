"use client";

import React from "react";
import { Post } from "~/types";
import HorizontalCard from "./HorizontaLCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const pathname = usePathname();

  const options =
    pathname === "/"
      ? { title: "CONTINUAR LEYENDO", show: true }
      : { title: "TODOS LOS ARTÍCULOS", show: false };

  return (
    <section className="py-4">
      <h2
        className={`py-10 ${
          options.show ? "text-2xl" : "text-5xl"
        } font-extrabold`}
      >
        {options.title}
      </h2>
      {posts.map((post) => (
        <div key={post.id}>
          <HorizontalCard attributes={post.attributes} />
          <div className="my-0 divider-gray-800 divider" />
        </div>
      ))}
      <Link
        href="/posts"
        className={`flex justify-end w-full py-5 font-bold ¿ text-indigo-400 text-md hover:scale-[102%] ${
          options.show ? "" : "hidden"
        }`}
      >
        Más <ArrowRight />
      </Link>
    </section>
  );
};

export default PostList;
