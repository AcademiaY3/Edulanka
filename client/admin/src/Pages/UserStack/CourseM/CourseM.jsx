import React from 'react'
import Pagination from '../../../Components/Pagination/Pagination'
import CourseList from './CourseList'
import { Link } from 'react-router-dom'

export default function CourseM() {
    return (
        <div className="page-content-wrapper border">
            {/* Title */}
            <div className="row mb-3">
                <div className="col-12 d-sm-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
                    <Link to={'/main/courses/addcourse'} className="btn btn-sm btn-primary mb-0">Create a Course</Link>
                </div>
            </div>
            {/* Course boxes START */}
            <div className="row g-4 mb-4">
                {/* Course item */}
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
                        <h6>Total Courses</h6>
                        <h2 className="mb-0 fs-1 text-primary">1200</h2>
                    </div>
                </div>
                {/* Course item */}
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
                        <h6>Activated Courses</h6>
                        <h2 className="mb-0 fs-1 text-success">996</h2>
                    </div>
                </div>
                {/* Course item */}
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
                        <h6>Pending Courses</h6>
                        <h2 className="mb-0 fs-1 text-warning">200</h2>
                    </div>
                </div>
            </div>
            <div className="card bg-transparent border">
                <div className="card-header bg-light border-bottom">
                    <div className="row g-3 align-items-center justify-content-between">
                        <div className="col-md-8">
                            <form className="rounded position-relative">
                                <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                    <i className="fas fa-search fs-6 " />
                                </button>
                            </form>
                        </div>
                        <div className="col-md-3">
                            <form>
                                <select className="form-select js-choice border-0 z-index-9" aria-label=".form-select-sm">
                                    <option value>Sort by</option>
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>Accepted</option>
                                    <option>Rejected</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive border-0 rounded-3">
                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">Course Name</th>
                                    <th scope="col" className="border-0">Instructor</th>
                                    <th scope="col" className="border-0">Added Date</th>
                                    <th scope="col" className="border-0">Type</th>
                                    <th scope="col" className="border-0">Price</th>
                                    <th scope="col" className="border-0">Status</th>
                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CourseList />
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    )
}
