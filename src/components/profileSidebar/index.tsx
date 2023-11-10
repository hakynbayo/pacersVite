import { useState, useEffect } from 'react';
import { AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';
import { BsChat, BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const ProfileSidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  const tabs = [
    { id: 'personal-info', text: 'Personal Info', icon: <AiOutlineSetting /> },
    { id: 'notifications', text: 'Notifications', icon: <HiOutlineClipboardCheck /> },
    { id: 'learning-hours', text: 'Learning Hours', icon: <BsQuestionSquare /> },
    { id: 'language', text: 'Language', icon: <BsChat /> },
    { id: 'payment', text: 'Payment', icon: <AiOutlineMenu /> },
    { id: 'privacy', text: 'Privacy', icon: <AiOutlineSetting /> },
  ];

  useEffect(() => {
    // Extract the active tab from the current route
    const currentTab = location.pathname.substring(1);
    setActiveTab(currentTab);
  }, [location]);


  return (
    <div className={`bg-white border z-10 shadow-md lg:block sm:hidden w-[25%] sm:w-[25%] min-h-screen p-4 ${isSidebarOpen ? 'block' : 'hidden'} sm:block fixed left-0 top-0 bottom-0`}>
    
      <div className="mb-4 py-20">
        <p className='text-[18px] mb-8'>Account</p>
        {tabs.map((tab) => (
          <Link to={`/${tab.id}`} key={tab.id}>
            <div
              className={`flex items-center gap-2 py-2 px-4 mb-8 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gray-200 text-blue-500'
                  : 'text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
