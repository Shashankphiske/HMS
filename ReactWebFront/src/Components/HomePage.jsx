import hostelfront from "../assets/images/3711.png"
import Inquirybutton from "./Inquirybutton";

function HomePage(){
    return <>
    
        <div className="w-11/12 h-screen md:mt-28 bg-orange-50 rounded-xl shadow-xl">
            <div className="grid grid-col-2 grid-rows-2">
                <div className="col-start-1 grid grid-cols-4 grid-rows-3 md:ml-28 h-64 md:mt-8">
                    <h1 className="md:col-start-1 row-start-1 col-span-3 md:text-7xl">GIRLS</h1>
                    <h1 className="md:col-start-2 row-start-2 col-span-3 md:text-7xl">HOSTEL</h1>
                    <div className="col-start-1 row-start-3 col-span-3 text-lg md:mt-4">
                    <p>Welcome to [Your Hostel Name], where comfort meets affordability for students.</p><br />
                    <p>We provide a safe, clean, and friendly environment to ensure a memorable stay for every student.</p> <br />
                    <p>Experience the perfect blend of community, convenience, and comfort at [Your Hostel Name].</p> <br />

                    <p>Have any questions about our facilities? Want to learn more about what we offer?</p>
                    <p>Feel free to contact us!</p>
                    <Inquirybutton/>
                    
                    </div>
                </div>

                <div className='col-start-2'>
                    <img src={hostelfront} alt="" className="md:h-[600px] md:w-[800px] md:mr-52 md:mt-10"/>
                </div>
            </div>
        </div>
    
    </>
}

export default HomePage;