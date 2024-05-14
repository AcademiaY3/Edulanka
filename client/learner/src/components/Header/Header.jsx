import React from "react";
import avatar from '../../assets/images/avatar/01.jpg';
import logo from "../../assets/images/logo_light.png"
import logo2 from "../../assets/images/logo.png"
export default function Header() {
  return (
    <>
      <header class="navbar-light navbar-sticky shadow">
        <nav class="navbar navbar-expand-xl">
          <div className="container">
            {/* Logo START */}
            <a className="navbar-brand py-3" href="index.html">
              <img className="light-mode-item navbar-brand-item" src={logo2} alt="logo" />
              <img className="dark-mode-item navbar-brand-item" src={logo} alt="logo" />
            </a>
            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
              {/* Nav Main menu START */}
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                {/* Nav item 1 Demos */}
                <li className="nav-item dropdown">
                  <a className="nav-link " href="#" id="demoMenu" aria-haspopup="true" aria-expanded="false">Home</a>
                </li>
                {/* Nav item 2 Pages */}
                <li className="nav-item dropdown">
                  <a className="nav-link " href="#" id="pagesMenu" aria-haspopup="true" aria-expanded="false">Courses</a>
                </li>
                {/* Nav item 3 Account */}
                <li className="nav-item dropdown">
                  <a className="nav-link " href="#" id="accounntMenu" aria-haspopup="true" aria-expanded="false">AboutUs</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link " href="#" id="accounntMenu" aria-haspopup="true" aria-expanded="false">Company</a>
                </li>
              </ul>
            </div>
            <div className="dropdown ms-1 ms-lg-0">
              <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" data-bs-display="static" aria-expanded="false">
                <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
              </a>
              <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                {/* Profile info */}
                <li className="px-3 mb-3">
                  <div>
                    <a className="h6" href="#">Lori Ferguson</a>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </li>
                <li> <hr className="dropdown-divider" /></li>
                {/* Links */}
                <li><a className="dropdown-item" href="#"><i className="fas fa-user fa-fw me-2" />Edit Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-info-circle fa-fw me-2" />Help</a></li>
                <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="fas fa-power-off fa-fw me-2" />Sign Out</a></li>
              </ul>
            </div>
            {/* Profile START */}
          </div>
        </nav>
      </header>
    </>

  )
}