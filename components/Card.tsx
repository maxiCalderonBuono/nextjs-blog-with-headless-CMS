import Image from "next/image";
import { PostAttributes } from "~/types";
import { TimeAgo } from "./TimeAgo";
import Link from "next/link";

interface ArticleProps {
  attributes: PostAttributes;
  index: number;
}

export const Card = ({ attributes, index }: ArticleProps) => {
  return (
    <article className="relative flex flex-col space-y-2 group hover:scale-[102%]">
      <div className="relative items-center justify-center mb-3 overflow-hidden transition-shadow rounded-md cursor-pointer aspect-video group hover:shadow-xl hover:opacity-40 hover:shadow-black/30">
        {attributes.image && (
          <Image
            src={attributes.image.data.attributes.formats.large?.url}
            alt={attributes.title}
            fill
            className="transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 group-hover:blur-sm"
            priority={index <= 1}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/90" />
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-xl italic font-extrabold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {attributes.quote}
          </p>
          <button className="rounded-full dark:bg-indigo-900 bg-indigo-300 py-2 px-3.5 font-com text-sm capitalize dark:text-white text-black shadow shadow-black/60">
            Leer más
          </button>
        </div>
      </div>
      <span className="bg-indigo-100 h-fit w-fit uppercase dark:text-indigo-300 text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-600 border border-indigo-400">
        {attributes.filter}
      </span>
      <h2 className="text-2xl font-extrabold">{attributes.title}</h2>
      {attributes.description && (
        <p className="truncate opacity-60">{attributes.description}</p>
      )}
      {attributes.createdAt && (
        <TimeAgo style="opacity-60" timeStamp={attributes.createdAt} />
      )}
      <Link href={`/posts/${attributes.slug}}`} className="absolute inset-0">
        <span className="sr-only">Leer post</span>
      </Link>
    </article>
  );
};
