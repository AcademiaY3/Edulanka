import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './pages/SideNavigation'; // Corrected import path and component name
import Content from './pages/content';
import Instructors from './pages/Instructors';
import InstructorDetails from './pages/InstructorDetails';
// import './assets/css/style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sideNav' element={<SideNav />} />
        <Route path='/' element={<Content />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/instructorDetails' element={<InstructorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



