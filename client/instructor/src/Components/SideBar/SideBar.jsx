import React from 'react'
import Logo from '../../assets/logo_light.png'

export default function SideBar() {
    return (
        <>
            <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="index.html">
                        <img className="navbar-brand-item" src={Logo} alt />
                    </a>
                </div>
                <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
                    <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
                        <ul className="navbar-nav flex-column" id="navbar-sidebar">
                            <li className="nav-item"><a href="admin-dashboard.html" className="nav-link"><i className="fas fa-home fa-fw me-2" />Dashboard</a></li>
                            <li className="nav-item ms-2 my-2">Pages</li>
                            <li className="nav-item">
                                <a className="nav-link" role="button" aria-expanded="true" >
                                    <i className="fas fa-book fa-fw me-2" />My Courses
                                </a>
                            </li>
                            <li className="nav-item"> <a className="nav-link" href="admin-student-list.html"><i className="fas fa-user-graduate fa-fw me-2" />Learners</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-review.html"><i className="far fa-comment-dots fa-fw me-2" />Orders</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-earning.html"><i className="far fa-chart-bar fa-fw me-2" />Payments</a></li>
                            <li className="nav-item ms-2 my-2">Requests</li>
                            <li className="nav-item"> <a className="nav-link active" href="admin-earning.html"><i className="far fa-address-book fa-fw me-2" />Remainders</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-earning.html"><i className="far fa-user fa-fw me-2" />My Profile</a></li>
                        </ul>
                        
                        <div className="px-3 mt-auto pt-3">
                            <div className="d-flex align-items-center justify-content-between text-primary-hover">
                                <a className="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign out">
                                    <i className="fas fa-power-off" />
                                </a>
                                <a className="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                                    <i className="fas fa-gear" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar END */}

        </>
    )
}
