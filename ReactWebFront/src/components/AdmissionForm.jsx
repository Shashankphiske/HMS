import { useState } from "react";

function AdmissionForm() {
    const [admission, setAdmission] = useState({
        firstname: "",
        lastname: "",
        middlename: "",
        address: "",
        adhaarnumber: "",
        age: "",
        contactnumber: "",
        email: "",
        parentfirstname: "",
        parentage: "",
        parentoccupation: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setAdmission((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending Data:", admission);

        try {
            const response = await fetch("http://localhost:3000/submit-admission", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(admission),
            });

            const responseData = await response.json();
            console.log(responseData);
            alert(responseData.message);
        } catch (error) {
            console.error("Error in submission:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen mt-24 w-screen">
            <div className="flex items-center justify-center rounded-lg shadow-xl w-[92%] border-[0.5px] border-black lg:w-[35%] mt-12">
                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 grid-rows-17 gap-2 w-[95%] p-2"
                >
                    <h1 className="col-span-2 text-center text-xl font-semibold text-black">
                        ADMISSION FORM
                    </h1>

                    <label htmlFor="firstname" className="row-start-2 text-lg pt-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={admission.firstname}
                        onChange={handleInput}
                        className="-ml-6 hover:border-yellow-400 row-start-2 col-start-2 border-[1px] border-black rounded-lg p-2 bg-amber-50"
                    />

                    <label htmlFor="lastname" className="row-start-3 text-lg pt-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={admission.lastname}
                        onChange={handleInput}
                        className="-ml-6 hover:border-yellow-400 row-start-3 col-start-2 border-[1px] border-black rounded-lg p-2 bg-amber-50"
                    />

                    <label htmlFor="middlename" className="text-lg pt-1">
                        Middle Name
                    </label>
                    <input
                        type="text"
                        name="middlename"
                        placeholder="Middle Name"
                        value={admission.middlename}
                        onChange={handleInput}
                        className="-ml-6 hover:border-yellow-400 row-start-4 col-start-2 border-[1px] border-black rounded-lg p-2 bg-amber-50"
                    />

                    <label htmlFor="address" className="row-start-5 text-lg pt-1">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={admission.address}
                        onChange={handleInput}
                        className="hover:border-yellow-400 border-[1px] border-black rounded-lg row-start-6 col-span-2 p-2 bg-amber-50"
                    />

                    <label htmlFor="adhaarnumber" className="row-start-7 text-lg">
                        Adhaar Number
                    </label>
                    <input
                        type="number"
                        name="adhaarnumber"
                        placeholder="Adhaar Number"
                        value={admission.adhaarnumber}
                        onChange={handleInput}
                        className="hover:border-yellow-400 border-[1px] border-black rounded-lg row-start-8 col-span-2 p-2 bg-amber-50"
                    />

                    <label htmlFor="age" className="row-start-9 col-start-1 text-lg">
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={admission.age}
                        onChange={handleInput}
                        className="hover:border-yellow-400 border-[1px] border-black rounded-lg row-start-10 col-start-1 w-20 p-2 bg-amber-50"
                    />

                    <label htmlFor="contactnumber" className="row-start-9 col-start-2 text-lg">
                        Contact Number
                    </label>
                    <h2 className="col-start-2 row-start-10 -ml-8 mt-2">+91</h2>
                    <input
                        type="number"
                        name="contactnumber"
                        placeholder="Contact Number"
                        value={admission.contactnumber}
                        onChange={handleInput}
                        className="border-black border-[1px] hover:border-yellow-400 rounded-lg row-start-10 col-start-2 p-2 bg-amber-50"
                    />

                    <label htmlFor="email" className="row-start-11 text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={admission.email}
                        onChange={handleInput}
                        className="hover:border-yellow-400 border-[1px] border-black rounded-lg row-start-12 col-span-2 p-2 bg-amber-50"
                    />

                    <label htmlFor="parentfirstname" className="row-start-13 text-lg">
                        Parent's First Name
                    </label>
                    <input
                        type="text"
                        name="parentfirstname"
                        placeholder="Parent's First Name"
                        value={admission.parentfirstname}
                        onChange={handleInput}
                        className="hover:border-yellow-400 border-[1px] border-black rounded-lg row-start-14 col-span-2 p-2 bg-amber-50"
                    />

                    <label htmlFor="parentage" className="row-start-15 col-start-1 text-lg">
                        Parent's Age
                    </label>
                    <input
                        type="number"
                        name="parentage"
                        placeholder="Age"
                        value={admission.parentage}
                        onChange={handleInput}
                        className="border-[1px] border-black hover:border-yellow-400 rounded-lg row-start-16 col-start-1 p-2 w-20 bg-amber-50"
                    />

                    <label htmlFor="parentoccupation" className="col-start-2 -mt-9 text-lg">
                        Parent's Occupation
                    </label>
                    <input
                        type="text"
                        name="parentoccupation"
                        placeholder="Occupation"
                        value={admission.parentoccupation}
                        onChange={handleInput}
                        className="border-[1px] border-black p-2 hover:border-yellow-400 rounded-lg row-start-16 col-start-2 -mt-14 mb-4 bg-amber-50"
                    />

                    <button className="col-span-2 border-[1px] border-black rounded-lg h-10 bg-yellow-300 hover:bg-yellow-400 row-start-17 shadow-2xl shadow-black">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdmissionForm;
