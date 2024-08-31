 
import React from 'react';


const HomePage = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to HackHub
      </h1>
      <p className="text-xl md:text-2xl font-light mb-6">
      Your Gateway to Coding Brilliance.
      </p>
      <a href="#join-us" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Join Us Today
      </a>
    </div>
  );
};

export default HomePage;
