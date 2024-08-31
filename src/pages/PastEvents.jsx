import React from 'react';
import EventCard from '../components/EventCard';

const events = [
  {
    title: 'Intro to JavaScript',
    date: 'August 10, 2024',
    description: '',
    imageUrl: '/images/introtoJavascipt.jpg', 
  },
  {
    title: 'Web Development Bootcamp',
    date: 'July 22, 2024',
    description: '',
    imageUrl: '/images/webDevelopmentBootcamp.jpg', 
  },
 
];

const PastEvents = () => (
  <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Past Events</h2>
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

export default PastEvents;

