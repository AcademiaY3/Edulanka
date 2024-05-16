import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import avatar01 from '../../assets/images/avatar/01.jpg'
import avatar02 from '../../assets/images/avatar/02.jpg'
import avatar03 from '../../assets/images/avatar/03.jpg'
import avatar04 from '../../assets/images/avatar/04.jpg'
import hero from '../../assets/images/element/03.png'
import Toaster from '../../Utils/Constants/Toaster'

import { useFormik } from 'formik'
import AuthYup from '../../Validation/Auth/AuthYup'
import LocalStore from '../../Store/LocalStore'
// import ResponseHandler from '../../Utils/Constants/ResponseHandler'
import { useNavigate} from 'react-router-dom'
import AuthService from '../../services/Auth/AuthService'


export default function Login() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const initValues = {
        email: '',
        password: '',
        role:'admin'
    }
    const { values, handleChange, handleSubmit, errors, touched  } = useFormik({
        initialValues: initValues,
        validationSchema: AuthYup.loginSchema,
        onSubmit: async (values) => {
            setLoading(true)
            Toaster.loadingToast("Validating User .......")
            try {
                const result = await AuthService.authLogin(values)
                if (result.data.code === 200) {
                    const { token, user } = result.data.data;
                    LocalStore.storeToken({ token, role:user.role, email:user.email });
                    Toaster.justToast('success', result.data.data.message, () => {
                        // Toaster.dismissLoadingToast()
                        if (user.role === "admin")
                            navigate('/main/dashboard')
                    })
                }
            } catch (error) {
                // ResponseHandler.handleResponse(error)
            } finally {
                setLoading(false)
                Toaster.dismissLoadingToast()
            }
        }
    })


    return (
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    {/* left */}
                    <div style={{ backgroundColor: 'rgba(255, 133, 27,0.2)' }} className="d-none d-md-flex col-md-12 col-lg-6 align-items-center justify-content-center bg-opacity-10 vh-lg-100">
                        <div className="p-3 p-lg-5">
                            {/* SVG Image */}
                            <img src={hero} className="d-none d-md-block  mt-0" alt />
                            {/* Info */}
                            <div className="text-center mt-4">
                                <img className='img-fluid w-25' src={logo} alt="" />
                            </div>
                            <div className="d-sm-flex align-items-center justify-content-center">
                                {/* Avatar group */}
                                <ul className="avatar-group mb-2 mb-sm-0">
                                    <li className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" src={avatar01} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" src={avatar02} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" src={avatar03} alt="avatar" />
                                    </li>
                                    <li className="avatar avatar-sm">
                                        <img className="avatar-img rounded-circle" src={avatar04} alt="avatar" />
                                    </li>
                                </ul>
                                {/* Content */}
                                <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                            </div>

                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-12 col-lg-6 m-auto">
                        <div className="row mt-4 my-md-auto">
                            <div className="col-sm-10 col-xl-8 m-auto">
                                <h1 className="fs-2">
                                  Hello <span className='text-theme'>Admin</span> 
                                </h1>
                                <p className="lead mb-4">Nice to see you! Please log in with your account.</p>
                                {/* Form START */}
                                <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                    {/* Email */}
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">💌</span>
                                            <input   
                                            value={values.email} 
                                            onChange={handleChange}
                                            type="email" 
                                            name='email'
                                            className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                            placeholder="E-mail" 
                                            id="exampleInputEmail1" />

                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>

                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="mb-0">
                                        <label htmlFor="inputPassword5" className="form-label">Password *</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">🔑</span>
                                            <input 
                                            value={values.password} 
                                            onChange={handleChange}  
                                            type="password" 
                                            name='password'
                                            className={`form-control ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                            placeholder="password" 
                                            id="inputPassword5" />

                                        <div className="invalid-feedback">
                                                {errors.password}
                                            </div>

                                        </div>
                                    </div>
                                    {/* Check box */}
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="text-primary-hover">
                                            <a href="forgot-password.html" className="text-secondary">
                                                <u>Forgot password?</u>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Button */}
                                    <div className="align-items-center mt-0">
                                        <div className="d-grid">
                                            <button className="btn btn-dark mb-0 fs-4 fw-bolder py-1" type="submit" disabled={loading}>Login</button>
                                        </div>
                                    </div>
                                    <hr />
                                    {/*Instructor Button */}
                                    <div className="align-items-center mt-4 mb-2">
                                        <div className="d-grid">
                                            <button className="btn btn-dark mb-0" type="button">Learner Login</button>
                                        </div>
                                    </div>
                                    {/*Admin Button */}
                                    <div className="align-items-center mt-0">
                                        <div className="d-grid">
                                            <button className="btn btn-dark mb-0" type="button">Instructor Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> {/* Row END */}
                    </div>
                </div> {/* Row END */}
            </div>
        </section>
    )
}
