import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="h-screen bg-slate-200 m-0 grid">
      <Navbar />
      <div className="flex justify-center bg-slate-200">
        <h1 className="text-4xl font-extrabold p-3">Contactanos</h1>
      </div>
      <div className="mb-5 border-2 border-black min-h-fit rounded-xl mx-[35vw]">
        <form
          action="https://getform.io/f/90b3744f-f6b0-4140-a9ae-5d57ef6034c1"
          method="POST"
          className="mx-10 my-10"
          encType="multipart/form-data"
        >
          <div className="flex flex-col my-2">
            <label className="py-2 font-medium">Nombre:</label>
            <input
              name="name"
              className="p-3 rounded-xl"
              type="text"
              placeholder="Henry House"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="py-2 font-medium">Email:</label>
            <input
              name="email"
              className="p-3 rounded-xl"
              type="email"
              placeholder="henry@gmail.com"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="py-2 font-medium">Mensaje:</label>
            <textarea
              name="message"
              className="p-3 rounded-xl"
              cols={30}
              rows={8}
              type="text"
              placeholder="Escribinos tus dudas o sugerencias"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-yellow-300 p-2 rounded-xl my-4 hover:bg-yellow-300 hover:text-black w-[10rem] "
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
