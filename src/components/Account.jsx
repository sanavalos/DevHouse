import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { updatePassword, updateProfile } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getUserById } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHelpCircle } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
const Account = () => {
  const { user, logout } = UserAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
  );
  const [password, setPassword] = useState();
  const [fullname, setFullname] = useState();
  const [github, setGithub] = useState();
  const [career, setCareer] = useState("Full Stack");

  const updateInfo = (prop) => {
    let docRef = doc(db, "users", user?.uid);
    setDoc(docRef, prop, { merge: true })
      .then((resp) => {
        console.log(`${prop} has been updated successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
    dispatch(getUserById(user?.uid));
  }, [user]);

  const userId = useSelector((state) => state.user);
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
    let docRef = doc(db, "users", user?.uid);
    await updateDoc(docRef, { image: imageURL });
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
      let docRef = doc(db, "users", user?.uid);
      await updateDoc(docRef, { name: fullname });
      Swal.fire({
        icon: "success",
        title: "Nombre actualizado",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const [description, setDescription] = useState();
  const changeDescription = async () => {
    try {
      updateInfo({ description: description });
      Swal.fire({
        icon: "success",
        title: "Descripcion actualizada",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [checked, setChecked] = useState([]);
  const intereses = ["Tecnologia", "Musica", "Futbol", "Viajes"];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  const changeInterest = async () => {
    try {
      updateInfo({ interest: checked });
      Swal.fire({
        icon: "success",
        title: "Interes actualizado",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithub = async (e) => {
    setGithub(e.target.value);
  };

  const changeGithub = async () => {
    try {
      updateInfo({ github: github });
      let docRef = doc(db, "users", user?.uid);
      await updateDoc(docRef, { github: github });
      Swal.fire({
        icon: "success",
        title: "Github actualizado",
        showConfirmButton: false,
        timer: 2000,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(success);
  };

  const success = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=es`
    )
      .then((response) => response.json())
      .then((data) => {
        updateInfo({ location: data.locality });
        updateInfo({ country: data.countryName });
        updateInfo({ lat });
        updateInfo({ lng });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Localizacion actualizada",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  function handleCareer(event) {
    setCareer(event.target.value);
  }

  const changeCareer = async () => {
    try {
      updateInfo({ career: career });
      Swal.fire({
        icon: "success",
        title: "Carrera actualizada",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className=" bg-yellow-300 hidden lg:block lg:w-[50vw]">
          <div className="mt-64 md:mt-44">
            <h1 className="text-3xl md:text-4xl text-center font-semibold">
              Nos encanta tenerte aquí
            </h1>
          </div>
          <div className="mt-7 md:m-7 flex justify-center">
            <img
              src="https://blog.soyhenry.com/content/images/2021/02/MUNDOHENRY-1.jpg"
              className="rounded-lg h-46 w-40 md:h-[400px] md:w-[500px] lg:h-[520px] lg:w-[650px] "
              alt="comunidad"
            />
          </div>
        </div>
        <div className="">
          <div className="mx-2 mt-14 mb-20 md:mx-4 md:mt-20 md:mb-24 lg:mx-20 lg:my-28 border-black rounded-xl">
            <div className="border-2 border-black h-6 bg-yellow-300 rounded-t-xl"></div>
            <div className="border-x-2 border-black h-60 md:h-32 flex flex-row items-center justify-evenly bg-slate-300">
              <img
                className="h-20 w-20 mt-2 md:ml-2 lg:h-[100px] lg:w-[100px] rounded-xl lg:m-6 border-2 border-black"
                alt="userphoto"
                src={photoURL}
              />
              <h2 className="m-2 text-center text-xl lg:text-3xl font-semibold">
                {user?.displayName || "Nombre Usuario"}
              </h2>
              <h2 className="m-2 text-center text-xl lg:text-3xl font-semibold">
                {userId?.country}
              </h2>
              <button
                className="p-2 m-2 bg-black text-yellow-300 text-lg lg:text-2xl hover:scale-110 hover:text-red-500 rounded-xl"
                onClick={handleLogout}
              >
                Desloguea
              </button>
            </div>
            <div className="border-t-2 border-black bg-slate-300 rounded-b-xl border-2">
              <h1 className="text-lg md:text-xl lg:text-2xl m-3 lg:m-6 underline font-semibold text-center">
                Información Personal
              </h1>
              <div className="flex flex-row m-1 md:m-4 items-center text-center md:text-left justify-between">
                <label className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Email:
                </label>
                <input
                  className="rounded-xl w-36 md:w-[50%] p-2 m-1"
                  placeholder={user && user.email}
                  disabled
                ></input>
                <Link to="/contacto">
                  <button className="flex px-6 items-center p-1 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl ">
                    <IoIosHelpCircle size={30} />
                  </button>
                </Link>
              </div>
              <div className="flex flex-row m-1 md:m-4 items-center text-center md:text-left justify-between">
                <label className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Contraseña:
                </label>
                <input
                  className="rounded-xl w-36 md:w-[50%] p-2 m-1"
                  placeholder="..."
                  type={"password"}
                  onChange={handlePassword}
                ></input>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                  onClick={changePassword}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex flex-row m-1 md:m-4 items-center text-center md:text-left justify-between">
                <label className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Nombre:
                </label>
                <input
                  className="rounded-xl w-36 md:w-[50%] p-2 m-1"
                  placeholder={user?.displayName || "Nombre Usuario"}
                  onChange={handleName}
                ></input>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                  onClick={changeName}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex flex-row m-1 md:m-4 items-center text-center md:text-left justify-between">
                <label className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  GitHub:
                </label>
                <input
                  className="rounded-xl w-36 md:w-[50%] p-2 m-1"
                  placeholder={userId?.github ?? "Link de Github"}
                  onChange={handleGithub}
                ></input>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                  onClick={changeGithub}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex flex-row md:m-4 items-center justify-between">
                <label className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Descripción:
                </label>
                <textarea
                  className="rounded-xl w-36 md:w-[50%] p-2 m-1"
                  placeholder={userId?.description ?? "Tu descripción personal"}
                  rows={"5"}
                  maxLength="250"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                  onClick={changeDescription}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex flex-row m-1 md:m-4 items-center text-left justify-between">
                <h3 className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Intereses:
                </h3>
                <ul className="lg:items-center w-36 md:w-[50%] text-sm font-medium rounded-lg flex bg-gray-700 border-gray-600 text-white flex-col lg:flex-row">
                  {intereses.map((item, index) => (
                    <li className="lg:w-full lg:last:border-0 lg:border-r border-gray-600 ">
                      <div className="flex items-center pl-3">
                        <input
                          id={item}
                          key={index}
                          value={item}
                          type="checkbox"
                          onChange={handleCheck}
                          className="w-4 h-4 text-blue-600 rounded ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
                        />
                        <label
                          for={item}
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-300"
                        >
                          {item}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl"
                  onClick={changeInterest}
                >
                  Cambiar
                </button>
              </div>
              <div className="flex flex-row m-1 md:m-4 justify-between items-center text-center md:text-left">
                <h3 className="md:text-lg lg:text-xl m-1 w-20 font-semibold">
                  Carrera:
                </h3>
                <ul className="items-center w-36 md:w-[50%] text-sm font-medium rounded-lg flex md:flex-row flex-col bg-gray-700 border-gray-600 text-white">
                  <li className="w-full sm:border-r border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="full-stack-dev"
                        type="radio"
                        value="full stack"
                        checked={career === "full stack"}
                        onChange={handleCareer}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 focus:ring-2 bg-gray-600 border-gray-500"
                      />
                      <label
                        for="full-stack-dev"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-300"
                      >
                        Full Stack Dev
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="data-scientist"
                        type="radio"
                        value="data scientist"
                        checked={career === "data scientist"}
                        onChange={handleCareer}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 focus:ring-2 bg-gray-600 border-gray-500"
                      />
                      <label
                        for="data-scientist"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-300"
                      >
                        Data Scientist
                      </label>
                    </div>
                  </li>
                </ul>
                <button
                  className="p-2 m-1 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl"
                  onClick={changeCareer}
                >
                  Cambiar
                </button>
              </div>
              <div class="flex flex-col w-full md:px-24  items-center justify-center ">
                <label
                  for="dropzone-file"
                  class="flex flex-col text-center md:items-center justify-center md:w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center md:pt-5 md:pb-6">
                    <AiOutlineCloudUpload
                      size={50}
                      className="text-slate-200"
                    />
                    <p class="mb-2 text-sm text-gray-400">
                      <span class="font-semibold">
                        Click para elegir archivo
                      </span>
                    </p>
                    <p class="text-xs text-gray-400">
                      SVG, PNG or JPG (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    onChange={handleChange}
                  />
                </label>
                <div className="md:w-20">
                  <div className="md:w-full">
                    <div className="-mt-12 md:-mt-16">
                      <button
                        className="p-2 md:left-4 md:-bottom-44 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                        onClick={uploadImage}
                      >
                        Cambiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex m-4 items-center justify-center">
                <button
                  className="p-2 bg-black text-yellow-300 text-md hover:scale-110 hover:text-red-500 rounded-xl "
                  onClick={getLocation}
                >
                  ESTABLECER UBICACIÓN
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
