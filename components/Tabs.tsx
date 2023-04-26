"use client";

import { useMemo, useState } from "react";
import { Filter, Post } from "~/types";

type Props = {
  posts: Post[];
  onChange: (filter: Filter) => void;
};

const Tabs: React.FC<Props> = ({ posts, onChange }) => {
  console.log(posts);
  const [selected, setSelect] = useState<Set<string>>(() => new Set());

  const tabs = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (const post of posts) {
      buffer.add(post.attributes.filter);
    }
    return Array.from(buffer);
  }, [posts]);

  function handleChange(tab: string, isSelected: boolean) {
    const draft = structuredClone(selected);

    if (isSelected) {
      draft;
    }
  }
  return (
    <div className="w-full">
      <ul className="flex w-full bg-gray-800 divide-x rounded-xl max-w-7xl tabs">
        {tabs.map((tab) => (
          <li
            key={tab}
            className="flex-1 font-bold text-white rounded-none tab"
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
