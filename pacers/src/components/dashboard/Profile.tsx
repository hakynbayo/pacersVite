import React from "react";
import { AiOutlineBell, AiOutlineCamera } from "react-icons/ai";
import { TfiTicket } from "react-icons/tfi";
import profilepic from "../../assets/profilepic.svg";
import archive from "../../assets/archive.svg";

const Profile = () => {
  return (
    <div className="hidden lg:block sm:hidden sm:flex-col">
      <div className="bg-white font-roboto flex-col w-[290px] h-[420px] border shadow-sm rounded-2xl text-black p-6 mt-28">
        <div className="flex justify-between">
          <AiOutlineBell size={26} className='border-2 border-bg-blue' />
          <img src={profilepic} alt="" />
          <TfiTicket className='border-2 border-bg-blue' size={26} />
        </div>
        <div className="relative flex justify-center bottom-4 left-6">
          <AiOutlineCamera size={22} />
        </div>

        <p className="text-center my-4">Kenneth Robert</p>
      </div>
      <div className="bg-white font-roboto flex-col w-[290px] h-[740px] border shadow-sm rounded-2xl  p-6 mt-12">
        <div className="flex-col">
          <p className="text-center text-black font-600 text-[20px]">
            Completed Course Progress
          </p>
          <p className="text-center text-grey w-[90%] text-[13px] my-8">
            You’ve spent 30mins on Digital marketing
          </p>
          <p className="text-center font-600 text-[26px] flex my-32 justify-center items-center bg-white border-2 border-white shadow-md rounded-full h-[229px] w-[229px]">
            3hr 40mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
