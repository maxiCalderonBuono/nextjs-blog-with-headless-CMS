import Link from "next/link";
import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end sm:hidden">
      <label tabIndex={0} className=" btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="p-2 mt-4 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        <Link href="/blog" className="text-xl">
          Blog
        </Link>
        <Link href="/about" className="text-xl ">
          About
        </Link>
      </ul>
    </div>
  );
};

export default Dropdown;
