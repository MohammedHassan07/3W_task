import { useState } from 'react'
import './App.css'
import UserLogin from './pages/UserLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormSubmission from './pages/FormSubmission'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path='/' element={<UserLogin />} />
          <Route path='form-submission' element={<FormSubmission />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
