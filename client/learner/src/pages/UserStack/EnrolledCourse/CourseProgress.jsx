import React from 'react';

export default function CourseProgress({ course }) {
    if (!course.lectures || course.lectures.length === 0) {
        return null;
    }

    const totalLectures = course.lectures.length;
    const completedLectures = course.lectures.filter(lecture => lecture.completed).length;
    const completionPercentage = Math.round((completedLectures / totalLectures) * 100);

    return (
        <div className="col-md-6 col-lg-12">
            <div className="card card-body shadow-sm p-4 mb-4">
                {/* Title */}
                <h4 className="mb-3">Course Progress</h4>
                <div className="progress" role="progressbar" aria-label="Course completion progress" aria-valuenow={completionPercentage} aria-valuemin={0} aria-valuemax={100}>
                    <div className="progress-bar progress-bar-striped" style={{ width: `${completionPercentage}%` }} />
                </div>
                <ul className="list-group list-group-borderless mt-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">📝 Percentage Completed</span>
                        <span>{completionPercentage}%</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Total Lectures</span>
                        <span>{totalLectures}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0">Completed Lectures</span>
                        <span>{completedLectures}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
