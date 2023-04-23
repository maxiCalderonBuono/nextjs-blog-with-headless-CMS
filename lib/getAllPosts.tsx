const url = "http://127.0.0.1:1337/api/blogs?populate=deeep";

export default async function getAllPosts() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
