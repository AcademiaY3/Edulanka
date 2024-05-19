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
    course_id: course._id,
    instructor_id: id,
    learner_id: id,
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
            // navigate('/main/courses')
            handlePaymentStart()
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
  const handlePaymentCompleted = (orderId) => {
    alert("Payment completed. OrderID: " + orderId);
    // Note: validate the payment and show success or failure page to the customer
  };

  const handlePaymentDismissed = () => {
    alert("Payment dismissed");
    // Note: Prompt user to pay again or show an error page
  };

  const handlePaymentError = (error) => {
    console.error("Error:" + error);
    // Note: show an error page
  };

  const handlePaymentStart = (payment, hash) => {
    const payDetails = {
      "sandbox": true,
      "return_url": undefined,     // Important
      "cancel_url": undefined,     // Important
      "notify_url": "http://sample.com/notify",
      "merchant_id": "1226493",
      "order_id": payment._id,
      "items": payment.productName,
      "amount": payment.productPrice,
      "currency": "LKR",
      "hash": hash,
      "first_name": payment.firstName,
      "last_name": payment.lastName,
      "email": "samanp@gmail.com",
      "phone": "0771234567",
      "address": "No.1, Galle Road",
      "country": "Sri Lanka",
      "delivery_address": "No. 46, Galle road, Kalutara South",
      "delivery_city": "Kalutara",
      "delivery_country": "Sri Lanka",
      "custom_1": "",
      "custom_2": "",
      "city": payment.city,
    };

    window.payhere.startPayment(payDetails);
  };
  useEffect(() => {
    fetchData()
  }, []);
  // Set up PayHere event handlers when component mounts
  useEffect(() => {
    fetchData()
    window.payhere.onCompleted = handlePaymentCompleted;
    window.payhere.onDismissed = handlePaymentDismissed;
    window.payhere.onError = handlePaymentError;

    return () => {
      // Clean up PayHere event handlers when component unmounts
      window.payhere.onCompleted = null;
      window.payhere.onDismissed = null;
      window.payhere.onError = null;
    };
  }, []);
  return (
    <>
      <BreadCrumb />
      <section className="pt-2">
        <div className="container">
          <div className="row g-4 g-sm-5">
            <form className="row g-3 mt-0" onSubmit={handleSubmit}>
              <div className="col-xl-8 mb-4 mb-sm-0">
                <div className="card card-body shadow-sm p-4">
                  {/* Title */}
                  <h5 className="mb-0">Personal Details</h5>
                  {/* Form START */}
                  <div className="col-md-6 bg-light-input">
                    <label htmlFor="mobileNumber" className="form-label">Select country *</label>
                    <select
                      className={`form-control ${errors.delivery_country && touched.delivery_country ? 'is-invalid' : ''}`}
                      aria-label=".form-select-lg"
                      name='delivery_country'
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
                        <button type='submit' disabled={loading} className="btn btn-lg btn-success">Place Order</button>
                      </div>
                      {/* Content */}
                    </div>
                    {/* Order summary END */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section >
    </>
  )
}