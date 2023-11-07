import React from "react";
import FAQs from "../../components/landingpage/FAQs";
import Footer from "../../components/landingpage/Footer";
import HereSection from "../../components/landingpage/HereSection";
import NavBar from "../../components/navBar/NavBar";
import Download from "../../components/landingpage/Download";
import AboutUs from "../../components/landingpage/About";
import PopularCourses from "../../components/landingpage/PopularCourses";
import Trending from "../../components/landingpage/Trending";
import Testimonial from "../../components/landingpage/Testimonial";

const HomePage = () => {
  return (
    <div className="w-full ">
      <NavBar isHome />
      <HereSection />
      <PopularCourses/>
      <Trending/>
      <AboutUs/>
      <Testimonial/>
      <FAQs />
      <Download />
      <Footer />
    </div>
  );
};

export default HomePage;
