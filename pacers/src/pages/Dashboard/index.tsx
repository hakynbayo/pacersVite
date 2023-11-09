import React from "react";
import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import Enrolled from "../../components/dashboard/EnrolledCourses";
import Profile from "../../components/dashboard/Profile";
// import CompletedCourse from "../../components/dashboard/CompletedCourse";
// import ActiveCourse from "../../components/dashboard/ActiveCourse";
// import CourseProgress from "../../components/dashboard/CourseProgress";

const Sidebar = () => {
  return (
    <div className="bg-bg-blue w-full ">
      <SideNav isHome />
      <div className="w-full flex">
        <Side />
        <div className="px-4 sm:pl-64">

          <Enrolled />
        </div>
        <Profile/>
        </div>
      </div>
  );
};

export default Sidebar;
