import React from 'react'
import ProfileNav from "../../../../components/ProfileNav/ProfileNav";
import avatarImage from "../../../../assets/images/avatar/01.jpg";

export default function MyProfile() {
    return (
        <div className="col-xl-9">
            {/* Edit profile START */}
            <div className="card bg-transparent border rounded-3">
                {/* Card header */}
                <div className="card-header bg-transparent border-bottom">
                    <h3 className="card-header-title mb-0">Edit Profile</h3>
                </div>
                {/* Card body START */}
                <div className="card-body">
                    {/* Form */}
                    <form className="row g-4">
                        {/* Profile picture */}
                        <div className="col-12 justify-content-center align-items-center">
                            <label className="form-label">Profile picture</label>
                            <div className="d-flex align-items-center">
                                <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                                    {/* Avatar place holder */}
                                    <span className="avatar avatar-xl">
                                        <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={avatarImage} alt />
                                    </span>
                                    {/* Remove btn */}
                                    <button type="button" className="uploadremove"><i className="faf fa-x text-white" /></button>
                                </label>
                                {/* Upload button */}
                                <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">Change</label>
                                <input id="uploadfile-1" className="form-control d-none" type="file" />
                            </div>
                        </div>
                        {/* Full name */}
                        <div className="col-12">
                            <label className="form-label">Full name</label>
                            <div className="input-group">
                                <input type="text" className="form-control" defaultValue="Lori" placeholder="First name" />
                                <input type="text" className="form-control" defaultValue="Stevens" placeholder="Last name" />
                            </div>
                        </div>
                        {/* Username */}
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <div className="input-group">
                                <span className="input-group-text">Eduport.com</span>
                                <input type="text" className="form-control" defaultValue="loristev" />
                            </div>
                        </div>
                        {/* Email id */}
                        <div className="col-md-6">
                            <label className="form-label">Email id</label>
                            <input className="form-control" type="email" defaultValue="example@gmail.com" placeholder="Email" />
                        </div>
                        {/* Phone number */}
                        <div className="col-md-6">
                            <label className="form-label">Phone number</label>
                            <input type="text" className="form-control" defaultValue={1234567890} placeholder="Phone number" />
                        </div>
                        {/* Location */}
                        <div className="col-md-6">
                            <label className="form-label">Location</label>
                            <input className="form-control" type="text" defaultValue="California" />
                        </div>
                        {/* About me */}
                        <div className="col-12">
                            <label className="form-label">About me</label>
                            <textarea className="form-control" rows={3} defaultValue={"I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."} />
                            <div className="form-text">Brief description for your profile.</div>
                        </div>
                        {/* Education */}
                        <div className="col-12">
                            <label className="form-label">Education</label>
                            <input className="form-control mb-2" type="text" defaultValue="Bachelor in Computer Graphics" />
                            <input className="form-control mb-2" type="text" defaultValue="Masters in Computer Graphics" />
                            <button className="btn btn-sm btn-light mb-0"><i className="faf fa-plus me-1" />Add more</button>
                        </div>
                        {/* Save button */}
                        <div className="d-sm-flex justify-content-end">
                            <button type="button" className="btn btn-primary mb-0">Save changes</button>
                        </div>
                    </form>
                </div>
                {/* Card body END */}
            </div>
            {/* Edit profile END */}
            <div className="row g-4 mt-3">
            </div>
        </div>
    )
}
