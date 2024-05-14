import React from 'react'

export default function CourseProgress() {
    return (
        <div className="col-md-6 col-lg-12">
            <div className="card card-body shadow-sm p-4 mb-4">
                {/* Title */}
                <h4 className="mb-3">Course Progress</h4>
                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar progress-bar-striped" style={{ width: '10%' }} />
                </div>
                <ul className="list-group list-group-borderless mt-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">📝 percentage</span>
                        <span>30%</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
