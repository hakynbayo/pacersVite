import Active from "../../assets/active.svg"
import Active2 from "../../assets/active2.svg"

const ActiveCourse = () => {
  return (
    <div className="flex">
      <div className="flex-col px-6">
      <div className="bg-white font-roboto flex-col w-[90%] h-[35%] flex-wrap justify-start border shadow-sm rounded-2xl text-black px-6 my-12">
          <p className="w-full text-[22px] p-6">Active Courses</p>
          <div className="flex">
            <div className="flex-wrap bg-download-bg w-2/2 sm:w-1/2 rounded-2xl shadow-md my-6 mx-6 p-4">
              <img src={Active} alt="course-image" />
              <p className="w-[70%]">
                {" "}
                Strategies for Digital Marketing for Driving Traffic
              </p>
              <div>
                <div className="border-2 border-progress bg-progress rounded-2xl h-[8px] w-[90%] my-12">
                  <p className="flex relative justify-end z-90 bottom-[25px]">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-wrap hidden sm:block bg-download-bg w-1/2 rounded-md shadow-md my-6 mx-6 p-4">
              <img src={Active2} alt="course-image" />
              <p className="w-[70%]">
                {" "}
                Strategies for Digital Marketing for Driving Traffic
              </p>
              <div>
                <div className="border-2 border-progress bg-progress rounded-2xl h-[8px] w-[90%] my-12">
                  <p className="flex relative justify-end z-90 bottom-[25px]">
                    40%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCourse;
