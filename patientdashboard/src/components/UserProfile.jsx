import React, { useState, useEffect } from "react";
import Close from "../assets/align-right-svgrepo-com.svg";
const UserProfile = ({ data, setShowProfile }) => {




  
  const handleHideProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="bg-white h-full p-5 shadow-lg ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        <div className=" cursor-pointer" onClick={handleHideProfile}>
          <img src={Close} alt="close" />
        </div>
      </div>
      {data ? (
        <div>
          <p>Welcome, {data.name}!</p>
          <p> {data.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
