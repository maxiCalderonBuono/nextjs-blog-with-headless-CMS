import Image from "next/image";
import { Fields } from "~/types";
import { TimeAgo } from "./TimeAgo";
import Link from "next/link";

interface ArticleProps {
  attributes: Fields;
}

export const Card = ({ attributes }: ArticleProps) => {
  return (
    <article>
      <Link
        href={`/blog/${attributes.slug}`}
        className="flex flex-col space-y-6 "
      >
        <div className="group  [perspective:1000px]">
          <div className="relative aspect-video h-full w-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              {attributes.image && (
                <Image
                  src={attributes.image.fields.file.url}
                  alt={attributes.title}
                  fill
                  priority
                  className="object-cover rounded-md shadow-lg"
                />
              )}
            </div>
            <div className="absolute inset-0 h-full w-full rounded-md bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex flex-col items-center justify-center min-h-full">
                <p className="text-3xl font-bold">{attributes.quote}</p>
                <button className="px-2 py-1 mt-2 text-sm font-bold text-gray-900 bg-indigo-300 rounded-md hover:bg-indigo-400">
                  Leer Más
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold font-heading">
          {attributes.title}
        </h2>
      </Link>
    </article>
  );
};
