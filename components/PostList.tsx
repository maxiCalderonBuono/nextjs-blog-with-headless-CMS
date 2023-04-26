import React from "react";
import { Post } from "~/types";
import HorizontalCard from "./HorizontaLCard";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <HorizontalCard attributes={post.attributes} />
          <div className="my-0 divider-gray-800 divider" />
        </div>
      ))}
    </>
  );
};

export default PostList;
