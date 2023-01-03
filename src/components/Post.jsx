import React from "react";
import { useState } from "react";
import {  setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 } from "uuid";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Post() {
	const [post, setPost] = useState({
		title: "",
		date: Date(),
		user: "",
		comments: "",
        id:"",
		userId:"",
		country: ""
	});

	const navigate = useNavigate();

	const countries = [
		"Todos",
		"Colombia",
		"Argentina",
		"Chile",
		"España",
		"Mexico",
		"Guatemala",
		"Perú",
		"Uruguay",
		"Bolivia",
		"Venezuela",
		"Paraguay",
		"Ecuador",
		"Panama",
		"Costa Rica",
		"Cuba",
		"Rep. Dominicana",
		"Honduras",
		"El Salvador",
	  ];
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
                date: new Date().toLocaleDateString(),
                user: user?.displayName,
                comments: post.comments,
               	id: uuid,
			   	userId: user?.uid,
				country: post.country
            });

			navigate("/foro")
	
		} catch (error) {
			console.log(error);
		}
		
	};

	return (
		<div className="bg-yellow-300 h-full">
			<Navbar/>
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
				<div>
					<label className="py-2 font-medium">País donde publicar</label>
					<select name="country"  onChange={(e) => handleChange(e)}> <option disabled selected defaultValue>Selecionar un pais</option> {countries.map((country) => (
                        <option value={country}>{country}</option>
                      ))}</select>
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
			<Footer/>
		</div>
	);
}

export default Post;
