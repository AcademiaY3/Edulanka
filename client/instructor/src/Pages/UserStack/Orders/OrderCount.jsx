import React from 'react'

export default function OrderCount() {
    return (
        <div className="row g-4 mb-4">
            <div className="col-md-4 ">
                <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h4 fw-bold">Total Orders</span>
                        </div>
                        <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fas fa-tv fa-fw" /></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h4 fw-bold">Approved Orders</span>
                        </div>
                        <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw" /></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h4 fw-bold">Pending Orders</span>
                        </div>
                        <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
