import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="font-serif w-full lg:h-screen ml-40 md:ml-0 pb-10 pt-5 md:pb-10 md:h-[400px] lg:grid md:grid lg:grid-cols-2 flex flex-col items-center">
      <div 
        className="col-start-2 justify-items-center row-start-1 md:mr-14"
        data-aos="fade-up"
      >
        <h2 
          className="lg:text-6xl text-4xl md:mr-28 md:text-4xl text-amber-950 mt-2 lg:pt-12 md:mt-4"
          data-aos="fade-up"
        >
          Services
        </h2>
        <div 
          className="lg:text-3xl text-xl md:text-md mt-2 ml-10 md:ml-0 lg:pt-12 md:mt-10 w-11/12 md:w-5/6 lg:w-11/12 space-y-4"
          data-aos="fade-left"
        >
          <p>Single, double, and shared rooms with detailed descriptions.</p>
          <p>Amenities like attached bathrooms, air conditioning, and balconies.</p>
          <p>On-demand maintenance for rooms or facilities.</p>
          <p>24/7 electricity and water supply.</p>
          <p>
            Proximity to Sanjivani college, public transport, and essential services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
