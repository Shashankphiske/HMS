import Services from "./Services";
import homepageroom from "/images/homepageroom.jpg";
import friendshostel from "/images/friendshostel.jpg";

function NewHome() {
    return (
        <div className="w-full mt-20 ml-24 overflow-x-hidden md:h-[550px] font-serif flex flex-col">

            {/* Background Image */}
            <div
                className="inset-0 bg-cover -z-10 h-screen w-full fixed"
                style={{ backgroundImage: `url(${homepageroom})` }}
            ></div>

            {/* Content */}
            <div className="relative mt-20 sm:mt-32 md:mt-40 px-4 md:px-12 flex flex-col items-center text-center md:text-left">
                <h1 className="text-sky-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-slideUpLeft">
                    ATMA MALIK
                </h1>
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-2 animate-slideUpRight">
                    GIRLS HOSTEL
                </h2>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 animate-fadeIn">
                    <p>
                        Welcome to <span className="text-sky-800">Atma Malik Girls Hostel</span>, where comfort meets affordability for students.
                    </p>
                    <br />
                    <p>Experience the perfect blend of community, convenience, and comfort.</p>
                </div>
            </div>
        </div>
    );
}

export default NewHome;
 