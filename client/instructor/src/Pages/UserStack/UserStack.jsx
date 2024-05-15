import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function UserStack() {
    return (
        <>
            {/* header */}
            <Header />
            {/* sidebar */}
            <SideBar />
            {/* outlet starts below */}
            <div className="page-content">
                <Outlet />
            </div>
        </>
    )
}
