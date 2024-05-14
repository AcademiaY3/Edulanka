import React from 'react'
import avatarImage from "../../../../assets/images/avatar/01.jpg";

export default function ProfileBanner() {
    return (
        <section className="pt-0">
            {/* Main banner background image */}
            <div className="container-fluid px-0">
                <div className="bg-blue h-100px  rounded-0" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
                </div>
            </div>
            <div className="container mt-n4">
                <div className="row">
                    {/* Profile banner START */}
                    <div className="col-12">
                        <div className="card bg-transparent card-body p-0">
                            <div className="row d-flex justify-content-between">
                                {/* Avatar */}
                                <div className="col-auto mt-4 mt-md-0">
                                    <div className="avatar avatar-xxl mt-n3">
                                        <img className="avatar-img rounded-circle border border-white border-3 shadow" src={avatarImage} alt />
                                    </div>
                                </div>
                                {/* Profile info */}
                                <div className="col d-md-flex justify-content-between align-items-center mt-4">
                                    <div>
                                        <h1 className="my-1 fs-4">Lori Stevens <i className="faf fa-patch-check-fill text-info small" /></h1>
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                                            <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled Students</li>
                                            <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-2" />25 Courses</li>
                                        </ul>
                                    </div>
                                    {/* Button */}

                                </div>
                            </div>
                        </div>
                        {/* Profile banner END */}
                        {/* Advanced filter responsive toggler START */}
                        {/* Divider */}
                        <hr className="d-xl-none" />
                        <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
                            <a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
                            <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                                <i className="fas fa-sliders-h" />
                            </button>
                        </div>
                        {/* Advanced filter responsive toggler END */}
                    </div>
                </div>
            </div>
        </section>
    )
}
