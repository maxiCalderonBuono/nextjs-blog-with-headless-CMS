import React from "react";
import { PostAttributes } from "../types";

interface ArticleProps {
  attributes: PostAttributes;
}
const Article = ({ attributes }: ArticleProps) => {
  return <article>{attributes.title}</article>;
};

export default Article;
