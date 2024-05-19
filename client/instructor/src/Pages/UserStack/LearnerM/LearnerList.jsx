import React from 'react';
import formatDate from '../../../Utils/Constants/FormatDate';

export default function LearnerList({ learners }) {
    return (
        <>
            {learners.length !== 0 ? (
                learners.map((learner) => (
                    <tr key={learner.id}>
                        <td>
                            <img src={learner.course === undefined ? '' : learner.course.thumbnail} className="img-fluid rounded-2" style={{ width: '80px' }} alt="Course Thumbnail" />
                        </td>
                        <td>{learner.learner}</td>
                        <td>{formatDate(learner.enrolled)}</td>
                        <td className='fw-bolder'>{learner.course === undefined ? '' : learner.course.name}</td>
                        <td className="fw-bolder">fdsfsdf</td>
                        <td>Rs {learner.course === undefined ? '00' : learner.course.price}.00</td>
                        <td>
                            <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                <i className="fas fa-eye text-success" />
                            </a>
                            <a href="#" className="btn btn-light btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                                <i className="fas fa-edit text-warning" />
                            </a>
                            <button className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                                <i className="fas fa-trash text-danger" />
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <h3>No learners</h3>
            )}
        </>
    );
}
