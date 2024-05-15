import React from 'react'
import Banner from './Banner/Banner'
import LoginForm from './LoginForm/LoginForm'

export default function Login() {
    return (
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <Banner/>
                    <LoginForm/>
                </div>
            </div>
        </section>
    )
}
