import homepageroom from "/images/homepageroom.jpg";
import friendshostel from "/images/friendshostel.jpg";

function Services(){
    return <> 
    <div className="w-full lg:h-screen lg:grid md:grid lg:grid-cols-2 flex flex-col">
        <div className="col-start-2 justify-items-center row-start-1">
            <h2 className="lg:text-6xl text-2xl md:text-4xl text-sky-800 mt-2 lg:pt-12 md:mt-4">Services</h2>
            <div className="lg:text-3xl text-sm md:text-md mt-2 ml-3 lg:pt-12 md:mt-10 w-11/12 md:w-5/6 lg:w-11/12">
                <p>Single, double, and shared rooms with detailed descriptions.</p>
                <br />
                <p>Amenities like attached bathrooms, air conditioning, and balconies.</p>
                <br />
                <p>On-demand maintenance for rooms or facilities.</p>
                <br />
                <p>24/7 electricity and water supply.</p>
                <br />
                <p>Proximity to Sanjivani college, public transport, and essential services.</p>
            </div>
        </div>
        <div className="row-start-1 mt-2 col-start-1 ml-4 lg:ml-5 md:ml-5 h-full">
            <img src={homepageroom} alt="" 
            className="rounded-xl w-11/12"/>
        </div>
        
    </div>
    </>
}

export default Services;