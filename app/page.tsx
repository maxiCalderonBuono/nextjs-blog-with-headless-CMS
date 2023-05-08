import getAllPosts from "~/lib/getAllPosts";
import Home from "~/components/Home";

const RootHome = async () => {
  const data = await getAllPosts();
  return (
    <main className="flex flex-col mx-auto md:items-center justify-evenly">
      <Home data={data} />
    </main>
  );
};

export default RootHome;
