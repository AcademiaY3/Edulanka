import React from 'react'

export default function PaymentCount() {
    return (
        <div className="row g-4 mb-4">
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h6 fw-light">Total Money</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fas fa-tv fa-fw" /></div>
                    </div>
                </div>
            </div>
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h6 fw-light">Approved Pays</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-purple text-white mb-0"><i className="fas fa-user-tie fa-fw" /></div>
                    </div>
                </div>
            </div>
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">0</h2>
                            <span className="mb-0 h6 fw-light">Pending Pays</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fas fa-user-graduate fa-fw" /></div>
                    </div>
                </div>
            </div>
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <div className="d-flex">
                                <h2 className="purecounter mb-0 fw-bold">0</h2>
                                <span className="mb-0 h2 ms-1">hrs</span>
                            </div>
                            <span className="mb-0 h6 fw-light">Total Items</span>
                        </div>
                        {/* Icon */}
                        <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="bi bi-stopwatch-fill fa-fw" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
