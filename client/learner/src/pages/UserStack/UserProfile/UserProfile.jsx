import React from 'react'
import ProfileNav from '../../../components/ProfileNav/ProfileNav';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import { Outlet } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      {/* banner */}
      <ProfileBanner/>
      {/* sidenav */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <ProfileNav />

            <Outlet/>
          </div>
        </div>
      </section>
    </>
  )
}
