import Article from "~/components/Article";
import getAllPosts from "~/lib/getAllPosts";

export default async function Home() {
  const { data: posts } = await getAllPosts();

  console.log(posts);

  return (
    <main className="flex min-h-[calc(100vh-108px)] justify-evenly">Holis</main>
  );
}
