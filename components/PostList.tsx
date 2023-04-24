import React from "react";
import { Post } from "~/types";
import HorizontalCard from "./HorizontaLCard";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="w-full">
      {posts.map((post) => (
        <div key={post.id}>
          <HorizontalCard attributes={post.attributes} />
          <div className="my-0 divider" />
        </div>
      ))}
    </div>
  );
};

export default PostList;
