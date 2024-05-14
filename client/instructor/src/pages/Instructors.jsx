import React from 'react'
import App from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './SideNavigation';
import Content from './content';

function Instructors() {
  return (
    <div>
        <SideNav/>
        <div className="page-content-wrapper border" style={{marginLeft:"270px", marginTop:"20px"}}>
    {/* Title */}
    <div className="row">
      <div className="col-12">
        <h1 className="h3 mb-2 mb-sm-0">Instructors</h1>
      </div>
    </div>
    {/* Card START */}
    <div className="card bg-transparent">
      {/* Card header START */}
      <div className="card-header bg-transparent border-bottom px-0">
        {/* Search and select START */}
        <div className="row g-3 align-items-center justify-content-between">
          {/* Search bar */}
          <div className="col-md-8">
            <form className="rounded position-relative">
              <input className="form-control bg-transparent" type="search" placeholder="Search" aria-label="Search" />
              <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                <i className="fas fa-search fs-6 " />
              </button>
            </form>
          </div>
          {/* Tab buttons */}
          <div className="col-md-3">
            {/* Tabs START */}
            <ul className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end" id="pills-tab" role="tablist">
              {/* Grid tab */}
              <li className="nav-item" role="presentation">
                <a href="#nav-preview-tab-1" className="nav-link mb-0 me-2 active" data-bs-toggle="tab" aria-selected="true" role="tab">
                  <i className="fas fa-fw fa-th-large" />
                </a>
              </li>
              {/* List tab */}
              <li className="nav-item" role="presentation">
                <a href="#nav-html-tab-1" className="nav-link mb-0" data-bs-toggle="tab" aria-selected="false" tabIndex={-1} role="tab">
                  <i className="fas fa-fw fa-list-ul" />
                </a>
              </li>
            </ul>
            {/* Tabs end */}
          </div>
        </div>
        {/* Search and select END */}
      </div>
      {/* Card header END */}
      {/* Card body START */}
      <div className="card-body px-0">
        {/* Tabs content START */}
        <div className="tab-content">
          {/* Tabs content item START */}
          <div className="tab-pane fade show active" id="nav-preview-tab-1" role="tabpanel">
            <div className="row g-4">
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Lori Stevens</a></h5>
                        <p className="mb-0 small">Web Designer</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">5,354</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">15</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Carolyn Ortiz</a></h5>
                        <p className="mb-0 small">Web Developer</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">15,523</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">10</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Dennis Barrett</a></h5>
                        <p className="mb-0 small">Developer and Instructor</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">2,546</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">09</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Billy Vasquez</a></h5>
                        <p className="mb-0 small">Full Stack Web Developer</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">12,786</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">07</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Jacqueline Miller</a></h5>
                        <p className="mb-0 small">Engineering Architect</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare5" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare5">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">21,245</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">05</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Amanda Reed</a></h5>
                        <p className="mb-0 small">Medical Science</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare6" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare6">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">8,546</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">06</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Samuel Bishop</a></h5>
                        <p className="mb-0 small">Finance manager</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare7" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare7">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">5,354</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">15</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className="col-md-6 col-xxl-4">
                <div className="card bg-transparent border h-100"> 
                  {/* Card header */}
                  <div className="card-header bg-transparent border-bottom d-flex align-items-sm-center justify-content-between">
                    <div className="d-sm-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-md flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                      </div>
                      {/* Info */}
                      <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                        <h5 className="mb-0"><a href="#">Louis Ferguson</a></h5>
                        <p className="mb-0 small">Civil Engineer</p>
                      </div>
                    </div>
                    {/* Edit dropdown */}
                    <div className="dropdown">
                      <a href="#" className="btn btn-sm btn-light btn-round small mb-0" role="button" id="dropdownShare8" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots fa-fw" />
                      </a>
                      {/* dropdown button */}
                      <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare8">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2" />Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2" />Remove</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Total students */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle flex-shrink-0"><i className="fas fa-user-graduate fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Students</h6>
                      </div>
                      <span className="mb-0 fw-bold">2,578</span>
                    </div>
                    {/* Total courses */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="icon-md bg-purple bg-opacity-10 text-purple rounded-circle flex-shrink-0"><i className="fas fa-book fa-fw" /></div>
                        <h6 className="mb-0 ms-2 fw-light">Total Courses</h6>
                      </div>
                      <span className="mb-0 fw-bold">02</span>
                    </div>
                  </div>
                  {/* Card footer */}
                  <div className="card-footer bg-transparent border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                      </ul>
                      {/* Message button */}
                      <a href="#" className="btn btn-link text-body p-0 mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title data-bs-original-title="Message" aria-label="Message">
                        <i className="bi bi-envelope-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div> {/* Row END */}
          </div>
          {/* Tabs content item END */}
          {/* Tabs content item START */}
          <div className="tab-pane fade" id="nav-html-tab-1" role="tabpanel">
            {/* Table START */}
            <div className="table-responsive border-0">
              <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                {/* Table head */}
                <thead>
                  <tr>
                    <th scope="col" className="border-0 rounded-start">Instructor name</th>
                    <th scope="col" className="border-0">Detail</th>
                    <th scope="col" className="border-0">Courses</th>
                    <th scope="col" className="border-0">Total studentss</th>
                    <th scope="col" className="border-0 rounded-end">Action</th>
                  </tr>
                </thead>
                {/* Table body START */}
                <tbody>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Web Designer</h6>
                    </td>
                    {/* Table data */}
                    <td>15</td>
                    {/* Table data */}
                    <td>5,354</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/01.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Carolyn Ortiz</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Web Developer</h6>
                    </td>
                    {/* Table data */}
                    <td>10</td>
                    {/* Table data */}
                    <td>15,523</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/03.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Developer and Instructor</h6>
                    </td>
                    {/* Table data */}
                    <td>09</td>
                    {/* Table data */}
                    <td>2,546</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/04.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Billy Vasquez</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Full Stack Web Developer</h6>
                    </td>
                    {/* Table data */}
                    <td>07</td>
                    {/* Table data */}
                    <td>12,786</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/05.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Jacqueline Miller</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Engineering Architect</h6>
                    </td>
                    {/* Table data */}
                    <td>05</td>
                    {/* Table data */}
                    <td>21,245</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/06.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Amanda Reed</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Medical Science</h6>
                    </td>
                    {/* Table data */}
                    <td>06</td>
                    {/* Table data */}
                    <td>8,546</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/07.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Samuel Bishop</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Finance manager</h6>
                    </td>
                    {/* Table data */}
                    <td>15</td>
                    {/* Table data */}
                    <td>5,354</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                  {/* Table row */}
                  <tr>
                    {/* Table data */}
                    <td>
                      <div className="d-flex align-items-center position-relative">
                        {/* Image */}
                        <div className="avatar avatar-md">
                          <img src="assets/images/avatar/10.jpg" className="rounded-circle" alt />
                        </div>
                        <div className="mb-0 ms-2">
                          {/* Title */}
                          <h6 className="mb-0"><a href="#" className="stretched-link">Louis Ferguson</a></h6>
                        </div>
                      </div>
                    </td>
                    {/* Table data */}
                    <td className="text-center text-sm-start">
                      <h6 className="mb-0">Civil Engineer</h6>
                    </td>
                    {/* Table data */}
                    <td>02</td>
                    {/* Table data */}
                    <td>2,578</td>
                    {/* Table data */}
                    <td>
                      <a href="#" className="btn btn-info-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                        <i className="bi bi-envelope" />
                      </a>
                      <a href="#" className="btn btn-success-soft btn-round me-1 mb-1 mb-md-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                        <i className="bi bi-pencil-square" />
                      </a>
                      <button className="btn btn-danger-soft btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                </tbody>
                {/* Table body END */}
              </table>
            </div>
            {/* Table END */}
          </div>
          {/* Tabs content item END */}
        </div>
        {/* Tabs content END */}
      </div>
      {/* Card body END */}
      {/* Card footer START */}
      <div className="card-footer bg-transparent p-0">
        {/* Pagination START */}
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
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
      {/* Card footer END */}
    </div>
    {/* Card END */}
  </div>
  </div>
  )
}

export default Instructors