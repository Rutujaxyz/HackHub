import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import Organizer from './pages/Organizer';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="upcoming-events">
        <UpcomingEvents />
      </div>
      <div id="past-events">
        <PastEvents />
      </div>
      <div id="organizer">
        <Organizer />
      </div>
      <div id="photos">
        <Photos />
      </div>
      <div id="videos">
        <Videos />
      </div>
      <div id="join-us">
        <JoinUs />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;

