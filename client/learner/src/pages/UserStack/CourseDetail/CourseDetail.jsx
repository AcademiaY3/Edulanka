import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import React, { useState } from "react";
import img21 from '../../../assets/images/courses/4by3/21.jpg'
import img01 from '../../../assets/images/courses/4by3/01.jpg'
import img18 from '../../../assets/images/courses/4by3/18.jpg'
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function CourseDetail() {
  return (
    <>
      <section className="bg-light py-0 py-sm-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
              {/* Badge */}
              <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">Digital Marketing</h6>
              {/* Title */}
              <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
              <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
              {/* Content */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled</li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal text-success me-2" />All levels</li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="faf fa-patch-exclamation-fill text-danger me-2" />Last updated 09/2021</li>
                <li className="list-inline-item h6 mb-0"><i className="fas fa-globe text-info me-2" />English</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <img src={img18} className="img-fluid rounded-3" alt="" />
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel ipsa illo reiciendis totam velit voluptatibus! Amet eligendi veritatis, eos, quia culpa explicabo alias nulla earum molestiae aut eveniet voluptatibus repudiandae praesentium sint corporis pariatur temporibus hic quis saepe vero laboriosam. Autem modi expedita odit earum? Incidunt corrupti at doloremque, tempora rem voluptates laudantium corporis tenetur nam maiores obcaecati porro inventore et, molestiae repellendus vero deserunt nisi. Ullam, totam perferendis debitis recusandae perspiciatis sunt cumque ea dolorum eaque, molestiae dolores inventore repellendus et aspernatur corrupti eos. Repudiandae, earum! Perferendis a facere ex dolore veniam odit corporis placeat! Vero, sit nostrum.</p>
                    {/* List content */}

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
                      <MediaPlayer title="Sprite Fight" src="https://firebasestorage.googleapis.com/v0/b/fir-ce055.appspot.com/o/videos%2F1714270280282Learn%20SQL%20In%2060%20Minutes.mp4?alt=media&token=6b597b27-a390-4813-a43b-5326b8bda263">
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
                            <h3 className="fw-bold mb-0 me-2">$150</h3>
                            <span className="text-decoration-line-through mb-0 me-2">$350</span>
                            <span className="badge text-bg-orange mb-0">60% off</span>
                          </div>
                          <p className="mb-0 text-danger"><i className="fas fa-stopwatch me-2" />5 days left at this price</p>
                        </div>
                        {/* Share button with dropdown */}
                        <button>sdf</button>
                      </div>
                      {/* Buttons */}
                      <div className="mt-3 w-100">
                        <a href="#" className="btn btn-success mb-0 w-100">Buy course</a>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                  {/* Course info START */}
                  <div className="card card-body shadow-sm p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">This course includes</h4>
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-book-open text-primary" />Lectures</span>
                        <span>30</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-clock text-primary" />Duration</span>
                        <span>4h 50m</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-signal text-primary" />Skills</span>
                        <span>Beginner</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-globe text-primary" />Language</span>
                        <span>English</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-user-clock text-primary" />Deadline</span>
                        <span>Nov 30 2021</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-medal text-primary" />Certificate</span>
                        <span>Yes</span>
                      </li>
                    </ul>
                  </div>
                  {/* Course info END */}
                </div>
              </div>{/* Row End */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}