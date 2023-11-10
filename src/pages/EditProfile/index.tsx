import SideNav from "../../components/dashboardNav/DashboardNav";
import ProfileSide from "../../components/profileSidebar";
import EditProfile from "../../components/editProfile";

const QuizPage = () => {
  return (
    <div className="bg-download-bg w-full ">
      <SideNav />
      <div className="w-full flex">
        <ProfileSide />
        <div className="pl-4 lg:pl-52 sm:pl-12">
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
