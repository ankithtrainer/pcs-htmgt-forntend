import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HrLogin from './pages/HrLogin';
import "./css/sb-admin-2.css"
import "./css/sb-admin-2.min.css"
import Dashboard from './component/Dashboard';
import Registration from './pages/Registration';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>   
        <Routes>
          <Route path='/' element={<HrLogin/>} />      
          <Route path='/dashboard' element={<Dashboard/>} />     
          <Route path='/register' element={<Registration/>} />     
        </Routes>
   
    </BrowserRouter>
  </div>


  )
}

export default App