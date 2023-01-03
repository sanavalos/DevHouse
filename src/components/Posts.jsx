import React from "react";
import { Link } from "react-router-dom";

function Posts({ posts }) {
  return posts.map((post) => {
    return (
      <div className="w-[50vw] px-4 py-5 bg-white rounded-lg shadow mb-7">
        <div className="mt-1 font-semibold text-gray-900 text-xl md:text-2xl lg:text-3xl capitalize">
          {post.title}
        </div>
        <div className="text-sm font-medium text-gray-500 truncate ">
          {post.date} - {post.country} -{" "}
          <Link to={`/perfil/${post.userId}`} className="uppercase">
            {post.user}
          </Link>{" "}
        </div>
        <div className="text-md font-medium text-gray-500">{post.comments}</div>
      </div>
    );
  });
}

export default Posts;
