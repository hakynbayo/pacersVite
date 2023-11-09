import React from "react";
import About from "../../assets/about-image.svg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="bg-download-bg flex flex-col-reverse sm:flex-row justify-start  font-roboto text-black px-6 py-32 ">
      <div className="px-16 w-full">
        <img src={About} alt="Home-image" />
      </div>
      <div className=" w-full">
        <h3 className="mb-12">About Us</h3>
        <p className="w-[80%] leading-8 mb-8">
          We are passionate about education and dedicated to empowering
          individuals to reach their full potential through lifelong learning.
          We make high-quality education accessible to everyone, regardless of
          their background or location.
        </p>
        
          <Link
            to="/"
            className="text-thrindle-blue flex items-center gap-2 rounded-[5px] text-[16px] p-1"
          >
        See more <BsArrowRight />
            
          </Link>
       
      </div>
    </div>
  );
};

export default AboutUs;
