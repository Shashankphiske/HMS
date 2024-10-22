import React from 'react'
import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
      
  return (
    <>
      <nav className="  text-black text-md flex flex-row justify-between p-4 items-center text-md backdrop-blur-xl shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="logo px-10">Logo</div>
        <div className="navOptions hidden md:flex items-center md:gap-10 md:px-10 ">
            <div className="gallery hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center ">Gallery</div>
            <div className="facilities hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center">Facilities</div>
            <div className="aboutUs hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center">AboutUs</div>
            <div className="contact hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center">Contact</div>
            <div className="loginLogo ">LoginLogo</div>
        </div>
    <div className="menu md:hidden">
                <Menu as="div" className=" relative inline-block text-left">
            <div>
                <MenuButton className=" bg-yellow-300 inline-flex w-full  justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                
                </MenuButton>
            </div>

            <MenuItems
                transition
                className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                <MenuItem>
                    <a
                    href="#"
                    className=" hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                    Gallery
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                    href="#"
                    className=" hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                    Facilities
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                    href="#"
                    className="hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center my-1 block no-underline px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                    AboutUs
                    </a>
                </MenuItem>
                <form action="#" method="POST">
                    <MenuItem>
                    <a
                        href="#"
                        className="hover:bg-yellow-400 bg-yellow-300 p-2 px-3 rounded-full flex items-center my-1 block no-underline w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
  )
}

export default Navbar
