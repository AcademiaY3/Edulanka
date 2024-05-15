import React from 'react'
import logo from '../../../assets/logo.png'
import avatar01 from '../../../assets/images/avatar/01.jpg'
import avatar02 from '../../../assets/images/avatar/02.jpg'
import avatar03 from '../../../assets/images/avatar/03.jpg'
import avatar04 from '../../../assets/images/avatar/04.jpg'
import hero from '../../../assets/images/element/03.png'

export default function Banner() {
    return (
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
    )
}
