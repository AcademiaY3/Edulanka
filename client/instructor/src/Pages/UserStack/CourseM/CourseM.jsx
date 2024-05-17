import React from 'react'
import Pagination from '../../../Components/Pagination/Pagination'
import CourseList from './CourseList'

export default function CourseM() {
    return (
        <div className="page-content-wrapper border">
            <div className="row mb-3">
                <div className="col-12 d-sm-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
                    <a href="instructor-create-course.html" className="btn btn-sm btn-primary mb-0">Create a Course</a>
                </div>
            </div>
            <div className="row g-4 mb-4">
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
                        <h6>Total Courses</h6>
                        <h2 className="mb-0 fs-1 text-primary">1200</h2>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
                        <h6>Activated Courses</h6>
                        <h2 className="mb-0 fs-1 text-success">996</h2>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
                        <h6>Pending Courses</h6>
                        <h2 className="mb-0 fs-1 text-warning">200</h2>
                    </div>
                </div>
            </div>
            <div className="card bg-transparent border">
                <div className="card-body">
                    <div className="table-responsive border-0 rounded-3">
                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">Thumbnail</th>
                                    <th scope="col" className="border-0">Course Name</th>
                                    <th scope="col" className="border-0">Title</th>
                                    <th scope="col" className="border-0">Price</th>
                                    <th scope="col" className="border-0">Language</th>
                                    <th scope="col" className="border-0">Learning Hours</th>
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
