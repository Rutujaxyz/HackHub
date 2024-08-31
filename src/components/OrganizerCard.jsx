import React from 'react';

const OrganizerCard = ({ name, role, bio, imageUrl }) => (
  <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
    {imageUrl && (
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto mt-4 object-cover" 
      />
    )}
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-2">{role}</p>
      <p className="text-gray-300">{bio}</p>
    </div>
  </div>
);

export default OrganizerCard;
