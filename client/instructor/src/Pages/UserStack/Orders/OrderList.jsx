import React from 'react'

export default function OrderList() {
  return (
    <>
      <tr>
        {/* Table data */}
        <td>
          <div className="d-flex align-items-center position-relative">
            {/* Image */}
            <div className="avatar avatar-md">
              <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
            </div>
            <div className="mb-0 ms-3">
              {/* Title */}
              <h6 className="mb-0"><a href="#" className="stretched-link">Lori
                Stevens</a></h6>
              <span className="text-body small"><i className="fas fa-fw fa-map-marker-alt me-1 mt-1" />Mumbai</span>
            </div>
          </div>
        </td>
        {/* Table data */}
        <td>29 Aug 2021</td>
        {/* Table data */}
        <td className="text-center text-sm-start">
          <div className="overflow-hidden">
            <h6 className="mb-0">85%</h6>
            <div className="progress progress-sm bg-primary bg-opacity-10">
              <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
              </div>
            </div>
          </div>
        </td>
        {/* Table data */}
        <td>21</td>
        {/* Table data */}
        <td>$6,205</td>
        {/* Table data */}
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
