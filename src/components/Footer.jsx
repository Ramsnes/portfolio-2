// src/components/Footer.jsx

export const Footer = () => {
  return (
    <div className="contactForm w-full p-6 bg-gray-100 rounded-lg shadow-md ">
      {" "}
      {/* Added padding and styling */}
      <h2 className="text-2xl mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {" "}
          {/* Responsive input layout */}
          <label className="flex flex-col">
            Your Name
            <input
              name="name"
              type="text"
              className="border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </label>
          <label className="flex flex-col">
            Your Email
            <input
              name="email"
              type="email"
              className="border border-gray-300 rounded-md p-2 mt-1"
              required
            />
          </label>
        </div>
        <label className="flex flex-col">
          Your Message
          <textarea
            name="message"
            className="border border-gray-300 rounded-md p-2 mt-1"
            rows="4" // Provides a larger text area
            required
          />
        </label>
        <p className="opacity-70">
          Feel free to reach out with any questions or inquiries. I’d love to
          hear from you and will get back to you as soon as possible!
        </p>
        <button
          type="submit"
          className="self-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
