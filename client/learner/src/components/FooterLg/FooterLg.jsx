import React from 'react'
import logo from '../../assets/images/logo.png'
export default function FooterLg() {
    return (
        <>
            <footer className="pt-5 bg-light">
                <div className="container">
                    {/* Row START */}
                    <div className="row g-4">
                        {/* Widget 1 START */}
                        <div className="col-lg-3">
                            {/* logo */}
                            <a className="me-0" href="index.html">
                                <img className="light-mode-item h-40px" src={logo} alt="logo" />
                            </a>
                            <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners. </p>
                            {/* Social media icon */}
                            <ul className="list-inline mb-0 mt-3">
                                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></a> </li>
                                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i className="fab fa-fw fa-instagram" /></a> </li>
                                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></a> </li>
                                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></a> </li>
                            </ul>
                        </div>
                        {/* Widget 1 END */}
                        {/* Widget 2 START */}
                        <div className="col-lg-6">
                            <div className="row g-4">
                                {/* Link block */}
                                <div className="col-6 col-md-4">
                                    <h5 className="mb-2 mb-md-4">Company</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">News and Blogs</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Library</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Career</a></li>
                                    </ul>
                                </div>
                                {/* Link block */}
                                <div className="col-6 col-md-4">
                                    <h5 className="mb-2 mb-md-4">Community</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link" href="#">Documentation</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Forum</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Sitemap</a></li>
                                    </ul>
                                </div>
                                {/* Link block */}
                                <div className="col-6 col-md-4">
                                    <h5 className="mb-2 mb-md-4">Teaching</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link" href="#">Become a teacher</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">How to guide</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Widget 2 END */}
                        {/* Widget 3 START */}
                        <div className="col-lg-3">
                            <h5 className="mb-2 mb-md-4">Contact</h5>
                            {/* Time */}
                            <p className="mb-2">
                                Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
                                <span className="d-block small">(9:AM to 8:PM IST)</span>
                            </p>
                            <p className="mb-0">Email:<span className="h6 fw-light ms-2">example@gmail.com</span></p>
                        </div>
                        {/* Widget 3 END */}
                    </div>{/* Row END */}
                    {/* Divider */}
                    <hr className="mt-4 mb-0" />
                    {/* Bottom footer */}
                    <div className="py-3">
                        <div className="container px-0">
                            <div className="d-lg-flex justify-content-center align-items-center py-3 text-center text-md-left">
                                {/* copyright text */}
                                <div className="text-body text-primary-hover"> Copyrights ©2024 Edulanka</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
