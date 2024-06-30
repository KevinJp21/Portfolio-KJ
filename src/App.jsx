import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DocMe from './Pages/P_DocMe/DocMe';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="home/DocMe" element={<DocMe />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </Router>

  )
}

export default App
