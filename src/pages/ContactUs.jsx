

import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
      Have questions or need more information? Reach out to us through the contact form below.
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
          placeholder="Your Message"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
          rows="4"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
