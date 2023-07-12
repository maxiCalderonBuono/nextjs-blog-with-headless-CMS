import React from "react";
import { Fields, ContentfulTypesSys } from "../types";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import DateLabel from "./UI/DateLabel";



type PostData = {
  content: Fields,
  date: ContentfulTypesSys
}

interface ArticleProps {
  attributes: PostData
}
const HorizontalCard = ({ attributes }: ArticleProps) => {

  const { content, date } = attributes

  return (
    <Link href={`/blog/${content.slug}`} className="block rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2">
      <div className="relative rounded-lg bg-transparent hover:shadow-xl dark:shadow-gray-800 transition  ease-in-out hover:scale-[102%] w-full">
        <div className="flex flex-col w-full gap-3 px-2 py-5 overflow-hidden group hero-content sm:flex-row sm:justify-between">
          <div className="hidden w-1/5 lg:block">
            {content.image && (
              <div className="relative w-[95%] h-24 grow">
                <Image
                  src={`http:${content.image.fields.file.url}`}
                  fill
                  quality={10}
                  sizes="170px"
                  alt={content.title}
                  className="object-cover rounded-lg "
                />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full lg:w-4/5">
            <div className="flex flex-col justify-between gap-3 mb-2">
              {content.filter && (
                <span className="bg-indigo-100 h-fit md:hidden w-fit uppercase dark:text-white text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-[#305072] border border-indigo-400">
                  {content.filter}
                </span>
              )}
              <h3 className="w-full text-xl font-bold lg:text-2xl group-hover:text-indigo-300">
                {content.title}
              </h3>
              <div className="flex items-center gap-3">
                {content.filter && (
                  <span className="bg-indigo-100 hidden md:block h-fit w-fit uppercase dark:text-white text-indigo-600 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-[#305072] border border-indigo-400">
                    {content.filter}
                  </span>
                )}
                <CalendarDays />
                <DateLabel>{date.createdAt}</DateLabel>
              </div>
            </div>

            <p className="py-1 truncate lg:block text-1xl">
              {content.description}
            </p>
          </div>


          <span className="absolute text-sm font-bold text-indigo-300 transition-opacity delay-150 opacity-0 sm:flex top-3 right-3 group-hover:opacity-100">
            <ArrowUpRight />
          </span>


        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;

