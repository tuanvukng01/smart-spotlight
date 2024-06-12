import React from 'react';
import { FaCogs, FaLightbulb, FaMicrochip, FaMobileAlt, FaCloudSun } from 'react-icons/fa';
import './Poster.css';
import posterImage from '../resource/poster.png';

const Poster = () => {
    return (
        <section className="full-page poster">
            <div className="poster-content">
                <div className="poster-image">
                    <img src={posterImage} alt="Smart Spotlight Poster" />
                </div>
                <div className="technical-description">
                    <h2>Technical Description</h2>
                    <p>
                        The Smart Spotlight is equipped with a two-axis motorized gimbal using Field-Oriented Control.
                        It provides a fun way to get to know weather conditions, and doubles as a “sunrise alarm”,
                        providing a more pleasant wake-up experience than a traditional alarm clock.
                    </p>
                    <h3>Key Features</h3>
                    <ul>
                        <li><FaCogs className="feature-icon" /> Two electric motors with FOC</li>
                        <li><FaLightbulb className="feature-icon" /> Dimmable LED spotlight</li>
                        <li><FaMicrochip className="feature-icon" /> ESP32 microcontroller with internet connectivity</li>
                        <li><FaMobileAlt className="feature-icon" /> Mobile app control</li>
                        <li><FaCloudSun className="feature-icon" /> Weather forecast integration</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Poster;