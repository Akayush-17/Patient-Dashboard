import React, { useState, useEffect } from "react";

const UserProfile = ({ token }) => {
  const [profile, setProfile] = useState(null);
  console.log(token)

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

  return (
    <div className="bg-white h-full ">
      <h1>Dashboard</h1>
      {profile ? (
        <div>
          <p>Welcome, {profile.name}!</p>
          {/* Display other profile information */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
