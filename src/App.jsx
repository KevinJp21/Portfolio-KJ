import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DocMe from './Pages/P_DocMe/DocMe';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/Projects/DocMe"} element={<DocMe />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>

  )
}

export default App
