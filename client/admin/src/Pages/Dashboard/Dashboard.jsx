import React from 'react';


export default function Dashboard() {
  return (
    
<div>
  <title>Eduport- LMS, Education and Course Theme</title>
  {/* Meta Tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="author" content="Webestica.com" />
  <meta name="description" content="Eduport- LMS, Education and Course Theme" />
  {/* Dark mode */}
  {/* Favicon */}
  <link rel="shortcut icon" href="assets/images/favicon.ico" />
  {/* Google Font */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" />
  {/* Plugins CSS */}
  <link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome/css/all.min.css" />
  <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap-icons/bootstrap-icons.css" />
  <link rel="stylesheet" type="text/css" href="assets/vendor/choices/css/choices.min.css" />
  <link rel="stylesheet" type="text/css" href="assets/vendor/overlay-scrollbar/css/overlayscrollbars.min.css" />
  {/* Theme CSS */}
  <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
  {/* **************** MAIN CONTENT START **************** */}
  <main>
    {/* Sidebar START */}
    <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      {/* Navbar brand for xl START */}
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="index.html">
          <img className="navbar-brand-item" src="assets/images/logo.png" alt />
        </a>
      </div>
      {/* Navbar brand for xl END */}
      <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
        <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
          {/* Sidebar menu START */}
          <ul className="navbar-nav flex-column" id="navbar-sidebar">
            {/* Menu item 1 */}
            <li className="nav-item"><a href="admin-dashboard.html" className="nav-link"><i className="bi bi-house fa-fw me-2" />Dashboard</a></li>
            {/* Title */}
            <li className="nav-item ms-2 my-2">Pages</li>
            {/* menu item 2 */}
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="true" aria-controls="collapsepage">
                <i className="bi bi-basket fa-fw me-2" />Courses
              </a>
              {/* Submenu */}
              <ul className="nav collapse flex-column show" id="collapsepage" data-bs-parent="#navbar-sidebar">
                <li className="nav-item"> <a className="nav-link active" href="admin-course-list.html">All Courses</a></li>
                <li className="nav-item"> <a className="nav-link" href="admin-course-category.html">Course Category</a></li>
                <li className="nav-item"> <a className="nav-link" href="admin-course-detail.html">Course Detail</a></li>
              </ul>
            </li>
            {/* Menu item 3 */}
            <li className="nav-item"> <a className="nav-link" href="admin-student-list.html"><i className="fas fa-user-graduate fa-fw me-2" />Students</a></li>
            {/* Menu item 4 */}
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                <i className="fas fa-user-tie fa-fw me-2" />Instructors
              </a>
              {/* Submenu */}
              <ul className="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                <li className="nav-item"> <a className="nav-link" href="admin-instructor-list.html">Instructors</a></li>
                <li className="nav-item"> <a className="nav-link" href="admin-instructor-detail.html">Instructor Detail</a></li>
                <li className="nav-item"> 
                  <a className="nav-link" href="admin-instructor-request.html">Instructor requests
                    <span className="badge text-bg-success rounded-circle ms-2">2</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* Menu item 5 */}
            <li className="nav-item"> <a className="nav-link" href="admin-review.html"><i className="far fa-comment-dots fa-fw me-2" />Reviews</a></li>
            {/* Menu item 6 */}
            <li className="nav-item"> <a className="nav-link" href="admin-earning.html"><i className="far fa-chart-bar fa-fw me-2" />Earnings</a></li>
            {/* Menu item 7 */}
            <li className="nav-item"> <a className="nav-link" href="admin-setting.html"><i className="fas fa-user-cog fa-fw me-2" />Admin Settings</a></li>
            {/* Menu item 8 */}
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                <i className="bi bi-lock fa-fw me-2" />Authentication
              </a>
              {/* Submenu */}
              <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                <li className="nav-item"> <a className="nav-link" href="sign-up.html">Sign Up</a></li>
                <li className="nav-item"> <a className="nav-link" href="sign-in.html">Sign In</a></li>
                <li className="nav-item"> <a className="nav-link" href="forgot-password.html">Forgot Password</a></li>
                <li className="nav-item"> <a className="nav-link" href="admin-error-404.html">Error 404</a></li>
              </ul>
            </li>
            {/* Title */}
            <li className="nav-item ms-2 my-2">Documentation</li>
            {/* Menu item 9 */}
            <li className="nav-item"> <a className="nav-link" href="docs/index.html"><i className="far fa-clipboard fa-fw me-2" />Documentation</a></li>
            {/* Menu item 10 */}
            <li className="nav-item"> <a className="nav-link" href="docs/changelog.html"><i className="fas fa-sitemap fa-fw me-2" />Changelog</a></li>
          </ul>
          {/* Sidebar menu end */}
          {/* Sidebar footer START */}
          <div className="px-3 mt-auto pt-3">
            <div className="d-flex align-items-center justify-content-between text-primary-hover">
              <a className="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                <i className="bi bi-gear-fill" />
              </a>
              <a className="h5 mb-0 text-body" href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Home">
                <i className="bi bi-globe" />
              </a>
              <a className="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign out">
                <i className="bi bi-power" />
              </a>
            </div>
          </div>
          {/* Sidebar footer END */}
        </div>
      </div>
    </nav>
    {/* Sidebar END */}
    {/* Page content START */}
    <div className="page-content">
      {/* Top bar START */}
      <nav className="navbar top-bar navbar-light border-bottom py-0 py-xl-3">
        <div className="container-fluid p-0">
          <div className="d-flex align-items-center w-100">
            {/* Logo START */}
            <div className="d-flex align-items-center d-xl-none">
              <a className="navbar-brand" href="index.html">
                <img className="light-mode-item navbar-brand-item h-30px" src="assets/images/logo-mobile.svg" alt />
                <img className="dark-mode-item navbar-brand-item h-30px" src="assets/images/logo-mobile-light.svg" alt />
              </a>
            </div>
            {/* Logo END */}
            {/* Toggler for sidebar START */}
            <div className="navbar-expand-xl sidebar-offcanvas-menu">
              <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="outside">
                <i className="bi bi-text-right fa-fw h2 lh-0 mb-0 rtl-flip" data-bs-target="#offcanvasMenu"> </i>
              </button>
            </div>
            {/* Toggler for sidebar END */}
            {/* Top bar left */}
            <div className="navbar-expand-lg ms-auto ms-xl-0">
              {/* Toggler for menubar START */}
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopContent" aria-controls="navbarTopContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-animation">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              {/* Toggler for menubar END */}
              {/* Topbar menu START */}
              <div className="collapse navbar-collapse w-100" id="navbarTopContent">
                {/* Top search START */}
                <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                  <div className="nav-item w-100">
                    <form className="position-relative">
                      <input className="form-control pe-5 bg-secondary bg-opacity-10 border-0" type="search" placeholder="Search" aria-label="Search" />
                      <button className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 text-primary" /></button>
                    </form>
                  </div>
                </div>
                {/* Top search END */}
              </div>
              {/* Topbar menu END */}
            </div>
            {/* Top bar left END */}
            {/* Top bar right START */}
            <div className="ms-xl-auto">
              <ul className="navbar-nav flex-row align-items-center">
                {/* Notification dropdown START */}
                <li className="nav-item ms-2 ms-md-3 dropdown">
                  {/* Notification button */}
                  <a className="btn btn-light btn-round mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <i className="bi bi-bell fa-fw" />
                  </a>
                  {/* Notification dote */}
                  <span className="notif-badge animation-blink" />
                  {/* Notification dropdown menu START */}
                  <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                    <div className="card bg-transparent">
                      <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                        <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                        <a className="small" href="#">Clear all</a>
                      </div>
                      <div className="card-body p-0">
                        <ul className="list-group list-unstyled list-group-flush">
                          {/* Notif item */}
                          <li>
                            <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div className="me-3">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                                </div>
                              </div>
                              <div>
                                <p className="text-body small m-0">Congratulate <b>Joan Wallace</b> for graduating from <b>Microverse university</b></p>
                                <u className="small">Say congrats</u>
                              </div>
                            </a>
                          </li>
                          {/* Notif item */}
                          <li>
                            <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div className="me-3">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-1">Larry Lawson Added a new course</h6>
                                <p className="small text-body m-0">What's new! Find out about new features</p>
                                <u className="small">View detail</u>
                              </div>
                            </a>
                          </li>
                          {/* Notif item */}
                          <li>
                            <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div className="me-3">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-1">New request to apply for Instructor</h6>
                                <u className="small">View detail</u>
                              </div>
                            </a>
                          </li>
                          {/* Notif item */}
                          <li>
                            <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                              <div className="me-3">
                                <div className="avatar avatar-md">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                </div>
                              </div>
                              <div>
                                <h6 className="mb-1">Update v2.3 completed successfully</h6>
                                <p className="small text-body m-0">What's new! Find out about new features</p>
                                <small className="text-body">5 min ago</small>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Button */}
                      <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                        <a href="#" className="stretched-link">See all incoming activity</a>
                      </div>
                    </div>
                  </div>
                  {/* Notification dropdown menu END */}
                </li>
                {/* Notification dropdown END */}
                {/* Profile dropdown START */}
                <li className="nav-item ms-2 ms-md-3 dropdown">
                  {/* Avatar */}
                  <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                  </a>
                  {/* Profile dropdown START */}
                  <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                    {/* Profile info */}
                    <li className="px-3">
                      <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar me-3 mb-3">
                          <img className="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar" />
                        </div>
                        <div>
                          <a className="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
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
                        {/* <span>Mode:</span> */}
                        <button type="button" className="btn btn-sm mb-0" data-bs-theme-value="light">
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
                        <button type="button" className="btn btn-sm mb-0 active" data-bs-theme-value="auto">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                            <use href="#" />
                          </svg> Auto
                        </button>
                      </div>
                    </li> 
                    {/* Dark mode options END*/}
                  </ul>
                  {/* Profile dropdown END */}
                </li>
                {/* Profile dropdown END */}
              </ul>
            </div>
            {/* Top bar right END */}
          </div>
        </div>
      </nav>
      {/* Top bar END */}
      {/* Page main content START */}
      <div className="page-content-wrapper border">
        {/* Title */}
        <div className="row mb-3">
          <div className="col-12 d-sm-flex justify-content-between align-items-center">
            <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
            <a href="instructor-create-course.html" className="btn btn-sm btn-primary mb-0">Create a Course</a>
          </div>
        </div>
        {/* Course boxes START */}
        <div className="row g-4 mb-4">
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
              <h6>Total Courses</h6>
              <h2 className="mb-0 fs-1 text-primary">1200</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
              <h6>Activated Courses</h6>
              <h2 className="mb-0 fs-1 text-success">996</h2>
            </div>
          </div>
          {/* Course item */}
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
              <h6>Pending Courses</h6>
              <h2 className="mb-0 fs-1 text-warning">200</h2>
            </div>
          </div>
        </div>
        {/* Course boxes END */}
        {/* Card START */}
        <div className="card bg-transparent border">
          {/* Card header START */}
          <div className="card-header bg-light border-bottom">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between">
              {/* Search bar */}
              <div className="col-md-8">
                <form className="rounded position-relative">
                  <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6 " />
                  </button>
                </form>
              </div>
              {/* Select option */}
              <div className="col-md-3">
                {/* Short by filter */}
                <form>
                  <select className="form-select js-choice border-0 z-index-9" aria-label=".form-select-sm">
                    <option value>Sort by</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Accepted</option>
                    <option>Rejected</option>
                  </select>
                </form>
              </div>
            </div>
            {/* Search and select END */}
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body">
            {/* Course table START */}
            <div className="table-responsive border-0 rounded-3">
              {/* Table START */}
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0 rounded-start">Course Name</th>
                    <th scope="col" className="border-0">Instructor</th>
                    <th scope="col" className="border-0">Added Date</th>
                    <th scope="col" className="border-0">Type</th>
                    <th scope="col" className="border-0">Price</th>
                    <th scope="col" className="border-0">Status</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                {/* Table body START */}
                <tbody>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/08.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Building Scalable APIs with GraphQL</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Lori Stevens</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>28 Oct 2021</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-primary">Beginner</span> </td>
                    {/* Table data */}
                    <td>$350</td>
                    {/* Table data */}
                    <td> <span className="badge bg-warning bg-opacity-15 text-warning">Pending</span> </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">Approve</a>
                      <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/10.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Bootstrap 5 From Scratch</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Billy Vasquez</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>16 Oct 2021</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-purple">Intermediate</span> </td>
                    {/* Table data */}
                    <td>$256</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-warning bg-opacity-15 text-warning">Pending</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0">Approve</a>
                      <button className="btn btn-sm btn-secondary-soft mb-0">Reject</button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/02.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Graphic Design Masterclass</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Carolyn Ortiz</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>28 Aug 2021</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-orange">All level</span> </td>
                    {/* Table data */}
                    <td>$347</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/04.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Learn Invision</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Frances Guerrero</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>15 June 2021</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-orange">All level</span> </td>
                    {/* Table data */}
                    <td>$445</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/06.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Angular – The Complete Guider</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Louis Ferguson</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>10 Dec 2020</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-purple">Intermediate</span> </td>
                    {/* Table data */}
                    <td>$165</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/09.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">JavaScript: Full Understanding</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Samuel Bishop</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>09 Nov 2020</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-primary">Beginner</span> </td>
                    {/* Table data */}
                    <td>$575</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/11.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Build Responsive Websites with HTML</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Dennis Barrett</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>21 Aug 2020</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-primary">Beginner</span> </td>
                    {/* Table data */}
                    <td>$268</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="w-60px">
                          <img src="assets/images/courses/4by3/12.jpg" className="rounded" alt />
                        </div>
                        {/* Title */}
                        <h6 className="table-responsive-title mb-0 ms-2">	
                          <a href="#" className="stretched-link">Build Websites with CSS</a>
                        </h6>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center mb-3">
                        {/* Avatar */}
                        <div className="avatar avatar-xs flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        <div className="ms-2">
                          <h6 className="mb-0 fw-light">Joan Wallace</h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td>02 April 2020</td>
                    {/* Table data */}
                    <td> <span className="badge text-bg-orange">All level</span> </td>
                    {/* Table data */}
                    <td>$370</td>
                    {/* Table data */}
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                    </td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-sm btn-dark me-1 mb-1 mb-md-0">Edit</a>
                    </td>
                  </tr>
                </tbody>
                {/* Table body END */}
              </table>
              {/* Table END */}
            </div>
            {/* Course table END */}
          </div>
          {/* Card body END */}
          {/* Card footer START */}
          <div className="card-footer bg-transparent pt-0">
            {/* Pagination START */}
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
              {/* Content */}
              <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
              {/* Pagination */}
              <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                  <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                  <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                  <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                </ul>
              </nav>
            </div>
            {/* Pagination END */}
          </div>
          {/* Card footer END */}
        </div>
        {/* Card END */}
      </div>
      {/* Page main content END */}
    </div>
    {/* Page content END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* Back to top */}
  <div className="back-top"><i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" /></div>
  {/* Bootstrap JS */}
  {/* Vendors */}
  {/* Template Functions */}
</div>

    
  )
}

