

import useSWR from "swr";

const API_URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/likes`;

type MetricsPayload = {
  postLikes: number;
  userLikes: number;
};

async function getPostLikes(slug: string): Promise<MetricsPayload | null> {

  try {
    const res = await fetch(API_URL + `/${slug}`);

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data.");
    }
    return res.json()
  } catch (error) {
    return null
  }
}

async function updatePostLikes(
  slug: string,
  newCount: MetricsPayload
): Promise<MetricsPayload | null> {

  try {
    const res = await fetch(API_URL + `/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCount),
    });

    if (!res.ok) {
      throw new Error("Something went wrong saving the data.");
    }

    return res.json();
  }
  catch (error: any) {
    return null
  }
}


const newCountOptions = (newCount: MetricsPayload) => {
  return {
    optimisticData: newCount,
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  }
}



export const usePostLikes = (slug: string) => {
  const { data: count, error, mutate, } = useSWR(
    slug,
    getPostLikes,
  );


  const increment = async () => {
    if (!count || count.userLikes >= 5) {
      return;
    }

    const newCount = {
      postLikes: count.postLikes + 1,
      userLikes: count.userLikes + 1,
    };


    try {
      await mutate(
        updatePostLikes(slug, newCount),
        newCountOptions(newCount)
      )

    }
    catch (error) {

    }


  };


  return {
    currentUserLikes: count?.userLikes || 0,
    likes: count?.postLikes,
    isLoading: !error && !count,
    isError: !!error,
    increment,
  };
};
