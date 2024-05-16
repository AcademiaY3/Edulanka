import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import UserStack from './pages/UserStack/UserStack'
import Home from './pages/UserStack/Home/Home'
import CauseGrid from './pages/UserStack/CourseList/CourseGrid'
import CourseDetail from './pages/UserStack/CourseDetail/CourseDetail'
import PlaceOrder from './pages/UserStack/Checkout/PlaceOrder'
import UserProfile from './pages/UserStack/UserProfile/UserProfile'
import MyCourse from './pages/UserStack/UserProfile/MyCourses/MyCourse'
import MyProfile from './pages/UserStack/UserProfile/MyProfile/MyProfile'
import About from './pages/UserStack/About/About'
import Company from './pages/UserStack/Company/Company'
import EnrolledCourse from './pages/UserStack/EnrolledCourse/EnrolledCourse'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/main' element={<UserStack />}>
          <Route index element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='company' element={<Company/>} />
          <Route path='enrolledcourse' element={<EnrolledCourse/>} />
          <Route path='courses' element={<CauseGrid/>} />
          <Route path='courses/:id' element={<CourseDetail/>} />
          <Route path='courses/checkout/:id' element={<PlaceOrder/>} />
          <Route path='userprofile' element={<UserProfile />} >
            <Route path='mycourse' element={<MyCourse/>} />
            <Route path='myprofile' element={<MyProfile/>} />
            <Route/>
          </Route>
        </Route>
      </Routes>
      {/* <UserStack /> */}
    </>
  )
}

export default App
