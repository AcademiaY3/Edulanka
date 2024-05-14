import React from 'react'
import '../assets/css/style.css'

function management() {
  return (
    <div>
        <div className="card bg-transparent border" style={{ marginLeft: '250px' }}>
  {/* Card header START */}
 
  {/* Card header END */}
  {/* Card body START */}
  <div className="card-body">
    {/* Instructor request table START */}
    <div className="table-responsive border-0">
      <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
        {/* Table head */}
        <thead>
          <tr>
            <th scope="col" className="border-0 rounded-start">Instructor name</th>
            <th scope="col" className="border-0">Subject</th>
            <th scope="col" className="border-0">Requested Date</th>
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
              <h6 className="mb-0">HTML, css, bootstrap</h6>
            </td>
            {/* Table data */}
            <td>22 Oct 2021</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-success-soft me-1 mb-1 mb-lg-0">Accept</a>
              <a href="#" className="btn btn-secondary-soft me-1 mb-1 mb-lg-0">Reject</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">Photoshop, Figma, Adobe XD</h6>
            </td>
            {/* Table data */}
            <td>06 Sep 2021</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-success-soft me-1 mb-1 mb-lg-0">Accept</a>
              <a href="#" className="btn btn-secondary-soft me-1 mb-1 mb-lg-0">Reject</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">Javascript, Java</h6>
            </td>
            {/* Table data */}
            <td>21 Jan 2021</td>
            {/* Table data */}
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-success me-1 mb-1 mb-md-0 disabled">Accepted</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">Maths, Chemistry</h6>
            </td>
            {/* Table data */}
            <td>25 Dec 2020</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-secondary me-1 mb-1 mb-md-0 disabled">Rejected</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">Python, Angular, React Native</h6>
            </td>
            {/* Table data */}
            <td>05 June 2020</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-success me-1 mb-1 mb-md-0 disabled">Accepted</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">After effect, Premiere pro</h6>
            </td>
            {/* Table data */}
            <td>14 Feb 2020</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-success me-1 mb-1 mb-md-0 disabled">Accepted</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
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
              <h6 className="mb-0">PHP, WordPress, Shopify</h6>
            </td>
            {/* Table data */}
            <td>06 Jan 2020</td>
            {/* Table data */}
            <td>
              <a href="#" className="btn btn-secondary me-1 mb-1 mb-md-0 disabled">Rejected</a>
              <a href="#" className="btn btn-primary-soft me-1 mb-0" data-bs-toggle="modal" data-bs-target="#appDetail">View App</a>
            </td>
          </tr>
        </tbody>
        {/* Table body END */}
      </table>
    </div>
    {/* Instructor request table END */}
  </div>
  {/* Card body END */}
  {/* Card footer START */}
  <div className="card-footer bg-transparent pt-0">
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

  </div>
  )
}

export default management