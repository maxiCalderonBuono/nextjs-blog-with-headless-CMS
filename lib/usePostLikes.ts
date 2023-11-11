import React from "react";
import { useDebounce } from "react-use";
import useSWR, { SWRConfiguration } from "swr";

const API_URL = `http://localhost:3000/api/likes`;

type MetricsPayload = {
  postLikes: number;
  userLikes: number;
};

async function getPostLikes(slug: string): Promise<MetricsPayload> {
  const res = await fetch(API_URL + `/${slug}`);

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

async function updatePostLikes(
  slug: string,
  count: number
): Promise<MetricsPayload> {
  const res = await fetch(API_URL + `/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
  });

  if (!res.ok) {
    throw new Error("An error occurred while posting the data.");
  }

  return res.json();
}

export const usePostLikes = (slug: string, config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR(
    [API_URL, slug],
    () => getPostLikes(slug),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  const [batchedLikes, setBatchedLikes] = React.useState(0);

  const increment = () => {
    if (!data || data.userLikes >= 5) {
      return;
    }

    mutate(
      {
        postLikes: data.postLikes + 1,
        userLikes: data.userLikes + 1,
      },
      false
    );

    setBatchedLikes(batchedLikes + 1);
  };

  useDebounce(
    () => {
      if (batchedLikes === 0) return;

      mutate(updatePostLikes(slug, batchedLikes));
      setBatchedLikes(0);
    },
    1000,
    [batchedLikes]
  );

  return {
    currentUserLikes: data?.userLikes,
    likes: data?.postLikes,
    isLoading: !error && !data,
    isError: !!error,
    increment,
  };
};
