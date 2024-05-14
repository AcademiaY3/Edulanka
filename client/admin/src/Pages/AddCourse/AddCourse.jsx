import React, { useState } from 'react';

export default function AddCourse() {
    return (
      

       <div>
  {/* Header START */}
  <header className="navbar-light navbar-sticky">
    {/* Logo Nav START */}
    <nav className="navbar navbar-expand-xl">
      <div className="container">
        {/* Logo START */}
        <a className="navbar-brand" href="index.html">
          <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
          <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
        </a>
        {/* Logo END */}
        {/* Responsive navbar toggler */}
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-animation">
            <span />
            <span />
            <span />
          </span>
        </button>
        {/* Main navbar START */}
        <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
          {/* Nav Main menu START */}
          <ul className="navbar-nav navbar-nav-scroll mx-auto">
            {/* Nav item 1 Demos */}
            <li className="nav-item dropdown">
            <li className="nav-item"><a className="nav-link" href="docs/alerts.html">Home</a></li>
          
            </li>
            {/* Nav item 2 Pages */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                {/* Dropdown submenu */}
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="course-categories.html">Add Course</a></li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li> <a className="dropdown-item" href="course-grid.html">Course List</a></li>
                  </ul>
                </li>
                {/* Dropdown submenu */}
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Learners</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="about.html">Add Learner</a></li>
                    <li> <a className="dropdown-item" href="contact-us.html">Learner List</a></li>
                  </ul>
                </li>
                {/* Dropdown submenu */}
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-toggle" href="#">Instructors</a>
                  <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    <li> <a className="dropdown-item" href="docs/snippet-hero-12.html">Add Instructors</a></li>
                    <li> <a className="dropdown-item" href="docs/snippet-hero-13.html">Instructor List</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            
          </ul>
          {/* Nav Main menu END */}
          {/* Nav Search START */}
          <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <form className="position-relative">
                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
          </div>
          {/* Nav Search END */}
        </div>
        {/* Main navbar END */}
        {/* Profile START */}
        <div className="dropdown ms-1 ms-lg-0">
          <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
          </a>
          <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
            {/* Profile info */}
            <li className="px-3 mb-3">
              <div className="d-flex align-items-center">
                {/* Avatar */}
                <div className="avatar me-3">
                  <img className="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar" />
                </div>
                <div>
                  <a className="h6" href="#">Lori Ferguson</a>
                  <p className="small m-0">example@gmail.com</p>
                </div>
              </div>
            </li>
            <li> <hr className="dropdown-divider" /></li>
            {/* Links */}
            <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2" />Edit Profile</a></li>
            <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2" />Account Settings</a></li>
            <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2" />Help</a></li>
            <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2" />Sign Out</a></li>
            <li> <hr className="dropdown-divider" /></li>
            {/* Dark mode options START */}
            <li>
              <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                <button type="button" className="btn btn-sm mb-0 active" data-bs-theme-value="light">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    <use href="#" />
                  </svg> Light
                </button>
                <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    <use href="#" />
                  </svg> Dark
                </button>
                <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg> Auto
                </button>
              </div>
            </li> 
            {/* Dark mode options END*/}
          </ul>
        </div>
        {/* Profile START */}
      </div>
    </nav>
    {/* Logo Nav END */}
  </header><div id="sticky-space" />
  {/* Header END */}



  {/* **************** MAIN CONTENT START **************** */}
  <main>
    {/* =======================
Page Banner START */}
    <section className="py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      {/* Main banner background image */}
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Title */}
            <h1 className="text-white">Submit a new Course</h1>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            {/* Content */}
            <p className="text-center">Use this interface to add a new Course to the portal. Once you are done adding the item it will be reviewed for quality. If approved, your course will appear for sale and you will be informed by email that your course has been accepted.</p>
          </div>
        </div>
        </div>
        </section>


    <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-md-8 col-12 mb-5">
                        <div className="card p-5">
                            <section className="section-background">
                                <h2 className="section-title">Course Details</h2>
                                <form>
                                    <div className="row row-gap-4">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Name" aria-label="Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Title" aria-label="Title" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" className="form-control" placeholder="Price" aria-label="Price" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Category" aria-label="Category" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" className="form-control" placeholder="Hours" aria-label="Hours" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Skills" aria-label="Skills" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Language" aria-label="Language" required />
                                        </div>
                                        <div className="col-md-6">
                                            <select className="form-select" aria-label="Certificate" required>
                                                <option selected disabled>Select Certificate</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" placeholder="Description" aria-label="Description" required></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Tags (comma separated)" aria-label="Tags" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="photo-upload" className="form-label">Upload Photo:</label>
                                            <input type="file" className="form-control" id="photo-upload" accept="image/*" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="video-upload" className="form-label">Upload Video:</label>
                                            <input type="file" className="form-control" id="video-upload" accept="video/*" required />
                                        </div>
                                        <div className="col-12 text-end">
                                            <button className='btn btn-primary'>Add Course</button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
    
    {/* =======================
Page Banner END */}
    {/* =======================
Steps START */}

        </main>
        
       </div>
    );
}
