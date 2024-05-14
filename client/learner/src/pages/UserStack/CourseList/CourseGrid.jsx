import React from "react";
import CourseItem from "./CourseItem";
import Pagination from "../../../components/Pagination/Pagination";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

export default function CauseGrid() {
  return (
    <main>
      <BreadCrumb />
      <section className="pt-0">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12">
              <div className="row g-4">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
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