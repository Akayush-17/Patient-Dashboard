import React from "react";
import Profile from "../assets/profile-plus-round-1324-svgrepo-com.svg";
import Doctor from "../assets/stethoscope-svgrepo-com.svg";
import Instructions from "../assets/record-square-svgrepo-com.svg";
import ChatHistory from "../assets/chat-round-line-svgrepo-com.svg";
import RightArrow from "../assets/right-arrow-backup-2-svgrepo-com.svg";


const Sidebar = ({setShowProfile, setShowDoctors, setShowInteraction}) => {

  const handleShowProfile = () => {
    setShowProfile(prevState => !prevState);
    setShowDoctors(false);
    setShowInteraction(false);
  };

  const handleDoctorShow = () => {
    setShowDoctors(prevState => !prevState);
    setShowProfile(false)
    setShowInteraction(false);
  }
  const handleInteractionShow = () => {
    setShowInteraction(prevState => !prevState);
    setShowDoctors(false);
    setShowProfile(false)
  }

  return (
    <div className=" bg-gradient-to-t from-[#7b27eb] to-[#5616f5] h-[100vh] py-6 ">
      <h2 className="flex text-2xl mb-6">
        <span className="font-extrabold text-white">+med</span>
        <span className="font-extrabold text-blue-400">fit</span>
      </h2>
      <div className="flex flex-col text-white gap-3">
        <div className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] px-8 py-3" onClick={handleShowProfile}>
          <button className="flex gap-3 justify-center items-center" >
            <img src={Profile} alt="icon" />
            <h3>Profile</h3>
          </button>
          <div>
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
        <div className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] px-8 py-3" onClick={handleDoctorShow}>
          <div className="flex gap-3 justify-center items-center">
            <img src={Doctor} alt="icon" />
            <h3>Doctors</h3>
          </div>
          <div>
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
        <div className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] px-8 py-3" onClick={handleInteractionShow}>
          <div className="flex gap-3 justify-center items-center">
            <img src={Instructions} alt="icon" />
            <h3>Interactions</h3>
          </div>
          <div>
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
        <div className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] px-8 py-3">
          <div className="flex gap-3 justify-center items-center">
            <img src={ChatHistory} alt="icon" />
            <h3>Chat History</h3>
          </div>
          <div>
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
