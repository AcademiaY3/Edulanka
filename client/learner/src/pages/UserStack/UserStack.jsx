import React from "react";
import Header from '../../components/Header/Header'
import FooterLg from "../../components/FooterLg/FooterLg";
import { Outlet } from "react-router-dom";

export default function UserStack() {
    return (
        <>
            <Header />
            {/*  */}
            <Outlet/>

            <FooterLg />
        </>
    )
}