import stayhome from "/images/stayhome.png";

function Services(){
    return <div className="w-11/12 h-screen bg-orange-50 rounded-xl shadow-xl grid grid-cols-2 grid-rows-2 gap-3">

        <div className="md:col-start-2 row-start-1 md:mt-16 md:ml-20">
            <h1 className="text-5xl">What do we provide ?</h1>
            <div className="text-lg md:mt-20 w-5/6">
            <p>Spacious single and shared rooms with attached bathrooms for maximum convenience.</p><br />
            <p>Your comfort and privacy are our top priorities, ensuring a safe and homely stay.</p><br />
            <br />
            <p>Never worry about outages – our hostel offers reliable power and water services at all times.</p><br />
            <p>Personalized services, including private lockers and individual study desks.</p>
            </div>
        </div>

        <div className="md:col-start-1 md:row-start-1 md:mt-8">
            <img src={stayhome} alt="Stay Home" />
        </div>

    </div>
}

export default Services;