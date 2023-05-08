interface PostParams {
  url: string;
}

const defaultUrl: string = "http://127.0.0.1:1337/api/blogs?populate=deep";

export default async function getAllPosts(
  { url = defaultUrl }: PostParams = { url: defaultUrl }
) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
