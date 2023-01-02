import React from "react";
import { useState } from "react";
import {  setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 } from "uuid";
import { UserAuth } from "../context/AuthContext";


function Post() {
	const [post, setPost] = useState({
		title: "",
		date: Date(),
		user: "",
		comments: "",
        id:"",
	});
	const { user } = UserAuth();
	
	function handleChange(e) {
		setPost({
			...post,
			[e.target.name]: e.target.value,
		});
	}

	const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            const uuid = v4()
			await setDoc(doc(db, "posts/" + uuid), {
                title: post.title,
                date: new Date(),
                user: user.displayName,
                comments: post.comments,
               id: uuid
            });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-yellow-300 h-full">
			<h2>Crea tu post</h2>
			<form className="m-8" >
				<div className="flex flex-col my-2">
					<label className="py-2 font-medium">Titulo</label>
					<input
						className="p-3 rounded-xl"
						type="text"
						name="title"
						value={post.name}
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="flex flex-col my-2">
					<label className="py-2 font-medium">Comentario</label>
					<textarea
						name="comments"
						id=""
						cols="30"
						rows="10"
						value={post.comments}
						onChange={(e) => handleChange(e)}
					></textarea>
				</div>

				<button onClick={handleSubmit}>Enviar</button>
                
			</form>
		</div>
	);
}

export default Post;
