import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/footer-pattern.svg")`,
      }}
      className="bg-footer-bg font-roboto text-white px-4 sm:px-6 py-20 "
    >
      <section className="flex flex-col justify-between pb-36 sm:flex-row ">
        <div>
          <div className="mt-4 mb-8 w-[72%] gap-10">
            <h4 className="items-end mb-4 font-[400]">PACER LMS</h4>
            <p>
              Pacer LMS is a learning platform that offers diverse courses and
              resources that cater for your educational needs.
            </p>
          </div>
        </div>

        <div className="flex justify-between w-full sm:w-[50%] ">
          <div className="flex flex-col w-full text-[10px] sm:text-[12px]">
            <h4 className="font-normal">Pages</h4>
            <Link to={"/"}>Active Courses</Link>
            <Link to={"/"}>Enrolled Courses</Link>
            <Link to={"/"}>Virtual Classroom</Link>
            <Link to={"/"}>Assessment</Link>
            <Link to={"/"}>Payment</Link>
            <Link to={"/"}>Quiz</Link>
          </div>
          <div className="flex flex-col w-full text-[10px] sm:text-[12px]">
            <h4 className="font-normal">Community</h4>
            <Link to={"/"}>Learners</Link>
            <Link to={"/"}>Partners</Link>
            <Link to={"/"}>Instructors</Link>
            <Link to={"/"}>Testimonial</Link>
            <Link to={"/"}>Achievements</Link>
            <Link to={"/"}>Profile</Link>
          </div>
          <div className="flex flex-col w-full text-[10px] sm:text-[12px]">
            <h4 className="font-normal">Support</h4>
            <Link to={"/"}>Chatbox</Link>
            <Link to={"/"}>Privacy</Link>
            <Link to={"/"}>Contact</Link>
            <Link to={"/"}>Help</Link>
            <Link to={"/"}>Terms</Link>
          </div>
          <div className="flex flex-col w-full text-[10px] sm:text-[12px]">
            <h4 className="font-normal">Get In Touch</h4>
            <div className="flex">
              <CiLocationOn />
              <p className="w-[60%] sm:[30%]">
                Pacer Labs 10 Hughes Avenue, Alagomeji Yaba, Lagos
              </p>
            </div>
            <div className="flex items-center w-[80%] sm:w-[60%]">
              <TfiWorld />
              <p className="">info@pacerlabs <br />.co</p>
            </div>
            <div className="flex items-center">
              <BsTelephone />
              <p className='w-[60%] sm:[30%]'>+234 (816) 180 7126</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
