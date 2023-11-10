import { useState } from "react";
import profilepic from "../../assets/profilepic.svg";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
  return (
    <div className="w-full my-20 mx-4 sm:mx-44 gap-12 text-grey">
      <p className="text-2xl flex  items-center gap-4 mb-2"> Personal Info</p>
      <p className="text-[12px] border-b-2 border-gray-100">
        Update your profile, account details, and password to personalize your
        experience
      </p>

      <div className="border-b-2 border-gray-100  flex justify-between gap-4 pb-4 my-4">
        <div>
          <img src={profilepic} alt="profilepic" />
          <p>Profile Picture</p>
        </div>
        <div>
          <div className="mt-6 flex  items-center gap-6">
            <button
              className="rounded-2xl px-4 py-1 bg-blue-600 text-white"
              // leftIcon={PiBasket}
            >
              Upload
            </button>
            <button className="bg-white text-grey px-4 py-1 border border-grey  rounded-2xl">
              Remove{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-xl mt-8 p-6 bg-white">
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-grey">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 w-[50%] border rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-grey">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 w-[50%] border rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-grey">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-[50%] border rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-grey">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-[50%] border rounded-2xl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-grey">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 p-2 w-[50%] border rounded-2xl"
          />
        </div>
      </form>
    </div>

      
    </div>
  );
};

export default EditProfile;
