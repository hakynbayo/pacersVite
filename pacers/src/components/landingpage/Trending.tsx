import React from "react";
import Courses from "../courses/Courses";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PopularCourses = () => {
  return (
    <div className="bg-download-bg w-full flex flex-col font-roboto text-black px-6 my-16 py-16 ">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <h3>Most Trending Courses</h3>
        </div>
      </div>
      <div className="w-full my-4 gap-2 flex">
        <div>
          <Courses />
        </div>
        <div>
          <Courses />
        </div>
        <div className="hidden sm:block">
          <Courses />
        </div>
      </div>
      <div className="w-full my-4 gap-2 flex">
        <div>
          <Courses />
        </div>
        <div>
          <Courses />
        </div>
        <div className="hidden sm:block">
          {" "}
          <Courses />
        </div>
      </div>
      <Link
        to="/"
        className="text-thrindle-blue flex items-center justify-center gap-2 rounded-[5px] text-[16px] my-8 p-1"
      >
        See more <BsArrowRight />
      </Link>
    </div>
  );
};

export default PopularCourses;
