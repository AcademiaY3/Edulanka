import React from "react";
import logo from '../../assets/logo.png'


export default function NavBar(){
    return(

                        //     <nav class="navbar navbar-expand-xl">
                        //     <div class="container">
                        //         <!-- Logo START -->
                        //         <a class="navbar-brand" href="index.html">
                        //         <img className='img-fluid w-25' src={logo} alt="" />
                                   
                        //         </a>
                        //         <!-- Logo END -->
                    
                        //         <!-- Responsive navbar toggler -->
                        //         <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        //             <span class="navbar-toggler-animation">
                        //                 <span></span>
                        //                 <span></span>
                        //                 <span></span>
                        //             </span>
                        //         </button>
                    
                        //         <!-- Main navbar START -->
                        //         <div class="navbar-collapse w-100 collapse" id="navbarCollapse">
                    
                        //     <!-- Nav Main menu START -->
                        //             <ul class="navbar-nav navbar-nav-scroll mx-auto">
                        //                 <!-- Nav item 1 Demos -->
                        //                 <li class="nav-item dropdown">
                        //                     <a class="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                        //                     <ul class="dropdown-menu" aria-labelledby="demoMenu">
                        //                         <li> <a class="dropdown-item" href="index.html">Home Default</a></li>
                    
                        //                     </ul>
                        //                 </li>
                    
                        //                 <!-- Nav item 2 Pages -->
                        //                 <li class="nav-item dropdown">
                        //                     <a class="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        //                     <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                        //                         <!-- Dropdown submenu -->
                        //                         <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#">Course</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        //                                 <li> <a class="dropdown-item" href="course-categories.html">Course Categories</a></li>
                        //                                 <li> <hr class="dropdown-divider"></li>
                        //                                 <li> <a class="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
                                                       
                        //                             </ul>
                        //                         </li>
                    
                        //                         <!-- Dropdown submenu -->
                        //                         <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#">About</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        //                                 <li> <a class="dropdown-item" href="about.html">About Us</a></li>
                        //                                 <li> <a class="dropdown-item" href="contact-us.html">Contact Us</a></li>
                        //                                 <li> <a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                        //                                 <li> <a class="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                        //                                 <li> <a class="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
                        //                                 <li> <a class="dropdown-item" href="pricing.html">Pricing</a></li>
                        //                             </ul>
                        //                         </li>
                    
                        //                         <!-- Dropdown submenu -->
                        //                         <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#">Hero Banner</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        //                                 <li> <a class="dropdown-item" href="docs/snippet-hero-12.html">Hero Form</a></li>
                        //                                 <li> <a class="dropdown-item" href="docs/snippet-hero-13.html">Hero Vector</a></li>
                        //                                 <li> <p class="dropdown-item mb-0">Coming soon....</p></li>
                        //                             </ul>
                        //                         </li>
                    
                        //                         <li> <a class="dropdown-item" href="instructor-list.html">Instructor List</a></li>
                        //                         <li> <a class="dropdown-item" href="instructor-single.html">Instructor Single</a></li>
                        //                         <li> <a class="dropdown-item" href="become-instructor.html">Become an Instructor</a></li>
                        //                         <li> <a class="dropdown-item" href="abroad-single.html">Abroad Single</a></li>
                        //                         <li> <a class="dropdown-item" href="workshop-detail.html">Workshop Detail</a></li>
                        //                         <li> <a class="dropdown-item" href="event-detail.html">Event Detail</a></li>
                    
                    
                        //                 <!-- Nav item 3 Account -->
                        //                 <li class="nav-item dropdown">
                        //                     <a class="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
                        //                     <ul class="dropdown-menu" aria-labelledby="accounntMenu">
                        //                         <!-- Dropdown submenu -->
                        //                         <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#"><i class="fas fa-user-tie fa-fw me-1"></i>Instructor</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        //                                 <li> <a class="dropdown-item" href="instructor-dashboard.html"><i class="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-manage-course.html"><i class="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-create-course.html"><i class="bi bi-file-earmark-plus-fill fa-fw me-1"></i>Create Course</a> </li>
                        //                                 <li> <a class="dropdown-item" href="course-added.html"><i class="bi bi-file-check-fill fa-fw me-1"></i>Course Added</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-quiz.html"><i class="bi bi-question-diamond fa-fw me-1"></i>Quiz</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-earning.html"><i class="fas fa-chart-line fa-fw me-1"></i>Earnings</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-studentlist.html"><i class="fas fa-user-graduate fa-fw me-1"></i>Students</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-order.html"><i class="bi bi-cart-check-fill fa-fw me-1"></i>Orders</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-review.html"><i class="bi bi-star-fill fa-fw me-1"></i>Reviews</a> </li>
                        //                                 <li> <a class="dropdown-item" href="instructor-payout.html"><i class="fas fa-wallet fa-fw me-1"></i>Payout</a> </li>
                        //                             </ul>
                        //                         </li>
                    
                        //                         <!-- Dropdown submenu -->
                        //                             <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#"><i class="fas fa-user-graduate fa-fw me-1"></i>Student</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        //                                 <li> <a class="dropdown-item" href="student-dashboard.html"><i class="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-subscription.html"><i class="bi bi-card-checklist fa-fw me-1"></i>My Subscriptions</a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-course-list.html"><i class="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-course-resume.html"><i class="far fa-fw fa-file-alt me-1"></i>Course Resume</a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-quiz.html"><i class="bi bi-question-diamond fa-fw me-1"></i>Quiz </a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-payment-info.html"><i class="bi bi-credit-card-2-front-fill fa-fw me-1"></i>Payment Info</a> </li>
                        //                                 <li> <a class="dropdown-item" href="student-bookmark.html"><i class="fas bi-cart-check-fill fa-fw me-1"></i>Wishlist</a> </li>
                        //                             </ul>
                        //                         </li>
                                                
                        //                         <li> <a class="dropdown-item" href="admin-dashboard.html"><i class="fas fa-user-cog fa-fw me-1"></i>Admin</a> </li>
                        //                         <li> <hr class="dropdown-divider"></li>
                        //                         <li> <a class="dropdown-item" href="instructor-edit-profile.html"><i class="fas fa-fw fa-edit me-1"></i>Edit Profile</a> </li>
                        //                         <li> <a class="dropdown-item" href="instructor-setting.html"><i class="fas fa-fw fa-cog me-1"></i>Settings</a> </li>
                        //                         <li> <a class="dropdown-item" href="instructor-delete-account.html"><i class="fas fa-fw fa-trash-alt me-1"></i>Delete Profile</a> </li>
                                                
                        //                         <li> <hr class="dropdown-divider"></li>
                        //                         <!-- Dropdown Level -->
                        //                         <li class="dropdown-submenu dropend">
                        //                             <a class="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                        //                             <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                    
                        //                                 <!-- dropdown submenu open right -->
                        //                                 <li class="dropdown-submenu dropend">
                        //                                     <a class="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                        //                                     <ul class="dropdown-menu" data-bs-popper="none">
                        //                                         <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        //                                         <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        //                                     </ul>
                        //                                 </li>
                        //                                 <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                    
                        //                                 <!-- dropdown submenu open left -->
                        //                                 <li class="dropdown-submenu dropstart">
                        //                                     <a class="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                        //                                     <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                        //                                         <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        //                                         <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        //                                     </ul>
                        //                                 </li>
                        //                                 <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        //                             </ul>
                        //                         </li>
                        //                     </ul>
                        //                 </li>
                        //                 </ul>
                                   
                    
                        //             <!-- Nav Main menu END -->
                    
                        //             <!-- Nav Search START -->
                        //             <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                        //                 <div class="nav-item w-100">
                        //                     <form class="position-relative">
                        //                         <input class="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search">
                        //                         <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                        //                             <i class="fas fa-search fs-6 "></i>
                        //                         </button>
                        //                     </form>
                        //                 </div>
                        //             </div>
                        //             <!-- Nav Search END -->
                        //         </div>
                        //         <!-- Main navbar END -->
                    
                        //         <!-- Profile START -->
                        //         <div class="dropdown ms-1 ms-lg-0">
                        //             <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                        //                 <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">
                        //             </a>
                        //             <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                        //                 <!-- Profile info -->
                        //                 <li class="px-3">
                        //                     <div class="d-flex align-items-center">
                        //                         <!-- Avatar -->
                        //                         <div class="avatar me-3">
                        //                             <img class="avatar-img rounded-circle shadow" src="assets/images/avatar/01.jpg" alt="avatar">
                        //                         </div>
                        //                         <div>
                        //                             <a class="h6" href="#">Lori Ferguson</a>
                        //                             <p class="small m-0">example@gmail.com</p>
                        //                         </div>
                        //                     </div>
                        //                     <hr>
                        //                 </li>
                        //                 <!-- Links -->
                        //                 <li><a class="dropdown-item" href="#"><i class="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                        //                 <li><a class="dropdown-item" href="#"><i class="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                        //                 <li><a class="dropdown-item" href="#"><i class="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                        //                 <li><a class="dropdown-item bg-danger-soft-hover" href="#"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                        //                 <li> <hr class="dropdown-divider"></li>
                        //                 <!-- Dark mode options START -->
                        //                 <li>
                        //                     <div class="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                        //                         <button type="button" class="btn btn-sm mb-0 active" data-bs-theme-value="light">
                        //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                        //                                 <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                        //                                 <use href="#"></use>
                        //                             </svg> Light
                        //                         </button>
                        //                         <button type="button" class="btn btn-sm mb-0" data-bs-theme-value="dark">
                        //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                        //                                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                        //                                 <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                        //                                 <use href="#"></use>
                        //                             </svg> Dark
                        //                         </button>
                        //                         <button type="button" class="btn btn-sm mb-0" data-bs-theme-value="auto">
                        //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                        //                                 <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                        //                                 <use href="#"></use>
                        //                             </svg> Auto
                        //                         </button>
                        //                     </div>
                        //                 </li> 
                        //                 <!-- Dark mode options END-->
                        //             </ul>
                        //         </div>
                        //         <!-- Profile START -->
                        //     </div>
                        // </nav>


                        <nav className="navbar navbar-expand-xl">
                        <div className="container">
                            {/* Logo START */}
                            <a className="navbar-brand" href="index.html">
                                <img className='img-fluid w-25' src={logo} alt="" />
                            </a>
                            {/* Logo END */}
            
                            {/* Responsive navbar toggler */}
                            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-animation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
            
                            {/* Main navbar START */}
                            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
                                {/* Nav Main menu START */}
                                <ul className="navbar-nav navbar-nav-scroll mx-auto">
                                    {/* Nav item 1 Demos */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                                        <ul className="dropdown-menu" aria-labelledby="demoMenu">
                                            <li> <a className="dropdown-item" href="index.html">Home Default</a></li>
                                        </ul>
                                    </li>
            
                                    {/* Nav item 2 Pages */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                            {/* Dropdown submenu */}
                                            <li className="dropdown-submenu dropend">
                                                <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                                                <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                    <li> <a className="dropdown-item" href="course-categories.html">Course Categories</a></li>
                                                    <li> <hr className="dropdown-divider"></hr></li>
                                                    <li> <a className="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
                                                </ul>
                                            </li>
                                            {/* Other dropdown submenu items */}
                                        </ul>
                                    </li>
            
                                    {/* Nav item 3 Account */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
                                        <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                                            {/* Dropdown submenu for Instructor */}
                                            <li className="dropdown-submenu dropend">
                                                <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-tie fa-fw me-1"></i>Instructor</a>
                                                <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                    {/* Instructor dropdown menu items */}
                                                </ul>
                                            </li>
                                            {/* Other dropdown submenu items */}
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
                                                <i className="fas fa-search fs-6 "></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* Nav Search END */}
                            </div>
                            {/* Main navbar END */}
            
                            {/* Profile START */}
                            <div className="dropdown ms-1 ms-lg-0">
                                {/* Profile Dropdown menu */}
                            </div>
                            {/* Profile END */}
                        </div>
                    </nav>

//page intro





    );
}