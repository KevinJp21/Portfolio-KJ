import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home'
function App() {


  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to={"/home"}/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
