import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { data } from '../data/data.js'

function ProjectPage() {
    const { slug } = useParams();
    const project = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);

    if (!project) {
        return <Navigate to='/work' replace />
    }

    const slides = project.slides;

    const goToSlide = (slideIndex) => {
        if (slideIndex === currentIndex) return;
        setCurrentIndex(slideIndex);
        setImageLoading(true);
    };

    const prevSlide = () => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    const nextSlide = () => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  return (
    <div name={project.slug} className='w-full min-h-screen background pt-[96px] pb-16'>
        {/* Gallery */}
        <div className='max-w-[1200px] w-full mx-auto px-4 group'>
            <div className='relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#112240]'>
                {imageLoading && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600'></div>
                    </div>
                )}
                <img
                    key={slides[currentIndex]}
                    src={slides[currentIndex]}
                    alt={`${project.name} project screenshot ${currentIndex + 1}`}
                    className={`w-full h-full object-contain duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setImageLoading(false)}
                />

                {slides.length > 1 && (
                    <>
                        {/* Left Arrow */}
                        <button
                            className='md:hidden md:group-hover:block absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 rounded-full p-1 sm:p-2 bg-black/40 text-white'
                            onClick={prevSlide}
                            aria-label='Previous image'
                        >
                            <BsChevronCompactLeft size={30} />
                        </button>
                        {/* Right Arrow */}
                        <button
                            className='md:hidden md:group-hover:block absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 rounded-full p-1 sm:p-2 bg-black/40 text-white'
                            onClick={nextSlide}
                            aria-label='Next image'
                        >
                            <BsChevronCompactRight size={30} />
                        </button>
                    </>
                )}
            </div>

            {slides.length > 1 && (
                <div className='flex justify-center py-2' role='tablist' aria-label='Image carousel navigation'>
                    {slides.map((slide, slideIndex) => (
                        <button
                            key={slide}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl ${slideIndex === currentIndex ? 'text-pink-600' : 'textcolor'}`}
                            role='tab'
                            aria-selected={slideIndex === currentIndex}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        >
                            <RxDotFilled />
                        </button>
                    ))}
                </div>
            )}
        </div>

        {/* Details */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
            <p className='nameText font-bold border-b-4 mt-8 border-pink-600 self-start'>
                {project.label || project.name}
            </p>
            <h2 className='text-4xl sm:text-6xl font-bold textcolor mt-2'>{project.title}</h2>
            <p className='textcolor text-xl sm:text-2xl py-4 max-w-[700px]'>
                {project.description}
            </p>
            <h3 className='nameText font-bold mb-4 flex flex-wrap items-center gap-y-2'>
                Tools :
                {project.tools.map(({ name, icon: Icon }) => (
                    <span key={name} className='mx-4 inline-flex' title={name} aria-label={name}>
                        <Icon size={'30px'} />
                    </span>
                ))}
            </h3>
            <div>
                {project.demo && (
                    <a href={project.demo} target='_blank' rel='noreferrer'>
                        <button className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg'>
                            Live Demo
                        </button>
                    </a>
                )}
                {project.code && (
                    <a href={project.code} target='_blank' rel='noreferrer'>
                        <button className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg'>
                            {project.api ? 'Frontend Code' : 'View Code'}
                        </button>
                    </a>
                )}
                {project.api && (
                    <a href={project.api} target='_blank' rel='noreferrer'>
                        <button className='textmain group mr-4 border-2 px-6 py-3 my-2 buttonBg'>
                            API Code
                        </button>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectPage
