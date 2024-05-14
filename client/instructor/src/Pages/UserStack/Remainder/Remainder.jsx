import React from 'react'
import banner from '../../../assets/images/remainder.svg'
export default function Remainder() {
  return (
    <>
      <div className="page-content-wrapper border">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="h3 mb-2 mb-sm-0">Remainders</h1>
          </div>
        </div>
        <div className="row g-4 mb-4">
          <div className="col-xxl-6">
            <div className="card border h-100">
              <p className='fs-3 text-black fw-bold'>Send Remainders</p>
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="card shadow-none border h-100">
              {/* Card header */}
              <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                <h5 className="card-header-title">Latest Instructors</h5>
                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
              </div>
              {/* Card body START */}
              <div className="card-body p-4 d-flex flex-row justify-content-between align-items-center">
                <img src={banner} className='img-fluid rounded-3 w-50' alt="" />
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <h3>ds</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
