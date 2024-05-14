import React from 'react'
import img18 from '../../../assets/images/courses/4by3/18.jpg'

export default function EnrolledBanner() {
    return (
        <section className="bg-light py-0 py-sm-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
                        {/* Badge */}
                        <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">Digital Marketing</h6>
                        {/* Title */}
                        <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
                        <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                        {/* Content */}
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled</li>
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal text-success me-2" />All levels</li>
                            <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="faf fa-patch-exclamation-fill text-danger me-2" />Last updated 09/2021</li>
                            <li className="list-inline-item h6 mb-0"><i className="fas fa-globe text-info me-2" />English</li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <img src={img18} className="img-fluid rounded-3" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
