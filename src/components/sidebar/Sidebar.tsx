import { useState, useEffect } from 'react';
import { AiFillSignal, AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';
import { BsChat, BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  const tabs = [
    { id: 'dashboard', text: 'Dashboard', icon: <AiFillSignal /> },
    { id: 'assessment', text: 'Assessment', icon: <HiOutlineClipboardCheck /> },
    { id: 'quiz', text: 'Quiz', icon: <BsQuestionSquare /> },
    { id: 'chatbox', text: 'Chatbox', icon: <BsChat /> },
    { id: 'settings', text: 'Settings', icon: <AiOutlineSetting /> },
  ];

  useEffect(() => {
    // Extract the active tab from the current route
    const currentTab = location.pathname.substring(1);
    setActiveTab(currentTab);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-white border z-10 shadow-md lg:block sm:hidden w-[25%] sm:w-[15%] min-h-screen p-4 ${isSidebarOpen ? 'block' : 'hidden'} sm:block fixed left-0 top-0 bottom-0`}>
      <button
        className="text-2xl absolute right-10 top-20 my-34 z-30"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu />
      </button>
      <div className="mb-4 py-32">
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

export default Sidebar;
