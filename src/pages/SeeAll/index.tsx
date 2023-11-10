import SideNav from "../../components/dashboardNav/DashboardNav";
import Side from "../../components/sidebar/Sidebar";
import SeeAll from "../../components/dashboard/SeeAll";

const Sidebar = () => {
  return (
    <div className="bg-bg-blue w-full">
        <SideNav />
      
      <div className="w-full flex">
        <Side />
        <div className="pl-4 lg:pl-64 sm:pl-20">
          <SeeAll />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;