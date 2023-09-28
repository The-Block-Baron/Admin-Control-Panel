import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import './App.css';
import ActionsPage from './components/ActionsPage';
import StatesPage from './components/StatesPage';
import StateDetail from './components/StateDetail';

const MainContent = styled.div`
  margin-top: 80px; // Adjust based on the height of your header
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '300px' : '0px')};
  transition: margin-left 0.3s ease-in-out;
`;

const MainApp = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const showHeader = !['/', '/admin-login'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header $isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <MainContent $isSidebarOpen={isSidebarOpen}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/main" element={<Dashboard />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/states/:id" element={<StateDetail />} />
          </Route>
        </Routes>
      </MainContent>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

export default App;
