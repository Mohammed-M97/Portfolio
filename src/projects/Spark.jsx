import React, { useState } from 'react'
import Spark01 from '../assets/projects/PicsOfProject/Spark01.jpg'
import Spark3 from '../assets/projects/PicsOfProject/Spark3.jpg'
import Spark4 from '../assets/projects/PicsOfProject/Spark4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {SiJavascript, SiBootstrap, SiHtml5} from 'react-icons/si'

function Spark() {
    const slides = [
        {
          url: `${Spark01}`,
        },

        {
          url: `${Spark3}`,
        },
    
        {
          url: `${Spark4}`,
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div name='Spark' className='w-full h-[1350px] background'>
        {/* Container */}
        
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl mt-10 bg-center bg-cover duration-500'
      ></div>
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
              Spark
          </p>
          {/* <h1 className='text-4xl sm:text-7xl font-bold textmain'>Spark is an social media</h1> */}
          <h2 className='text-4xl sm:text-6xl font-bold textcolor'>Spark is an social media</h2>
          <p className='textcolor text-1xl sm:text-2xl py-4 max-w-[700px]'>
              Spark is a photo sharing social networking Platforms. The app allows users to upload posts. Users can browse other users, view trending content,
              And user can edit or delet posts.
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
              <SiJavascript size={'30px'} />
            </span>
          </h3>
          <div>
              <a href="https://spark-soical-media.netlify.app/" target="__blank">
                <button  className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg '>
                    View Work
                </button>
              </a>
              <a href="https://github.com/Mohammed-M97/Spark-soical-media-app" target="__blank">
                <button  className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg '>
                    View Code
                </button>
              </a>
          </div>
      </div>
    </div>
  )
}

export default Spark
