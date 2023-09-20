import React, { useState } from 'react';
import './App.css';
import  soccer from '../../assets/images/soccer.jpg';
import  swimming from '../../assets/images/swimming.jpg';
import  football from '../../assets/images/football.jpg';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Events />
      <h3>Events</h3>
      <div className="column">
        <img src={football} alt="football" />
      </div>
      <div className="column">
        <img src={soccer} alt="soccer" />
      </div>
      <div className="column">
      <img src={swimming} alt="swimming" />
      </div>
      <div className="events">
        <h2>Upcoming Events</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for events"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
