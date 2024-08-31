import React from 'react';
import OrganizerCard from '../components/OrganizerCard';

const organizers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Organizer',
    bio: 'Alice is a seasoned developer with over 10 years of experience in web development. She is passionate about teaching and mentoring.',
    imageUrl: '/images/organizer1.jpg', 
  },
  {
    name: 'Bob Smith',
    role: 'Co-Organizer',
    bio: 'Bob is a software engineer specializing in AI and machine learning. He enjoys solving complex problems and sharing knowledge.',
    imageUrl: '/images/organizer2.jpg',
  },
  {
    name: 'John Davis',
    role: 'Event Coordinator',
    bio: 'John has a background in event management and loves organizing tech events. He ensures everything runs smoothly.',
    imageUrl: '/images/organizer3.jpg', 
  },
 
];

const Organizer = () => (
  <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Meet Our Organizers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {organizers.map((organizer, index) => (
        <OrganizerCard
          key={index}
          name={organizer.name}
          role={organizer.role}
          bio={organizer.bio}
          imageUrl={organizer.imageUrl} 
        />
      ))}
    </div>
  </div>
);

export default Organizer;
