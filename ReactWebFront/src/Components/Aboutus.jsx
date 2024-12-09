import React from "react";

function Aboutus() {
    return (
        <div id="about-us" className="w-11/12 h-[120vh] bg-orange-50 rounded-xl md:mt-28 p-8 flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-amber-950 mb-6">About Us</h1>

            <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full">
                <h2 className="text-xl text-amber-950 mb-4">Our Rooms & Amenities</h2>
                <p className="text-gray-700 mb-4">
                    We offer both private and shared rooms, all fully furnished with the following amenities:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Comfortable beds</li>
                    <li>Personal study desks and chairs</li>
                    <li>Wardrobes and personal lockers</li>
                    <li>24/7 electricity and water supply</li>
                    <li>High-speed Wi-Fi</li>
                    <li>Within a couple kilometers range of Sanjivani college</li>
                </ul>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-lg p-6 mt-8 shadow-lg max-w-4xl w-full">
                <h2 className="text-xl text-amber-950 mb-4">Address</h2>
                <p className="text-gray-700">Annapurna nagar, Kopargaon 423601</p>
                <p className="text-gray-700">Maharashtra, India</p>
            </div>

            {/* About the Owner Section */}
            <div className="bg-white rounded-lg p-6 mt-8 shadow-lg max-w-4xl w-full">
                <h2 className="text-xl text-amber-950 mb-4">About The Owner</h2>
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/150" // Sample landlord photo (you can replace this with an actual photo)
                        alt="Landlord"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="text-gray-700">
                        <p className="font-semibold">John Doe</p>
                        <p>
                            John is a dedicated and experienced property owner, passionate about providing quality living spaces for students. He has been managing properties for over 10 years, ensuring that residents enjoy a comfortable and safe environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
