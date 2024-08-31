import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">HackHub</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/upcoming-events">Upcoming Events</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/past-events">Past Events</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/organizer">Organizer</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/photos-videos">Photos & Videos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/join-us">Join Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
