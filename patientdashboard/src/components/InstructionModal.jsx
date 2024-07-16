import React, { useState, useEffect } from "react";

const InstructionModal = ({ token }) => {
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
    return <p>Please log in to view Linked Doctors</p>;
  }

  return (
    <div className="bg-white h-full ">
      <h1>Linked Doctors</h1>
      {profile ? (
        <div>
          {profile.linkedDoctors.length > 0 ? (
            <ul>
              {profile.linkedDoctors.map((doctor) => (
                <li key={doctor._id}>
                  {doctor.name} - {doctor.specialization}
                </li>
              ))}
            </ul>
          ) : (
            <p>No linked doctors</p>
          )}
        </div>
      ) : (
        <p>Loading Doctors...</p>
      )}
    </div>
  );
};

export default InstructionModal;
