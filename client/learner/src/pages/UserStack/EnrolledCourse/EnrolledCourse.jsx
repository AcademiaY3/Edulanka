import React, { useEffect, useState } from "react";
import Lecture from './Lecture'
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import EnrolledBanner from './EnrolledBanner';
import PopularTags from './PopularTags';
import CourseIncludes from './CourseIncludes';
import CourseProgress from './CourseProgress';
import { Link, useParams } from 'react-router-dom';
import CourseService from '../../../services/Course/CourseService';
import formatDate from '../../../utils/Constants/FormatDate';

export default function EnrolledCourse() {
    const [loading, setLoading] = useState(false)
    const [course, setCourse] = useState({})
    const { id } = useParams()
    const fetchCourse = async () => {
        try {
            setLoading(true)
            const result = await CourseService.getCourseyById(id)
            // alert(result.data.data)
            if (result) {
                setCourse(result.data.data)

            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchCourse()
    }, [])
    return (
        <>
            {/* <EnrolledBanner /> */}
            <section className="bg-light py-0 py-sm-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
                            {/* Badge */}
                            <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">{course.category}</h6>
                            {/* Title */}
                            <h1>The Complete {course.title} Course - {course.lectures !== undefined ? course.lectures.length : ''} Courses in 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus, earum magnam maiores cum laudantium laborum illum nihil, harum corporis dicta nesciunt nam magni in dolores, rem impedit praesentium obcaecati!</p>
                            {/* Content */}
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />
                                    {course.enrolled !== undefined ? course.enrolled.length : ''}  Enrolled
                                </li>
                                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0 text-capitalize"><i className="fas fa-signal text-success me-2" />{course.skills}</li>
                                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="faf fa-patch-exclamation-fill text-danger me-2" />
                                    Last updated {formatDate(course.updatedAt)}
                                </li>
                                <li className="list-inline-item h6 mb-0 text-capitalize"><i className="fas fa-globe text-info me-2" />{course.language}</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <img src={course.thumbnail} className="img-fluid rounded-3" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-0 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card shadow-sm rounded-2 p-0">
                                <div className="card-body p-4">
                                    <div >
                                        <h3 className="mb-3">Course Description</h3>
                                        <p>{course.description}</p>
                                        <h3 className="mt-4 mb-3">Curriculum</h3>
                                        <div className="col-12 pt-5 pt-lg-0">
                                            {
                                                course.lectures !== undefined?(
                                                    <Lecture lectures={course.lectures} course={course}/>
                                                ):(
                                                    <></>
                                                )
                                            }
                                        </div>
                                        <h5 className="mt-4">Course OutLine</h5>
                                        <p className="mt-4 mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus molestias provident quidem quos eius iure deserunt laborum numquam animi!</p>
                                        <h1 className="fs-4 text-decoration-underline text-danger" style={{ cursor: "pointer" }}>
                                            <Link to={course.outline}>Doenload Module outline</Link>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5 pt-lg-0">
                            <div className="row mb-5 mb-lg-0">
                                <CourseProgress course={course} />
                                <CourseIncludes course={course}/>
                                <PopularTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
