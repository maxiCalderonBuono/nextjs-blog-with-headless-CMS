const defaultUrl: string = "http://127.0.0.1:1337/api/blogs";

export default async function getPostBySlug(
  slug: string,
  url: string = defaultUrl
) {
  const res = await fetch(`${url}/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
