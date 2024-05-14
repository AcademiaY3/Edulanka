import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon if you're using Font Awesome icons
import NavBar from "../NavBar/NavBar";

export default function CourseDetail(){
    return(
       <>
       <NavBar/>
        <section className="bg-light py-0 py-sm-5">
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-8">
                    {/* Badge */}
                    <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">Digital Marketing</h6>
                    {/* Title */}
                    <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
                    <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                    {/* Content */}
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><FontAwesomeIcon icon={['fas', 'star']} className="text-warning me-2" />4.5/5.0</li>
                        <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><FontAwesomeIcon icon={['fas', 'user-graduate']} className="text-orange me-2" />12k Enrolled</li>
                        <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><FontAwesomeIcon icon={['fas', 'signal']} className="text-success me-2" />All levels</li>
                        <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><FontAwesomeIcon icon={['bi', 'patch-exclamation-fill']} className="text-danger me-2" />Last updated 09/2021</li>
                        <li className="list-inline-item h6 mb-0"><FontAwesomeIcon icon={['fas', 'globe']} className="text-info me-2" />English</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section>
    <div className="container">
    <div className="row">
        {/* Main content START */}
        <div className="col-lg-8">
            <div className="card shadow rounded-2 p-0">
                {/* Tabs START */}
                <div className="card-header border-bottom px-4 py-3">
                    <ul className="nav nav-pills nav-tabs-line py-0" id="course-pills-tab" role="tablist">
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Overview</button>
                        </li>
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false" tabIndex="-1">Curriculum</button>
                        </li>
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false" tabIndex="-1">Instructor</button>
                        </li>
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-4" type="button" role="tab" aria-controls="course-pills-4" aria-selected="false" tabIndex="-1">Reviews</button>
                        </li>
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-5" type="button" role="tab" aria-controls="course-pills-5" aria-selected="false" tabIndex="-1">FAQs </button>
                        </li>
                        {/* Tab item */}
                        <li className="nav-item me-2 me-sm-4" role="presentation">
                            <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-6" data-bs-toggle="pill" data-bs-target="#course-pills-6" type="button" role="tab" aria-controls="course-pills-6" aria-selected="false" tabIndex="-1">Comment</button>
                        </li>
                    </ul>
                </div>
                {/* Tabs END */}

                {/* Tab contents START */}
                <div className="card-body p-4">
                    <div className="tab-content pt-2" id="course-pills-tabContent">
                        {/* Content START */}
                        <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                            {/* Course detail START */}
                            <h5 className="mb-3">Course Description</h5>
                            <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong></p>
                            <p className="mb-3">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing courses in 1!</strong></p>
                            <p className="mb-3">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing course</a></strong> syllabus, let’s look at the scope of digital marketing and what the future holds.</p>
                            <p className="mb-0">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
                            
                            {/* List content */}
                            <h5 className="mt-4">What you’ll learn</h5>
                            <ul className="list-group list-group-borderless mb-3">
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Digital marketing course introduction</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Customer Life cycle</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>What is Search engine optimization(SEO)</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Facebook ADS</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Facebook Messenger Chatbot</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Search engine optimization tools</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Why SEO</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>URL Structure</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Featured Snippet</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>SEO tips and tricks</li>
                                <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2"></i>Google tag manager</li>
                            </ul>

                            <p className="mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. </p>
                            {/* Course detail END */}
                        </div>
                        {/* Content END */}
                    </div>
                </div>
                {/* Tab contents END */}
            </div>
        </div>
        {/* Main content END */}
    </div>
</div>

// Content START
<div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
    {/* Course accordion START */}
    <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
        {/* Item */}
        <div className="accordion-item mb-3">
            <h6 className="accordion-header font-base" id="heading-1">
                <button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                    Introduction of Digital Marketing 
                    <span className="small ms-0 ms-sm-2">(3 Lectures)</span> 
                </button>
            </h6>
            <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                    {/* Course lecture */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0"></i>
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                        </div>
                        <p className="mb-0">2m 10s</p>
                    </div>

                    <hr /> {/* Divider */}

                    {/* Course lecture */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0"></i>
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px"> What is Digital Marketing What is Digital Marketing</span>
                        </div>
                        <p className="mb-0 text-truncate">15m 10s</p>
                    </div>

                    <hr /> {/* Divider */}

                    {/* Course lecture */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-relative d-flex align-items-center">
                            <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0"></i>
                            </a>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Type of Digital Marketing</span>
                        </div>
                        <p className="mb-0">18m 10s</p>
                    </div>
                </div>
            </div>
        </div>
   
        // Item
<div className="accordion-item mb-3">
    <h6 className="accordion-header font-base" id="heading-2">
        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
            Customer Life cycle
            <span className="small ms-0 ms-sm-2">(4 Lectures)</span> 
        </button>
    </h6>
    <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
        {/* Accordion body START */}
        <div className="accordion-body mt-3">
            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">What is Digital Marketing</span>
                </div>
                <p className="mb-0">11m 20s</p>
            </div>

            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">15 Tips for Writing Magnetic Headlines</span>
                </div>
                <p className="mb-0 text-truncate">25m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Like Your Customers Talk</span>
                </div>
                <p className="mb-0">11m 30s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <div>
                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fas fa-play me-0"></i>
                        </a>
                    </div>
                    <div className="row g-sm-0 align-items-center">
                        <div className="col-sm-6">
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">How to Flip Features Into Benefits</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                        </div>
                    </div>
                </div>
                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">35m 30s</p>
            </div>
        </div>
        {/* Accordion body END */}
    </div>
</div>

// Item
<div className="accordion-item mb-3">
    <h6 className="accordion-header font-base" id="heading-5">
        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
            What is Search Engine Optimization(SEO) 
            <span className="small ms-0 ms-sm-2">(10 Lectures)</span> 
        </button>
    </h6>
    <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
        {/* Accordion body START */}
        <div className="accordion-body mt-3">

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                </div>
                <p className="mb-0">1m 10s</p>
            </div>
                
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Overview of SEO</span>
                </div>
                <p className="mb-0 text-truncate">11m 03s</p>
            </div>

            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to SEO Optimise Your Homepage</span>
                </div>
                <p className="mb-0">15m 00s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How to Write Title Tags Search Engines Love</span>
                </div>
                <p className="mb-0">25m 30s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">SEO Keyword Planning</span>
                </div>
                <p className="mb-0">18m 10s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">eCommerce SEO</span>
                </div>
                <p className="mb-0">28m 10s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Internal and External Links</span>
                </div>
                <p className="mb-0">45m 10s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Mobile SEO</span>
                </div>
                <p className="mb-0">8m 10s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Off-page SEO</span>
                </div>
                <p className="mb-0">18m 10s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring SEO Effectiveness</span>
                </div>
                <p className="mb-0">35m 10s</p>
            </div>
        </div>
        {/* Accordion body END */}
    </div>
</div>

// Item 1
<div className="accordion-item mb-3">
    <h6 className="accordion-header font-base" id="heading-6">
        <button className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
            Facebook ADS 
            <span className="small ms-0 ms-sm-2">(3 Lectures)</span> 
        </button>
    </h6>
    <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
        {/* Accordion body START */}
        <div className="accordion-body mt-3">
            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                </div>
                <p className="mb-0">1m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating Facebook Pages</span>
                </div>
                <p className="mb-0 text-truncate">25m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Facebook Page Custom URL</span>
                </div>
                <p className="mb-0">11m 30s</p>
            </div>
        </div>
        {/* Accordion body END */}
    </div>    
</div>

// Item 2
<div className="accordion-item mb-3">
    <h6 className="accordion-header font-base" id="heading-7">
        <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
            YouTube Marketing 
            <span className="small ms-0 ms-sm-2">(5 Lectures)</span> 
        </button>
    </h6>
    <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample2">
        {/* Accordion body START */}
        <div className="accordion-body mt-3">
            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Video Flow</span>
                </div>
                <p className="mb-0">25m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Webmaster Tool</span>
                </div>
                <p className="mb-0 text-truncate">15m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                        <i className="fas fa-play me-0"></i>
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Featured Contents on Channel</span>
                </div>
                <p className="mb-0">32m 20s</p>
            </div>
            
            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <div>
                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fas fa-play me-0"></i>
                        </a>
                    </div>
                    <div className="row g-sm-0 align-items-center">
                        <div className="col-sm-6">
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Managing Comments</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                        </div>
                    </div>
                </div>
                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">20m 20s</p>
            </div>

            <hr /> {/* Divider */}

            {/* Course lecture */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="position-relative d-flex align-items-center">
                    <div>
                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fas fa-play me-0"></i>
                        </a>
                    </div>
                    <div className="row g-sm-0 align-items-center">
                        <div className="col-sm-6">
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Channel Analytics</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="badge text-bg-orange ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1"></i>Premium</span>
                        </div>
                    </div>
                </div>
                <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">18m 20s</p>
            </div>
        </div>
        {/* Accordion body END */}
    </div>
</div>


</div>
</div>





    </section>


    </>




    )
}