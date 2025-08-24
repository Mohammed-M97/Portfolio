import { useState } from 'react'
import omar00 from '../assets/projects/PicsOfProject/omar00.png'
import omar01 from '../assets/projects/PicsOfProject/omar01.png'
import omar02 from '../assets/projects/PicsOfProject/omar02.png'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaBootstrap, FaReact, FaSass } from "react-icons/fa";

function Omar() {
    const slides = [
        { url: omar00 },
        { url: omar01 },
        { url: omar02 },
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
        <div name='Omar' className='w-full h-[1350px] background'>
            {/* Container */}

            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 group'>
                <div className='relative w-full h-full'>
                    {imageLoading && (
                        <div className='absolute inset-0 flex items-center justify-center bg-gray-200 rounded-2xl mt-10'>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600'></div>
                        </div>
                    )}
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-2xl mt-10 bg-center bg-cover duration-500'
                    >
                        <img 
                            src={slides[currentIndex].url} 
                            alt={`Toyzer project screenshot ${currentIndex + 1}`}
                            className='w-full h-full object-cover rounded-2xl opacity-0'
                            onLoad={handleImageLoad}
                        />
                    </div>
                </div>
                {/* Left Arrow */}
                <div 
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                    onClick={prevSlide}
                    onKeyDown={(e) => e.key === 'Enter' && prevSlide()}
                    tabIndex="0"
                    role="button"
                    aria-label="Previous image"
                >
                    <BsChevronCompactLeft size={30} />
                </div>
                {/* Right Arrow */}
                <div 
                    className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                    onClick={nextSlide}
                    onKeyDown={(e) => e.key === 'Enter' && nextSlide()}
                    tabIndex="0"
                    role="button"
                    aria-label="Next image"
                >
                    <BsChevronCompactRight size={30} />
                </div>
                <div className='flex top-4 justify-center py-2' role="tablist" aria-label="Image carousel navigation">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            onKeyDown={(e) => e.key === 'Enter' && goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                            tabIndex="0"
                            role="tab"
                            aria-selected={slideIndex === currentIndex}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                <p className='nameText mx-auto font-bold border-b-4 mt-8 border-pink-600 ml-1'>
                    Lawyer Omar Ali John
                </p>
                <h2 className='text-4xl sm:text-6xl font-bold textcolor'>Omar </h2>
                <p className='textcolor text-1xl sm:text-2xl py-4 max-w-[700px]'>
                    Omar is a professional lawyer with expertise in various legal fields. He provides legal advice, represents clients in court, and helps them navigate complex legal issues. With a strong commitment to justice and a passion for helping others, Omar is dedicated to achieving the best possible outcomes for his clients.
                </p>
                <h3 className='nameText font-bold mb-4'>
                    Tools :
                    <span className='mx-4' style={{ display: 'inline-flex' }}>
                        <FaReact size={'30px'} />
                    </span>
                    <span className='mx-4' style={{ display: 'inline-flex' }}>
                        <FaBootstrap size={'35px'} />
                    </span>
                    <span className='mx-4' style={{ display: 'inline-flex' }}>
                        <FaSass size={'30px'} />
                    </span>
                </h3>
                <div>
                    <a href="https://zippy-swan-9b0623.netlify.app/#header/" target="__blank">
                        <button className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg '>
                            View Work
                        </button>
                    </a>
                    <a href="https://github.com/Mohammed-M97/lawyer-omar-portfolio" target="__blank">
                        <button className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg '>
                            View Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Omar;
