import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SiBootstrap, SiHtml5, SiPhp, SiMysql, SiJavascript } from 'react-icons/si'
import ChatApp1 from '../assets/projects/PicsOfProject/ChatApp1.jpg'
import ChatApp2 from '../assets/projects/PicsOfProject/ChatApp2.jpg'
import ChatApp4 from '../assets/projects/PicsOfProject/ChatApp4.jpg'

function Chatapp() {
    const slides = [
        {
          url: `${ChatApp4}`,
        },
        {
          url: `${ChatApp1}`,
        },
        {
          url: `${ChatApp2}`,
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [imageLoading, setImageLoading] = useState(true);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setImageLoading(true);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setImageLoading(true);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setImageLoading(true);
      };

      const handleImageLoad = () => {
        setImageLoading(false);
      };
  return (
    <div name='chatapp' className='w-full h-[1350px] background'>
        {/* Container */}
        
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 group'>
      <div className='relative w-full h-full'>
        {imageLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl mt-10'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600'></div>
          </div>
        )}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-xl mt-10 bg-center bg-cover duration-500'
        >
          <img 
            src={slides[currentIndex].url} 
            alt={`Chat app screenshot ${currentIndex + 1}`}
            className='w-full h-full object-cover rounded-xl opacity-0'
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      </div>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
          <p className='nameText mx-auto font-bold border-b-4 mt-8 border-pink-600 ml-1'>
              Chat App
          </p>
          <h2 className='text-4xl sm:text-6xl font-bold textcolor'>Chat app let you communicate with proper way</h2>
          <p className='textcolor text-1xl sm:text-2xl py-4 max-w-[700px]'>
          Services is an online learning platform that allows users to choose from a variety of courses, each of which is designed to teach a specific skill or topic. Users can also create their own courses, which can be shared with others. The app also includes a dashboard for admins, which allows them to register users, create new courses, and edit existing courses.
          </p>
          <h3 className='nameText font-bold mb-4'>
            Tools :
            <span className='mx-4' style={{display: 'inline-flex'}}>
              <SiHtml5 size={'30px'} />
            </span>
            <span className='mx-4' style={{display: 'inline-flex'}}>
              <SiBootstrap size={'35px'} />
            </span>
            <span className='mx-4' style={{display: 'inline-flex'}}>
              <SiJavascript size={'35px'} />
            </span>
            <span className='mx-4' style={{display: 'inline-flex'}}>
              <SiPhp size={'30px'} />
            </span>
            <span className='mx-4' style={{display: 'inline-flex'}}>
              <SiMysql size={'30px'} />
            </span>
          </h3>
          <div>
              <a href="https://github.com/Mohammed-M97/Realtime-Chat-App-client" target="__blank">
                <button  className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg '>
                    View Code
                </button>
              </a>
          </div>
      </div>
    </div>
  )
}

export default Chatapp
