import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import AuthService from '../../services/Auth/AuthService'
import Toaster from '../../utils/Constants/Toaster'
import { useFormik } from 'formik'
import ResponseHandler from '../../utils/Constants/ResponseHandler'
import AuthYup from '../../validation/Auth/AuthYup'
import LocalStore from '../../store/LocalStore'
import LoginBanner from './LoginBanner'

export default function Login() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const initValues = {
        email: '',
        password: '',
        role:'learner'
    }
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initValues,
        validationSchema: AuthYup.loginSchema,
        onSubmit: async (values) => {
            setLoading(true)
            Toaster.loadingToast("Validating User .......")
            try {
                const result = await AuthService.authLogin(values)
                if (result.data.code === 200) {
                    const { token, user } = result.data.data;
                    LocalStore.storeToken({ token, role:user.role, email:user.email,user });
                    Toaster.justToast('success', result.data.data.message, () => {
                        // Toaster.dismissLoadingToast()
                        if (user.role === "learner")
                            navigate('/main/home')
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
                // alert(error)
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
                    <LoginBanner/>
                    {/* Right */}
                    <div className="col-12 col-lg-6 m-auto">
                        <div className="row mt-4 my-md-auto">
                            <div className="col-sm-10 col-xl-8 m-auto">
                                <h1 className="fs-2">
                                    Login into <span className='bg-theme text-theme rounded-2 px-3'>Edulanka</span>
                                    {/* <img className='img-fluid w-50' src={logo} alt="" /> */}
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
                                                placeholder="E-mail" 
                                                value={values.email}
                                                onChange={handleChange}
                                                type="email"
                                                name='email'
                                                className={`form-control ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required />
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
                                                placeholder="password" 
                                                value={values.password}
                                                onChange={handleChange}
                                                name='password'
                                                type="password"
                                                className={`form-control ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                                id="exampleInputPassword1"
                                                required />
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
                                            <button className="btn btn-dark mb-0 fs-4 fw-bolder py-1" type="submit">Login</button>
                                        </div>
                                    </div>
                                    <hr />
                                    {/*Instructor Button */}
                                    <div className="align-items-center mt-4 mb-2">
                                        <div className="d-grid">
                                            <button type='submit' disabled={loading} className="btn btn-dark mb-0" >Instructor Login</button>
                                        </div>
                                    </div>
                                    {/*Admin Button */}
                                    <div className="align-items-center mt-0">
                                        <div className="d-grid">
                                            <button className="btn btn-dark mb-0" type="button">Admin Login</button>
                                        </div>
                                    </div>
                                </form>
                                {/* Sign up link */}
                                <div className="mt-4 text-center">
                                    <span>Don't have an account? <Link to={'/register'} className='fw-bold text-theme'>Signup here</Link></span>
                                </div>
                            </div>
                        </div> {/* Row END */}
                    </div>
                </div> {/* Row END */}
            </div>
        </section>
    )
}
