import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkIfAdmin = () => {
      const token = localStorage.getItem('token');
      setIsAdmin(!!token);
    };

    checkIfAdmin();
  }, []);

  return (
    <>
      {isAdmin && <div className="admin-banner">Mode Édition</div>}
      <Header isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home isAdmin={isAdmin} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
