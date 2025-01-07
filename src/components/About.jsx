import React from "react";
import antonTini from "../assets/images/anton-tini.webp";
import emailjs from "emailjs-com";

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
    <div className="flex flex-wrap lg:flex-nowrap min-h-screen bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 p-8">
      {/* Left Side: Image and Text */}
      <div className="lg:w-1/2 flex flex-col justify-start pr-8">
        {/* Image Placeholder */}
        <div className="relative mb-6 lg:mb-0">
          <img
            src={antonTini}
            alt="Anton"
            className="float-left mr-4 mb-4 w-48 h-48 object-cover shadow-lg rounded-lg"
          />
          <p className="text-justify text-gray-200 leading-relaxed">
            Walk on a keyboard catch small lizards, bring them into house, then unable to find them on carpet roll on the floor purring your whiskers off. Cat ipsum dolor sit amet, catto munch salmono kick up litter but cat cat moo moo lick ears lick
            paws.
          </p>
          <p className="text-justify text-gray-200 leading-relaxed mt-10">
            Cat is life munch, munch, chomp, chomp. Drool. When owners are asleep, cry for no apparent reason sun bathe. Furball roll roll roll. Eat a rug and furry furry hairs everywhere. Kitty time i hate cucumber pls dont throw it at me.
          </p>
          {/* Download my CV */}
          <a
            href="/path-to-your-pdf-file.pdf"
            download
            className="mt-4 inline-block py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Download my CV
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8 self-start">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Me</h2>
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name" // Match EmailJS template variable
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Name"
              maxLength={80} // Defensive mechanism: validate mail
              aria-describedby="namel-description" // De
            />
            <p className="text-sm ml-2 text-gray-500">Please enter you name.</p>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email" // Match EmailJS template variable
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              placeholder="Your Email"
              maxLength={40} // Defensive mechanism: limit input length
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              aria-describedby="email-description" // Defensive mechanism: validate mail
            />
            <p className="text-sm ml-2 text-gray-500">Please enter a valid email address.</p>
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
              name="message" // Match EmailJS template variable
              rows="4"
              required
              className="mt-1 block w-full rounded-xl bg-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-300"
              aria-describedby="message-description"
              placeholder="Your Message"
              maxLength={500} // Defensive mechanism: limit message length
            ></textarea>
            <p
              id="message-description"
              className="text-sm ml-2 text-gray-500"
            >
              Please limit your message to 500 characters.
            </p>
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
