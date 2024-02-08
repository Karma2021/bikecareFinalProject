import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logooo.png';
import './css_files/navbar.css';


function AdminNav(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    // jQuery code for the dropdown toggle
    $('.btn').click(function () {
      $('.items').toggleClass('show');
      $('ul li').toggleClass('hide');
    });
  }, []);

  return (
    <div className='navigationbar'>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="logoimage" />
            </Link>
          </li>
          <li className="items">
            <Link to="/admin">ADMIN PANEL</Link>
          </li>
          <li className="items">
            <Link to="/admin/addservice">ADD SERVICE</Link>
          </li>
          <li className="items">
            <button className='btnlogin' onClick={() => {
              localStorage.removeItem('user');
              window.location.href = '/adminlogin';
            }}>LOG OUT</button>
          </li>

          {/* <li className="items">
            <div className="dropdown">
              <button className="dropbtn">
                {user.username}WELCOME
                </button>
              <div className="dropdown-content">
                <a onClick={() => {
                  localStorage.removeItem('user');
                  window.location.href = '/login'
                }}>Log out</a>
              </div>
            </div>
          </li> */}
          <li className="btn">
            <a href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminNav;
