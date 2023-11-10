import { BsFillMicFill } from "react-icons/bs";

const Chatbox = () => {
  return (
    <div className="mt-24 gap-10 flex font-light flex-col mx-1 w-full px-8 leading-10">
      <div>
        <p>Hey Kenneth! I’m your assistant. Fell free to ask me any question</p>
      </div>

      <div className="b-2 bg-bg-blue font-light shadow-md rounded-2xl p-4">
        <p>Can you explain briefly the concept of digital marketing?</p>
      </div>

      <div className="b-2 bg-chat w-full shadow-md font-light leading-6 rounded-2xl p-4">
        <p>
          Sure! Digital marketing is a broad term that refers to the use of
          digital channels, such as internet, social media, email, and search
          engines, to promote and advertise products or services. It encompasses
          a wide range of activities, including online advertising, content
          marketing, social media marketing, email marketing, search engine
          optimization (SEO), AND MORE, ALL AIMED AT REACHING AND ENGAGING WITH
          A TARGET AUDIENCE ONLINE TO ACHIEVE MARKETING GOALS.
        </p>
      </div>
      <div className="mt-64 w-full flex gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="w-[85%] h-[34px] py-8 rounded-2xl border text-[14px] border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button  className="w-[5%] border-2 text-grey rounded-2xl h-[64px] p-3">

          <BsFillMicFill size={24} className='text-center'/>    
          </button>
      </div>
    </div>
  );
};

export default Chatbox;
