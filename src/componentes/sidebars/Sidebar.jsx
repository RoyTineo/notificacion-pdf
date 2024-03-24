/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Style.css'; // Importar tu archivo CSS local

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? 'close' : ''}`}>
      <header>
        <div className="image-text">
          <span className="image">
            {/* <img src="logo.png" alt=""> */}
          </span>
          <div className="text logo-text">
            <span className="name">Dr.Percy</span>
            <span className="profession">TINEO CISNEROS</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" onClick={() => setIsSidebarOpen(false)}>
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-link">
            <li>
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
           
            {/* Agrega más elementos de menú aquí */}
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a href="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode" onClick={toggleDarkMode}>
            <div className="sun-moon">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
            <div className="toggle-switch">
              <span className={`switch ${isDarkMode ? 'dark' : ''}`}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};



export default Sidebar;
