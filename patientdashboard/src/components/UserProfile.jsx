import React, { useState, useEffect } from "react";
import Close from "../assets/align-right-svgrepo-com.svg";
const UserProfile = ({ token, setShowProfile }) => {
  const [profile, setProfile] = useState(null);
  console.log(token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          throw new Error("Error fetching profile");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!token) {
    return <p>Please log in to view your profile</p>;
  }
  const handleHideProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="bg-white h-full ">
      <div className="flex justify-between items-center">
        <h1>Dashboard</h1>
        <div className=" cursor-pointer" onClick={handleHideProfile}>
          <img src={Close} alt="close" />
        </div>
      </div>
      {profile ? (
        <div>
          <p>Welcome, {profile.name}!</p>
          <p> {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
