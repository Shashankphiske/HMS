import React from 'react';
import img1 from '../assets/images/Hero1.png';
import img2 from '../assets/images/Hero2.png';
import img3 from '../assets/images/Hero3.png';

function Hero() {
  return (
    <div className="w-full bg-zinc-200 flex flex-col items-center justify-center py-8 flex flex-col items-center justify-center pt-28 ">
      {/* bootstrap CSS is used for below style */}
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade relative w-full max-w-5xl" data-bs-ride="carousel">
        <div className="carousel-inner">
        
          <div className="carousel-item active">
            <div className="flex justify-center">
              <img src={img1} className="block mx-2 object-cover h-44 md:h-96 w-3/2 md:w-1/2 md:rounded-2xl rounded-lg" alt="Slide 1" />
              <img src={img2} className=" md:block hidden mx-2 object-cover h-96 w-1/2 md:rounded-2xl rounded-lg" alt="Slide 2" />
            </div>
          </div>

         
          <div className="carousel-item">
            <div className="flex justify-center">
              <img src={img2} className="block md:rounded-2xl mx-2 object-cover h-44 md:h-96 w-3/2 md:w-1/2 rounded-lg" alt="Slide 3" />
              <img src={img3} className=" md:block md:rounded-2xl hidden mx-2 object-cover h-96 w-1/2 rounded-lg" alt="Slide 4" />
            </div>
          </div>

       
          <div className="carousel-item">
            <div className="flex justify-center">
              <img src={img3} className="block md:rounded-2xl mx-2 object-cover h-44 md:h-96 w-3/2 md:w-1/2 rounded-lg" alt="Slide 5" />
              <img src={img1} className="md:block md:rounded-2xl hidden mx-2  object-cover h-96 w-1/2 rounded-lg" alt="Slide 6" />
            </div>
          </div>
        </div>

     
        <button className="carousel-control-prev absolute top-1/2 -translate-y-2/2 left-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

        </button>
        <button className="carousel-control-next absolute top-1/2 -translate-y-2/2 right-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">

        </button>
      </div>  
    </div>
  );
}

export default Hero;
