import React from 'react';
import './App.css';
import  '../../assets/images/video/FutureSport.mp4';

function News() {
  return (
    <section className="news">
      <h2>News</h2>
      <div className="news-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="video-container">
        <video width={400} height={300} controls>
  <source src={require('./assets/images/video/FutureSport.mp4')} type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
      </div>
    </section>
  );
}

export default News;
