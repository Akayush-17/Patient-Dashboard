import React, { useState, useEffect } from "react";
import Close from '../assets/align-right-svgrepo-com.svg'
const DoctorModal = ({ data, setShowDoctors }) => {


  if (!data) {
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
      {data ? (
        <div>
          {data.linkedDoctors.length > 0 ? (
            <ul>
              {data.linkedDoctors.map((doctor) => (
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
