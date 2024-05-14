import Header from '../../Components/Header/Header'
import SideBar from '../../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function UserStack() {
    return (
        <>
            <Header />
            <SideBar />
            <div className="page-content">
                <Outlet/>
            </div>
        </>
    )
}
