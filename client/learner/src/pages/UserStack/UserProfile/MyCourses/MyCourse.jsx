import React from 'react'
import avatarImage from "../../../../assets/images/avatar/01.jpg";
import thumnail1 from "../../../../assets/images/courses/4by3/08.jpg"

export default function MyCourse() {
    return (
        <div className="col-xl-9">
            {/* Card START */}
            <div className="card border bg-transparent rounded-3">
                {/* Card header START */}
                <div className="card-header bg-transparent border-bottom">
                    <h3 className="mb-0">My Courses List</h3>
                </div>
                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body">
                    {/* Search and select START */}
                    <div className="row g-3 align-items-center justify-content-between mb-4">
                        {/* Search */}
                        <div className="col-md-8">
                            <form className="rounded position-relative">
                                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                    {/* <i className="fas fa-search fs-6 " /> */}
                                </button>
                            </form>
                        </div>
                        {/* Select option */}
                        <div className="col-md-3">
                            {/* Short by filter */}
                            <form>
                                <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                                    <option value>Sort by</option>
                                    <option>Free</option>
                                    <option>Newest</option>
                                    <option>Most popular</option>
                                    <option>Most Viewed</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    {/* Search and select END */}
                    {/* Course list table START */}
                    <div className="table-responsive border-0">
                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                            {/* Table head */}
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">Course Title</th>
                                    <th scope="col" className="border-0">Enrolled</th>
                                    <th scope="col" className="border-0">Status</th>
                                    <th scope="col" className="border-0">Price</th>
                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                </tr>
                            </thead>
                            {/* Table body START */}
                            <tbody>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Building Scalable APIs with GraphQL</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />18 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />6 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">125</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$250</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Bootstrap 5 From Scratch</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />0 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />0 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">145</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-secondary bg-opacity-10 text-secondary">Disable</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$350</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Angular – The Complete Guider</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />37 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />20 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">145</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$652</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Graphic Design Masterclass</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />58 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />0 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">0</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-info bg-opacity-10 text-info">Applied</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$245</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Learn Invision</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />16 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />0 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">0</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-danger bg-opacity-10 text-danger">Rejected</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$365</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Create a Design System in Figma</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />25 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />0 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">0</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-info bg-opacity-10 text-info">Applied</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$135</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Deep Learning with React-Native</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />18 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />10 Completed</p>
                    </div> */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">186</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$256</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                                {/* Table item */}
                                <tr>
                                    {/* Course item */}
                                    <td>
                                        <div className="d-flex align-items-center">
                                            {/* Image */}
                                            <div className="w-60px">
                                                <img src={thumnail1} className="rounded" alt />
                                            </div>
                                            <div className="mb-0 ms-2">
                                                {/* Title */}
                                                <h6><a href="#">Build Responsive Websites with HTML</a></h6>
                                                {/* Info */}
                                                {/* <div className="d-sm-flex">
                      <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />42 lectures</p>
                      <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />25 Completed</p>
                    </div>		 */}
                                            </div>
                                        </div>
                                    </td>
                                    {/* Enrolled item */}
                                    <td className="text-center text-sm-start">345</td>
                                    {/* Status item */}
                                    <td>
                                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                                    </td>
                                    {/* Price item */}
                                    <td>$222</td>
                                    {/* Action item */}
                                    <td>

                                        <button className="btn btn-sm btn-danger-soft ">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            {/* Table body END */}
                        </table>
                    </div>
                    {/* Course list table END */}
                    {/* Pagination START */}
                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                        {/* Content */}
                        <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                        {/* Pagination */}
                        <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                            <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                                <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                                <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                                <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* Pagination END */}
                </div>
                {/* Card body START */}
            </div>
            {/* Card END */}
        </div>
    )
}
