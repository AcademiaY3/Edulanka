import React, { useState } from 'react';
import ReactQuill from 'react-quill';

export default function AddCourse() {
  const [value, setValue] = useState('');
  return (
    <div className="page-content-wrapper border">
      {/* row */}
      <div className="row">
        <div className="col-12">
          <div className="card p-2">
            <h2 className="section-title">Add New Course</h2>
            <form>
              <div className="row row-gap-4">
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Name" aria-label="Name" required />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Title" aria-label="Title" required />
                </div>
                <div className="col-md-3">
                  <input type="number" className="form-control" placeholder="Price" aria-label="Price" required />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Category" aria-label="Category" required />
                </div>
                <div className="col-md-3">
                  <input type="number" className="form-control" placeholder="Hours" aria-label="Hours" required />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Skills" aria-label="Skills" required />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Language" aria-label="Language" required />
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" placeholder="Tags (comma separated)" aria-label="Tags" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="certificate" className="form-label">Certificate:</label>
                  <select className="form-control" id="certificate" aria-label="Certificate" required>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="photo-upload" className="form-label">Upload Photo:</label>
                  <input type="file" className="form-control" id="photo-upload" accept="image/*" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="video-upload" className="form-label">Upload Video:</label>
                  <input type="file" className="form-control" id="video-upload" accept="video/*" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="video-upload" className="form-label">Upload Slides:</label>
                  <input type="file" className="form-control" id="video-upload" accept="video/*" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="video-upload" className="form-label">Upload Quiz:</label>
                  <input type="file" className="form-control" id="video-upload" accept="video/*" required />
                </div>
                <div className="col-12 h-200px">
                  <ReactQuill theme="snow" value={value} onChange={setValue} className='h-100'/>
                </div>
                <div className="col-12 text-end mt-4">
                  <button type='button' className='btn btn-primary'>Go To Courses</button>
                  <button className='btn btn-success ms-3'>Add Course</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
