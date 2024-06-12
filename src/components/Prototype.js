import React from 'react';
import './Prototype.css';
import prototypeImage1 from '../resource/prototype1.png';
import prototypeImage2 from '../resource/prototype2.png';
import prototypeVideo from '../resource/prototypevid.mp4';


const Prototype = () => {
    return (
        <section className="full-page prototype">
            <h2>Final Prototype</h2>
            <div className="prototype-images">
                <img src={prototypeImage1} alt="Prototype Image 1" />
                <img src={prototypeImage2} alt="Prototype Image 2" />
            </div>
            <div className="prototype-video">
                <video controls>
                    <source src={prototypeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default Prototype;