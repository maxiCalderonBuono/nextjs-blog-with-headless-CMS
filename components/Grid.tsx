import React from "react";
import { Post } from "~/types";
import { Card } from "./Card";

interface PostListProps {
  posts: Post[];
}

const Grid = ({ posts }: PostListProps) => {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id} attributes={post.attributes} />
      ))}
    </div>
  );
};

export default Grid;
