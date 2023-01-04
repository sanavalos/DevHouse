import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className="h-14 w-full max-w-[728px] flex text-xl absolute -bottom-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-lg"
        type="text"
        placeholder="Chatea con Henrys..."
      />
      <button className="w-[20%] bg-yellow-300 rounded-lg hover:bg-black hover:text-yellow-300" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default SendMessage;
