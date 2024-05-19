import React, { useState } from 'react'
import img01 from '../../../assets/images/courses/4by3/01.jpg'

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/Constants/FormatDate';

export default function Lecture({ lectures,course }) {
    const [completed, setCompleted] = useState(true)
    return (
        <>
            {lectures.length !== 0 ? (
                lectures.map((lecture) => {
                    return (
                        <div className="row mb-4 border rounded-3 align-items-center ">
                            <div className="col-md-4">
                                <div className="card my-2 z-index-9">
                                    <div className="overflow-hidden rounded-3">
                                        <MediaPlayer title="Sprite Fight" src={lecture.video}>
                                            <MediaProvider />
                                            <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                                        </MediaPlayer>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h1 className="fs-5 m-0">Lesson: <span className="text-primary">{course.title}</span></h1>
                                <h1 className="fs-6 text-decoration-underline text-danger my-3" style={{ cursor: "pointer" }}>
                                    <Link to={lecture.note}>📃 Download Lecture Slide</Link>
                                </h1>
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h1 className="fs-6">hours: <span className="text-primary">{course.hours}hr</span></h1>
                                    <h1 className="fs-6">Published: <span className="text-warning">{formatDate(course.createdAt)}</span></h1>
                                    <h1 className="fs-6">Status: {lecture.completed ? (
                                        <button disabled className="btn btn-danger py-1">completed</button>
                                    ) : (
                                        <button className="btn btn-success py-1" onClick={() => { alert('fd') }}>Mark Done</button>
                                    )} </h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                <></>
            )}
        </>
    )
}
