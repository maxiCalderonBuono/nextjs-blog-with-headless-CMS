import React from "react";
import { PostAttributes } from "../types";
import Image from "next/image";
import Link from "next/link";
import { TimeAgo } from "./TimeAgo";
import { ArrowRight } from "lucide-react";

interface ArticleProps {
  attributes: PostAttributes;
}
const HorizontalCard = ({ attributes }: ArticleProps) => {
  return (
    <Link href={`/posts/${attributes.slug}}`}>
      <div className="relative rounded-lg bg-base-100 hover:shadow-xl dark:shadow-gray-800 transition  ease-in-out hover:scale-[102%] w-full">
        <div className="flex flex-col w-full gap-3 px-2 py-5 overflow-hidden group hero-content md:flex-row">
          <div className="w-1/5">
            {attributes.image && (
              <div className="relative w-full h-24 grow">
                <Image
                  src={attributes.image.data.attributes.formats.thumbnail.url}
                  fill
                  alt={attributes.title}
                  className="hidden rounded-lg md:block"
                />
              </div>
            )}
          </div>

          <div className="w-3/5">
            <div className="flex justify-between gap-3">
              <h1 className="text-2xl font-bold truncate group-hover:text-indigo-300">
                {attributes.title}
              </h1>
              {attributes.filter && (
                <span className="bg-indigo-100 h-fit uppercase dark:text-indigo-300 text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-600 border border-indigo-400">
                  {attributes.filter}
                </span>
              )}
            </div>

            <p className="py-1 truncate text-1xl">{attributes.description}</p>
          </div>

          <div className="flex flex-col items-end w-1/6">
            <TimeAgo timeStamp={attributes.createdAt} />
            <span className="absolute flex self-end text-sm font-bold text-indigo-300 align-bottom transition-opacity delay-150 opacity-0 bottom-3 right-3 group-hover:opacity-100">
              Leer más <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
