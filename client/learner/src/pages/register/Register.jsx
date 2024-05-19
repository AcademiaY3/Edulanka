import React, { useState } from 'react'
import RegisterBanner from './RegisterBanner'
import { useFormik } from 'formik';
import AuthYup from '../../validation/Auth/AuthYup';
import Toaster from '../../utils/Constants/Toaster';
import AuthService from '../../services/Auth/AuthService';
import ResponseHandler from '../../utils/Constants/ResponseHandler';
import { Link } from 'react-router-dom';

export default function Register() {
    const [loading, setLoading] = useState(false)
    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: '',
            password: '',
            telephone: '',
            email: '',
        },
        validationSchema: AuthYup.registerSchema,
        onSubmit: async (values) => {
            setLoading(true)
            Toaster.loadingToast("Validating User .......")
            try {
                const result = await AuthService.authRegister(values)
                if (result.data.code === 200) {
                    // const { token, user } = result.data.data;
                    Toaster.justToast('success', result.data.data.message, () => {
                        // Toaster.dismissLoadingToast()
                        if (user.role === "learner")
                            navigate('/login')
                    })
                }
            } catch (error) {
                ResponseHandler.handleResponse(error)
                // alert(error)
            } finally {
                setLoading(false)
                Toaster.dismissLoadingToast()
            }
        },
    });
    return (
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    {/* left */}
                    <RegisterBanner />
                    {/* Right */}
                    <div className="col-12 col-lg-6 m-auto">
                        <div className="row mt-4 my-md-auto">
                            <div className="col-sm-10 col-xl-8 m-auto">
                                <h1 className="fs-2">
                                    Register To <span className='bg-theme text-theme rounded-2 px-3'>Edulanka</span>
                                </h1>
                                <p className="lead mb-4">Nice to see you! Please Sign up with your account.</p>
                                {/* Form START */}
                                <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                                    {/* name */}
                                    <div className="mb-4">
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">👤</span>
                                            <input
                                                type="text"
                                                className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.name && touched.name) ? 'is-invalid' : ''}`}
                                                placeholder="Name"
                                                id="inputName"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{errors.name}</div>
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="mb-3">
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">💌</span>
                                            <input
                                                type="email"
                                                className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                                placeholder="E-mail"
                                                id="inputEmail"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{errors.email}</div>
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">🔑</span>
                                            <input
                                                type="password"
                                                className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                                placeholder="Password"
                                                id="inputPassword"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{errors.password}</div>
                                        </div>
                                    </div>
                                    {/* telephone */}
                                    <div className="mb-4">
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">📞</span>
                                            <input
                                                type="text"
                                                className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.telephone && touched.telephone) ? 'is-invalid' : ''}`}
                                                placeholder="Telephone"
                                                id="inputTelephone"
                                                name="telephone"
                                                value={values.telephone}
                                                onChange={handleChange}
                                            />
                                            <div className="invalid-feedback">{errors.telephone}</div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="align-items-center mt-0">
                                        <div className="d-grid">
                                            <button className="btn btn-dark mb-0" type="submit">Register</button>
                                        </div>
                                    </div>
                                </form>
                                {/* Sign up link */}
                                <div className="mt-4 text-center">
                                    <span>Already have an account? <Link to={'/login'} className='fw-bold text-theme'>Sign In Here</Link></span>
                                </div>
                            </div>
                        </div> {/* Row END */}
                    </div>
                </div> {/* Row END */}
            </div>
        </section>
    );
}
