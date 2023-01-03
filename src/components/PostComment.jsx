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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full mt-2">
      <input
        type="text"
        placeholder="Escribir comentario..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={(e) => commentPost(e)}>ENVIAR</button>
    </div>
  );
}

export default PostComment;
