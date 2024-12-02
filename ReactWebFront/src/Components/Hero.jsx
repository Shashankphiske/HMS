import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/Hero1.png';
import img2 from '../assets/images/Hero2.png';
import img3 from '../assets/images/Hero3.png';

function Hero() {
    const images = [
        [img1, img2], // Slide 1
        [img2, img3], // Slide 2
        [img3, img1], // Slide 3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3 seconds delay

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

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
        <div className="w-full flex flex-col items-center justify-center py-8 pt-20 pb-20 -mt-20">
            <div className="relative w-full max-w-5xl overflow-hidden">
                <div
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((imagePair, index) => (
                        <div key={index} className="flex-shrink-0 w-full flex justify-center">
                            <img
                                src={imagePair[0]}
                                className="md:block mx-2 object-cover h-44 md:h-96 w-3/2 md:w-1/2"
                                alt={`Slide ${index * 2 + 1}`}
                            />
                            <img
                                src={imagePair[1]}
                                className="ssm:hidden md:block mx-2 object-cover h-96 w-1/2"
                                alt={`Slide ${index * 2 + 2}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    onClick={goToPreviousSlide}
                >
                    &#10094; {/* Left arrow */}
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                    onClick={goToNextSlide}
                >
                    &#10095; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
}

export default Hero;
