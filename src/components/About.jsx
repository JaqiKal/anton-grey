import React from "react";

const AboutContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap min-h-screen bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 p-8">
      {/* Left Side: Image and Text */}
      <div className="lg:w-1/2 flex flex-col justify-start pr-8">
        {/* Image Placeholder */}
        <div className="relative mb-6 lg:mb-0">
          <img
            src="https://via.placeholder.com/200"
            alt="Placeholder"
            className="float-left mr-4 mb-4 w-48 h-48 object-cover shadow-lg rounded-lg"
          />
          <p className="text-justify text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at tellus velit. Etiam auctor, augue vitae volutpat fringilla, enim turpis fermentum nunc, quis cursus odio libero nec urna. Sed consectetur ultricies ex non sodales.
          </p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 self-start">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Me</h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutContact;
