import React from 'react';
import formatDate from '../../../Utils/Constants/FormatDate';

export default function CourseList({ courses }) {
    console.log(courses)
    return (
        <>
            {courses.length === 0 ? (
                <h1>No courses</h1>
            ) : (
                courses.map((course, index) => (
                    <tr key={index}>
                        <td>
                            <img src="https://firebasestorage.googleapis.com/v0/b/edulanka-2874b.appspot.com/o/videos%2F1716072947136bannerMain.jpg?alt=media&token=55cf3c9e-4e0a-461f-803c-ccb76a314f3e" className="img-fluid rounded-2" style={{ width: '80px' }} alt="Course Thumbnail" />
                        </td>
                        <td>{course.name}</td>
                        <td>{course.title}</td>
                        <td>{course.price}</td>
                        <td>{course.language}</td>
                        <td>{formatDate(course.createdAt)}</td>
                        <td>
                            <a  className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <i className="fas fa-eye text-success" />
                            </a>
                            <a  className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                                <i className="fas fa-edit text-warning" />
                            </a>
                            <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                                <i className="fas fa-trash text-danger" />
                            </button>
                        </td>
                    </tr>
                ))
            )}
        </>
    );
}
