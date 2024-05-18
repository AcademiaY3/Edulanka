import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthYup from '../../../Validation/AuthYup/AuthYup'
import Toaster from '../../../Utils/Toaster/Toaster'
import LocalStore from '../../../Config/LocalStore/LocalStore'
import AuthService from '../../../Services/AuthService/AuthService'

export default function LoginForm() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const initValues = {
        role: 'instructor',
        email: '',
        password: '',
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
                    LocalStore.storeToken({ token, role: user.role, email: user.email, user });
                    // result.data.data.message
                    Toaster.justToast('success', 'letting you in', () => {
                        Toaster.dismissLoadingToast()
                        navigate('/main/courses')
                    })
                }
            } catch (error) {
                if (error.response.status === 500)
                    Toaster.justToast('error', 'server down')
                console.log(error)
                Toaster.justToast('error', error.response.data.data.message)
            } finally {
                setLoading(false)
                Toaster.dismissLoadingToast()
            }
        }
    })
    return (
        <div className="col-12 col-lg-6 m-auto">
            <div className="row mt-4 my-md-auto">
                <div className="col-sm-10 col-xl-8 m-auto">
                    <h1 className="fs-2">
                        Hello <span className='text-theme'>Instructor</span>
                    </h1>
                    <p className="lead mb-4">Nice to see you! Please log in with your account.</p>
                    <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">💌</span>
                                <input
                                    value={values.email}
                                    onChange={handleChange}
                                    type="email"
                                    name='email'
                                    className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.email && touched.email) ? 'is-invalid' : ''}`}
                                    placeholder="E-mail"
                                    id="exampleInputEmail1"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            </div>
                        </div>
                        <div className="mb-0">
                            <label htmlFor="inputPassword5" className="form-label">Password *</label>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">🔑</span>
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    name='password'
                                    type="password"
                                    className={`form-control border-0 bg-light rounded-end ps-1 ${(errors.password && touched.password) ? 'is-invalid' : ''}`}
                                    placeholder="password"
                                    id="inputPassword5"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {errors.password}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-4">
                            <div className="text-primary-hover">
                                <a href="forgot-password.html" className="text-secondary">
                                    <u>Forgot password?</u>
                                </a>
                            </div>
                        </div>
                        <div className="align-items-center mt-0">
                            <div className="d-grid">
                                <button disabled={loading} type="submit" className="btn btn-dark mb-0 fs-4 fw-bolder py-1">Login</button>
                            </div>
                        </div>
                        <hr />
                        <div className="align-items-center mt-4 mb-2">
                            <div className="d-grid">
                                <button disabled={loading} className="btn btn-dark mb-0" type="button">Learner Login</button>
                            </div>
                        </div>
                        <div className="align-items-center mt-0">
                            <div className="d-grid">
                                <button disabled={loading} className="btn btn-dark mb-0" type="button">Admin Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
