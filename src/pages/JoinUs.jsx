// const JoinUs = () => (
//   <div className="container mx-auto p-8">
//     <h2 className="text-3xl font-bold mb-4">Join Us</h2>
//     <p className="text-lg mb-4">
//       Interested in joining HackHub? Fill out the form below to become a part of our community!
//     </p>
//     <form className="space-y-4">
//       <div>
//         <label className="block text-lg font-medium mb-1" htmlFor="name">Name</label>
//         <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
//       </div>
//       <div>
//         <label className="block text-lg font-medium mb-1" htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
//       </div>
//       <div>
//         <label className="block text-lg font-medium mb-1" htmlFor="message">Message</label>
//         <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
//       </div>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
//     </form>
//   </div>
// );

// export default JoinUs;
import React from 'react';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Join Us</h1>
      <p className="text-lg mb-4">
     Interested in joining HackHub? Fill out the form below to become a part of our community!
     </p>
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
        />
        <textarea
          placeholder="Why do you want to join?"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
          rows="4"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
