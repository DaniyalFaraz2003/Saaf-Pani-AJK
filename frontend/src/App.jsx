import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from './pages/landing'
import AdminLoginPage from './pages/adminlogin/AdminLoginPage';
import AdminHomePage from './pages/adminhome';
import AddSourcePage from './pages/addsource/AddSourcePage';
import SourcesPage from './pages/sources/SourcesPage';
import UpdateSource from './pages/updatesource';
import AdminReportPage from './pages/adminreports/AdminReportPage';
import Dashboard from './pages/userdashboard';
import SearchResultUnsuccess from './pages/resultunsuccess';
import SearchResultSuccess from './pages/resultsuccess/ResultSuccess';
import ReportForm from './pages/report';
import SearchPage from './pages/search/SearchPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/addsource" element={<AddSourcePage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/updatesource/:id" element={<UpdateSource />} />
        <Route path="/adminreports" element={<AdminReportPage />} />
        <Route path="/userdashboard" element={<Dashboard />} />
        <Route path="/resultunsuccess/:id" element={<SearchResultUnsuccess />} />
        <Route path="/resultsuccess/:id" element={<SearchResultSuccess />} />
        <Route path="/report" element={<ReportForm />} />
        <Route path="/search" element={<SearchPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
