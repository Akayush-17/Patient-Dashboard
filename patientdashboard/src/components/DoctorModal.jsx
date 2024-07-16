import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg'
const DoctorModal = ({ token, setShowDoctors }) => {
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
    return <p>Please log in to view Linked Doctors</p>;
  }

  const handleHideDoctor = () => {
    setShowDoctors(false);
  };

  return (
    <div className="bg-white h-full ">
      <div className="flex justify-between items-center">
        <h1>Linked Doctors</h1>
        <div className=" cursor-pointer" onClick={handleHideDoctor}>
        <img src={Close} alt="close"/>
        </div>
      </div>
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

export default DoctorModal;
