import React from 'react';

const MediaGallery = () => {
    const images = [
        // URLs of your images
    ];
    const videoUrl = ''; // URL of your video

    return (
        <section id="media">
            <h2>Media Gallery</h2>
            <div className="gallery">
                {images.map((url, index) => (
                    <img key={index} src={url} alt={`Prototype image ${index + 1}`} />
                ))}
            </div>
            {videoUrl && (
                <div className="video">
                    <video controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </section>
    );
};

export default MediaGallery;