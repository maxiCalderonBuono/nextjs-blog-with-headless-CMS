import Image from "next/image";
import { PostAttributes } from "~/types";
import { TimeAgo } from "./TimeAgo";
import Link from "next/link";

interface ArticleProps {
  attributes: PostAttributes;
}

export const Card = ({ attributes }: ArticleProps) => {
  return (
    <article className="relative flex flex-col space-y-2 group">
      {attributes.image && (
        <Image
          src={attributes.image.data.attributes.formats.medium.url}
          alt={attributes.title}
          width={804}
          height={452}
          className="transition-colors border rounded-md bg-muted"
        />
      )}
      <h2 className="text-2xl font-extrabold">{attributes.title}</h2>
      {attributes.description && (
        <p className="text-muted-foreground">{attributes.description}</p>
      )}
      {attributes.createdAt && <TimeAgo timeStamp={attributes.createdAt} />}
      <Link href="/" className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
};
