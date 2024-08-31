import React from 'react';


const photos = [
'/images/p1.jpg',
'/images/p3.jpg',
'/images/p4.jpg',
'/images/p5.jpg',
'/images/p6.jpg',
];

const PhotoGallery = () => (
  <div className="container mx-auto p-8">
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  </div>
);

export default PhotoGallery;
