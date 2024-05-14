import React from 'react'
import ProfileNav from '../../../components/ProfileNav/ProfileNav';
import ProfileBanner from './ProfileBanner/ProfileBanner';

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

            {/* outlet */}
            {/* <Profile /> */}
            {/* <CourseList /> */}
          </div>
        </div>
      </section>
    </>
  )
}
