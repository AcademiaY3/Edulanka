import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import UserStack from './Pages/UserStack/UserStack'
import DashBoard from './Pages/UserStack/Dashboard/DashBoard'
import CourseM from './Pages/UserStack/CourseM/CourseM'
import LearnerM from './Pages/UserStack/LearnerM/LearnerM'
import InstructorM from './Pages/UserStack/InstructorM/InstructorM'
import StaffM from './Pages/UserStack/StaffM/StaffM'
import Orders from './Pages/UserStack/Orders/Orders'
import Payment from './Pages/UserStack/Payments/Payment'
import Approvals from './Pages/UserStack/Approvals/Approvals'
import AddCourse from './Pages/UserStack/CourseM/AddCourse'
import AddLearner from './Pages/UserStack/LearnerM/AddLearner'
import AddInstructor from './Pages/UserStack/InstructorM/AddInstructor'
import AddStaff from './Pages/UserStack/StaffM/AddStaff'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<UserStack />}>
          <Route index element={<DashBoard/>} />
          <Route path='dashboard' element={<DashBoard/>} />
          <Route path='courses' element={<CourseM/>} />
          <Route path='courses/addcourse' element={<AddCourse/>} />
          <Route path='learners' element={<LearnerM/>} />
          <Route path='learners/addlearner' element={<AddLearner/>} />
          <Route path='instructors' element={<InstructorM/>} />
          <Route path='instructors/addinstructor' element={<AddInstructor/>} />
          <Route path='staff' element={<StaffM/>} />
          <Route path='staff/addstaff' element={<AddStaff/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='payments' element={<Payment/>} />
          <Route path='approvals' element={<Approvals/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
