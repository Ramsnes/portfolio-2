// src/components/Footer.jsx
import githubLogo from "../assets/GitHub_Logo.png";

export const Footer = () => {
  return (
    <div className="contactForm w-full p-6 rounded-lg">
      <h2 className="text-2xl mb-4">Contact Me</h2>
      <div>
        <h3>
          Email address: <span>Morten.Ramfjord@gmail.com</span>
        </h3>
        <h3 className="flex items-center">
          My GitHub profile:
          <a
            href="https://github.com/Ramsnes"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <img src={githubLogo} alt="GitHub Logo" className="w-16 h-auto" />
          </a>
        </h3>
      </div>
    </div>
  );
};
