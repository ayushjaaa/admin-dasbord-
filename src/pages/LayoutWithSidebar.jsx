import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const LayoutWithSidebar = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default LayoutWithSidebar
