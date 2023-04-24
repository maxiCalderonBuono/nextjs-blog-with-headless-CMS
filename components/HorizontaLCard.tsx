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
    <div className="relative rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]">
      <Link href="/home">
        <div className="flex-col justify-between group hero-content md:flex-row">
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
              <h1 className="text-xl font-bold group-hover:text-indigo-300">
                {attributes.title}
                {attributes.filter && (
                  <div className="mx-2 text-sm uppercase badge badge-secondary">
                    {attributes.filter}
                  </div>
                )}
              </h1>
              <p className="py-1 text-1xl">{attributes.description}</p>
            </div>
          </div>
          <div className="flex flex-col">
            {/* {attributes.createdAt && (
                <div className="badge badge-outline">
                  {attributes.createdAt}
                </div>
              )} */}
            <TimeAgo timeStamp={attributes.createdAt} />
            <span className="absolute flex self-end text-sm text-indigo-300 align-bottom transition-opacity delay-150 opacity-0 bottom-3 right-3 group-hover:opacity-100">
              Read more <ArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalCard;
