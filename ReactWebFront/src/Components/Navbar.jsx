import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from "react-router-dom";
import image from "/images/image.png"; // Import the image

const Navbar = () => {
  return (
    <>
      <nav className="md:h-24 text-black text-md flex flex-row bg-transparent backdrop-blur-lg rounded-lg justify-between p-4 items-center text-md fixed top-0 left-0 right-0 z-40">
        {/* Logo replaced with an image */}
        <Link to="/" className="logo px-10">
          <img src={image} alt="Logo" className="h-16 rounded-xl" /> {/* Set the height of the logo image */}
        </Link>

        <div className="navOptions ssm:hidden md:flex items-center md:gap-10 md:px-10">
          <Link to='/about-us' className="aboutUs transition-colors duration-300 ease-in-out border-gray-700 hover:border-white hover:bg-black hover:text-white  hidden md:block lg:block border-2 p-2 px-3 rounded-xl flex items-center ">ABOUT US</Link>
          <Link to='/login' className="loginLogo transition-colors duration-300 ease-in-out border-gray-700 hover:border-white hover:bg-black hover:text-white  border-2 p-2 px-4 rounded-xl hidden md:block lg:block flex items-center">LOGIN</Link>
        </div>

        <div className="menu md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="bg-sky-100 inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="bg-transparent absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="hover:border-gray-400 bg-sky-100 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700"
                  >
                    Gallery
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="hover:border-gray-400 bg-sky-100 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700"
                  >
                    Facilities
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="hover:border-gray-400 bg-sky-100 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700"
                  >
                    AboutUs
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <a
                      href="#"
                      className="hover:border-gray-400 bg-sky-100 p-2 px-3 rounded-full flex items-center my-1 block no-underline w-full px-4 py-2 text-left text-sm text-gray-700"
                    >
                      Contact
                    </a>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
