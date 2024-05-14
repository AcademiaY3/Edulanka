import React from "react";
import PopularCourse from "./PopularCourses/PopularCourse";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCounter from "./HomeCounter/HomeCounter";
import Testomonial from "./Testomonial/Testomonial";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";

export default function UserStack() {
    return (
        <>
            <HomeBanner />
            <HomeCounter />
            {/* <PopularCourse /> */}
            <Testomonial />
            <NewsLetter/>
        </>
    )
}