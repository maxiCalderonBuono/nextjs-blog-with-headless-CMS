
import Home from "~/components/Home";
import { client } from "~/lib/contentful/client";

const RootHome = async () => {
  const response = await client.getEntries({ content_type: "blog" });

  const data = response.items;

  return (
    <main className="flex flex-col mx-auto md:items-center justify-evenly">
      <Home data={data} />
    </main>
  );
};

export default RootHome;
