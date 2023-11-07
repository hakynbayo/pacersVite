import React from 'react';
// import { PiBasket, PiWhatsappLogoThin } from 'react-icons/pi';
import HeroImage from "../../assets/Image.svg"



const HereSection = () => {
  return (
    <section
      className='bg-bg-blue overflow-hidden bg-cover bg-no-repeat pb-10'
    >
      <section className=' flex flex-col w-full items-center justify-between my-8 gap-10 px-6  py-10 sm:px-2 md:flex-row md:py-20 lg:px-6 xl:px-16 '>
      <div className='  relative w-[355px] sm:h-[335px]  sm:w-[335px] lg:h-[400px] lg:w-[400px] xl:h-[582px] xl:w-[582px]'>
          <p className=' text-thrindle-black text-left font-sora  w-full text-[40px] font-bold leading-[50px] md:block md:text-[30px] md:leading-[70px] lg:text-[50px] '>
            Empower Your {' '}
            <br /> <span className='text-thrindle-blue'>Learning Journey </span>With Pacer LMS
          </p>
         
          <p className='text-thrindle-black text-left font-dm-sans w-full text-[16px] leading-[30px] md:w-[90%] md:text-[18px]'>
          Delve into our comprehensive learning platform and unleash your full potential.
          </p>
          <div className='mt-6 flex  items-center gap-6'>
            <button
              className='h-[56px] w-full rounded-[40px] md:w-[220px]  bg-blue-600 text-white'
              // leftIcon={PiBasket}
            >
              Explore all courses
            </button>
            <button
              className='bg-white text-yellow-300 border border-yellow-300 h-[56px] w-full  rounded-[40px] md:w-[220px]'
              // leftIcon={PiWhatsappLogoThin}
            >
              Explore all courses
            </button>
          </div>
        </div>
        <div className='relative'>
          <div className='  relative w-[355px] sm:h-[335px]  sm:w-[335px] lg:h-[400px] lg:w-[400px] xl:h-[582px] xl:w-[582px]'>
            <img
              src={HeroImage}
              alt='Home-image'
              className='block object-contain'
            />
          </div>
          
        </div>
      </section>
      
    </section>
  );
};

export default HereSection;
