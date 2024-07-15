import React from "react";
import Image from "../assets/chat.png";
import Green from "../assets/laboratory.png";
import Pink from "../assets/calendar.png";

const Benefits = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-4 py-3 gap-4">
        <div className=" bg-[#e4a66d] p-2 flex-col flex items-center rounded-md">
          <img src={Image} className="h-20 w-20" alt="graph" />
          <div className=" flex flex-col ">
            <h4 className="font-bold text-3xl text-white">120/80</h4>
          </div>
        </div>
        <div className=" bg-[#3de1ec] p-2 rounded-md flex-col flex items-center">
          <img src={Green} className="h-20 w-20" alt="graph" />
          <div className="gap-1 flex flex-col py-2">
            <h4 className="font-bold text-3xl text-white">80</h4>
          </div>
        </div>
        <div className=" bg-[#ec55c6] p-2 rounded-md  flex-col flex items-center">
          <img src={Pink} className="h-20 w-20" alt="graph" />
          <div className="gap-1 flex flex-col py-2">
            
            <h4 className="font-bold text-3xl text-white">92</h4>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
