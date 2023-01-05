import React from "react";
import { auth } from "../../firebase";

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? 'bg-yellow-500 text-black flex-row-reverse text-end float-right rounded-bl-full'
      : 'bg-slate-300 text-black float-left text-start rounded-br-full';

  return (
    <div className="my-2">
      {message.uid === auth.currentUser.uid ? (<p className='text-right mx-4 my-1 text-gray-600 text-xs'>{message.name}</p>)
      : (<p className='text-left mx-4 my-1 text-gray-600 text-xs'>{message.name}</p>)}
      <div className={`flex items-center shadow-xl mx-4 py-2 px-3 rounded-tl-full rounded-tr-full max-w-[240px] ${messageClass}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
