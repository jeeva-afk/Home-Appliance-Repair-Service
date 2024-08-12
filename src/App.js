// src/App.js
import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Service from './components/Service'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/home/Home';
import ContactPage from './components/contact/Contact';
import About from './components/about/About';
import ServiceProviderForm from './components/ServiceProviderForm';
import ServicePage from './components/Services/ServicePage';
import ServiceProviderList from './components/Services/ServiceProviderList';
import ServiceProviderProfile from './components/Services/ServiceProviderProfile';
import Footer from './components/footer/Footer';
import Booking from './components/Booking/Booking';
import Blog from './components/blog/Blog';
import ReadMore from './components/Readmore/Readmore';
import Payment from './components/Payment/Payment';
import AdminDashboard from './components/admin/AdminDashboard';
import { AuthContext, AuthProvider } from './components/AuthContext/AuthContext'; // Import AuthProvider
import NavbarAfterLogin from './components/navbar/NabarAfterLogin';
import NavbarBeforeLogin from './components/navbar/NavbarBeforeLogin';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Use AuthContext to determine which navbar to show */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/readmore/:id" element={<ReadMore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/ServiceProvider" element={<ServiceProviderForm />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/services/:service/:id" element={<ServiceProviderProfile />} />
          <Route path="/services/:service" element={<ServiceProviderList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext); // Use AuthContext
  return loggedIn ? <NavbarAfterLogin /> : <NavbarBeforeLogin />; // Render based on login state
};

export default App;
