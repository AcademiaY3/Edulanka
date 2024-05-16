import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import img01 from '../../../assets/images/courses/4by3/08.jpg'
import OrderYup from '../../../validation/OrderYup/OrderYup';
import OrderService from '../../../services/Order/OrderService';
import ResponseHandler from '../../../utils/Constants/ResponseHandler';
import Toaster from '../../../utils/Constants/Toaster';
import LocalStore from '../../../store/LocalStore';
import CourseService from '../../../services/Course/CourseService';

export default function Checkout() {
    // Accessing URL parameters
    const { id } = useParams();
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // Fetch token data from LocalStore
    const tokenData = LocalStore.getToken();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
      setLoading(true)
      try {
          const response = await CourseService.getCourse(id)
          if (response.data.code === 200) {
            setCourse(response.data.data.course)
          }
      } catch (error) {
          if (error.response.data.code === 404) {
              Toaster.justToast('error', error.response.data.data.message, () => { })
          }
          if (error.response.data.code === 500) {
              Toaster.justToast('error', error.response.data.data.message, () => { })
          }
      } finally {
          setLoading(false)
      }
  }

  const initValues = {
    email: tokenData ? tokenData.email : null,
    course_id:id,
    instructor_id:id,
    learner_id:id,
    delivery_address: '',
    delivery_country: '',
    delivery_city: '',
    zip_code: ''
}

const { values, handleChange, handleSubmit, errors, touched } = useFormik({
  initialValues: initValues,
  validationSchema: OrderYup.orderSchema,
  onSubmit: async (values) => {
      setLoading(true)
      Toaster.loadingToast("Placing Order .......")
      try {
          const result = await OrderService.addOrder(values)
          if (result.data.code === 200) {
              Toaster.justToast('success', result.data.data.message, () => {
                  Toaster.dismissLoadingToast()
                  navigate('/main/courses')
              })
          }
      } catch (error) {
          ResponseHandler.handleResponse(error)
      } finally {
          setLoading(false)
          Toaster.dismissLoadingToast()
      }
  }
})

  return (
    <>
      <BreadCrumb />
      <section className="pt-2">
        <div className="container">
          <div className="row g-4 g-sm-5">
            <div className="col-xl-8 mb-4 mb-sm-0">
              <div className="card card-body shadow-sm p-4">
                {/* Title */}
                <h5 className="mb-0">Personal Details</h5>
                {/* Form START */}
                <form className="row g-3 mt-0" onSubmit={handleSubmit}>
                  {/* Name */}
                  
                  {/* Price */}
                  
                  {/* Pay Status */}
                  
                  {/* Country option */}
                  <div className="col-md-6 bg-light-input">
                    <label htmlFor="mobileNumber" className="form-label">Select country *</label>
                    <select 
                        className={`form-control ${errors.delivery_country && touched.delivery_country ? 'is-invalid' : ''}`} 
                        aria-label=".form-select-lg"
                        name= 'delivery_country'
                        value={values.delivery_country} // Set the value here
                        onChange={handleChange} // Handle the change event
                    >
                        <option value="">Select country</option>
                        <option>Sri Lanka</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>Paris</option>
                        <option>Australia</option>
                        <option>Japan</option>
                        <option>Brazil</option>
                    </select>
                    <div className="invalid-feedback">
                        {errors.delivery_country}
                    </div>
                </div>

                  {/* State city */}

                  <div className="col-md-6 bg-light-input">
                    <label htmlFor="city" className="form-label">Select city *</label>
                    <input 
                      name="delivery_city"
                      value={values.delivery_city}
                      type="text" 
                      className={`form-control ${errors.delivery_city && touched.delivery_city ? 'is-invalid' : ''}`} 
                      id="city" 
                      onChange={handleChange}
                      placeholder="City" 
                    />
                  </div>

                  {/* Address */}
                  <div className="col-md-6 bg-light-input">
                    <label htmlFor="address" className="form-label">Address *</label>
                    <input 
                      name="delivery_address"
                      value={values.delivery_address}
                      type="text" 
                      className={`form-control ${errors.delivery_address && touched.delivery_address ? 'is-invalid' : ''}`} 
                      id="address" 
                      onChange={handleChange}
                      placeholder="Address" 
                    />
                  </div>

                  {/* Postal code */}
                  <div className="col-md-6 bg-light-input">
                    <label htmlFor="postalCode" className="form-label">ZIP code *</label>
                    <input
                      name="zip_code"
                      value={values.zip_code}
                      type="text" 
                      className={`form-control ${errors.zip_code && touched.zip_code ? 'is-invalid' : ''}`} 
                      id="zipcode" 
                      onChange={handleChange}
                      placeholder="ZIP code" 
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row mb-0">
                <div className="col-md-6 col-xl-12">
                  <div className="card card-body shadow-sm p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">Order Summary</h4>
                    {/* item start */}
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <img className="rounded" src={img01} alt />
                      </div>
                      <div className="col-sm-8">
                        <h6 className="mb-0"><a href="#">Sketch from A to Z: for an app designer</a></h6>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="text-success">$150</span>
                          <div className="text-primary-hover">
                            <a href="#" className="text-danger me-2"><i className="fas fa-trash me-1" />Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item end */}
                    <hr />
                    <ul className="list-group list-group-borderless mb-2">
                      <li className="list-group-item px-0 d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">Original Price</span>
                        <span className="h6 fw-light mb-0 fw-bold">$500</span>
                      </li>
                      <li className="list-group-item px-0 d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">Coupon Discount</span>
                        <span className="text-danger">-$20</span>
                      </li>
                      <li className="list-group-item px-0 d-flex justify-content-between">
                        <span className="h5 mb-0">Total</span>
                        <span className="h5 mb-0">$480</span>
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a href="#" type='submit' disabled={loading} className="btn btn-lg btn-success">Place Order</a>
                    </div>
                    {/* Content */}
                    <p className="small mb-0 mt-2 text-center">By completing your purchase, you agree to these <a href="#"><strong>Terms of Service</strong></a></p>
                  </div>
                  {/* Order summary END */}
                </div>
                <div className="col-md-6 col-xl-12">
                  <div className="card bg-blue p-3 position-relative overflow-hidden" style={{ background: 'url(assets/images/pattern/05.png) no-repeat center center', backgroundSize: 'cover' }}>
                    {/* SVG decoration */}
                    <figure className="position-absolute bottom-0 end-0 mb-n4 d-none d-md-block">
                      <svg width="92.6px" height="135.2px">
                        <path className="fill-white" d="M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z" />
                        <path className="fill-white" d="M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z" />
                        <path className="fill-white" d="M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z" />
                        <path className="fill-warning" d="M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z" />
                        <polygon className="fill-warning opacity-6" points="31.2,12.3 4.7,5.4 25.1,17.2" />
                        <polygon className="fill-warning opacity-6" points="21.5,19.5 15,24.8 4.7,5.4 " />
                      </svg>
                    </figure>
                    {/* Body */}
                    <div className="card-body">
                      {/* Title */}
                      <h5 className="card-title text-white mb-2">Access 25K Online courses from 120 institutions, Start today!</h5>
                      <p className="text-white text-opacity-75">Here is the description of premium features which will allow users to get benefits and save a lot of money</p>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-warning mb-0">Purchase Premium</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}