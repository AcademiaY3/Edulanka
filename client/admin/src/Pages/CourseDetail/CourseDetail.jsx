import React from 'react';


export default function CourseDetail(){
    return(

<div>
  {/* **************** MAIN CONTENT START **************** */}
  <main>
  <nav className="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
  {/* Navbar brand for xl START */}
  <div className="d-flex align-items-center">
    <a className="navbar-brand" href="index.html">
      <img className="navbar-brand-item" src="assets/images/logo-light.svg" alt />
    </a>
  </div>
  {/* Navbar brand for xl END */}
  <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100 os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition" data-bs-backdrop="true" tabIndex={-1} id="offcanvasSidebar">
    <div className="offcanvas-body sidebar-content d-flex flex-column bg-dark">
      {/* Sidebar menu START */}
      <ul className="navbar-nav flex-column" id="navbar-sidebar">
              {/* Menu item 1 */}
              <li className="nav-item"><a href="admin-dashboard.html" className="nav-link"><i className="bi bi-house fa-fw me-2" />Dashboard</a></li>
              {/* Title */}
              <li className="nav-item ms-2 my-2">Pages</li>
              {/* menu item 2 */}
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                  <i className="bi bi-basket fa-fw me-2" />Courses
                </a>
                {/* Submenu */}
                <ul className="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                  <li className="nav-item"> <a className="nav-link" href="admin-course-list.html">All Courses</a></li>
                  <li className="nav-item"> <a className="nav-link" href="admin-course-category.html">Course Category</a></li>
                  <li className="nav-item"> <a className="nav-link" href="admin-course-detail.html">Course Detail</a></li>
                </ul>
              </li>
              {/* Menu item 3 */}
              <li className="nav-item"> <a className="nav-link active" href="admin-student-list.html"><i className="fas fa-user-graduate fa-fw me-2" />Students</a></li>
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
          <a className="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings" data-bs-original-title="Settings">
            <i className="bi bi-gear-fill" />
          </a>
          <a className="h5 mb-0 text-body" href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Home" data-bs-original-title="Home">
            <i className="bi bi-globe" />
          </a>
          <a className="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out" data-bs-original-title="Sign out">
            <i className="bi bi-power" />
          </a>
        </div>
      </div>
      {/* Sidebar footer END */}
    </div>
  </div>
</nav>


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
            <h1 className="h3 mb-2 mb-sm-0">Students</h1>
            <a href="instructor-create-course.html" className="btn btn-sm btn-primary mb-0">Add Student</a>
          </div>
        </div>

        <div className="card bg-transparent">
          {/* Card header START */}
          <div className="card-header bg-transparent border-bottom px-0">
            {/* Search and select START */}
            <div className="row g-3 align-items-center justify-content-between">
              {/* Search bar */}
              <div className="col-md-8">
                <form className="rounded position-relative">
                  <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i className="fas fa-search fs-6 " />
                  </button>
                </form>
              </div>
              {/* Tab button */}
              <div className="col-md-3">
                {/* Tabs START */}
                <ul className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab" role="tablist">
                  {/* Grid tab */}
                  <li className="nav-item" role="presentation">
                    <a href="#nav-preview-tab-1" className="nav-link mb-0 me-2 active" data-bs-toggle="tab" aria-selected="true" role="tab">
                      <i className="fas fa-fw fa-th-large" />
                    </a>
                  </li>
                  {/* List tab */}
                  <li className="nav-item" role="presentation">
                    <a href="#nav-html-tab-1" className="nav-link mb-0" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">
                      <i className="fas fa-fw fa-list-ul" />
                    </a>
                  </li>
                </ul>
                {/* Tabs end */}
              </div>
            </div>
            {/* Search and select END */}
          </div>
          {/* Card header END */}
          {/* Card body START */}
          <div className="card-body px-0">
            {/* Tabs content START */}
            <div className="tab-content">
              {/* Tabs content item START */}
              <div className="tab-pane fade show active" id="nav-preview-tab-1" role="tabpanel">
                <div className="row g-4">
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Carolyn Ortiz</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Mumbai</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$6,205</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">21</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">85%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 29 Aug 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Billy Vasquez</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Delhi</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$1,256</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">16</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">60%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 15 July 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Dennis Barrett</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />New york</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$9,256</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">38</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">74%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '74%'}} aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 22 June 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Lori Stevens</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />California</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$10,688</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">38</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">45%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 18 April 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Jacqueline Miller</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Chennai</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$856</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">05</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">90%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 05 Aug 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div className="col-md-6 col-xxl-4">
                    <div className="card bg-transparent border h-100"> 
                      {/* Card header */}
                      <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
                        <div className="d-sm-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar avatar-md flex-shrink-0">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                            <h5 className="mb-0"><a href="#">Samuel Bishop</a></h5>
                            <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Canada</span>
                          </div>
                        </div>
                        {/* Edit dropdown */}
                        <div className="dropdown text-end">
                          <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots fa-fw" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        {/* Payments */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-success bg-opacity-10 text-success rounded-circle flex-shrink-0"><i className="bi bi-currency-dollar fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Payments</h6>
                          </div>
                          <span className="mb-0 fw-bold">$3,578</span>
                        </div>
                        {/* Total courses */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                            <h6 className="mb-0 ms-2 fw-light">Total Course</h6>
                          </div>
                          <span className="mb-0 fw-bold">14</span>
                        </div>
                        {/* Progress */}
                        <div className="overflow-hidden">
                          <h6 className="mb-0">30%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos aos-init" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer bg-transparent border-top">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          {/* Rating star */}
                          <h6 className="mb-2 mb-sm-0">
                            <i className="bi bi-calendar fa-fw text-orange me-2" /><span className="text-body">Join at:</span> 18 Jan 2021
                          </h6>
                          {/* Buttons */}
                          <div className="text-end text-primary-hover">
                            <a href="#" className="btn btn-link text-body p-0 mb-0 me-2" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                              <i className="bi bi-envelope-fill" />
                            </a>
                            <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Block" aria-label="Block">
                              <i className="fas fa-ban" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Tabs content item END */}
              {/* Tabs content item START */}
              <div className="tab-pane fade" id="nav-html-tab-1" role="tabpanel">
                <div className="table-responsive border-0">
                  <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                    {/* Table head */}
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 rounded-start">Instructor name</th>
                        <th scope="col" className="border-0">Join date</th>
                        <th scope="col" className="border-0">Progress</th>
                        <th scope="col" className="border-0">Courses</th>
                        <th scope="col" className="border-0">Payments</th>
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
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Mumbai</span>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>29 Aug 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">85%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>21</td>
                        {/* Table data */}
                        <td>$6,205</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/04.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Billy Vasquez</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Delhi</span>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>15 July 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">60%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>16</td>
                        {/* Table data */}
                        <td>$1,256</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/03.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />New york</span>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>22 June 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">74%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '74%'}} aria-valuenow={74} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>38</td>
                        {/* Table data */}
                        <td>$9,256</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />California</span>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>18 April 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">45%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>07</td>
                        {/* Table data */}
                        <td>$10,688</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/05.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Jacqueline Miller</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Chennai</span>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>05 Aug 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">90%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>05</td>
                        {/* Table data */}
                        <td>$856</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img src="assets/images/avatar/02.jpg" className="rounded-circle" alt />
                            </div>
                            <div className="mb-0 ms-3">
                              {/* Title */}
                              <h6 className="mb-0"><a href="#" className="stretched-link">Samuel Bishop</a></h6>
                              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Canada</span></div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>18 Jan 2021</td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          <div className="overflow-hidden">
                            <h6 className="mb-0">30%</h6>
                            <div className="progress progress-sm bg-primary bg-opacity-10">
                              <div className="progress-bar bg-primary aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>14</td>
                        {/* Table data */}
                        <td>$3,578</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                            <i className="bi bi-eye" />
                          </a>
                          <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                            <i className="bi bi-envelope" />
                          </a>
                          <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Block" data-bs-original-title="Block">
                            <i className="fas fa-ban" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* Table body END */}
                  </table>
                </div>
              </div>
              {/* Tabs content item END */}
            </div>
            {/* Tabs content END */}
          </div>
          {/* Card body END */}
          {/* Card footer START */}
          <div className="card-footer bg-transparent pt-0 px-0">
            {/* Pagination START */}
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
              {/* Content */}
              <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
              {/* Pagination */}
              <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0 px-0">
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
  <iframe src="about:blank" style={{display: 'none'}} />
</div>

        
    )
}