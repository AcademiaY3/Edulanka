import React from "react";
import Profile from './UserProfile/MyProfile/Profile'
import CourseList from './UserProfile/MyCourses/CourseList'
import Home from './Home/Home'
import CourseGrid from './CourseList/CourseGrid'
import PlaceOrder from './Checkout/PlaceOrder'
import CourseDetail from './CourseDetail/CourseDetail'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FooterLg from "../../components/FooterLg/FooterLg";
import UserProfile from "./UserProfile/UserProfile";
import EnrolledCourse from "./EnrolledCourse/EnrolledCourse";

export default function UserStack() {
    return (
        <>
            <Header />
            <UserProfile/>
            {/* <CourseList/> */}
            {/* <Home/> */}
            {/* <CourseGrid/> */}
            {/* <PlaceOrder/> */}
            {/* <CourseDetail /> */}
            {/* <EnrolledCourse/> */}
            <FooterLg />
        </>
    )
}