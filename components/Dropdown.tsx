"use client";

import Link from "next/link";
import React from "react";
import { ClosedMenu, Moon, OpenMenu } from "~/utils/Icons";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Dropdown = () => {
  return (
    <div className="relative w-[26px] h-[26px]">
      <Menu as="div" className="flex w-[26px] h-[26px] text-left">
        {({ open }) => (
          <>
            <Menu.Button>
              <div className="relative flex items-center">
                <OpenMenu
                  mode={`transition transform absolute ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                />

                <ClosedMenu
                  mode={`transition transform absolute ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/blog"
                        className={`${
                          active ? "bg-indigo-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Blog
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/about"
                        className={`${
                          active ? "bg-indigo-300 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        About
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Dropdown;
