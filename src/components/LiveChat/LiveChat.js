import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../utils/helpers";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      //poll data
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col w-full h-full border border-gray-300 rounded-md aspect-video">
      <div className="h-full border-b border-b-gray-100 mb-2 overflow-x-hidden overflow-y-auto flex flex-col-reverse">
        {messages.map((msg) => (
          <ChatMessage name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="flex items-center p-2">
        <input
          type="text"
          className="p-1 border border-gray-300 w-2/3 h-full rounded-lg outline-blue-500"
        ></input>
        <div className="w-1/3 ml-2 inline-block">
          <button className="text-black py-1 px-3 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
