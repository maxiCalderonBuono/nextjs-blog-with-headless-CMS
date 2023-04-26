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
    <Link href="/">
      <div className="relative rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%] w-full">
        <div className="flex flex-col justify-between px-2 py-5 group hero-content md:flex-row">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            {attributes.image && (
              <div className="relative w-64 h-24">
                <Image
                  src={attributes.image.data.attributes.formats.thumbnail.url}
                  fill
                  alt={attributes.title}
                  className="max-w-full md:max-w-[13rem] rounded-lg"
                />
              </div>
            )}
            <div className="w-full grow">
              <div className="flex gap-3">
                <h1 className="text-2xl font-bold group-hover:text-indigo-300">
                  {attributes.title}
                </h1>
                {attributes.filter && (
                  <span className="bg-indigo-100 h-fit uppercase text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-indigo-100 border border-indigo-400">
                    {attributes.filter}
                  </span>
                )}
              </div>

              <p className="py-1 text-1xl">{attributes.description}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <TimeAgo timeStamp={attributes.createdAt} />
            <span className="absolute flex self-end text-sm font-bold text-indigo-300 align-bottom transition-opacity delay-150 opacity-0 bottom-3 right-3 group-hover:opacity-100">
              Read more <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
