import { Link } from 'react-router-dom';
import { FaUser, FaRegBell, FaCog, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import {IoIosArrowBack}from  "react-icons/io"
import {MdOutlineCancel}from  "react-icons/md"
import {BiLock}from  "react-icons/bi"

const Settings = () => {
  return (
    <div className="w-full my-20 mx-2 gap-12 text-grey">
      <h1 className="text-2xl font-bold flex items-center gap-4 mb-16"> <IoIosArrowBack/> Settings</h1>

      <div className="border-b-2 border-gray-100 pb-4 mb-4">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-100">Account Settings</h2>
        <ul className="list-none leading-10 ">
            <Link to="/account-details">
          <li className="mb-2 flex items-center">
              <FaUser className="mr-4" /> Account details
          </li>
            </Link>
            <Link to="/security">
          <li className="mb-2 flex items-center">
              <BiLock className="mr-4" /> Security
          </li>
            </Link>
            <Link to="/delete-account">
          <li className="mb-2 flex items-center">
              <MdOutlineCancel className="mr-4" /> Delete account
          </li>
            </Link>
        </ul>
      </div>

      <div className="border-b-2 border-gray-100 pb-4 mb-4">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-100">Push Notifications</h2>
        <ul className="list-none leading-10">
            <Link to="/study-reminder">
          <li className="mb-2 flex items-center">
              <FaRegBell className="mr-4" /> Study reminder
          </li>
            </Link>
            <Link to="/assessment">
          <li className="mb-2 flex items-center">
              <FaRegBell className="mr-4" /> Assessment
          </li>
            </Link>
            <Link to="/quiz-reminder">
          <li className="mb-2 flex items-center">
              <FaRegBell className="mr-4" /> Quiz reminder
          </li>
            </Link>
        </ul>
      </div>

      <div className="border-b-2 border-gray-100 pb-4 mb-4">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-100">Support</h2>
        <ul className="list-none leading-10">
            <Link to="/about-lms">
          <li className="mb-2 flex items-center">
              <FaInfoCircle className="mr-4" /> About Pacer LMS
          </li>
            </Link>
            <Link to="/terms-of-use">
          <li className="mb-2 flex items-center">
              <FaCog className="mr-4" /> Terms of use
          </li>
            </Link>
            <Link to="/report-abuse">
          <li className="mb-2 flex items-center">
              <FaInfoCircle className="mr-4" /> Report an abuse
          </li>
            </Link>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-100">Logout</h2>
        <ul className="list-none leading-10">
            <Link to="/logout">
          <li className="flex items-center">
              <FaSignOutAlt className="mr-4" /> Logout
          </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
