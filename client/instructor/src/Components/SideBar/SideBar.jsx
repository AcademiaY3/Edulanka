import React from 'react'
import Logo from '../../assets/logo_light.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Toaster from '../../Utils/Toaster/Toaster'
import Authenticate from '../../Config/LocalStore/Authenticate'

export default function SideBar() {

    const navigate = useNavigate()
    const logoutUser = () => {
        Toaster.justToast('info', "   Logging You Out ......", () => {
            Authenticate.logoutUser();
            navigate('/login')
        })
    }
    return (
        <>
            <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand" to={'/main/dashboard'}>
                        <img className="navbar-brand-item" src={Logo} alt />
                    </Link>
                </div>
                <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
                    <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
                        <ul className="navbar-nav flex-column" id="navbar-sidebar">
                            <li className="nav-item ms-2 my-2">Dashboard</li>
                            <li className="nav-item">
                                <NavLink to={'/main/courses'} className="nav-link" role="button" aria-expanded="true" >
                                    <i className="fas fa-book fa-fw me-2" />My Courses
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/main/learners'} className="nav-link" ><i className="fas fa-user-graduate fa-fw me-2" />Learners</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/main/orders'}><i className="far fa-comment-dots fa-fw me-2" />Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/main/payments'}><i className="far fa-chart-bar fa-fw me-2" />Payments</NavLink>
                            </li>
                            <li className="nav-item ms-2 my-2">Requests</li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to={'/main/profile'}><i className="far fa-user fa-fw me-2" />My Profile</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <button onClick={logoutUser} className="nav-link" ><i className="fas fa-power-off fa-fw me-2" />Logout</button>
                            </li>
                        </ul>

                        <div className="px-3 mt-auto pt-3">
                            <div className="d-flex align-items-center justify-content-between text-primary-hover">
                                <i onClick={logoutUser} style={{cursor:'pointer'}} className="fas fa-power-off fs-5" />
                                <i className="fas fa-gear fs-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar END */}

        </>
    )
}
