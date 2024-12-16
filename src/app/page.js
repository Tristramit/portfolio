'use client';

import React from "react";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";

// Rest of the component code remains exactly the same
const Portfolio = () => {
  const projects = [
    {
      title: "Pile of Resistors",
      description: "A print-friendly resistor color code calculator with built-in organization features. Input your resistor values and quantities, and get a printable list showing the color bands, mounting points, and relevant information. Supports 3-6 band resistors, dark mode, and mobile-responsive design. Perfect for electronics projects and organizing component collections.",
      technologies: ["React", "TailwindCSS", "Lucide Icons", "LocalStorage", "CSS Print Styling"],
      gradient: "from-purple-500 to-pink-500",
      url: "https://www.pile-of-resistors.xyz/",
    },
    {
      title: "Focus YouTube Search - Chrome Extension",
      description: "A productivity-focused Chrome extension that enables direct YouTube searches without exposing users to the distracting homepage feed. Features include address bar integration with the 'yt' command and a clean, minimalist popup interface. Built to help users maintain focus while accessing YouTube content.",
      technologies: ["JavaScript", "Chrome Extension API", "HTML", "CSS", "Manifest V3"],
      gradient: "from-blue-500 to-teal-500",
      url: "https://chromewebstore.google.com/detail/youtube-quick-search/dapmgpjgphalhapikbiplgjoeeielckp",
    },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:hello@amosweislib.com";
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation and Hero sections remain unchanged */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 z-50">
        <div className="flex space-x-8">
          <a href="#about" className="text-sm hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="text-sm hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto p-8 text-center relative z-10">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Amos Weislib
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Operations specialist</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Tristramit" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/amos-weislib-047b8915a/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hello@amosweislib.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="max-w-4xl mx-auto p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative z-10">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I hold a double degree from the Hebrew University of Jerusalem in
            both Geo-Informatics and Soil, Water, and Atmosphere Sciences. My
            career has taken me across various fields, from GIS development and
            precision agriculture to IoT solutions and project management. Along
            the way, I've developed hands-on experience in programming,
            technical support, electronics, robotics, and operations management.
            I'm based in Valencia, Spain, where I manage regional operations and
            customer success for innovative agrotech solutions. My work blends
            technology with agriculture, particularly through GIS, IoT, and
            remote sensing. This allows me to drive research and practical
            applications that push the boundaries of precision agriculture. I'm
            fluent in Hebrew, English, and Spanish. I'm always looking for ways
            to leverage my diverse skill set to tackle complex challenges and
            develop cutting-edge solutions in agriculture and tech.
          </p>
        </div>
      </section>

      {/* Updated Projects Section with Visit button */}
      <section id="projects" className="max-w-4xl mx-auto p-8 relative">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
              ></div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Visit</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto p-8 pb-32 relative">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always interested in new opportunities. Feel free to reach out!
          </p>
          <button 
            onClick={handleContactClick}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:scale-105 transition-transform"
          >
            Contact Me
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      <footer className="text-center text-gray-400 py-6 px-4 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Amos Weislib. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;