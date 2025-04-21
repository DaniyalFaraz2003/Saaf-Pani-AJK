import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from './pages/landing'
import AdminLoginPage from './pages/adminlogin/AdminLoginPage';
import AdminHomePage from './pages/adminhome';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
