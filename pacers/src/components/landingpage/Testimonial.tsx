import React, { useState, useEffect } from 'react';
import { Courses } from '../../constants/data';
import quote from '../../assets/Vector.svg';

import { motion } from 'framer-motion';

const Download: React.FC = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(Courses.length / itemsPerPage);
  const paginatedCourses = Courses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (currentPage + 1) % totalPages;
      setCurrentPage(nextPage);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, totalPages]);

  return (
    <div className="bg-download-bg flex flex-col font-roboto text-black px-6 py-32">
      <div>
        <p className="font-nunito font-400 text-heading text-[28px]">
          Testimonies from our Valued Student
        </p>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-between w-full mt-16 gap-6"
        id="Courses"
      >
        {paginatedCourses &&
          paginatedCourses.map((n) => (
            <motion.div
              key={n.id}
              className="border border-member-blue w-full sm:w-[40%] rounded-md p-2"
            >
              <div className="flex items-center gap-2 text-gray-500">
                <div className="relative z-90 bottom-[44px]">
                  <img src={quote} alt="quote-svg" />
                </div>
                <img
                  src={n.imageSrc}
                  className="rounded-md my-4"
                  alt="project image"
                />
                <p>{n.name}</p>
              </div>

              <div className="flex flex-1 w-[70%] items-center justify-between">
                <p className="text-lg text-gray-300">
                  <span className="block text-sm text-gray-500">{n.text}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <img
                  src={n.image}
                  className="rounded-md my-4"
                  alt="project image"
                />
              </div>
            </motion.div>
          ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 p-1 ${
              currentPage === index
                ? 'bg-blue-500 text-white w-6 h-1 rounded-full'
                : 'bg-blue-200 text-blue-500 w-3 h-1 rounded-full'
            }`}
            onClick={() => handlePageChange(index)}
          >
            &nbsp;
          </button>
        ))}
      </div>
    </div>
  );
};

export default Download;
