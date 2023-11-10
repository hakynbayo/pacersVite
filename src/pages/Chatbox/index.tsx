import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import Chatbox from "../../components/dashboard/Chatbox";

const Sidebar = () => {
  return (
    <div className="bg-download-bg w-full ">
      <SideNav />
      <div className="w-full flex">
        <Side />
        <div className="pl-4 lg:pl-64 sm:pl-20">
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
