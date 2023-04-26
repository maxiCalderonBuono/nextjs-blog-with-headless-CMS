import getAllPosts from "~/lib/getAllPosts";
import Home from "~/components/Home";

const RootHome = async () => {
  const data = await getAllPosts();
  return (
    <main className="flex flex-col max-w-5xl items-center mx-auto min-h-[calc(100vh-108px)] justify-evenly">
      <Home data={data} />
    </main>
  );
};

export default RootHome;
