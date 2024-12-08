import Services from "./Services";
import homepageroom from "/images/homepageroom.jpg";
import friendshostel from "/images/friendshostel.jpg";


function NewHome() {
    return (
        <>
            <div className=" font-serif w-full md:h-4/6 grid lg:grid-cols-2 pb-20 lg:mt-0 md:mt-0 mt-20">

              {/* Background Image */}
                    <div 
                        className=" inset-0 bg-cover bg-center -z-10 h-full w-full grid-cols-2 fixed "
                        style={{ backgroundImage: `url(${homepageroom})` }}
                    ></div>

            <div className="relative col-start-2 md:mt-40 mt-12 justify-items-center">
                  

                    {/* Content */}
                    <h1 className="font-serif text-sky-800 lg:text-7xl text-5xl md:text-7xl animate-slideUpLeft">
                        ATMA MALIK
                    </h1>
                    <h2 className="font-serif text-black lg:text-7xl text-5xl md:text-7xl animate-slideUpRight">
                        GIRLS HOSTEL
                    </h2>
                    <div className="font-serif lg:text-3xl text-xl md:text-2xl ml-5 mt-5 lg:pt-16 md:-mb-20 justify-items-center lg:justify-items-start md:justify-items-start md:mt-20 md:ml-20 w-4/5 animate-fadeIn">
                        <p>
                        Welcome to <span className="text-sky-800">Atma Malik Girls Hostel</span>, where comfort meets affordability for students.
                        </p>
                        <br />
                        <p>Experience the perfect blend of community, convenience, and comfort.</p>
                    </div>
            </div>


                <div className="lg:hidden hidden md:mt-40 md:-mb-20 md:block">
                    <img src={friendshostel} alt="" 
                    className="lg:hidden hidden md:block"/>
                </div>


                {/* <div className="md:hidden hidden lg:block lg:col-start-2 justify-items-center lg:mt-24 lg:rounded-xl">
                    <img 
                    src={homepageroom} alt="Hostel Bedroom" 
                    className="lg:w-5/6 hiddden mt-10 rounded-xl shadow-xl md:hidden lg:block"/>
                </div> */}
            </div>
        </>
    );
}

export default NewHome;
