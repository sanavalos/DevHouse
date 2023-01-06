import React, { useState } from "react";
import { doc, setDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 } from "uuid";
import { UserAuth } from "../context/AuthContext.js";
function PostComment({ postId }) {
  const [comment, setComment] = useState();
  const { user } = UserAuth();

  const commentPost = async (e) => {
    try {
      e.preventDefault();
      const uuid = v4();
      let docRef = doc(db, "posts", postId);
      await updateDoc(docRef, { responses: increment(1) });
      await setDoc(doc(db, "responses/" + uuid), {
        post: postId,
        comment: comment,
        userId: user.uid,
        user: user.displayName,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full m-2 flex">
      <textarea
        placeholder="Escribir comentario..."
        cols="50"
        rows="2"
        onChange={(e) => setComment(e.target.value)}
        className="rounded-lg p-2 text-lg"
      />
      <button
        onClick={(e) => commentPost(e)}
        className="p-2 my-4 bg-black rounded-xl text-yellow-300 hover:bg-yellow-300 hover:text-black m-2"
      >
        Enviar
      </button>
    </div>
  );
}

export default PostComment;
