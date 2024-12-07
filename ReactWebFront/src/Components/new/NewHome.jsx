import Navbar from "../Navbar";
import homepageroom from "/images/homepageroom.jpg";
import friendshostel from "/images/friendshostel.jpg";

function NewHome() {
    return (
        <>
            <div className="w-full md:h-4/6 bg-sky-50 grid lg:grid-cols-2 pb-20 lg:mt-0 md:mt-0 mt-20">

                <div className="col-start-1 md:mt-40 mt-12 justify-items-center">
                    <h1 className="text-sky-800 lg:text-8xl text-5xl md:text-7xl animate-slideUpLeft">NAME</h1>
                    <h2 className="text-black lg:text-8xl text-5xl md:text-7xl animate-slideUpRight">HOSTEL</h2>

                    <div className="lg:text-3xl text-xl md:text-2xl ml-5 mt-5 lg:pt-16 md:-mb-20 justify-items-center lg:justify-items-start md:justify-items-start md:mt-20 md:ml-20 w-4/5 animate-fadeIn">
                        <p>Welcome to [Your Hostel Name], where comfort meets affordability for students.</p>
                        <br />
                        <p>Experience the perfect blend of community, convenience, and comfort at [Your Hostel Name].</p>
                    </div>
                </div>
                <div className="lg:hidden hidden md:mt-40 md:block">
                    <img src={friendshostel} alt="" 
                    className="lg:hidden hidden md:block"/>
                </div>

                <div className="md:hidden hidden lg:block lg:col-start-2 justify-items-center lg:mt-24 lg:rounded-xl">
                    <img 
                    src={homepageroom} alt="Hostel Bedroom" 
                    className="lg:w-5/6 hiddden mt-10 rounded-xl shadow-xl md:hidden lg:block"/>
                </div>
            </div>
        </>
    );
}

export default NewHome;
