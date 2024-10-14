import "../index.css"

function InquiryPage(){
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="rounded-md bg-yellow-50 w-3/4 h-5/6 grid grid-cols-3 gap-4 items-center shadow-xl shadow-slate-300">
            <div className="col-start-1  h-full w-[40rem] flex justify-center items-center ml-7">
               <img src="/registerationart.png" alt="" className="" /> 
            </div>
            <div className=" border-white h-full mr-28 w-6 ml-60">

            </div>
            <form action="">
            <div className="w-96 grid grid-cols-2 grid-rows-12 gap-2 -ml-24 mb-5">
            <h1 className="col-span-2 text-3xl font-sans text-yellow-300 font-semibold mt-2">INQUIRY FORM</h1>
            <label htmlFor="firstname" className=" col-start-1 col-end-2 py-2 text-lg">First Name</label>
            <input type="text" placeholder="First Name" className=" border-black border-[1px] rounded-md row-start-3 p-2"/>
            <label htmlFor="lastname" className="py-2 pl-2 text-lg">Last Name</label>
            <input type="text" placeholder="Last Name" className=" border-black border-[1px] rounded-md ml-2 p-2"/>
            <label htmlFor="email" className="col-span-2 py-2 text-lg">Email</label>
            <input type="email" placeholder="Email" className=" border-black border-[1px] rounded-md col-span-2 p-2"/>
            <label htmlFor="number" className="col-span-2 py-2 text-lg">Contact Number</label>
            <input type="number" placeholder="Contact Number" className=" border-black border-[1px] rounded-md col-span-2 p-2"/>
            
            <label htmlFor="queries" className="col-span-2 py-2 text-lg">Queries</label>
            <textarea type="text" className=" border-black border-[1px] rounded-md col-span-2 row-span-2 NumberField p-2" placeholder="Your Query"/>
            <br />
            <button className="border border-black rounded-md col-span-2 h-10 bg-yellow-300 text-lg -my-5 row-start-12">Send</button>
            </div>
            </form>
            </div>
        </div>
        </>
    );
}

export default InquiryPage;