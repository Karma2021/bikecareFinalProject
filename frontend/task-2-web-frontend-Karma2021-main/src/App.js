import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import AddService from './pages/AddService';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import EditService from './pages/EditService';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceBooking from './pages/ServiceBooking';
import ServicePage from './pages/ServicePage';
import UserBooking from './pages/UserBooking';

// Custom ProtectedRoute component
const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('user');

  return isAuthenticated ? <Component /> : <Navigate to='/login' />;
};
const AdminProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('user');

  return isAuthenticated ? <Component /> : <Navigate to='/adminlogin' />;
};

// App component
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* Use ProtectedRoute for '/' and '/bikeservicing' */}
          <Route
            path='/'
            element={<ProtectedRoute component={Home} />} // Pass the Home component as "component" prop
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/services'
            element={<ServicePage />}
          />
          <Route
            path='/booking/:serviceid'
            // element={<ProtectedRoute component={ServiceBooking} />} // Pass the Bikeservicing component as "component" prop
            element={<ServiceBooking />}
          />
          <Route
            path='/mybooking'
            element={<ProtectedRoute component={UserBooking} />} // Pass the Home component as "component" prop
          />
          <Route
            path='/adminlogin'
            element={<AdminLogin />}
          />
          <Route
            path='/adminregister'
            element={<AdminRegister />}
          />
          <Route
            path='/admin/addservice'
            element={<AdminProtectedRoute component={AddService} />} // Pass the Home component as "component" prop
          />
          <Route
            path='/admin/editservice/:serviceid'
            element={<AdminProtectedRoute component={EditService} />} // Pass the Home component as "component" prop
          />
          <Route
            path='/admin'
            element={<AdminProtectedRoute component={Admin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
