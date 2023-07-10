
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../assets/images/profile.jpg";

import type { Metadata } from "next";
import { client } from "~/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, Node, BLOCKS } from "@contentful/rich-text-types";
import React from "react";
import SharePost from "~/components/SharePost";
import { notFound } from "next/navigation";
import ViewCounter from "./view-counter";
import getViewsCount from "~/lib/getViewsCount";
import DateLabel from "~/components/UI/DateLabel";








interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const slug = params.slug;

  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });


  if (items.length === 0) return {}

  const { fields, sys } = items[0];


  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);

  const publishedDate = new Date(sys.createdAt);

  const isPublished = publishedDate.toLocaleString("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const imageUrl = fields.image.fields.file.url

  ogUrl.searchParams.set("heading", fields.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("published", isPublished);
  ogUrl.searchParams.set("postImage", imageUrl);

  return {
    title: fields.title,
    description: fields.description,

    openGraph: {
      title: fields.title,
      description: fields.description,
      type: "article",
      url: `https://mindenkietest.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: fields.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fields.title,
      description: fields.description,
      images: [ogUrl.toString()],
    },
  };
}

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      return (
        <a target="_blank" rel="noopener noreferrer" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node, children: React.ReactNode) => {
      return (
        <Image
          alt={node.data.target.fields.file.details.title}
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          sizes="100vw"
        />
      );
    },
  },
};

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const url = process.env.NEXT_PUBLIC_APP_URL;

  const { total } = await getViewsCount(slug)

  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });


  if (items.length === 0) {
    notFound()
  }



  const { fields, sys } = items[0];

  return (


    <article className="relative max-w-3xl px-6 py-10 mx-auto bg-pattern">


      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex dark:hover:bg-gray-800 hover:bg-gray-200 px-4 py-2  rounded-md focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2"
      >
        <ChevronLeft className="flex items-center" />
        Todos los posts
      </Link>


      {sys.createdAt && (
        <time dateTime={sys.createdAt} className="block text-sm opacity-60">
          Publicado el <DateLabel>{sys.createdAt}</DateLabel>
        </time>
      )}
      <h1 className="inline-block mt-2 text-4xl leading-tight font-heading lg:text-5xl">
        {fields.title}
      </h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center my-3 space-x-2 text-md">
          <div className="relative overflow-hidden rounded-full h-11 w-11">
            <Image
              src={profile}
              alt="El escritor de Mindenkié"
              fill
              sizes="100%"
              className="bg-indigo-300"
            />
          </div>
          <div className="flex-1 leading-tight text-left">
            <p className="font-bold">Sultano</p>
          </div>
        </div>
        <ViewCounter total={total} slug={slug} />
        {/* <LikeButton slug={slug} /> */}
      </div>
      {fields.image && (
        <Image
          src={`http:${fields.image.fields.file.url}`}
          width={720}
          height={405}
          alt={fields.title}
          className="rounded-lg "
        />
      )}

      <p className="p-4 my-6 border border-l-4 border-gray-400 rounded-md ">
        {fields.description}
      </p>
      <SharePost url={`${url}/blog/${slug}`} title={fields.title} />
      <section className="my-3 prose text-gray-900 dark:text-gray-100 md:prose-lg dark:prose-headings:text-white  lg:prose-xl prose-a:after:content-['_↗'] prose-p:text-md dark:prose-p:text-gray-300 prose-a:after:ml-2">
        {documentToReactComponents(fields.content, options)}
      </section>
      <SharePost url={`${url}/blog/${slug}`} title={fields.title} />

      <div className="flex justify-center w-full mt-8">
        <Link
          href="/blog"
          className="flex px-4 py-2 rounded-md dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-indigo-500 focus-visible:outline focus-visible:outline-2 flex-nowrap"
        >
          <ChevronLeft className="-ml-[9px]" />
          Todos los posts
        </Link>
      </div>

    </article>


  );
}
