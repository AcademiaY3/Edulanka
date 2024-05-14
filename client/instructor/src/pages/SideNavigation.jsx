import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import { Link } from 'react-router-dom';


function SideNav() {
  return (
    <div>
     <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
    {/* Navbar brand for xl START */}
    <div className="d-flex align-items-center" >
        <a className="navbar-brand" href="index.html">
            <img className="navbar-brand-item" src="assets/images/logo-light.svg" alt="" />
        </a>
    </div>
    {/* Navbar brand for xl END */}

    <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100 os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition" data-bs-backdrop="true" tabIndex="-1" id="offcanvasSidebar">
        <div className="os-resize-observer-host observed">
            <div className="os-resize-observer" style={{ left: '0px', right: 'auto' }}></div>
        </div>
        <div className="os-size-auto-observer observed" style={{ height: 'calc(100% + 1px)', float: 'left' }}>
            <div className="os-resize-observer"></div>
        </div>
        {/* <div className="os-content-glue" style={{ width: '260px', margin: '0px', maxWidth: '100%', height: '729px' }}></div> */}
        <div className="os-padding">
            <div className="os-viewport os-viewport-native-scrollbars-invisible" tabIndex="-1" style={{ overflow: 'visible' }}>
                <div className="os-content" style={{ padding: '0px', height: '100%', width: '100%', float: 'left' }}>
                    <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
                        {/* Sidebar menu START */}
                        <ul className="navbar-nav flex-column" id="navbar-sidebar">

                            {/* Menu item 1 */}
                            <li className="nav-item"><a href="admin-dashboard.html" className="nav-link active"><i className="bi bi-house fa-fw me-2"></i>Dashboard</a></li>

                            {/* Title */}
                            <li className="nav-item ms-2 my-2">Pages</li>

                            {/* menu item 2 */}
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                                    <i className="bi bi-basket fa-fw me-2"></i>Courses
                                </a>
                                {/* Submenu */}
                                <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                                    <li className="nav-item"> <a className="nav-link" href="admin-course-list.html">All Courses</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="admin-course-category.html">Course Category</a></li>
                                    <li className="nav-item"> <a className="nav-link" href="admin-course-detail.html">Course Detail</a></li>
                                </ul>
                            </li>

                            {/* Menu item 3 */}
                            <li className="nav-item"> <a className="nav-link" href="admin-student-list.html"><i className="fas fa-user-graduate fa-fw me-2"></i>Students</a></li>

                            {/* Menu item 4 */}
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                                    <i className="fas fa-user-tie fa-fw me-2"></i>Instructors
                                    
                                </a>
                                {/* Submenu */}
                                <ul className="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                                <li className="nav-item">
                                  <Link className="nav-link" to="/instructors">Instructors</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/instructorDetails">Instructor Detail</Link></li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/">Instructor requests
                                            <span className="badge text-bg-success rounded-circle ms-2">2</span>
                                            </Link>
                                    </li>
                                </ul>
                            </li>

           

                            {/* Title */}
                            <li className="nav-item ms-2 my-2">Documentation</li>

                            {/* Menu item 9 */}
                            <li className="nav-item"> <a className="nav-link" href="docs/index.html"><i className="far fa-clipboard fa-fw me-2"></i>Documentation</a></li>

                            {/* Menu item 10 */}
                            <li className="nav-item"> <a className="nav-link" href="docs/changelog.html"><i className="fas fa-sitemap fa-fw me-2"></i>Changelog</a></li>
                        </ul>
                        {/* Sidebar menu end */}

                        {/* Sidebar footer START */}
                        <div className="px-3 mt-auto pt-3">
                            <div className="d-flex align-items-center justify-content-between text-primary-hover">
                                <a className="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings" data-bs-original-title="Settings">
                                    <i className="bi bi-gear-fill"></i>
                                </a>
                                <a className="h5 mb-0 text-body" href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Home" data-bs-original-title="Home">
                                    <i className="bi bi-globe"></i>
                                </a>
                                <a className="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out" data-bs-original-title="Sign out">
                                    <i className="bi bi-power"></i>
                                </a>
                            </div>
                        </div>
                        {/* Sidebar footer END */}
                    </div>
                </div>
            </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track os-scrollbar-track-off">
                <div className="os-scrollbar-handle" style={{ width: '100%', transform: 'translate(0px, 0px)' }}></div>
            </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track os-scrollbar-track-off">
                <div className="os-scrollbar-handle" style={{ height: '100%', transform: 'translate(0px, 0px)' }}></div>
            </div>
        </div>
        <div className="os-scrollbar-corner"></div>
    </div>
</nav>
    </div>
  );
}

export default SideNav;
