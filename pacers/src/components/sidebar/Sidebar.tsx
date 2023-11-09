import { useState } from 'react';
import { AiFillSignal, AiOutlineSetting } from 'react-icons/ai';
import { BsChat, BsQuestionSquare } from 'react-icons/bs';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tabs = [
    { id: 'dashboard', text: 'Dashboard', icon: <AiFillSignal /> },
    { id: 'assessment', text: 'Assessment', icon: <HiOutlineClipboardCheck /> },
    { id: 'quiz', text: 'Quiz', icon: <BsQuestionSquare /> },
    { id: 'chabox', text: 'Chabox', icon: <BsChat /> },
    { id: 'settings', text: 'Settings', icon: <AiOutlineSetting /> },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-white border shadow-md hidden lg:block sm:hidden w[25%] sm:w-[15%] min-h-screen p-4 ${isSidebarOpen ? '' : 'hidden'} sm:block fixed left-0 top-0 bottom-0`}>      
    <button
        className="sm:hidden text-2xl"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>
      <div className="mb-4 py-32">
        {tabs.map((tab) => (
          <Link to={`/${tab.id}`} key={tab.id}>
            <div
              onClick={() => setActiveTab(tab.id)}
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
