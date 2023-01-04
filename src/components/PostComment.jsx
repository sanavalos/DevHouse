import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
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
    <div className="w-full m-2">
      <input
        type="text"
        placeholder="Escribir comentario..."
        onChange={(e) => setComment(e.target.value)}
        className="rounded-lg p-1"
      />
      <button onClick={(e) => commentPost(e)} className="p-1 bg-black rounded-xl text-yellow-300 hover:bg-yellow-300 hover:text-black m-2">Enviar</button>
    </div>
  );
}

export default PostComment;
