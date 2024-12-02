import { Link } from "react-router-dom";

function Inquirybutton(){

    return <div className="w-32 md:mt-6">
        <Link to="/inquiry-form" className=" hover:bg-orange-400 bg-orange-300 p-2 px-3 rounded-xl flex items-center ">Contact Us
        </Link>
    </div>
}

export default Inquirybutton