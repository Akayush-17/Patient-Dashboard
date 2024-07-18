import React from "react";
import Profile from "../assets/profile-plus-round-1324-svgrepo-com.svg";
import Doctor from "../assets/stethoscope-svgrepo-com.svg";
import Instructions from "../assets/record-square-svgrepo-com.svg";
import ChatHistory from "../assets/chat-round-line-svgrepo-com.svg";
import RightArrow from "../assets/right-arrow-backup-2-svgrepo-com.svg";

const Sidebar = ({
  setShowProfile,
  setShowDoctors,
  setShowInteraction,
  setShowChats,
}) => {
  const handleShowProfile = () => {
    setShowProfile((prevState) => !prevState);
    setShowDoctors(false);
    setShowInteraction(false);
    setShowChats(false);
  };

  const handleDoctorShow = () => {
    setShowDoctors((prevState) => !prevState);
    setShowProfile(false);
    setShowInteraction(false);
    setShowChats(false);
  };
  const handleInteractionShow = () => {
    setShowInteraction((prevState) => !prevState);
    setShowDoctors(false);
    setShowProfile(false);
    setShowChats(false);
  };
  const handleChatShow = () => {
    setShowChats((prevState) => !prevState);
    setShowInteraction(false);
    setShowDoctors(false);
    setShowProfile(false);
  };

  return (
    <div className=" bg-gradient-to-t from-[#7b27eb] to-[#5616f5] h-full  py-6 lg:pl-0 pl-2 fixed md:relative">
      <h2 className="flex text-2xl mb-6 pr-1 lg:px-8">
        <span className="font-extrabold text-white flex">+m <span className="md:block hidden">ed</span></span>
        <span className="font-extrabold text-blue-400 lg:block hidden">fit</span>
      </h2>
      <div className="flex flex-col text-white gap-3">
        <div
          className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] lg:px-8 py-3"
          onClick={handleShowProfile}
        >
          <button className="flex gap-3 justify-center items-center">
            <img src={Profile} alt="icon" />
            <h3 className="lg:block hidden">Profile</h3>
          </button>
          <div>
            <img className="lg:block hidden" src={RightArrow} alt="right arrow" />
          </div>
        </div>
        <div
          className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] lg:px-8 py-3"
          onClick={handleDoctorShow}
        >
          <div className="flex gap-3 justify-center items-center">
            <img src={Doctor} alt="icon" />
            <h3 className="lg:block hidden">Doctors</h3>
          </div>
          <div>
            <img className="lg:block hidden" src={RightArrow} alt="right arrow" />
          </div>
        </div>
        <div
          className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] lg:px-8 py-3"
          onClick={handleInteractionShow}
        >
          <div className="flex gap-3 justify-center items-center">
            <img src={Instructions} alt="icon" />
            <h3 className="lg:block hidden">Interactions</h3>
          </div>
          <div>
            <img src={RightArrow} className="lg:block hidden" alt="right arrow" />
          </div>
        </div>
        <div
          className=" flex gap-3 justify-between items-center cursor-pointer hover:bg-[#4210c0] lg:px-8 py-3"
          onClick={handleChatShow}
        >
          <div className="flex gap-3 justify-center items-center">
            <img src={ChatHistory} alt="icon" />
            <h3 className="lg:block hidden">Chat History</h3>
          </div>
          <div>
            <img className="lg:block hidden" src={RightArrow} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
