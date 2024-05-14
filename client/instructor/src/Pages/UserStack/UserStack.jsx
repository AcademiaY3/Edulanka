import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import CourseM from './CourseM/CourseM'
import AddCourse from './CourseM/AddCourse'
import DashBoard from './Dashboard/DashBoard'
import LearnerM from './LearnerM/LearnerM'
import MyProfile from './MyProfile/MyProfile'
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
