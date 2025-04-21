import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from './pages/landing'
import AdminLoginPage from './pages/adminlogin/AdminLoginPage';
import AdminHomePage from './pages/adminhome';
import AddSourcePage from './pages/addsource/AddSourcePage';
import SourcesPage from './pages/sources/SourcesPage';
import UpdateSource from './pages/updatesource';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/addsource" element={<AddSourcePage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/updatesource" element={<UpdateSource />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
