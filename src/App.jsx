import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
const Home = lazy(() => import('./Pages/Home/Home'));
const DocMe = lazy(() => import('./Pages/P_DocMe/DocMe'));
const ChatBot = lazy(() => import('./Pages/P_ChatBot/ChatBot'));
const RestauranteSCocina = lazy(() => import('./Pages/P_RestauranteSCocina/RestauranteSCocina'));
const APIResidences = lazy(()=> import ('./Pages/P_APIResidences/APIResidences'))

import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Suspense fallback={<div className='fallback'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/Projects/DocMe"} element={<DocMe />} />
          <Route path={"/Projects/Chatbot"} element={<ChatBot />} />
          <Route path={"/Projects/RestauranteSCocina"} element={<RestauranteSCocina />} />
          <Route path={"/Projects/APIResidences"} element={<APIResidences />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
    </Router>

  )
}

export default App
