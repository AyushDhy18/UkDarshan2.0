import React from "react";
import Blog from "./Blog";
const BlogPage = () => {
  return (
    <div className="mb-16 ">
      <div className="p-3 flex flex-col items-center justify-center mt-4">
        <h1
          style={{ fontFamily: "'Tangerine', cursive" }}
          className=" text-center text-8xl font-black text-teal-700"
        >
          Uttarakhand Tour Community
        </h1>
        <p className="text-xl font-medium text-sky-900">
          ~ life ~ love ~ travel ~ work ~
        </p>
      </div>
      <div className="mx-12 grid grid-cols-3 gap-x-4 gap-y-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};
export default BlogPage;
