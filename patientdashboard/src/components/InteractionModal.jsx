import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg'
const InteractionModal = ({ token, setShowInteraction }) => {
  const [interaction, setInteraction] = useState(null);
  console.log(token);

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
    <div className="bg-white h-full ">
      <div className="flex justify-between items-center">
        <h1>Patient Interactions</h1>
        <div className=" cursor-pointer" onClick={handleHideInteraction}>
          <img src={Close} alt="close"/>
        </div>
      </div>
      {interaction ? (
        <div>
          {interaction.length > 0 ? (
            <ul>
              {interaction.map((interaction) => (
                <li key={interaction._id}>
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
            <p>No interactions found</p>
          )}
        </div>
      ) : (
        <p>Loading interactions...</p>
      )}
    </div>
  );
};

export default InteractionModal;
