import React from 'react'
import Image from '../assets/purple.png'
import Gray from '../assets/gray.png'
import Pink from '../assets/pink.png'
import Green from '../assets/green.png'

const PatientMetrics = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 py-6 gap-4">
          <div className=" bg-[#f7f8fa] p-5 rounded-md">
            <div className="gap-1 flex flex-col py-2">
              <h4 className="font-semibold text-base text-gray-800">
                Blood Pressure
              </h4>
              <h4 className="font-bold text-3xl text-purple-500">120/80</h4>
              <h4 className=" font-light text-sm text-gray-400">
                NORMAL (mm/Hg)
              </h4>
            </div>
            <img src={Image} alt="graph"/>
          </div>
          <div className=" bg-[#f7f8fa] p-5 rounded-md">
            <div className="gap-1 flex flex-col py-2">
              <h4 className="font-semibold text-base text-gray-800">
                Heart Rate
              </h4>
              <h4 className="font-bold text-3xl text-green-500">80</h4>
              <h4 className=" font-light text-sm text-gray-400">
                NORMAL (bpm)
              </h4>
            </div>
            <img src={Green} alt="graph"/>
          </div>
          <div className=" bg-[#f7f8fa] p-5 rounded-md">
            <div className="gap-1 flex flex-col py-2">
              <h4 className="font-semibold text-base text-gray-800">
                Glucose
              </h4>
              <h4 className="font-bold text-3xl text-pink-500">92</h4>
              <h4 className=" font-light text-sm text-gray-400">
                High (mg/dl)
              </h4>
            </div>
            <img src={Pink} alt="graph"/>
          </div>
          <div className=" bg-[#f7f8fa] p-5 rounded-md">
            <div className="gap-1 flex flex-col py-2">
              <h4 className="font-semibold text-base text-gray-800">
                Cholestrol
              </h4>
              <h4 className="font-bold text-3xl text-gray-800">120</h4>
              <h4 className=" font-light text-sm text-gray-400">
                High (mg/dl)
              </h4>
            </div>
            <img src={Gray} alt="graph"/>
          </div>
        </div>
  )
}

export default PatientMetrics