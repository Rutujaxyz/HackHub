import React from 'react';
import EventCard from '../components/EventCard';

const events = [
  {
    title: 'Hackathon 2024',
    date: 'August 30, 2024',
    description: 'Join us for a full-day coding event with exciting challenges and prizes!',
    imageUrl: '/images/hackathon.jpg', 
  },
  {
    title: 'Web Development Workshop',
    date: 'September 15, 2024',
    description: 'Learn the latest web development trends and tools in this hands-on workshop.',
    imageUrl: '/images/webDevelopmentWorkshop.jpg',
  }

];

const UpcomingEvents = () => (
  <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          description={event.description}
          imageUrl={event.imageUrl} 
        />
      ))}
    </div>
  </div>
);

export default UpcomingEvents;
