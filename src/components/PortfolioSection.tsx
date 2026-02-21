import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            <h2>Our Projects</h2>
            <ul>
                <li>
                    <h3>Crawley Plumbers</h3>
                    <p>Connecting you to reliable plumbing services.</p>
                </li>
                <li>
                    <h3>Clayton Stoke</h3>
                    <p>Your guide to financial management and growth.</p>
                </li>
                <li>
                    <h3>Yogi's Yoga</h3>
                    <p>Supporting your journey to wellness and mindfulness.</p>
                </li>
            </ul>
        </section>
    );
};

export default PortfolioSection;