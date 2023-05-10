import React from "react";
import { Fields } from "../types";
import Image from "next/image";
import Link from "next/link";
import { TimeAgo } from "./TimeAgo";
import { ArrowRight } from "lucide-react";
import Balancer from "react-wrap-balancer";
import ContentfulImage from "./UI/ContentfulImage";

interface ArticleProps {
  attributes: Fields;
}
const HorizontalCard = ({ attributes }: ArticleProps) => {
  return (
    <Link href={`/blog/${attributes.slug}`}>
      <div className="relative rounded-lg bg-base-100 hover:shadow-xl dark:shadow-gray-800 transition  ease-in-out hover:scale-[102%] w-full">
        <div className="flex flex-col w-full gap-3 px-2 py-5 overflow-hidden group hero-content sm:flex-row sm:justify-between">
          <div className="hidden w-1/5 lg:block">
            {attributes.image && (
              <div className="relative w-[95%] h-24 grow">
                <ContentfulImage
                  src={attributes.image.fields.file.url}
                  fill
                  alt={attributes.title}
                  className="rounded-lg "
                />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full sm:w-5/6 lg:w-3/5">
            <div className="flex flex-col justify-between gap-3">
              <h3 className="w-full text-xl font-bold lg:text-2xl group-hover:text-indigo-300">
                <Balancer>{attributes.title}</Balancer>
              </h3>
              {attributes.filter && (
                <span className="bg-indigo-100 h-fit w-fit uppercase dark:text-indigo-300 text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-600 border border-indigo-400">
                  {attributes.filter}
                </span>
              )}
            </div>

            <p className="hidden py-1 truncate lg:block text-1xl">
              {attributes.description}
            </p>
          </div>

          <div className="flex flex-col items-end flex-shrink-0 w-1/7 lg:w-1/6">
            {/* <TimeAgo timeStamp={attributes.createdAt} /> */}
            <span className="absolute self-end hidden text-sm font-bold text-indigo-300 align-bottom transition-opacity delay-150 opacity-0 sm:flex bottom-3 right-3 group-hover:opacity-100">
              Leer más <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
