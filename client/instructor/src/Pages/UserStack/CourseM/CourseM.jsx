import React, { useEffect, useState } from 'react'
import Pagination from '../../../Components/Pagination/Pagination'
import CourseList from './CourseList'
import { Link } from 'react-router-dom'
import CourseService from '../../../Services/CourseService/CourseService'

export default function CourseM() {
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState([''])
    const [totalCourses, setTotalCourses] = useState(0)
    const [totalApproved, setTotalApproved] = useState(0)
    const [totalPending, setTotalPending] = useState(0)

    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await CourseService.getAllInstructorsCourses()
            if (result) {
                setTotalApproved(result.data.data.approved_courses)
                setTotalCourses(result.data.data.total_courses)
                setCourses(result.data.data.courses)
                setTotalPending(result.data.data.pending_courses)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="page-content-wrapper border">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="row mb-3">
                        <div className="col-12 d-sm-flex justify-content-between align-items-center">
                            <h1 className="h3 mb-2 mb-sm-0">Courses</h1>
                            <Link to={'/main/courses/addcourse'} className="btn bg-dark text-white mb-0">Create a Course</Link>
                        </div>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-sm-6 col-lg-4">
                            <div className="text-center p-4 bg-primary bg-opacity-10 border border-primary rounded-3">
                                <h6>Total Courses</h6>
                                <h2 className="mb-0 fs-1 text-primary">{totalCourses}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="text-center p-4 bg-success bg-opacity-10 border border-success rounded-3">
                                <h6>Activated Courses</h6>
                                <h2 className="mb-0 fs-1 text-success">{totalApproved}</h2>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="text-center p-4  bg-warning bg-opacity-15 border border-warning rounded-3">
                                <h6>Pending Courses</h6>
                                <h2 className="mb-0 fs-1 text-warning">{totalPending}</h2>
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
                                        <CourseList courses={courses} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination total={totalCourses} />
                    </div>
                </>
            )}
        </div>
    )
}
