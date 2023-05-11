import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/formatedDate";
import getPostBySlug from "~/lib/getPostBySlug";

import profile from "../../../assets/images/profile.jpg";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { absoluteUrl } from "~/lib/utils";
import { client } from "~/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// export async function generateMetadata({
//   params,
// }: PostPageProps): Promise<Metadata> {
//   const slug = params.slug;

//   const { data } = await getPostBySlug(slug);

//   const { attributes } = data;

//   if (!attributes) {
//     return {};
//   }

//   const url = process.env.NEXT_PUBLIC_APP_URL;

//   const ogUrl = new URL(`${url}/api/og`);
//   ogUrl.searchParams.set("heading", attributes.title);
//   ogUrl.searchParams.set("type", "Blog Post");
//   ogUrl.searchParams.set("mode", "dark");

//   return {
//     title: attributes.title,
//     description: attributes.description,

//     openGraph: {
//       title: attributes.title,
//       description: attributes.description,
//       type: "article",
//       url: absoluteUrl(attributes.slug),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: attributes.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: attributes.title,
//       description: attributes.description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

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
        {documentToReactComponents(fields.content)}
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
