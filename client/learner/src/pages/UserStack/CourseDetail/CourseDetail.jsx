import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import React, { useEffect, useState } from "react";
import img21 from '../../../assets/images/courses/4by3/21.jpg'
import img01 from '../../../assets/images/courses/4by3/01.jpg'
import img18 from '../../../assets/images/courses/4by3/18.jpg'
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { Link, useParams } from 'react-router-dom';
import CourseService from '../../../services/Course/CourseService';
import formatDate from '../../../utils/Constants/FormatDate';
import LocalStore from '../../../store/LocalStore';
import CourseIncludes from './CourseIncludes';

export default function CourseDetail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [course, setCourse] = useState({})
  const [isEnrolled, setIsEnrolled] = useState(false);
  const learnerId = LocalStore.getToken().user._id
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
                    {/* Course detail START */}
                    <h5 className="mb-3">Course Description</h5>
                    <p>{course.description}</p>
                  </div>
                </div>
              </div>
              <div className="card card-body shadow-sm mt-3 p-4">
                <h4 className="mb-3">Popular Tags</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data science</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web development</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                  <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 pt-5 pt-lg-0">
              <div className="row mb-5 mb-lg-0">
                <div className="col-md-6 col-lg-12">
                  {/* Video START */}
                  <div className="card shadow-sm p-2 mb-4 z-index-9">
                    <div className="m-auto">
                      <MediaPlayer title="Sprite Fight" src={course.lectures != undefined ? course.lectures[0].video : ''}>
                        <MediaProvider />
                        <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                      </MediaPlayer>
                    </div>
                    {/* Card body */}
                    <div className="card-body px-3">
                      {/* Info */}
                      <div className="d-flex justify-content-between align-items-center">
                        {/* Price and time */}
                        <div>
                          <div className="d-flex align-items-center">
                            <h3 className="fw-bold mb-0 me-2">Rs {course.price}.00</h3>
                            <span className="text-decoration-line-through mb-0 me-2">Rs {(course.price) + 259}.00</span>
                            <span className="badge text-bg-orange mb-0">60% off</span>
                          </div>
                          <p className="mb-0 text-danger"><i className="fas fa-stopwatch me-2" />5 days left at this price</p>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="mt-3 w-100">
                        {
                          course.enrolled !== undefined ? (
                            course.enrolled.some(enrollment => enrollment.learner == learnerId) ? (
                              <Link to={`/main/courses/enrolledcourse/${course._id}`} className="btn btn-danger mb-0 w-100">Visit course</Link>
                            ) : (
                              <Link to={`/main/courses/checkout/${course._id}`} className="btn btn-success mb-0 w-100">Buy course</Link>
                            )
                          ) : (
                            <></>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                  {/* Course info START */}
                  <CourseIncludes course={course} />
                </div>
              </div>{/* Row End */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}