function LeaveForm(){

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="bg-yellow-50 w-[35%] h-[80%] flex items-center justify-center shadow-xl">
                <div>
                    <form action="" className="grid grid-cols-2 grid-rows-13 gap-3 w-[413px]">
                        <h1 className="font-semibold text-yellow-400 col-span-2 row-start-1 text-xl">LEAVE FORM</h1>
                        <label htmlFor="firstname" className="col-start-1 row-start-2">First Name</label>
                        <input type="text" placeholder="First Name" className="col-start-1 row-start-3 rounded-md p-2 border-[1px] border-black hover:border-yellow-600"/>
                        <label htmlFor="lastname" className="col-start-2 row-start-2">Last Name</label>
                        <input type="text" placeholder="Last Name" className="col-start-2 row-start-3 rounded-md p-2 border-[1px] border-black hover:border-yellow-600"/>
                        <label htmlFor="contactnumber" className="col-start-1 row-start-4 mt-2">Student's Contact Number</label>
                        <h2 className="col-start-2 row-start-4 mt-2">+91</h2>
                        <input type="number" placeholder="Contact Number" className="col-start-2 row-start-4 ml-10 w-40 p-2 rounded-md border-[1px] border-black hover:border-yellow-600"/>
                        <label htmlFor="parentname" className="col-span-1 row-start-5 mt-2">Parent's First Name</label>
                        <input type="text" placeholder="Parent's Name" className="p-2 col-start-2 row-start-5 rounded-md border-[1px] border-black hover:border-yellow-600"/>
                        <label htmlFor="parentnumber" className="row-start-6 mt-2">Parent's Contact Number</label>
                        <h2 className="col-start-2 row-start-6 mt-2">+91</h2>
                        <input type="number" placeholder="Contact Number" className="p-2 col-start-2 row-start-6 w-40 ml-10 rounded-md border-[1px] border-black hover:border-yellow-600"/>
                        <label htmlFor="placetovisit" className="mt-2">Place To Be Visited</label>
                        <input type="text" placeholder="Place" className="p-2 border-[1px] border-black hover:border-yellow-600 rounded-md"/>
                        <label htmlFor="fromdate" className="mt-2">From</label>
                        <input type="date" placeholder="Date" className="p-2 border-[1px] border-black hover:border-yellow-600 rounded-md"/>
                        <label htmlFor="todate" className="mt-2">To</label>
                        <input type="date" placeholder="Date" className="p-2 rounded-md border-[1px] border-black hover:border-yellow-600"/>
                        <button className="text-center rounded-md border-[1px] border-black bg-yellow-300 hover:bg-yellow-400 col-span-2 p-2">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    );

}

export default LeaveForm;