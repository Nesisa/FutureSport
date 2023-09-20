import React from 'react';
import '../../App.css';
import football from '../../assets/images/images/football.jpg';
import soccer from '../../assets/images/images/soccer.jpg';
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Teams from "./Components/Teams/Teams";
import News from "./Components/News/News";
import Events from "./Components/Events/Events";
import Weather from "./Components/Weather/Weather";

function App() {
  return (
    <><div className="App">
      <Navigation />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{ float: 'right' }}><a className="active" href="#about">About</a></li>
      </ul>
      </div>
      <Home />
  <div style={{ backgroundColor: '#e5e5e5', padding: '0%', textAlign: 'center' }}>
      <img src="/images/soccer match-image.jpg" alt="Soccer match Image" />
      <h1>FutureSport Club</h1>
    <div className="right">
    <AboutUs />
    <div className="right">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <button className="contact-button">Contact Us</button>
    </div>
        <Teams />
        <table className="blueTable" style={{ color: 'black' }}>
          <thead>
            <tr>
              <th>Teams</th>
              <th>Coach</th>
              <th>Day/Time</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={3}>
                <div className="links"><a href="#">«</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">»</a></div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Pokemon</td><td>James Martins</td><td>Monday 3:30pm</td>
            </tr>
            {/* Add more rows for teams */}
          </tbody>
        </table>
      </div>
      <div className="right">
        <News />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <video width={400} height={100} controls>
          {/* Video source */}
          <source src="/images/video/FutureSport.mp4" type="video/mp4" />
        </video>
      </div>
    </div><Events /><h3>Events</h3><div className="column">
           <img src={football} alt="Football" />
      </div><div className="column">
      <img src={soccer} alt="Soccer" />
      </div><div className="column">
      <img src={swimming} alt="Swimming" />
      </div><div className="events">
        <h2>Upcoming Events</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for events"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <Weather />
        <div className="weather">
          {/* Weather widget */}
          <a target="_blank" href="https://www.booked.net/weather/wollongong-30301">
            <img src="https://w.bookcdn.com/weather/picture/1_30301_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=63412&domid=w209&anc_id=89469" alt="booked.net" />
          </a>
        </div>
      </div></>
  );

  }

export default App;

