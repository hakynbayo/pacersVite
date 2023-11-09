import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import Assessment from "../../components/dashboard/Assessment";


const Sidebar = () => {
  return (
    <div className="bg-bg-blue w-full ">
      <SideNav />
      <div className="w-full flex">
        <Side />
        <Assessment/>
        </div>
      </div>
  );
};

export default Sidebar;
