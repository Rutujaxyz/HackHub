import React from 'react';

const EventCard = ({ title, date, description, imageUrl }) => (
  <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
    {imageUrl && (
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
    )}
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{date}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default EventCard;
