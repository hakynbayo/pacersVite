import React, { useState } from 'react';
import Courses from '../courses/Courses'

const PopularCourses = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName: unknown | React.SetStateAction<null>) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="bg-download-bg w-full flex flex-col font-roboto text-black px-16 py-16 ">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <h3>Popular Courses</h3>
        </div>
    <div className="flex justify-end">
      <button
        className={`py-1 px-2 border-2 rounded-md mr-2 ${
          activeButton === 'All Courses' ? 'bg-black text-white' : 'border-course-btn'
        }`}
        onClick={() => handleButtonClick('All Courses')}
      >
        All Courses
      </button>
      <button
        className={`py-1 px-2 border-2 rounded-md mr-2 ${
          activeButton === 'Web Design' ? 'bg-black text-white' : 'border-course-btn'
        }`}
        onClick={() => handleButtonClick('Web Design')}
      >
        Web Design
      </button>
      <button
        className={`py-1 px-2 border-2 rounded-md mr-2 ${
          activeButton === 'Data' ? 'bg-black text-white' : 'border-course-btn'
        }`}
        onClick={() => handleButtonClick('Data')}
      >
        Data
      </button>
      <button
        className={`py-1 px-2 border-2 rounded-md mr-2 ${
          activeButton === 'Cybersecurity' ? 'bg-black text-white' : 'border-course-btn'
        }`}
        onClick={() => handleButtonClick('Cybersecurity')}
      >
        Cybersecurity
      </button>
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
