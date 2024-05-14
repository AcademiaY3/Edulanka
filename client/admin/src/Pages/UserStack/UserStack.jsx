import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import CourseM from './CourseM/CourseM'
import StaffM from './StaffM/StaffM'
import AddCourse from './CourseM/AddCourse'
import AddStaff from './StaffM/AddStaff'
import AddInstructor from './InstructorM/AddInstructor'
import DashBoard from './Dashboard/DashBoard'
import InstructorM from './InstructorM/InstructorM'
import LearnerM from './LearnerM/LearnerM'
import AddLearner from './LearnerM/AddLearner'

export default function UserStack() {
    return (
        <>
            {/* header */}
            <Header />
            {/* sidebar */}
            <SideBar />
            {/* outlet starts below */}
            <div className="page-content">
                {/* <CourseM/> */}
                {/* <StaffM /> */}
                {/* <LearnerM/> */}
                {/* <InstructorM/> */}
                {/* <AddCourse/> */}
                {/* <AddStaff/> */}
                {/* <AddInstructor/> */}
                <AddLearner/>
                {/* <DashBoard/> */}
                {/* <AddInstructor/> */}
            </div>
        </>
    )
}
