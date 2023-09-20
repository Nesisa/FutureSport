import React from 'react';
import './App.css';
import soccerMatch from '../../assets/images/soccer match.jpg';

function Home() {
  return (
    <div>
      <div style={{ backgroundColor: '#e5e5e5', padding: '0%', textAlign: 'center' }}>
        <img src={soccerMatch} alt="Soccer match" />
        <h1>FutureSport Club</h1>
        <div className="right">
        </div>
      </div>
    </div>
  );
}

export default Home;
