import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/formatedDate";

import profile from "../../../assets/images/profile.jpg";

import type { Metadata } from "next";
import { absoluteUrl } from "~/lib/utils";
import { client } from "~/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, Node, BLOCKS } from "@contentful/rich-text-types";
import React from "react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const slug = params.slug;

  const response = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });

  const { fields, sys } = response.items[0];

  console.log(sys);

  if (!fields) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);

  const publishedDate = new Date(sys.createdAt);

  const isPublished = publishedDate.toLocaleDateString("ar-AR");

  console.log(ogUrl);
  ogUrl.searchParams.set("heading", fields.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("published", isPublished);

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
        />
      );
    },
  },
};

export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const response = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });

  const { fields, sys } = response.items[0];

  return (
    <article className="relative max-w-3xl px-6 py-10 mx-auto">
      <Link
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex"
      >
        <ChevronLeft className="flex items-center" />
        Todos los posts
      </Link>

      {sys.createdAt && (
        <time dateTime={sys.createdAt} className="block text-sm opacity-60">
          Publicado el {formatDate(sys.createdAt)}
        </time>
      )}
      <h1 className="inline-block mt-2 text-4xl leading-tight font-heading lg:text-5xl">
        {fields.title}
      </h1>
      <div className="flex items-center my-3 space-x-2 text-md">
        <Image
          src={profile}
          alt="El escritor de Mindenkié"
          width={44}
          height={44}
          className="bg-indigo-300 rounded-full h-11 w-11"
        />
        <div className="flex-1 leading-tight text-left">
          <p className="font-bold">Sultano</p>
        </div>
      </div>

      {fields.image && (
        <Image
          src={fields.image.fields.file.url}
          width={720}
          height={405}
          alt={fields.title}
          className="rounded-lg "
        />
      )}

      <p className="p-4 my-6 border border-l-4 border-gray-400 rounded-md ">
        {fields.description}
      </p>
      <section className="my-3 prose text-gray-900 dark:text-gray-100 md:prose-lg dark:prose-headings:text-white  lg:prose-xl prose-a:after:content-['_↗'] prose-p:text-md dark:prose-p:text-gray-300 prose-a:after:ml-2">
        {documentToReactComponents(fields.content, options)}
      </section>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className="flex items-center">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Todos los posts
        </Link>
      </div>
    </article>
  );
}
