import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import DashBoard from './Pages/UserStack/Dashboard/DashBoard'
import CourseM from './Pages/UserStack/CourseM/CourseM'
import UserStack from './Pages/UserStack/UserStack'
import LearnerM from './Pages/UserStack/LearnerM/LearnerM'
import Orders from './Pages/UserStack/Orders/Orders'
import Payments from './Pages/UserStack/Payments/Payment'
import Remainder from './Pages/UserStack/Remainder/Remainder'
import MyProfile from './Pages/UserStack/MyProfile/MyProfile'
import AddCourse from './Pages/UserStack/CourseM/AddCourse'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/main' element={<UserStack />} >
          <Route index element={<DashBoard/>} />
          <Route path='dashboard' element={<DashBoard/>} />
          <Route path='courses' element={<CourseM/>} />
          <Route path='courses/addcourse' element={<AddCourse/>} />
          <Route path='learners' element={<LearnerM/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='payments' element={<Payments/>} />
          <Route path='remainder' element={<Remainder/>} />
          <Route path='profile' element={<MyProfile/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
