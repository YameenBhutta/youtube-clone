import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <div className='header px-5 '>
    <div className='flex justify-between items-center'>
    <div className='logo'>
    <Link to="/">
    <img src='/images/logo.png' alt=''/></Link>
    </div>
    <div className='form flex justify-between items-center w-1/4 relative'>
    <input placeholder='Search....' type='text' className='bg-gray-500 w-full py-3 px-3 text-white outline-none color rounded-3xl'/>
    <button className='text-white absolute right-5'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
  </button>
  
    </div>
    </div>
    </div>
    </>
  )
}
