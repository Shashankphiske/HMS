/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../index.css"

function InquiryPage(){

    const [ inquiry, setInquiry ] = useState({
        firstname : "",
        lastname : "",
        email : "",
        contactnumber : "",
        query : "",
    }); 

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInquiry({
            ...inquiry,
            [name]:value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Log the form data before making the request
        console.log("Sending Data:", inquiry);
    
        try {
            const response = await fetch(`http://localhost:3000/submit-inquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inquiry),
            });
            const responseData = await response.json();
            alert(responseData.message);
    
        } catch (error) {
            console.error("Error in submission:", error);
        }
    };
    

    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="rounded-lg bg-amber-50 grid grid-cols-1 gap-3 items-center shadow-xl shadow-slate-300 w-[95%] lg:w-[35%]">
            
            <form method="post" onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-12 gap-2 -ml-24 mb-5 w-[95%] ml-3">
            <h1 className="col-span-2 text-3xl font-sans text-yellow-300 font-semibold mt-4">INQUIRY FORM</h1>

            <label htmlFor="firstname" className=" col-start-1 col-end-2 py-2 text-lg">First Name</label>
            <input type="text" placeholder="First Name" value={inquiry.firstname} onChange={handleInput} name="firstname" className=" border-black border-[1px] rounded-lg row-start-3 p-2 hover:border-yellow-400"/>

            <label htmlFor="lastname" className="py-2 pl-2 text-lg">Last Name</label>
            <input type="text" placeholder="Last Name" value={inquiry.lastname} onChange={handleInput} name="lastname" className=" border-black border-[1px] rounded-lg ml-2 p-2 hover:border-yellow-400"/>

            <label htmlFor="email" className="col-span-2 py-2 text-lg">Email</label>
            <input type="email" placeholder="Email" value={inquiry.email} onChange={handleInput} name="email" className=" border-black border-[1px] rounded-lg col-span-2 p-2 hover:border-yellow-400"/>

            <label htmlFor="number" className="col-span-2 py-2 text-lg">Contact Number</label>
            <input type="number" placeholder="Contact Number" value={inquiry.contactnumber} name="contactnumber" onChange={handleInput} className=" border-black border-[1px] rounded-lg col-span-2 p-2 hover:border-yellow-400"/>

            
            <label htmlFor="queries" className="col-span-2 py-2 text-lg">Queries</label>
            <textarea type="text" value={inquiry.query} onChange={handleInput} name="query" className=" border-black border-[1px] rounded-lg col-span-2 row-span-2 NumberField p-2 hover:border-yellow-400" placeholder="Your Query"/>

            <br />
            <button type="submit" className="border border-black rounded-lg col-span-2 h-10 bg-yellow-300 text-lg -my-5 row-start-12 hover:bg-yellow-400">Send</button>
            </form>
            </div>
        </div>
        </>
    );
}

export default InquiryPage;