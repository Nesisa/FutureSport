import React from 'react';
import './App.css';

const Weather = () => {
  return (
    <div className="weather">
      {/* Weather widget */}
      <a
        href="https://www.booked.net/weather/wollongong-30301"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://w.bookcdn.com/weather/picture/1_30301_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=63412&domid=w209&anc_id=89469"
          alt="booked.net"
        />
      </a>
    </div>
  );
};

export default Weather;
