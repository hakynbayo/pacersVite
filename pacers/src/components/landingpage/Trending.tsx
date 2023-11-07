import React from "react";
import Courses from '../courses/Courses'

const PopularCourses = () => {
  return (
    <div className="bg-download-bg w-full flex flex-col font-roboto text-black px-16 my-16 py-16 ">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <h3>Most Trending Courses</h3>
        </div>
      </div>
      <div className="bg-download-bg w-full my-4 flex">
        <div>
            <Courses/>
        </div>
        <div>
            <Courses/>
        </div>
        <div>
            <Courses/>
        </div>
      </div>
      <div className="bg-download-bg w-full flex">
        <div>
            <Courses/>
        </div>
        <div>
            <Courses/>
        </div>
        <div>
            <Courses/>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
