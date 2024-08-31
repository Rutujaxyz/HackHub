import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="home" smooth={true} duration={500} className="text-white text-2xl font-bold cursor-pointer">HackHub</Link>
      <div className="space-x-4">
        <Link to="home" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">About</Link>
        <Link to="upcoming-events" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Upcoming Events</Link>
        <Link to="past-events" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Past Events</Link>
        <Link to="organizer" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Organizer</Link>
        <Link to="photos" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Photos</Link>
        <Link to="videos" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Videos</Link>
        <Link to="join-us" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Join Us</Link>
        <Link to="contact-us" smooth={true} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Contact Us</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

