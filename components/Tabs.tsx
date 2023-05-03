"use client";

import { Tab } from "@headlessui/react";
import { useMemo } from "react";
import { Filter, Post } from "~/types";

type Props = {
  posts: Post[];
  onChange: (filter: Filter) => void;
};

const Tabs: React.FC<Props> = ({ posts, onChange }) => {
  const tabs = useMemo(() => {
    const buffer: Set<string> = new Set(["Todas"]);

    for (const post of posts) {
      buffer.add(post.attributes.filter);
    }
    return Array.from(buffer);
  }, [posts]);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function handleOnChange(index: number) {
    const filter =
      tabs[index] === "Todas"
        ? null
        : (post: Post) => post.attributes.filter === tabs[index];

    onChange(filter);
  }

  return (
    <div className="px-2 my-16 shadow-xl sm:px-0 ">
      <Tab.Group onChange={(index) => handleOnChange(index)}>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-gray-600/20">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm  leading-5 dark:text-white text-gray-700 flex-1 uppercase font-bold",
                  " ring-opacity-60 ring-offset-2 dark:ring-offset-blue-400 ring-offset-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700",
                  selected
                    ? "bg-gray-600/50 shadow text-gray-800"
                    : "dark:text-indigo-500 text-gray-800 hover:bg-white/[0.12] dark:hover:text-indigo-300 hover:text-gray-600"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
