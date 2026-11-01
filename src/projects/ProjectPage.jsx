import { useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { data } from '../data/data.js'

function ProjectPage() {
    const { slug } = useParams();
    const project = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const touchStart = useRef(null);

    // Viewer: Esc closes, arrow keys move between images, page doesn't scroll behind it
    useEffect(() => {
        if (!viewerOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setViewerOpen(false);
            if (e.key === 'ArrowLeft') document.getElementById('viewer-prev')?.click();
            if (e.key === 'ArrowRight') document.getElementById('viewer-next')?.click();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [viewerOpen]);

    if (!project) {
        return <Navigate to='/work' replace />
    }

    const slides = project.slides;

    const goToSlide = (slideIndex) => {
        if (slideIndex === currentIndex) return;
        setCurrentIndex(slideIndex);
        setImageLoading(true);
        setZoomed(false);
    };

    const openViewer = () => {
        setZoomed(false);
        setViewerOpen(true);
    };

    const prevSlide = () => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    const nextSlide = () => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

    // Swipe left or right to change image (off while zoomed, so dragging scrolls the image)
    const swipeHandlers = slides.length > 1 ? {
        onTouchStart: (e) => {
            const t = e.touches[0];
            touchStart.current = { x: t.clientX, y: t.clientY };
        },
        onTouchEnd: (e) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start || zoomed) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - start.x;
            const dy = t.clientY - start.y;
            if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
            if (dx < 0) nextSlide(); else prevSlide();
        },
    } : {};

  return (
    <div name={project.slug} className='w-full min-h-screen background pt-[96px] pb-16'>
        {/* Gallery */}
        <div className='max-w-[1200px] w-full mx-auto px-4 group'>
            <div className='relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#112240]' {...swipeHandlers}>
                {imageLoading && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600'></div>
                    </div>
                )}
                <img
                    key={slides[currentIndex]}
                    src={slides[currentIndex]}
                    alt={`${project.name} project screenshot ${currentIndex + 1}`}
                    className={`w-full h-full object-contain duration-500 cursor-zoom-in ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setImageLoading(false)}
                    onClick={openViewer}
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
        {/* Full screen viewer: tap the image to zoom in, then scroll around it */}
        {viewerOpen && (
            <div
                className='fixed inset-0 z-50 bg-black flex flex-col'
                role='dialog'
                aria-modal='true'
                aria-label={`${project.name} screenshots`}
            >
                <div className='flex items-center justify-between px-4 h-14 shrink-0 text-white'>
                    <span className='text-sm opacity-80'>
                        {currentIndex + 1} / {slides.length} · {zoomed ? 'Tap to fit' : 'Tap to zoom'}
                    </span>
                    <button onClick={() => setViewerOpen(false)} aria-label='Close' className='p-2'>
                        <IoClose size={30} />
                    </button>
                </div>
                <div className='relative flex-1 min-h-0' {...swipeHandlers}>
                    <div className={`absolute inset-0 ${zoomed ? 'overflow-auto' : 'overflow-hidden flex items-center justify-center'}`}>
                        <img
                            src={slides[currentIndex]}
                            alt={`${project.name} project screenshot ${currentIndex + 1}`}
                            onClick={() => setZoomed(!zoomed)}
                            className={zoomed
                                ? 'max-w-none w-[250%] md:w-auto cursor-zoom-out'
                                : 'max-w-full max-h-full object-contain cursor-zoom-in'}
                        />
                    </div>
                    {/* Arrows sit on the sides, clear of the badge Netlify puts in the bottom corner */}
                    {slides.length > 1 && (
                        <>
                            <button id='viewer-prev' onClick={prevSlide} aria-label='Previous image'
                                className='absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white'>
                                <BsChevronCompactLeft size={30} />
                            </button>
                            <button id='viewer-next' onClick={nextSlide} aria-label='Next image'
                                className='absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white'>
                                <BsChevronCompactRight size={30} />
                            </button>
                        </>
                    )}
                </div>
                {/* Dots, with room underneath for the badge */}
                {slides.length > 1 && (
                    <div className='flex justify-center pt-2 pb-24 shrink-0'>
                        {slides.map((slide, slideIndex) => (
                            <button
                                key={slide}
                                onClick={() => goToSlide(slideIndex)}
                                className={`text-2xl ${slideIndex === currentIndex ? 'text-pink-600' : 'text-white/50'}`}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                            >
                                <RxDotFilled />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )}
    </div>
  )
}

export default ProjectPage
