import React from 'react';
import VideoCard from '../components/VideoCard';

const videos = [
  {
    title: 'Hackathon Highlights',
    videoUrl: 'https://example.com/video1.mp4', 
    description: 'A recap of the Hackathon event held in 2023.',
  },
  {
    title: 'React Workshop Recap',
    videoUrl: 'https://example.com/video2.mp4',
    description: 'Highlights from the React workshop in June 2023.',
  },
  {
    title: 'AI Symposium Keynote',
    videoUrl: 'https://example.com/video3.mp4', 
    description: 'Keynote speech from the AI Symposium 2022.',
  },
];

const Videos = () => (
  <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Videos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          videoUrl={video.videoUrl}
          description={video.description}
        />
      ))}
    </div>
  </div>
);

export default Videos;
