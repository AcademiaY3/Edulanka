import React from 'react'
import avatar from '../../assets/images/avatar/01.jpg'
export default function Header() {
    return (
        <>
            {/* Top bar START */}
            <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
                <div className="container-fluid p-0">
                    <div className="d-flex align-items-center w-100 p-3 px-2 p-md-0">
                        <div className="navbar-expand-xl sidebar-offcanvas-menu">
                            <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="outside">
                                <i className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu">
                                </i>
                            </button>
                        </div>
                        <div className="navbar-expand-lg ms-auto ms-xl-0">
                            <div className="collapse navbar-collapse w-100" id="navbarTopContent">
                                <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                                    <div className="nav-item w-100">
                                        <form className="position-relative">
                                            <input className="form-control pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 text-primary" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ms-xl-auto">
                            <ul className="navbar-nav flex-row align-items-center">
                                <li className="nav-item ms-2 ms-md-3 dropdown">
                                    <a className="btn btn-light btn-round mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                        <i className="fas fa-bell fa-fw fs-5" />
                                    </a>
                                    <span className="notif-badge animation-blink" />
                                    <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                                        <div className="card bg-transparent">
                                            <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2
                                                    new</span></h6>
                                                <a className="small" href="#">Clear all</a>
                                            </div>
                                            <div className="card-body p-0">
                                                <ul className="list-group list-unstyled list-group-flush">
                                                    <li>
                                                        <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                            <div className="me-3">
                                                                <div className="avatar avatar-md">
                                                                    <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="text-body small m-0">Congratulate <b>Joan
                                                                    Wallace</b> for graduating from <b>Microverse
                                                                        university</b></p>
                                                                <u className="small">Say congrats</u>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item ms-2 ms-md-3 dropdown">
                                    <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                                        <li className="px-3">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-3 mb-3">
                                                    <img className="avatar-img rounded-circle shadow" src={avatar} alt="avatar" />
                                                </div>
                                                <div>
                                                    <a className="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
                                                    <p className="small m-0">example@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-user fa-fw me-2" />Edit Profile</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-gear fa-fw me-2" />Account Settings</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fas fa-info-circle fa-fw me-2" />Help</a></li>
                                        <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="fas fa-power-off fa-fw me-2" />Sign Out</a></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
