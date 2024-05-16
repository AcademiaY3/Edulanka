import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';


export default function AddInstructor() {

   // Accessing URL parameters
   
   const [instructor, setInstructor] = useState({})
   
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
           const response = await InstructorService.getLearner(id)
           if (response.data.code === 200) {
               setInstructor(response.data.data.instructor)
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
    name: '',
    degree: '',
    experience: '',
    skills: '',
    image: null, // File object for image upload
    telephone: '',
    email: '',
    password: '',
    aboutMe: '', // Text for the about me section
};

   const { values, handleChange, handleSubmit, errors, touched } = useFormik({
       initialValues: initValues,
       validationSchema: OrderYup.orderSchema,
       onSubmit: async (values) => {
           setLoading(true)
           Toaster.loadingToast("Adding Instructor .......")
           try {
               const result = await InstructorService.addInstructor(values)
               if (result.data.code === 200) {
                   Toaster.justToast('success', result.data.data.message, () => {
                       Toaster.dismissLoadingToast()
                       navigate('/main/instructors')
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
        <div className="page-content-wrapper border">
            {/* row */}
            <div className="row">
                <div className="col-12">
                    <div className="card p-2">
                        <h2 className="section-title">Add New Instructor</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row row-gap-4">
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Degree" aria-label="Title" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" placeholder="Experience" aria-label="Hours" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" placeholder="Skills" aria-label="Skills" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="file" className="form-control" id="photo-upload" accept="image/*" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" placeholder="Telephone" aria-label="Tags" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Tags" required />
                                </div>
                                <div className="col-md-3">
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Tags" required />
                                </div>
                                <div className="col-12 h-300px">
                                    <p className='mb-0'>About Me</p>
                                    <ReactQuill theme="snow" value={value} onChange={setValue} className='h-100' />
                                </div>
                                <div className="col-12 text-end mt-5">
                                    <button type='button' className='btn btn-primary'>Go Back</button>
                                    <button className='btn btn-success ms-3'>Add Instructor</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
