// import { client } from "~/lib/contentful/client";
// import { Items } from "~/types";


// export default async function sitemap() {


//   const response = await client.getEntries({ content_type: "blog" });

//   const data: Items[] = response.items;

 
//   const blogs = data.map((post) => ({
//     url: `https://www.mindenkie.com/blog/${post.fields.slug}`,
//     lastModified: post.sys.createdAt,
//   }));

//   const routes = ['', '/blog'].map(
//     (route) => ({
//       url: `https://www.mindenkie.com${route}`,
//       lastModified: new Date().toISOString().split('T')[0],
//     })
//   );

//   return [...routes,...blogs];
// }