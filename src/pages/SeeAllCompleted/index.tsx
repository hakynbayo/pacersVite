import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import SeeAllComplete from "../../components/dashboard/SeeAllComplete";

const Sidebar = () => {
  return (
    <div className="bg-bg-blue w-full">
        <SideNav />
      
      <div className="w-full flex">
        <Side />
        <div className="pl-4 lg:pl-64 sm:pl-20">
          <SeeAllComplete />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;