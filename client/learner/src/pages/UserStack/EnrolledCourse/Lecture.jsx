import React, { useState } from 'react'
import img01 from '../../../assets/images/courses/4by3/01.jpg'

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Lecture() {
    const [completed, setCompleted] = useState(true)
    return (
        <>
            <div className="row mb-4 border rounded-3 align-items-center ">
                <div className="col-md-4">
                    <div className="card my-2 z-index-9">
                        <div className="overflow-hidden rounded-3">
                            <MediaPlayer title="Sprite Fight" src="https://firebasestorage.googleapis.com/v0/b/fir-ce055.appspot.com/o/videos%2F1714270280282Learn%20SQL%20In%2060%20Minutes.mp4?alt=media&token=6b597b27-a390-4813-a43b-5326b8bda263">
                                <MediaProvider />
                                <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                            </MediaPlayer>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 className="fs-5 m-0">Lesson: <span className="text-primary">Title</span></h1>
                    <h1 className="fs-6 text-decoration-underline text-danger my-3" style={{ cursor: "pointer" }}>📃 Download Lecture Slide</h1>
                    <div className="d-flex justify-content-between align-items-center ">
                        <h1 className="fs-6">hours: <span className="text-primary">2hr</span></h1>
                        <h1 className="fs-6">Published: <span className="text-warning">2023.10.10</span></h1>
                        <h1 className="fs-6">Status: {completed ? (
                            <button disabled className="btn btn-danger py-1">completed</button>
                        ) : (
                            <button className="btn btn-success py-1" onClick={() => { alert('fd') }}>Done</button>
                        )} </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
