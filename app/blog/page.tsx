import React from "react";
import type { Metadata } from "next";
import getAllPosts from "~/lib/getAllPosts";
import { Post } from "~/types";
import Article from "~/components/HorizontaLCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

interface PostData {
  data: Post[];
}

export default async function BlogPage() {
  return <main className="max-w-5xl py-10 mx-auto">Holis</main>;
}
