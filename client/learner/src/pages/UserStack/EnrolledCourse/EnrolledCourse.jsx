import React from 'react'
import Lecture from './Lecture'
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import EnrolledBanner from './EnrolledBanner';
import PopularTags from './PopularTags';
import CourseIncludes from './CourseIncludes';
import CourseProgress from './CourseProgress';

export default function EnrolledCourse() {
    return (
        <>
            <EnrolledBanner />
            <section className="pb-0 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card shadow-sm rounded-2 p-0">
                                <div className="card-body p-4">
                                    <div >
                                        <h3 className="mb-3">Course Description</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel ipsa illo reiciendis totam velit voluptatibus! Amet eligendi veritatis, eos, quia culpa explicabo alias nulla earum molestiae aut eveniet voluptatibus repudiandae praesentium sint corporis pariatur temporibus hic quis saepe vero laboriosam. Autem modi expedita odit earum? Incidunt corrupti at doloremque, tempora rem voluptates laudantium corporis tenetur nam maiores obcaecati porro inventore et, molestiae repellendus vero deserunt nisi. Ullam, totam perferendis debitis recusandae perspiciatis sunt cumque ea dolorum eaque, molestiae dolores inventore repellendus et aspernatur corrupti eos. Repudiandae, earum! Perferendis a facere ex dolore veniam odit corporis placeat! Vero, sit nostrum.</p>
                                        <h3 className="mt-4 mb-3">Curriculum</h3>
                                        <div className="col-12 pt-5 pt-lg-0">
                                            <Lecture />
                                        </div>
                                        <h5 className="mt-4">Quiz</h5>
                                        <p className="mt-4 mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus molestias provident quidem quos eius iure deserunt laborum numquam animi!</p>
                                        <h1 className="fs-4 text-decoration-underline text-danger" style={{ cursor: "pointer" }}>📃 Attempt Quiz</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5 pt-lg-0">
                            <div className="row mb-5 mb-lg-0">
                                <CourseProgress />
                                <CourseIncludes />
                                <PopularTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
