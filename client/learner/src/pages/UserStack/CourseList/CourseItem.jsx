import React from 'react'
import img01 from '../../../assets/images/courses/4by3/08.jpg'
import { Link } from 'react-router-dom'

export default function CourseItem({ courses }) {
    return (
        <>
            {courses.length !== 0 ? (
                courses.map((course) => (
                    <div key={course._id} className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card shadow h-100">
                            {/* Image */}
                            <Link to={`/main/courses/${course._id}`}>
                                <img src={course.thumbnail} className="card-img-top" alt="course image" />
                            </Link>
                            {/* Card body */}
                            <div className="card-body pb-0">
                                {/* Badge and favorite */}
                                <div className="d-flex justify-content-between mb-2">
                                    <a href="#" className="badge bg-purple bg-opacity-10 text-purple">{course.skills}</a>
                                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                                </div>
                                {/* Title */}
                                <h5 className="card-title text-capitalize">{course.title}</h5>
                                {/* Rating star */}
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                                </ul>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer pt-0 pb-3">
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />{course.hours} hours</span>
                                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />{course.lectures===undefined?'':course.lectures.length} lectures</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Empty</h1>
            )}
        </>
    )
}
