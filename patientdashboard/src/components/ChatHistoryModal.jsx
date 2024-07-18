import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg';
import Profile from "../assets/medbot_platforms_logo.jpg";
const ChatHistoryModal = ({ userId, setShowChats }) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await fetch(`https://patient-dashboard-bjsf.onrender.com/chat/chat-history/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setChat(data);
        } else {
          throw new Error("Error fetching Chats");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChat();
  }, [userId]);

  if (!userId) {
    return <p>Please log in to view Chat History</p>;
  }

  const handleHideChat = () => {
    setShowChats(false);
  };

  return (
    <div className=" rounded-md relative h-[100vh] bg-white shadow-lg">
    <div className="bg-blue-500 rounded-t-md h-28 w-full p-5 gap-5 flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Chat Bot Interaction</h1>
        <div className=" cursor-pointer" onClick={handleHideChat}>
          <img src={Close} alt="close" />
        </div>
      </div>
      <img
        src={Profile}
        className="rounded-full h-20 w-20 bg-contain"
        alt="profile"
      />
    </div>
      <div className="overflow-y-scroll lg:h-[80vh] h-[75vh] overflow-x-hidden custom-scrollbar p-5 mt-10">
        {chat ? (
          chat.map((session, index) => (
            <div key={index} className="mb-4">
             
              <div className="bg-gray-100 p-3 rounded gap-4 flex flex-col">
                {session.messages.map((message, idx) => (
                  <div key={idx} className={`p-2 ${message.role === 'user' ? 'bg-blue-100' : 'bg-green-100'} rounded mb-2 gap-2 flex flex-col`}>
                    <p><strong>{message.role === 'user' ? 'You' : 'Bot'}:</strong> {message.text}</p>
                    <p className="text-xs text-gray-500">{new Date(message.timestamp).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading chat history...</p>
        )}
      </div>
    </div>
  );
};

export default ChatHistoryModal;
