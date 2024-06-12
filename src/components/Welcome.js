import React from 'react';
import { FaSun, FaCloudSun, FaCloud, FaRegClock } from 'react-icons/fa';
import './Welcome.css';

const Welcome = () => {
    return (
        <section className="full-page welcome">
            <div className="welcome-content">
                <h2>Welcome to Smart Spotlight</h2>
                <p>An innovative way to wake up and stay informed about the weather.</p>
                <div className="decorations">
                    <FaSun className="icon" />
                    <FaCloudSun className="icon" />
                    <FaCloud className="icon" />
                    <FaRegClock className="icon" />
                </div>
            </div>
        </section>
    );
};

export default Welcome;