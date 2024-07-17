import React from "react";
import Close from "../assets/align-right-svgrepo-com.svg";
import Profile from "../assets/images (1).jpg";
const UserProfile = ({ data, setShowProfile }) => {
  const handleHideProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className=" rounded-md relative h-[100vh] bg-white shadow-lg">
      <div className="bg-[#5616f5] rounded-t-md h-28 w-full p-5 gap-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">User Dashboard</h1>
          <div className=" cursor-pointer" onClick={handleHideProfile}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <img
          src={Profile}
          className="rounded-full h-20 w-20 bg-contain"
          alt="profile"
        />
      </div>
      <div className=" p-5  bg-white pt-14">
        {data ? (
          <div className="flex flex-col gap-8">
            
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Name :</h2> {data.email}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Email :</h2> {data.email}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Date of Birth :</h2> {data.dob}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Gender :</h2> {data.gender}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Address :</h2> {data.address}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Blood Group :</h2>{data.blood}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Relative Name :</h2>{data.relative}</p>
            <p className="flex gap-4 text-lg"><h2 className="font-bold">Patient Age :</h2> {data.age}</p>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
