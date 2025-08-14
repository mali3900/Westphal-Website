import React from 'react';
import { Link } from 'react-router-dom';
import './Music.css';

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <section className="title">
        <h1>Music</h1>
      </section>

      <section className="music-content">
        <div className="music-description">
          <h2>Lo-Fi Beats & Sound Engineering</h2>
          <p>
            Welcome to the musical world of Westphal Audio Works. Here you'll find my latest lo-fi beats,
            sound engineering projects, and collaborations.
          </p>
          <p>
            As a guitarist for Sober Cafe and solo lo-fi artist, I create atmospheric soundscapes that
            blend traditional instruments with modern production techniques.
          </p>
        </div>

        <div className="music-sections">
          <div className="music-section">
            <h3>Latest Releases</h3>
            <p>Check back soon for my latest lo-fi tracks and instrumental pieces.</p>
          </div>

          <div className="music-section">
            <h3>Sober Cafe</h3>
            <p>Collaborative works with the band Sober Cafe, featuring guitar arrangements and sound design.</p>
          </div>

          <div className="music-section">
            <h3>Sound Engineering Services</h3>
            <p>Professional mixing, mastering, and sound design services for independent artists and bands.</p>
          </div>
        </div>

        <div className="music-cta">
          <Link to="/contact" className="cta-button">
            Get in Touch for Collaborations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Music;
