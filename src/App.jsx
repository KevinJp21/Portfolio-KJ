import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Partytown } from '@builder.io/partytown/react';
import Home from './Pages/Home/Home';
function App() {


  return (
    <Router>
      <Partytown debug={true} forward={['dataLayer.push']} />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: '/* Inlined Third-Party Script */',
        }}
      />
      <Suspense >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to={"/home"}/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
