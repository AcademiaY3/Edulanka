import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Pagination from "../../../components/Pagination/Pagination";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import CourseService from "../../../services/Course/CourseService";

export default function CauseGrid() {
  const [courses, setCourses] = useState([''])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await CourseService.getAllCourses()
      console.log(result)
      if (result) {
        setCourses(result.data.data.courses)
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
    <main>
      <BreadCrumb />
      <section className="pt-0">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12">
              <div className="row g-4">
                <CourseItem courses={courses} />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </main>
  )
}