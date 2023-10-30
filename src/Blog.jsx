import React from "react";
const Blog = () => {
  return (
    <>
      <div className="flex flex-col border-2 border-black pb-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwNsIBLsOyLZATDY47PtKGMgEwYfC_GnJVA&usqp=CAU"
          className="w-full "
        />

        <h1 className="text-2xl font-bold text-center mt-3">Title of Blog</h1>
        <p className=" text-center mt-2">
          Blog content Blog content Blog content Blog content Blog content Blog
          content Blog content Blog content Blog content Blog content Blog
          content Blog content Blog content Blog content Blog content Blog
          content Blog content Blog content Blog content Blog content
        </p>
      </div>
    </>
  );
};
export default Blog;
