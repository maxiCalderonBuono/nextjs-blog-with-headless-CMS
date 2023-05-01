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
    <article className="container relative max-w-3xl py-6 mx-auto lg:py-10">
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
            <p className="font-medium">El escritor</p>
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
      <hr className="mt-12" />
      <article className="my-3 italic prose text-gray-100 text-md font-heading lg:text-xl prose-a:text-indigo-300">
        <ReactMarkdown>{attributes.content}</ReactMarkdown>
      </article>
      <hr />

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
