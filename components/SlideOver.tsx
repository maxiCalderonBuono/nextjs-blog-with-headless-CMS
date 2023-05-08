"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClosedMenu, OpenMenu } from "~/utils/Icons";
import Link from "next/link";
import Tabs from "./Tabs";
import useWindowSize from "../hooks/useWindowSize";
import { Response, Post } from "~/types";

interface SiderProps {
  posts: Response;
}

const SlideOver = ({ posts: res }: SiderProps) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowSize();

  const { data: posts } = res;

  useEffect(() => {
    if (!width) return;
    if (width >= 768) {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className="flex items-center md:hidden">
      <button type="button" onClick={() => setOpen(true)}>
        <div className="relative flex items-center hover:scale-105 hover:opacity-90 active:scale-95">
          <ClosedMenu />
        </div>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex pl-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative w-screen pointer-events-auto">
                    <div className="flex flex-col w-full h-full py-6 overflow-y-scroll shadow-xl dark:bg-gray-900">
                      <div className="flex justify-between px-8 py-5 sm:px-6">
                        <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">
                          Mindenkié
                        </Dialog.Title>

                        <button
                          type="button"
                          className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <div className="relative flex items-center">
                            <OpenMenu />
                          </div>
                        </button>
                      </div>
                      <div className="relative px-4 sm:px-6">
                        <Tabs posts={posts} onChange={() => setOpen(false)} />

                        <div className="flex flex-col gap-6 mx-8">
                          <hr />
                          <Link
                            href="/blog"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 text-xl font-bold transition rounded-lg sm:inline-block hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            Blog
                          </Link>
                          <hr />
                          <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 text-xl font-bold transition rounded-lg sm:inline-block hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
                          >
                            About
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SlideOver;
