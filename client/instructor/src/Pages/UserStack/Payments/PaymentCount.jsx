import React from 'react'

export default function PaymentCount({pending,approved,totalAmt,total}) {
    return (
        <div className="row g-4 mt-1 mb-4">
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">Rs {totalAmt}.00</h2>
                            <span className="mb-0 h6 fw-light">Total Money</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">Rs {approved}.00</h2>
                            <span className="mb-0 h6 fw-light">Approved Pays</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter item */}
            <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Digit */}
                        <div>
                            <h2 className="purecounter mb-0 fw-bold">{pending}</h2>
                            <span className="mb-0 h6 fw-light">Pending Pays</span>
                        </div>
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
                                <h2 className="purecounter mb-0 fw-bold">{total}</h2>
                            </div>
                            <span className="mb-0 h6 fw-light">Total pay Items</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
