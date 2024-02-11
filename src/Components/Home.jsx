import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div className='flex h-full'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Home