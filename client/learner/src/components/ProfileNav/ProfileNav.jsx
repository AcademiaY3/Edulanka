import React from 'react'

export default function ProfileNav() {
    return (
        <div className="col-xl-3">
            <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
                <div className="offcanvas-header bg-light">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
                </div>
                <div className="offcanvas-body p-3 p-xl-0">
                    <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                        <div className="list-group list-group-dark list-group-borderless">
                            <a to="#" className="list-group-item" href="instructor-manage-course.html">
                                <i className="faf fa-basket fa-fw me-2" />My Courses
                            </a>
                            <a to="#" className="list-group-item" href="instructor-quiz.html">
                                <i className="faf fa-question-diamond fa-fw me-2" />Profile
                            </a>
                            <a className="list-group-item text-danger bg-danger-soft-hover" href="sign-in.html">
                                <i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
