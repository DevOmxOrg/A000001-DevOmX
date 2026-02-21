import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <h2>Our Projects</h2>
      <ul>
        <li>
          <h3>Crawley Plumbers</h3>
          <p>Expert plumbing services in Crawley, providing reliable solutions for residential and commercial needs.</p>
        </li>
        <li>
          <h3>Clayton Stoke</h3>
          <p>Quality construction and building services in Clayton Stoke, specializing in renovations and new builds.</p>
        </li>
        <li>
          <h3>Yogi's Yoga</h3>
          <p>Transformative yoga lessons by Yogi, focusing on mindfulness and well-being in a serene environment.</p>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioSection;
