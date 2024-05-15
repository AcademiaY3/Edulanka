import React from 'react'
import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import { Navigate, Outlet } from 'react-router-dom'
import LocalStore from '../../Config/LocalStore/LocalStore';

export default function UserStack() {
    const isUser = () => {
        const tokenData = LocalStore.getToken();
        return tokenData && tokenData.role === 'instructor';
    };
    if (!isUser())
        return <Navigate to={'/login'} />
    return (
        <>
            <Header />
            <SideBar />
            <div className="page-content">
                <Outlet />
            </div>
        </>
    )
}
