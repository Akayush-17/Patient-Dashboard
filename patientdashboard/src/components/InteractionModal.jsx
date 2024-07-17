import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg'
import Profile from "../assets/images (3).jpg";

const InteractionModal = ({ token, setShowInteraction }) => {
  const [interaction, setInteraction] = useState(null);
  useEffect(() => {
    const fetchInteraction = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/interactions", {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setInteraction(data);
        } else {
          throw new Error("Error fetching profile");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (token) {
      fetchInteraction();
    }
  }, [token]);

  if (!token) {
    return <p>Please log in to view Interactions</p>;
  }

  const handleHideInteraction = () => {
    setShowInteraction(false);
  };

  return (
    <div className=" rounded-md relative h-[100vh] bg-white shadow-lg">
      <div className="bg-[#a3a6ad] rounded-t-md h-28 w-full p-5 gap-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Your Interactions</h1>
          <div className=" cursor-pointer" onClick={handleHideInteraction}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <img
          src={Profile}
          className="rounded-full h-20 w-20 bg-contain"
          alt="profile"
        />
      </div>
      {interaction ? (
        <div className="p-5 h-[80vh] overflow-scroll overflow-x-hidden custom-scrollbar mt-10">
          {interaction.length > 0 ? (
            <ul className="flex flex-col gap-8">
              {interaction.map((interaction) => (
                <li key={interaction._id} className="bg-[#f7f8fa] p-4 gap-2 flex flex-col">
                  <p>
                    <strong>Doctor:</strong> {interaction.doctor.name} (
                    {interaction.doctor.specialization})
                  </p>
                  <p>
                    <strong>Query:</strong> {interaction.query}
                  </p>
                  <p>
                    <strong>Response:</strong> {interaction.response}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(interaction.interactionDate).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-16 font-bold text-lg">No interactions found</p>
          )}
        </div>
      ) : (
        <p className="mt-16 font-bold text-lg p-5">Loading interactions...</p>
      )}
    </div>
  );
};

export default InteractionModal;
