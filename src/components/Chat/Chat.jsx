import React, { useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

import { getChatMessages } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  const scroll = useRef();
  const { chatMessages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatMessages());
  }, []);

  return (
    <div className="w-96 overflow-scroll overflow-x-hidden">
      <main className="flex flex-col pr-6 md:p-[10px]">
        {chatMessages &&
          chatMessages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;
