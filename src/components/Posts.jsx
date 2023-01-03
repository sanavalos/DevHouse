import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostComment from "./PostComment";
import { getResponses } from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";

function Posts({ posts }) {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const responses = useSelector((state) => state.responses);
  const postId = useSelector((state) => state.postId);

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

        <PostComment postId={post.id} />
        {postId === post.id &&
          showComments &&
          responses?.map((response) => {
            return (
              <div className=" px-4 py-5  shadow mb-7">
                <Link
                  to={`/perfil/${response.userId}`}
                  className="uppercase text-sm font-medium text-gray-500 truncate"
                >
                  {response.user}
                </Link>
                <div>{response.comment}</div>
              </div>
            );
          })}
        {!showComments ? (
          <button
            onClick={() => {
              dispatch(getResponses(post.id)) && setShowComments(true);
            }}
          >
            Mostrar comentarios
          </button>
        ) : (
          postId === post.id && (
            <button onClick={() => setShowComments(false)}>
              Ocultar comentarios
            </button>
          )
        )}
      </div>
    );
  });
}

export default Posts;
