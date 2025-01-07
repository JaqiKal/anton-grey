import React from "react";
import antonTini from "../assets/images/anton-tini.webp";
import placeholder from "../assets/images/placeholder.png";
import emailjs from "emailjs-com";
import antonCv from "../assets/doc/cv-anton-skogsberg.pdf";

const AboutContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3g3ky6m", // Your EmailJS Service ID
        "template_5jqw39w", //TODO: ändra till Antons -  Your EmailJS Template ID
        e.target, // The form element
        "NZDAkGn4zgTuc0KAl" // Your EmailJS User ID (Public Key)
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset(); // Clear the form fields after submission
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap min-h-screen bg-gradient-to-r from-gray-200 via-slate-400 to-gray-500 p-6 items-start">
      {/* Left Side: Image and Text */}
      <div className="lg:w-1/2 flex flex-col justify-start pr-8">
        {/* Images Section */}
        <div className="flex items-center px-4 lg:px-8">
          {/* Static Image */}
          <div className="relative group w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img
              alt="Anton"
              src={antonTini}
              className="w-full h-full object-cover shadow-lg rounded-lg"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm md:text-lg">To be replaced</p>
            </div>
          </div>

          {/* Animated Placeholder Image */}
          <div className="relative group w-24 h-24 flex-shrink-0 ml-14 lg:ml-40">
            <img
              src={placeholder}
              alt="Placeholder for animation"
              className="w-full h-full object-cover shadow-lg rounded-lg animate-pulse"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm md:text-lg">To be replaced</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 lg:px-8 mt-6">
          <p className="text-justify text-slate-750 leading-relaxed">
            Hi there! My name is Anton Skogsberg, and I’m an aspiring character animator, soon to graduate from{" "}
            <a
              href="https://animationworkshop.via.dk/programmes-and-courses/bachelor-programmes/character-animation"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 transition-transform duration-200"
            >
              The Animation Workshop
            </a>{" "}
            in Denmark-one of Europe’s top schools for animation and visual arts. I love creating characters that feel alive, tell meaningful stories through movement, and leave a lasting impression.
          </p>

          <p className="text-justify text-slate-750 leading-relaxed mt-6">
            Over the course of my studies, I’ve specialized in
            <span className="font-semibold italic bg-pink-500">[Examples: "3D character animation," "hand-drawn animation," or "motion capture."]</span>, while working on collaborative projects that have sharpened my skills in storytelling, teamwork,
            and using industry-standard tools such as
            <span className="font-semibold italic bg-pink-500">[Examples: Maya, Blender, Toon Boom, Unreal Engine, After Effects.]</span>. I’m always excited to explore new approaches to animation and push creative boundaries to bring engaging
            characters to life.
          </p>
          <p className="text-justify text-slate-750 leading-relaxed mt-6">If you’d like to see more of my work or collaborate on a project, feel free to check out my portfolio and get in touch. I’d love to hear from you!</p>

          {/* Download CV */}
          <a
            href={antonCv}
            download
            className="mt-8 mb-10 inline-flex items-center py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3"
              />
            </svg>
            Download My CV
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 lg:p-8 md:mt-24 lg:mt-24 mx-auto max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-slate-750 text-center lg:text-left">Contact Me</h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-slate-750"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Name"
              maxLength={80}
            />
            <p className="text-sm ml-2 text-gray-500">Please enter your name.</p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-slate-750"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Email"
              maxLength={40}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <p className="text-sm ml-2 text-gray-500">Please enter a valid email address.</p>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-750"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Message"
              maxLength={500}
            ></textarea>
            <p className="text-sm ml-2 text-gray-500">Please limit your message to 500 characters.</p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 transition duration-300"
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
