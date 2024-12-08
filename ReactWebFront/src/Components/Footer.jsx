import { useEffect, useRef } from 'react';
import img from '../assets/images/Hostelimg.png';

function Footer() {
    const gradientRef = useRef(null);

    useEffect(() => {
        let step = 0;
        const positions = [
            '0% 50%',
            '100% 50%',
            '0% 50%',
        ];

        const updateGradient = () => {
            step = (step + 1) % positions.length;
            if (gradientRef.current) {
                gradientRef.current.style.backgroundPosition = positions[step];
            }
        };

        // Initial gradient configuration
        if (gradientRef.current) {
            gradientRef.current.style.background = `linear-gradient(31deg, rgba(229,196,118,1) 1%, rgba(255,255,255,1) 51%, rgba(235,209,131,1) 97%)`;
            gradientRef.current.style.backgroundSize = '200% 200%';
            gradientRef.current.style.transition = 'background-position 2s ease-in-out';
        }

        const interval = setInterval(updateGradient, 2000); // 2 seconds per transition
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <>
            <div
                ref={gradientRef}
                className="font-serif h-[300px] w-full flex flex-row gap-[100px] items-center"
            >
                <div className="img">
                    <img className="h-[250px] m-5 flex justify-start" src={img} alt="" />
                </div>
                <div className="container flex flex-row gap-[100px]">
                    <div className="contact flex flex-col gap-5 w-full">
                        <h1 className="font-bold text-xl">Contact Details :</h1>
                        <p>Phone No. : 9960490150</p>
                        <p>Email : demo@gmail.com</p>
                    </div>
                    <div className="policies flex flex-col gap-5 w-full">
                        <h1 className="font-bold text-xl">Policies/Rules :</h1>
                        <p>Accommodation policy</p>
                        <p>Entry & Leave</p>
                    </div>
                    <div className="formlink flex flex-col gap-5 w-full">
                        <h1 className="font-bold text-xl">Form Link :</h1>
                        <p>Admission Form</p>
                        <p>Inquiry Form</p>
                    </div>
                </div>
            </div>
            <div className="bg-white text-gray-500 copywrite flex w-full justify-center">
                <h1 className="font-bold text-xl">© 2024 Company, Inc</h1>
            </div>
        </>
    );
}

export default Footer;
