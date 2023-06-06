import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarText } from './Api'

export const Sidebar = () => {
  return (
   <>
   <div className='pt-5 py-5 pr-5 border-r-2 border-gray-600'>
    <ul className='sidebar'>
    {SidebarText.map((val,index) =>(
    <li key={index}><Link to={val.link} className='flex hover:bg-red-600 items-center px-4 py-4 mb-6 text-white rounded-full'><span className='pr-2 mr-2 '><img src={val.imgsrc} alt='' className='w-7 h-7' /></span>{val.title}</Link></li>

    )
    
    )}
    
    </ul>
    </div>
   </>
  )
}
