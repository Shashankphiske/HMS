import { useState } from "react";

function LeaveForm(){

    const [ leave, setLeave ] = useState({
        firstname : "",
        lastname : "",
        studentcontact : "",
        parentfirstname : "",
        parentcontact : "",
        place : "",
        fromdate : "",
        todate : "",
    }); 

    const handleInput = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;

        setLeave({
            ...leave,
            [name]:value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Log the form data before making the request
        console.log("Sending Data:", leave);
    
        try {
            const response = await fetch(`http://localhost:3000/submit-leave`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leave),
            });
    
            console.log(response);  // Log the response to see if the server responds correctly
            const responseData = await response.json();
            console.log(responseData);  // Log the response data to check for any errors
            alert(responseData.message)
        } catch (error) {
            console.error("Error in submission:", error);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="bg-amber-50 flex items-center justify-center shadow-xl rounded-lg w-[95%] pb-2 lg:w-[35%]">
                    <form method="post" onSubmit={handleSubmit} className="grid grid-cols-2 grid-rows-13 gap-2 ml-2 w-[93%] pb-2 pt-2">
                        <h1 className="font-semibold text-yellow-400 col-span-2 row-start-1 text-xl">LEAVE FORM</h1>

                        <label htmlFor="firstname" className="col-start-1 row-start-2">First Name</label>
                        <input name="firstname" type="text" value={leave.firstname} onChange={handleInput} placeholder="First Name" className="col-start-1 row-start-3 rounded-lg p-2 border-[1px] border-black hover:border-yellow-600"/>

                        <label htmlFor="lastname" className="col-start-2 row-start-2">Last Name</label>
                        <input name="lastname" type="text" value={leave.lastname} onChange={handleInput} placeholder="Last Name" className="col-start-2 row-start-3 rounded-lg p-2 border-[1px] border-black hover:border-yellow-600"/>

                        <label htmlFor="contactnumber" className="col-start-1 row-start-4 mt-2">Student's Contact</label>
                        <h2 className="col-start-2 row-start-4 mt-2">+91</h2>
                        <input name="studentcontact" type="number" value={leave.studentcontact} onChange={handleInput} placeholder="Contact Number" className="col-start-2 row-start-4 p-2 rounded-lg border-[1px] border-black hover:border-yellow-600"/>

                        <label htmlFor="parentname" className="col-span-1 row-start-5 mt-2">Parent's First Name</label>
                        <input name="parentfirstname" type="text" value={leave.parentfirstname} onChange={handleInput} placeholder="Parent's Name" className="p-2 col-start-2 row-start-5 rounded-lg border-[1px] border-black hover:border-yellow-600"/>

                        <label htmlFor="parentnumber" className="row-start-6 mt-2">Parent's Contact</label>
                        <h2 className="col-start-2 row-start-6 mt-2">+91</h2>
                        <input name="parentcontact" type="number" value={leave.parentcontact} onChange={handleInput} placeholder="Contact Number" className="p-2 col-start-2 row-start-6 rounded-lg border-[1px] border-black hover:border-yellow-600"/>

                        <label htmlFor="placetovisit" className="mt-2">Place To Be Visited</label>
                        <input name="place" type="text" value={leave.place} onChange={handleInput} placeholder="Place" className="p-2 border-[1px] border-black hover:border-yellow-600 rounded-lg"/>

                        <label htmlFor="fromdate" className="mt-2">From</label>
                        <input name="fromdate" type="date" value={leave.fromdate} onChange={handleInput} placeholder="Date" className="p-2 border-[1px] border-black hover:border-yellow-600 rounded-lg"/>

                        <label htmlFor="todate" className="mt-2">To</label>
                        <input name="todate" type="date" placeholder="Date" value={leave.todate} onChange={handleInput} className="p-2 rounded-lg border-[1px] border-black hover:border-yellow-600"/>

                        <button className="text-center rounded-lg border-[1px] border-black bg-yellow-300 hover:bg-yellow-400 col-span-2 p-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default LeaveForm;