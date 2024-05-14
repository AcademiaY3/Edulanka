import React from 'react'
import LearnerList from './LearnerList'

export default function LearnerM() {
    return (
        <>
            <div className="page-content-wrapper border">
                {/* Title */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="h3 mb-2 mb-sm-0">Learners</h1>
                    </div>
                </div>
                <div className="card bg-transparent">
                    {/* Card header START */}
                    <div className="card-header bg-transparent border-bottom px-0">
                        {/* Search and select START */}
                        <div className="row g-3 align-items-center justify-content-between">
                            {/* Search bar */}
                            <div className="col-md-8">
                                <form className="rounded position-relative">
                                    <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                        <i className="fas fa-search fs-6 " />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-body px-0">
                        <div className="table-responsive border-0">
                            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 rounded-start">Instructor name</th>
                                        <th scope="col" className="border-0">Join date</th>
                                        <th scope="col" className="border-0">Progress</th>
                                        <th scope="col" className="border-0">Courses</th>
                                        <th scope="col" className="border-0">Payments</th>
                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <LearnerList />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent pt-0 px-0">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0 px-0">
                                    <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                                    <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
