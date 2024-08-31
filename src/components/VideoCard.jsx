import React from 'react';

const VideoCard = ({ title, videoUrl, description }) => (
  <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
    <div className="w-full h-48 overflow-hidden">
      <video 
        src={videoUrl} 
        controls 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default VideoCard;
