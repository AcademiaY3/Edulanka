import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import CourseYup from '../../../Validation/CourseYup/CourseYup';
import { useFormik } from 'formik';
import Toaster from '../../../Utils/Toaster/Toaster';
import CourseService from '../../../Services/CourseService/CourseService';


import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { storage, app } from '../../../Config/FireBase/FireBase';
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LocalStore from '../../../Config/LocalStore/LocalStore';
import { useNavigate } from 'react-router-dom';

export default function AddCourse() {
  const navigate = useNavigate()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false)
  const [initValue, setInitValue] = useState({
    name: '',
    title: '',
    price: '',
    certificate: '',
    category: '',
    hours: '',
    skills: '',
    language: '',
    tag: '',
    outline: '',
    thumbnail: '',
    description: 'enter course description',
    lectures: [{
      video: 'https://firebasestorage.googleapis.com/v0/b/edulanka-2874b.appspot.com/o/videos%2F1715764287967%E0%B6%B1%E0%B7%92%E0%B7%80%E0%B7%90%E0%B6%BB%E0%B6%AF%E0%B7%92%E0%B7%80%20Video%20Upload%20%E0%B6%9A%E0%B6%BB%E0%B6%B1%E0%B7%8A%E0%B6%B1%E0%B7%99%20%E0%B6%9A%E0%B7%9C%E0%B7%84%E0%B7%9C%E0%B6%B8%E0%B6%AF.%20-%20How%20to%20Upload%20Videos%20on%20YouTube%20in%20Sinhala%202022.mp4?alt=media&token=13ee3ed7-105d-4636-a652-4fbde2317fa8',
      note: '',
      quiz: 'https://firebasestorage.googleapis.com/v0/b/edulanka-2874b.appspot.com/o/pdf%2FAPI%20Endpoints%20(1).pdf?alt=media&token=b5568d27-da39-412d-a4e2-e13c41984e0c'
    }],
  });
  const { values, handleChange, handleSubmit, errors, touched, setValues } = useFormik({
    initialValues: initValue,
    validationSchema: CourseYup.addCourse,
    onSubmit: async (values) => {
      setLoading(true)
      Toaster.loadingToast("Adding Course .......")
      try {
        const result = await CourseService.addCourse(values)
        if (result.data.code === 200) {
          Toaster.justToast('success', result.data.data.message, () => {
            // Toaster.dismissLoadingToast()
            navigate('/main/courses')
          })
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
        Toaster.dismissLoadingToast()
      }
    }
  })
  const handleAddLecture = () => {
    setInitValue((prevState) => ({
      ...prevState,
      lectures: [...prevState.lectures, { video: '', note: '', quiz: '' }],
    }));
  };

  const handleRemoveLecture = (index) => {
    setInitValue((prevState) => ({
      ...prevState,
      lectures: prevState.lectures.filter((_, i) => i !== index),
    }));
  };

  const handleLectureChange = async (index, e) => {
    const { name, files } = e.target;
    const file = files[0];
    const storage = getStorage(app);
    const folder = name === "note" ? "pdf/" : name === "photo" ? "images/" : "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setLoading(true)
    Toaster.loadingToast('Uploading lecture materials')
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress))
      },
      (error) => {
        console.log(error);
        // Toaster.dismissLoadingToast()
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('DownloadURL - ', downloadURL);
          Toaster.dismissLoadingToast()
          setLoading(false)
          setUploadProgress(0)
          Toaster.justToast('success', 'Material Uploaded', () => { })
          if (name === "note" || name === "quiz" || name === "video") {
            const updatedLectures = values.lectures.map((lecture, i) =>
              i === index ? { ...lecture, [name]: downloadURL } : lecture
            );
            setInitValue({
              ...initValue,
              lectures: updatedLectures
            });
            // setInitValue({
            //   ...initValue,
            //   lectures: initValue.lectures.map((lecture, i) =>
            //     i === index ? { ...lecture, [name]: downloadURL } : lecture
            //   )
            // });
            setValues({
              ...values,
              lectures: updatedLectures
            });
          }
          if (name === 'outline' || name === 'thumbnail') {
            setInitValue({
              ...initValue, [name]: downloadURL
            })
            setValues({
              ...values, [name]: downloadURL
            })
          }
        });
      }
    );
  };
  return (
    <div className="page-content-wrapper border">
      {/* row */}
      <div className="row">
        <div className="col-12">
          <div className="card p-2">
            <h2 className="section-title">Add New Course</h2>
            <form className='needs-validation' noValidate onSubmit={handleSubmit}>
              <div className="row row-gap-4">
                {/* Name */}
                <div className="col-md-3">
                  <input
                    id='sda'
                    type="text"
                    name='name'
                    className={`form-control ${(errors.name && touched.name) ? 'is-invalid' : ''}`}
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Name"
                    aria-label="Name"
                    required />
                  <div className="ininvalid-feedback">
                    {errors.name}
                  </div>
                </div>
                {/* Title */}
                <div className="col-md-3">
                  <input
                    type="text"
                    name='title'
                    className={`form-control ${(errors.title && touched.title) ? 'is-invalid' : ''}`}
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Title"
                    aria-label="Title"
                    required />
                  <div className="invalid-feedback">
                    {errors.title}
                  </div>
                </div>
                {/* Price */}
                <div className="col-md-3">
                  <input
                    type="number"
                    name='price'
                    className={`form-control ${(errors.price && touched.price) ? 'is-invalid' : ''}`}
                    value={values.price}
                    onChange={handleChange}
                    placeholder="Price"
                    aria-label="Price"
                    required />
                  <div className="invalid-feedback">
                    {errors.price}
                  </div>
                </div>
                {/* Category */}
                <div className="col-md-3">
                  <input
                    type="text"
                    name='category'
                    className={`form-control ${(errors.category && touched.category) ? 'is-invalid' : ''}`}
                    value={values.category}
                    onChange={handleChange}
                    placeholder="Category"
                    aria-label="Category"
                    required />
                  <div className="invalid-feedback">
                    {errors.category}
                  </div>
                </div>
                {/* Hours */}
                <div className="col-md-3">
                  <input
                    type="number"
                    name='hours'
                    className={`form-control ${(errors.hours && touched.hours) ? 'is-invalid' : ''}`}
                    value={values.hours}
                    onChange={handleChange}
                    placeholder="Hours"
                    aria-label="Hours"
                    required />
                  <div className="invalid-feedback">
                    {errors.hours}
                  </div>
                </div>
                {/* Skills */}
                <div className="col-md-3">
                  <select onChange={handleChange} value={values.skills}
                    className={`form-control ${(errors.skills && touched.skills) ? 'is-invalid' : ''}`} name="skills" id="">
                    <option selected value="">choose....</option>
                    <option selected value="beginner">beginner</option>
                    <option selected value="intermediate">intermediate</option>
                    <option selected value="expert">expert</option>
                  </select>
                  <div className="invalid-feedback">
                    {errors.skills}
                  </div>
                </div>
                {/* Language */}
                <div className="col-md-3">
                  <input
                    type="text"
                    name='language'
                    className={`form-control ${(errors.language && touched.language) ? 'is-invalid' : ''}`}
                    value={values.language}
                    onChange={handleChange}
                    placeholder="Language"
                    aria-label="Language"
                    required />
                  <div className="invalid-feedback">
                    {errors.language}
                  </div>
                </div>
                {/* Tags */}
                <div className="col-md-3">
                  <input
                    type="text"
                    name='tag'
                    className={`form-control ${(errors.tag && touched.tag) ? 'is-invalid' : ''}`}
                    value={values.tag}
                    onChange={handleChange}
                    placeholder="Tags (comma separated)"
                    aria-label="Tags"
                    required />
                  <div className="invalid-feedback">
                    {errors.tag}
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-md-6">
                    <div className="col-12 h-200px">
                      <ReactQuill theme="snow" value={values.description} name='description' onChange={handleChange} className='h-100' />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-12">
                      <label htmlFor="photo-upload" className="form-label">Certificate:</label>
                      <select onChange={handleChange} value={values.certificate}
                        className={`form-control ${(errors.certificate && touched.certificate) ? 'is-invalid' : ''}`} name="certificate" id="">
                        <option selected value="">choose....</option>
                        <option selected value="yes">yes</option>
                        <option value="no">no</option>
                      </select>
                      <div className="invalid-feedback">
                        {errors.certificate}
                      </div>
                    </div>
                    <div className="col-12 my-3">
                      <label htmlFor="video-upload" className="form-label">Upload Thumbnail:</label>
                      <input type="file" onChange={(e) => handleLectureChange(0, e)} name='thumbnail' className="form-control" id="video-upload" accept="image/*" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="video-upload" className="form-label">Upload Outline:</label>
                      <input type="file" onChange={(e) => handleLectureChange(0, e)} name='outline' className="form-control" id="video-upload" accept="image/*" required />
                    </div>
                  </div>
                </div>
                {/* Add lectures */}
                <h3 className='m-0'>Add Lecture Materials</h3>
                {initValue.lectures.map((lecture, index) => {
                  {/* alert(JSON.stringify(lecture)) */ }
                  return (
                    <div key={index} className="row row-gap-4 mb-3">
                      <div className="col-md-6">
                        <div className="col-12">
                          <label htmlFor={`video-upload-${index}`} className="form-label">Upload Video:</label>
                          <input
                            type="file"
                            className={`form-control`}
                            id={`video-upload-${index}`}
                            accept="video/*"
                            name={`video`}
                            // value={lecture.video}
                            onChange={(e) => handleLectureChange(index, e)}
                            required
                          />
                        </div>
                        <div className="col-12 my-3">
                          <label htmlFor={`note-upload-${index}`} className="form-label">Upload Slides:</label>
                          <input
                            type="file"
                            className={`form-control`}
                            id={`note-upload-${index}`}
                            accept="image/*"
                            name={`note`}
                            // value={lecture.note}
                            onChange={(e) => handleLectureChange(index, e)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor={`quiz-upload-${index}`} className="form-label">Upload Quiz:</label>
                          <input
                            type="file"
                            className={`form-control`}
                            id={`quiz-upload-${index}`}
                            accept="image/*"
                            // value={lecture.quiz}
                            name={`quiz`}
                            onChange={(e) => handleLectureChange(index, e)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button type="button" disabled={loading} onClick={() => handleRemoveLecture(index)} className="w-100 btn btn-danger mt-4">Remove Lecture</button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-12">
                          <div className="card my-2 z-index-9">
                            <div className="overflow-hidden rounded-3">
                              <MediaPlayer title="Lecture Preview" src={lecture.video}>
                                <MediaProvider />
                                <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
                              </MediaPlayer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="col-12 text-end mt-1">
                  <button type="button" disabled={loading} onClick={handleAddLecture} className="btn btn-primary mx-2">Add More Lectures To Course</button>
                  <button type='submit' disabled={loading} className='btn btn-success'>Add Course</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
