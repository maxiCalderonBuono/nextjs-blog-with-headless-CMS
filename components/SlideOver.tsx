"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ClosedMenu, OpenMenu } from "~/utils/Icons";
import Link from "next/link";
import Tabs from "./Tabs";
import useWindowSize from "../hooks/useWindowSize";
import { Items } from "~/types";
import ToggleMode from "./ToggleMode";

interface SliderProps {
  posts: Items[];
}

const SlideOver = ({ posts }: SliderProps) => {
  const [open, setOpen] = useState(false);

  const { width } = useWindowSize();

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
                    <div className="flex flex-col w-full h-full py-6 overflow-y-scroll shadow-xl dark:bg-gray-900 bg-slate-100">
                      <div className="flex justify-between px-8 py-5 sm:px-6">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          tabIndex={-1}
                        >
                          <Link
                            href="/"
                            className="px-4 py-2 text-2xl font-semibold leading-6 text-gray-900 rounded-lg dark:text-white focus:outline-indigo-500 focus:outline focus:outline-2"
                          >
                            Mindenkié
                          </Link>
                        </button>
                        <div className="flex items-center gap-2">
                          <ToggleMode />
                          <button
                            type="button"
                            className="p-2 text-gray-900 rounded-md dark:text-gray-300 dark:hover:text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <div className="relative flex items-center">
                              <OpenMenu />
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="relative px-4 sm:px-6">
                        <Tabs posts={posts} onChange={() => setOpen(false)} />

                        <div className="flex flex-col gap-6 mx-8">
                          <hr className="text-center border-gray-900 dark:border-white" />
                          <Link
                            href="/blog"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 text-xl font-bold transition rounded-lg sm:inline-block dark:hover:bg-gray-700 dark:focus:bg-gray-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
                          >
                            Blog
                          </Link>
                          <hr className="text-center border-gray-900 dark:border-white" />
                          <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 text-xl font-bold transition rounded-lg sm:inline-block dark:hover:bg-gray-700 hover:bg-indigo-400 dark:focus:bg-gray-500 focus:outline-none focus:bg-indigo-400"
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
