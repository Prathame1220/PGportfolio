import React from 'react'
import employeeMSImage from "../assets/ios-weather-app.png";
import bookMSImage from "../assets/paying-guest-accommodation-php-script-home-1024x585.webp"
import TextAnalyzer from "../assets/download.png"
const projects = [
    {
      id: 1,
      name: "Weather App",
      technologies: "JavaScript,HTML,CSS",
      image: employeeMSImage,
      github: "https://github.com/Prathame1220/WeatherApp",
    },
    {
      id: 2,
      name: "Visitors Accomdation System",
      technologies: "Java,PHP,CSS",
      image: bookMSImage,
      github: "https://github.com/Prathame1220/Visitors-Accomadation-System",
    },
    {
      id: 3,
      name: "Text-Analyzer",
      technologies: "React JS",
      image: TextAnalyzer,
      github: "https://github.com/Prathame1220/Text-Analyzer",
    },
  ];

  const Projects = () => {
    return (
      <div className="bg-black text-white py-2" id="project">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-white/50 hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 
                w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <a href={project.github} className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
                rel="noopener noreferrer">GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default Projects
