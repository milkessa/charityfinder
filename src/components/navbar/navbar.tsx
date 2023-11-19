import React from 'react'
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className='logoDiv'>
            <h1 className='Logo text-[25px] text-blueColor'><strong> Charity</strong>Finder</h1>
        </div>
        <div className="relative">
      <input
        type="text"
        placeholder="Search Charity..."
        className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <svg
        className="absolute top-3 left-3 h-5 w-5 text-blueColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
    <div className=' text-blueColor'>
    <FaHeart />
    </div>
    </div>
  )
}

export default Navbar