import React from 'react'
import banner from '../../assets/images/404_banner.png'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center bg-theme' style={{ height: '100vh' }}>
                <img src={banner} className='img-fluid w-50' alt="" />
                <button onClick={goBack} className='btn btn-lg btn-dark fs-3 py-2 px-5 mt-4'>Go Back</button>
            </div>
        </>
    )
}
