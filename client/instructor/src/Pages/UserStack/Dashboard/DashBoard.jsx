import React from 'react'

export default function DashBoard() {
    return (
        <>
            <div className="page-content-wrapper border">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    {/* Counter item */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Digit */}
                                <div>
                                    <h2 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={1958} data-purecounter-delay={200}>0</h2>
                                    <span className="mb-0 h6 fw-light">Completed Courses</span>
                                </div>
                                {/* Icon */}
                                <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fas fa-tv fa-fw" /></div>
                            </div>
                        </div>
                    </div>
                    {/* Counter item */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Digit */}
                                <div>
                                    <h2 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={1600} data-purecounter-delay={200}>0</h2>
                                    <span className="mb-0 h6 fw-light">Enrolled Courses</span>
                                </div>
                                {/* Icon */}
                                <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw" /></div>
                            </div>
                        </div>
                    </div>
                    {/* Counter item */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Digit */}
                                <div>
                                    <h2 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={1235} data-purecounter-delay={200}>0</h2>
                                    <span className="mb-0 h6 fw-light">Course In Progress</span>
                                </div>
                                {/* Icon */}
                                <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw" /></div>
                            </div>
                        </div>
                    </div>
                    {/* Counter item */}
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Digit */}
                                <div>
                                    <div className="d-flex">
                                        <h2 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={845} data-purecounter-delay={200}>0</h2>
                                        <span className="mb-0 h2 ms-1">hrs</span>
                                    </div>
                                    <span className="mb-0 h6 fw-light">Total Watch Time</span>
                                </div>
                                {/* Icon */}
                                <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="bi bi-stopwatch-fill fa-fw" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-xxl-8">
                        <div className="card shadow-none border h-100">
                            {/* Card header */}
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                                <h5 className="card-header-title">Latest Instructors</h5>
                                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
                            </div>
                            {/* Card body START */}
                            <div className="card-body p-4">
                                {/* Instructor item START */}
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    {/* Avatar and info */}
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Lori Stevens<i className="bi bi-patch-check-fill text-info small ms-1" /></h6>
                                            <ul className="list-inline mb-0 small">
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1" />25 Courses</li>
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1" />4.5/5.0</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <a href="#" className="btn btn-sm btn-light mb-0">View</a>
                                </div>
                                {/* Instructor item END */}
                                <hr />{/* Divider */}
                                {/* Instructor item START */}
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    {/* Avatar and info */}
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Dennis Barrett</h6>
                                            <ul className="list-inline mb-0 small">
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1" />18 Courses</li>
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1" />4.5/5.0</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <a href="#" className="btn btn-sm btn-light mb-0">View</a>
                                </div>
                                {/* Instructor item END */}
                                <hr />{/* Divider */}
                                {/* Instructor item START */}
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    {/* Avatar and info */}
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Jacqueline Miller<i className="bi bi-patch-check-fill text-info small ms-1" /></h6>
                                            <ul className="list-inline mb-0 small">
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1" />21 Courses</li>
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1" />4.8/5.0</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <a href="#" className="btn btn-sm btn-light mb-0">View</a>
                                </div>
                                {/* Instructor item END */}
                                <hr />{/* Divider */}
                                {/* Instructor item START */}
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    {/* Avatar and info */}
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Billy Vasquez</h6>
                                            <ul className="list-inline mb-0 small">
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1" />15 Courses</li>
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1" />4.5/5.0</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <a href="#" className="btn btn-sm btn-light mb-0">View</a>
                                </div>
                                {/* Instructor item END */}
                                <hr />{/* Divider */}
                                {/* Instructor item START */}
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    {/* Avatar and info */}
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Amanda Reed<i className="bi bi-patch-check-fill text-info small ms-1" /></h6>
                                            <ul className="list-inline mb-0 small">
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-1" />29 Courses</li>
                                                <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-1" />4.5/5.0</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <a href="#" className="btn btn-sm btn-light mb-0">View</a>
                                </div>
                                {/* Instructor item END */}
                            </div>
                            {/* Card body END */}
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="card border h-100">
                            {/* Card header */}
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                                <h5 className="card-header-title">New Joiners</h5>
                                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
                            </div>
                            {/* Card body START */}
                            <div className="card-body p-4">
                                {/* Ticket item START */}
                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                                            <p className="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>
                                            <span className="small">8 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Ticket item END */}
                                <hr />{/* Divider */}
                                {/* Ticket item START */}
                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <div className="avatar-img rounded-circle bg-purple bg-opacity-10">
                                                <span className="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                                            <p className="mb-0">Comment from Billy Vasquez on ticket #659</p>
                                            <span className="small">8 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Ticket item END */}
                                <hr />{/* Divider */}
                                {/* Ticket item START */}
                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <div className="avatar-img rounded-circle bg-orange bg-opacity-10">
                                                <span className="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                                            <p className="mb-0"><b>Webestica</b> assign you a new ticket for <b>Eduport theme</b></p>
                                            <span className="small">5 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Ticket item END */}
                                <hr />{/* Divider */}
                                {/* Ticket item START */}
                                <div className="d-flex justify-content-between position-relative">
                                    <div className="d-sm-flex">
                                        {/* Avatar */}
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                        </div>
                                        {/* Info */}
                                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                                            <p className="mb-0">Thanks for contact us with your issues.</p>
                                            <span className="small">9 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Ticket item END */}
                            </div>
                            {/* Card body END */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
