import { useState, useEffect } from 'react';
import img1 from '../assets/images/Hero1.png';
import img2 from '../assets/images/Hero2.png';
import img3 from '../assets/images/Hero3.png';

function FrontWelcome() {
    const images = [img1, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3 seconds delay

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Manual controls
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div className="flex items-center justify-center mt-24 mb-4">
                <div className="rounded-xl shadow-2xl md:w-[1400px] md:h-[620px] items-center flex">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-start-1 pl-10 pr-10">
                            <div className='grid grid-cols-4 grid-rows-2 md:ml-24 md:mt-1'>
                            <h1 className='text-7xl col-start-1 row-start-1 col-span-3'>
                                NAME
                            </h1>
                            <h1 className='text-7xl col-start-2 col-span-3 row-start-2'>
                                HOSTEL
                            </h1>
                            </div>
                            <p className='md:mt-10 text-lg'>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                                the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty
                            </p>
                        </div>
                        <div className="col-start-2 w-[600px] relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0"
                                    >
                                        <img
                                            className="w-[550px] h-[400px] object-cover"
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev absolute top-1/2 -left-8 transform -translate-y-1/2"
                                onClick={goToPreviousSlide}
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next absolute top-1/2 -right-8 transform -translate-y-1/2"
                                onClick={goToNextSlide}
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrontWelcome;
