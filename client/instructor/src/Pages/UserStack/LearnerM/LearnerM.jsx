import React, { useEffect, useState } from 'react'
import LearnerList from './LearnerList'
import LearnerCount from './LearnerCount'
import LearnerService from '../../../Services/LearnerService/LearnerService'
import Pagination from '../../../Components/Pagination/Pagination'

export default function LearnerM() {
    const [loading, setLoading] = useState(false)
    const [learners, setLearners] = useState([''])
    const [totalCourses, setTotalCourses] = useState(0)
    const [totalLearners, setTotalLearners] = useState(0)
    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await LearnerService.getAllInstructorsLearners()
            console.log(result)
            if (result) {
                setTotalCourses(result.data.data.totalCourses)
                setTotalLearners(result.data.data.totalLearners)
                setLearners(result.data.data.learners)
            }
        } catch (error) {
            if (error.response.data.code) {
                setPays([''])
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="page-content-wrapper border">
                    {/* Title */}
                    <div className="row">
                        <div className="col-12">
                            <h1 className="h3 mb-2 mb-sm-0">Learners</h1>
                        </div>
                    </div>
                    <LearnerCount totalCourses={totalCourses} totalLearners={totalLearners} />
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
                                        <LearnerList learners={learners} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination total={totalLearners} />
                    </div>
                </div>
            )}
        </>
    )
}
