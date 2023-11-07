import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "../../constants/data";
import { Icon } from "@iconify/react";
import {MdKeyboardArrowDown} from "react-icons/md"

const FAQs = () => {
  const [id, setId] = useState<number>();
  return (
    <div className="w-full  font-dm-sans mb-4 grid gap-10 px-16">
      <div className="overflow-hidden">
        <p className="font-sora mb-10 text-center text-[24px] font-[400]">
          Frequently Asked Questions
        </p>
        {faq.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-center mt-4 justify-between border-b-2 border-gray-200"
          >
            <div>
              <p
                className={`${
                  id === index && "pb-4"
                } text-thrindle-black/80 pt-8 text-[16px] font-[700]`}
              >
                {item.question}
              </p>
              {id === index && (
                <AnimatePresence>
                  <motion.p
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { ease: [0.42, 0, 0.58, 1] },
                    }}
                    exit={{ y: -100, opacity: 0 }}
                    className="mb-4"
                  >
                    {item.answer}
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
            <div>
              <MdKeyboardArrowDown
                onClick={() => setId(index)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
