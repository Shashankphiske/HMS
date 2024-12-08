import React from 'react';
import img1 from '../assets/images/hos1.jpg';
import img2 from '../assets/images/hos2.jpg';
import img3 from '../assets/images/hos3.jpg';
import img4 from '../assets/images/hos4.jpg';

const Images = (props) => {
  return (
    <div className="relative overflow-hidden rounded-xl"> {/* Apply rounded corners to the container */}
      <img
        className="rounded-t-[50px] h-[400px] w-[350px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        src={props.img}
        alt=""
      />
    </div>
  );
};

function Gallery() {
  return (

    <div className="h-[210vh] lg:h-screen md:ml-0 mt-[200px] ml-40 bg-orange-50 w-full p-5">
      <h1 className="font-serif text-6xl ml-10 text-amber-950 mt-5 flex justify-start">Gallery</h1>
      <div className="gap-4 mt-8 flex-wrap p-5 flex justify-center items-center">
        <Images img={img1} />
        <Images img={img2} />
        <Images img={img3} />
        <Images img={img4} />
      </div>
    </div>
  );
}

export default Gallery;
