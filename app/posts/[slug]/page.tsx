import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/formatedDate";
import getPostBySlug from "~/lib/getPostBySlug";
import { Post } from "~/types";
import profile from "../../../assets/images/profile.png";
import ReactMarkdown from "react-markdown";

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const { data } = await getPostBySlug(slug);

  const { attributes } = data;

  return (
    <article className="container relative max-w-2xl py-6 mx-auto lg:py-10">
      <Link
        href="/posts"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex"
      >
        <ChevronLeft className="flex items-center" />
        Todos los posts
      </Link>
      <div>
        {attributes.createdAt && (
          <time
            dateTime={attributes.createdAt}
            className="block text-sm opacity-60"
          >
            Publicado el {formatDate(attributes.createdAt)}
          </time>
        )}
        <h1 className="inline-block mt-2 text-4xl leading-tight font-heading lg:text-5xl">
          {attributes.title}
        </h1>
        <div className="flex items-center my-3 space-x-2 text-sm">
          <Image
            src={profile}
            alt="El escritor de Mindenkié"
            width={42}
            height={42}
            className="bg-indigo-300 rounded-full"
          />
          <div className="flex-1 leading-tight text-left">
            <p className="font-medium">Sultano</p>
          </div>
        </div>
      </div>
      {attributes.image && (
        <div className="relative w-full my-8 h-[400px]">
          <Image
            src={attributes.image.data.attributes.formats.medium.url}
            alt={attributes.title}
            fill
            priority
            className="rounded-md"
          />
        </div>
      )}

      <article className="flex items-start p-4 my-6 border border-l-4 border-gray-400 rounded-md">
        {attributes.description}
      </article>
      <article className="my-3 prose text-gray-900 dark:text-gray-100 md:prose-lg lg:prose-xl prose-a:after:content-['_↗'] prose-p:text-md dark:prose-h2:text-white prose-a:after:ml-2">
        <ReactMarkdown linkTarget="_blank" className="after:text-indigo-300">
          {attributes.content}
        </ReactMarkdown>
      </article>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/posts" className="flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Todos los posts
        </Link>
      </div>
    </article>
  );
}
