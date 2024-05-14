import React, { useState } from 'react'
import ReactQuill from 'react-quill'

export default function AddInstructor() {
    const [value, setValue] = useState('');

    return (
        <div className="page-content-wrapper border">
            {/* row */}
            <div className="row">
                <div className="col-12">
                    <div className="card p-2">
                        <h2 className="section-title">Add New Instructor</h2>
                        <form>
                            <div className="row row-gap-4">
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Degree" aria-label="Title" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" placeholder="Experience" aria-label="Hours" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Skills" aria-label="Skills" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="file" className="form-control" id="photo-upload" accept="image/*" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" placeholder="Telephone" aria-label="Tags" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Tags" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Tags" required />
                                </div>
                                <div className="col-12 h-300px">
                                    <p className='mb-0'>About Me</p>
                                    <ReactQuill theme="snow" value={value} onChange={setValue} className='h-100' />
                                </div>
                                <div className="col-12 text-end mt-5">
                                    <button type='button' className='btn btn-primary'>Go Back</button>
                                    <button className='btn btn-success ms-3'>Add Instructor</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
