function AdmissionForm(){

    return (
        <>
        
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="w-[35%] h-[97%] bg-yellow-50 border-black flex items-center justify-center rounded-md shadow-xl">
                <form action="">
                <div className="grid grid-cols-2 grid-rows-15 gap-3 w-[400px]">
                    <h1 className="col-span-2 text-center text-xl font-semibold text-yellow-300">ADMISSION FORM</h1>
                    <label htmlFor="firstname" className="row-start-2">First Name</label>
                    <input type="text" placeholder="First Name" className=" hover:border-yellow-600 row-start-3 border-[1px] border-black rounded-md p-2"/>
                    <label htmlFor="lastname" className="row-start-2">Last Name</label>
                    <input type="text"  placeholder="Last Name" className=" hover:border-yellow-600 row-start-3 border-[1px] border-black rounded-md p-2"/>
                    <label htmlFor="middlename" className="">Middle Name</label>
                    <input type="text"  placeholder="Middle Name" className=" hover:border-yellow-600 row-start-4 col-start-2 border-[1px] border-black rounded-md p-2"/>
                    <label htmlFor="address" className="row-start-5">Address</label>
                    <input type="text" placeholder="Address" className=" hover:border-yellow-600 border-[1px] border-black rounded-md row-start-6 col-span-2 p-2"/>
                    <label htmlFor="adhaar" className="row-start-7">Adhaar Number</label>
                    <input type="number"  placeholder="Adhaar Number" className=" hover:border-yellow-600 border-[1px] border-black rounded-md row-start-8 col-span-2 p-2"/>
                    <label htmlFor="age" className="row-start-9 col-start-1">Age</label>
                    <input type="number"  placeholder="Age" className=" hover:border-yellow-600 border-[1px] border-black rounded-md row-start-10 col-start-1 w-20 p-2"/>
                    <label htmlFor="contactnumber" className="row-start-9 col-start-2">Contact Number</label>
                    <h2 className="col-start-2 row-start-10 -ml-8 mt-2">+91</h2>
                    <input type="number"  placeholder="Contact Number" className="border-black border-[1px]  hover:border-yellow-600 rounded-md row-start-10 col-start-2 p-2"/>
                    <label htmlFor="email" className="row-start-11">Email</label>
                    <input type="email" placeholder="Email" className=" hover:border-yellow-600 border-[1px] border-black rounded-md row-start-12 col-span-2 p-2"/>
                    <label htmlFor="parentname" className="row-start-13">Mother's First Name</label>
                    <input type="text" placeholder="Mother's First Name" className=" hover:border-yellow-600 border-[1px] border-black rounded-md row-start-14 col-span-2 p-2"/>
                    <button className="col-span-2 border-[1px] border-black rounded-md h-10 bg-yellow-300 hover:bg-yellow-400">Submit</button>
                </div>
                </form>
                </div>
                
            </div>
        
        </>
    );
}

export default AdmissionForm;