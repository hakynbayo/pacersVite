import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import Enrolled from "../../components/dashboard/EnrolledCourses";
import Profile from "../../components/dashboard/Profile";


const Sidebar = () => {
  return (
    <div className="bg-bg-blue w-full ">
      <SideNav />
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
