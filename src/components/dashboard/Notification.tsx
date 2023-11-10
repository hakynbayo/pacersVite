import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

type NotificationModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const customModalStyles = {
  content: {
    width: "50%", // Adjust the width as needed
    height: "60%",
    margin: "10rem auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
};

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Notification Modal"
      style={customModalStyles}
    >
      <button
        onClick={onRequestClose}
        className="relative mx-4 left-[94%] text-grey"
      >
        <AiOutlineClose size={25} />
      </button>

      <div className=" font-roboto w-full flex flex-col gap-16 text-black my-4 p-6">
        <div className="flex justify-between ">
          <div className="">
            <div className="text-[20px] text-grey flex items-center gap-4">
              <FaVideo />
              <div>
                <p>Digital marketing class at 07:30 AM</p>
                <p className="text-[15px] text-grey">
                  You have an upcoming meeting with Atere
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-grey text-[14px]">8:40PM</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="">
            <div className="text-[20px] text-grey flex items-center gap-4">
              <IoIosCheckmarkCircle />
              <div>
                <p>Congratulation</p>
                <p className="text-[15px] text-grey">
                You have successfully completed the  principles of software engineering
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-grey text-[14px]">6:00AM</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="">
            <div className="text-[20px] text-grey flex items-center gap-4">
              <IoIosCheckmarkCircle />
              <div>
                <p>Congratulation</p>
                <p className="text-[15px] text-grey">
                You have successfully completed the  principles of software engineering
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-grey text-[14px]">6:00AM</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
