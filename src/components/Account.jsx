import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
  );
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();

  const getUser = () => {};

  const updateInfo = (prop) => {
    let docRef = doc(db, "users", "Y2oSny0D3g5rb2BAfJn5");
    setDoc(docRef, { prop }, { merge: true })
      .then((resp) => {
        console.log("Document Field has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageUp(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (imageUp === null) return;
    const imageRef = ref(storage, `${user.uid}`);
    await uploadBytes(imageRef, imageUp);
    const imageURL = await getDownloadURL(imageRef);
    updateProfile(user, { photoURL: imageURL });
    Swal.fire({
      icon: "success",
      title: "Imagen actualizada",
      showConfirmButton: false,
      timer: 2000,
    });
    window.location.reload();
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "¡Nos vemos luego!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handlePassword = async (e) => {
    setPassword(e.target.value);
  };

  const changePassword = async () => {
    try {
      updatePassword(user, password);
      Swal.fire({
        icon: "success",
        title: "Contraseña actualizada",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleName = async (e) => {
    setFullname(e.target.value);
  };

  const changeName = async () => {
    try {
      updateProfile(user, { displayName: fullname });
      updateInfo(fullname);
      Swal.fire({
        icon: "success",
        title: "Nombre actualizado",
        showConfirmButton: false,
        timer: 2000,
      });
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[40%] bg-yellow-300 h-screen">
          <div className="mt-[20%]">
            <h1 className="text-4xl text-center">Nos encanta tenerte aquí</h1>
          </div>
          <div>
            <img
              src="https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/java-developer.jpg"
              className="rounded-lg h-[520px] w-[650px] m-14"
              alt="comunidad"
            />
          </div>
        </div>
        <div className="w-[60%] bg-slate-200 h-screen">
          <div className="m-20 border-2 border-black h-[80%] rounded-xl">
            <div className="border-b-2 border-black h-6 bg-yellow-300 rounded-t-xl"></div>
            <div className="border-b-2 border-black h-32 flex items-center space-x-8">
              <img
                className="h-[100px] w-[100px] rounded-xl m-6 border-2 border-black"
                alt="userphoto"
                src={photoURL}
              />
              <h2 className="text-3xl font-semibold">
                {user?.displayName || "Nombre Usuario"}
              </h2>
              <h2 className="text-3xl font-semibold">Pais Usuario</h2>
              <button className="p-2 bg-black text-yellow-300 text-2xl hover:scale-110 hover:text-red-500 rounded-xl">
                Mensajes
              </button>
              <button
                className="p-2 bg-black text-yellow-300 text-2xl hover:scale-110 hover:text-red-500 rounded-xl"
                onClick={handleLogout}
              >
                Desloguea
              </button>
            </div>
            <div className="border-t-2 border-black h-[80%] bg-red-300 rounded-b-xl border-b-2">
              <h1 className="text-2xl m-6 underline font-semibold text-center">
                Información Personal
              </h1>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Email:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder={user && user.email}
                  disabled
                ></input>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Contraseña:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder="..."
                  type={"password"}
                  onChange={handlePassword}
                ></input>
                <button
                  className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8"
                  onClick={changePassword}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Nombre:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder={user?.displayName || "Nombre Usuario"}
                  onChange={handleName}
                ></input>
                <button
                  className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8"
                  onClick={changeName}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Pais:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder="Pais"
                ></input>
                <button className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8">
                  Cambiar
                </button>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Localidad:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder="Localidad o departamemto"
                ></input>
                <button className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8">
                  Cambiar
                </button>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Imagen:
                </label>
                <input
                  className="rounded-xl w-[50%] p-2 ml-20"
                  type={"file"}
                  onChange={handleChange}
                ></input>
                <button
                  className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8"
                  onClick={uploadImage}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex m-4 items-center">
                <label className="text-xl ml-32 w-20 font-semibold">
                  Descripción:
                </label>
                <textarea
                  className="rounded-xl w-[50%] p-2 ml-20"
                  placeholder="Tu descripción personal"
                  rows={"5"}
                  maxLength="250"
                ></textarea>
                <button className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ml-8">
                  Cambiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
