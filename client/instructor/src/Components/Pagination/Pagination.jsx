import React from 'react'

export default function Pagination() {
    return (
        <div className="card-footer bg-transparent pt-0">
            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                    <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                        <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                        <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                        <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                        <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                        <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
