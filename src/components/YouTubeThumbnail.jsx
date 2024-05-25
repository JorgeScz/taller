import React from 'react';

const  YouTubeThumbnail = ({ videoUrl }) => {
    // Extraer el ID del video de YouTube de la URL
    const videoId = videoUrl.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }

    // Construir la URL de la miniatura
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailUrl} alt="YouTube Video Thumbnail" style={{ width: '100%', height: 'auto' }} />
        </a>
    );
};