import React, { useState } from 'react';
import Courses from '../courses/Courses';

const PopularCourses: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string | null) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-download-bg w-full flex flex-col font-roboto text-black px-6 py-16">
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
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
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
