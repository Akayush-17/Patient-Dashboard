import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg';

const ChatHistoryModal = ({ userId, setShowChats }) => {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await fetch(`http://localhost:3000/chat/chat-history/${userId}`);
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
    <div className="bg-white h-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Chat History</h1>
        <div className="cursor-pointer" onClick={handleHideChat}>
          <img src={Close} alt="close" />
        </div>
      </div>
      <div className="overflow-y-scroll h-[480px] overflow-x-hidden custom-scrollbar">
        {chat ? (
          chat.map((session, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-semibold mb-2">Session ID: {session.sessionId}</h2>
              <div className="bg-gray-100 p-2 rounded">
                {session.messages.map((message, idx) => (
                  <div key={idx} className={`p-2 ${message.role === 'user' ? 'bg-blue-100' : 'bg-green-100'} rounded mb-2`}>
                    <p><strong>{message.role === 'user' ? 'You' : 'Model'}:</strong> {message.text}</p>
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
