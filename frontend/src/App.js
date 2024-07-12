import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import ContactForm from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { AuthProvider } from './components/AuthContext';
import './App.css';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/contactUs" element={<ContactForm />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/admin" element={<Admin />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
