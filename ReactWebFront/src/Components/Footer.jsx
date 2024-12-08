function Footer(){
    return <>
        <div className=" font-serif flex items-center justify-center h-[300px] bg-black w-full ">
        <div className="grid grid-cols-3 gap-40 ml-28 text-white">
            <div className="col-start-1 grid grid-rows-3 gap-3">
                <h1 className="text-xl">Contact Details :</h1>
                <label htmlFor="" className="ml-4 text-lg text-white">Phone No. : 9960490150</label>
                <label htmlFor="" className="ml-4 text-lg text-white">Email : shashankphiske@gmail.com</label>
            </div>
            <div className="col-start-2 grid grid-rows-3 gap-3">
                <h1 className="text-xl">Policies/Rules :</h1>
                <label htmlFor="" className="ml-4">Accomodation Policy</label>
                <label htmlFor="" className="ml-4">Entry and Leave</label>
            </div>
            <div className="col-start-3 grid grid-rows-3 gap-3">
                <h1 className="text-xl">Form Links :</h1>
                <button className="ml-4 w-32 border-white hover:bg-black rounded-xl border-2 h-10 text-center">Admission From</button>
                <button className="ml-4 w-32 border-white hover:bg-black rounded-xl border-2 h-10 text-center">Inquiry Form</button>
            </div>
        </div>
        </div>
    </>
}

export default Footer;