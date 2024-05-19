import React from 'react'

export default function LearnerCount({totalLearners,totalCourses}) {
    return (
        <div className="row g-4 mb-4">
            <div className="col-md-6">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">{totalCourses}</h2>
                            <span className="mb-0 h4 fw-bold">Total Courses</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw" /></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">{totalLearners}</h2>
                            <span className="mb-0 h4 fw-bold">Total Learners</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
