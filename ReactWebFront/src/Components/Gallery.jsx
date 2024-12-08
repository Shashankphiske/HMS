import React from 'react';
import img1 from '../assets/images/hos1.jpg';
import img2 from '../assets/images/hos2.jpg';
import img3 from '../assets/images/hos3.jpg';
import img4 from '../assets/images/hos4.jpg';

const Images = (props) => {
  return (
    <div className="relative overflow-hidden rounded-xl"> {/* Apply rounded corners to the container */}
      <img
        className=" rounded-t-[50px] h-[400px] w-[350px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        src={props.img}
        alt=""
      />
    </div>
  );
};

function Gallery() {
  return (
<<<<<<< HEAD
    <div className="h-screen mt-[200px] bg-sky-100 w-full rounded-t-[50px] p-5">
      <h1 className="font-serif text-7xl mt-[100px] flex justify-start">Gallery</h1>
      <div className="gap-4 mt-8 flex-wrap p-5 flex justify-center items-center">
        <Images img={img1} />
        <Images img={img2} />
        <Images img={img3} />
        <Images img={img4} />
      </div>
=======
    <div className=' mt-[200px] bg-orange-50 w-full rounded'>
      <h1 className='font-serif text-7xl mt-[100px] md:mt-12 flex justify-start md:ml-16'>Gallery</h1>
      
      <div className=' gap-4 mt-8 flex-wrap p-5 flex justify-center items-center '>
            <Images/>
            <Images/>
            <Images/>
            <Images/>
>>>>>>> da8f563d5987ae66bc4c8c2bd89df8b25fe6c602
    </div>
  );
}

export default Gallery;
