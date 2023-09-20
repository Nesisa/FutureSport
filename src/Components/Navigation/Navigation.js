import React from 'react';
import './App.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About Us</a></li>
        <li><a href="#Events">Events</a></li>
        <li><a href="#News">News</a></li>
        <li><a href="#Teams">Teams</a></li>
        <li><a href="#Weather">Weather</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

