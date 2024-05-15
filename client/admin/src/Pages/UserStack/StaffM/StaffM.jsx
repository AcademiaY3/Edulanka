import React from 'react'
import Pagination from '../../../Components/Pagination/Pagination'
import StaffList from './StaffList'

export default function StaffM() {
  return (
    <>
            <div className="page-content-wrapper border">
                {/* Title */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="h3 mb-2 mb-sm-0">Staff</h1>
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
                                    <StaffList />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </>
  )
}
