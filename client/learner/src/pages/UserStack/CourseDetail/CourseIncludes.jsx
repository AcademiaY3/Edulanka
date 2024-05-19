import React from 'react';

export default function CourseIncludes({ course }) {
    return (
        <div className="col-md-6 col-lg-12">
            <div className="card card-body shadow-sm p-4 mb-4">
                {/* Title */}
                <h4 className="mb-3">This course includes</h4>
                <ul className="list-group list-group-borderless">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-book-open text-primary" />Lectures
                        </span>
                        <span>{course.lectures ? course.lectures.length : 0}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-clock text-primary" />Duration
                        </span>
                        <span>{course.hours} hours</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-signal text-primary" />Skills
                        </span>
                        <span>{course.skills}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-globe text-primary" />Language
                        </span>
                        <span>{course.language}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-medal text-primary" />Certificate
                        </span>
                        <span>{course.certificate}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
