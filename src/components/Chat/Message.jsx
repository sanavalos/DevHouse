import React from "react";
import { auth } from "../../firebase";

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? 'bg-yellow-500 text-black flex-row-reverse text-end float-right rounded-bl-full'
      : 'bg-slate-300 text-black float-left rounded-br-full';

  return (
    <div>
      <div className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}>
        <p className='relative mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
