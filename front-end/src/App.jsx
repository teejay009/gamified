// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Navbar/Features/Features'; 
import Benefit from './components/Navbar/Benefits/Benefits'; 
import Register from './components/Navbar/Register/Register';
import HeroSection from "./components/HeroSection/HeroSection"
import AboutUs from './components/Navbar/AboutUs/AboutUs';
import Dashboard from './components/Boards/Dashboard/Dashboard';
import Discover from './components/Boards/Discover/Discover';
import Rewards from './components/Boards/Rewards/Rewards';
import Login from './components/Navbar/Login/Login';
import Contact from './components/Navbar/Contact/Contact';
import Courses from './components/Navbar/Courses/Courses';
import Post1 from './components/Boards/Discover/posts/Post1';
// import AuthPage from './components/AuthPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* <Route path="/auth" element={<AuthPage />} /> */}


        <Route path="/features" element={<Features />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/board/dashboard" element={<Dashboard />} />
        <Route path="/board/discover" element={<Discover />} />
        <Route path="/board/discover/post1" element={<Post1 />} />
        <Route path="/board/rewards" element={<Rewards />} />
      </Routes>
    </>
  );
};

export default App;