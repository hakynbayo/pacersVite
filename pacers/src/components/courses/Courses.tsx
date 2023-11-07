import React from "react";
import course from "../../assets/courses.svg";
import instructor from "../../assets/instructor.svg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
const AboutUs = () => {
  return (
    <div className="bg-bg-blue flex flex-col justify-start font-roboto text-black mr-4 mt-4 p-4 ">
      <div className="mb-2 w-full">
        <img src={course} alt="course" />
      </div>
      <div className=" w-full">
        <div className="flex font-light">
          <img src={instructor} alt="course" />
          <p className="text-[12px] text-inst-text ml-2">By Falola Hammed</p>
        </div>
        <div className="my-4">
          <p className="w-full text-[22px]">
            
            Strategies for Digital Marketing for Driving Traffic
          </p>
        </div>
        <div className="flex w-[35%] text-member-blue justify-between">
          <div className="flex items-center text-[12px]">
            <FaRegUser />
            <p> 244</p>
          </div>

          <div className="flex items-center text-[12px]">
            <AiOutlineClockCircle />
            <p> 16hrs</p>
          </div>
          <div className="flex items-center text-[12px]">
            <AiOutlineStar />
            <p> 4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
