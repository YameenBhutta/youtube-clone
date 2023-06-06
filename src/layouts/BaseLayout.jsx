import React from 'react'
import { Header } from '../component/Header'
import { Sidebar } from '../component/Sidebar'
import { DetailLayout } from './DetailLayout'
export const BaseLayout = ({children}) => {
  return (
  <>
   <Header />
   <div className="grid grid-cols-7 gap-4">
   <div className="col-span-1">
    <Sidebar></Sidebar>
   </div>
    <div className="col-span-6 pr-5">
      {children}
    </div>
   </div>
   
   </>
  )
}
