import React from 'react'

export default function LearnerList() {
    return (
        <>
            <tr>
                <td>
                    <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-md">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsMF2wUfsZhHrnC52ryuy5NlaYc9m_MbtJ9kHg4raBQ&s" className="rounded-circle" alt />
                        </div>
                    </div>
                </td>
                <td className='fw-bolder'>Mosh</td>
                <td>29 Aug 2021</td>
                <td className="fw-bolder">fdsfsdf</td>
                <td>Rs 21.00</td>
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
        </>
    )
}
