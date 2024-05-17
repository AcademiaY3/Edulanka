import React from 'react'
import LearnerList from './LearnerList'
import LearnerCount from './LearnerCount'

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
                <LearnerCount/>
                <div className="card bg-transparent">
                    <div className="card-body px-0">
                        <div className="table-responsive border-0">
                            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 rounded-start">Thumbnail</th>
                                        <th scope="col" className="border-0">Learner Id</th>
                                        <th scope="col" className="border-0">Enrolled</th>
                                        <th scope="col" className="border-0">Course Name</th>
                                        <th scope="col" className="border-0">Course Price</th>
                                        <th scope="col" className="border-0">Action</th>
                                        <th scope="col" className="border-0 rounded-end"></th>
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
