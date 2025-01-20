import { useState } from 'react'
import './App.css'
import UserLogin from './pages/UserLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormSubmission from './pages/FormSubmission'
import AdminDashboard from './pages/AdminDashboard'
import CreateProfile from './pages/CreateProfile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path='/' element={<UserLogin />} />
          <Route path='form-submission' element={<FormSubmission />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='signup' element={<CreateProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
