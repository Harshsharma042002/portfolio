import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { getProjects } from '../context/context';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-center text-4xl font-bold text-white mb-8">PROJECTS</h1>
      <div className="space-y-8">
        {getProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col md:flex-row rounded-lg p-6 bg-gray-800 shadow-md"
            initial={{ opacity: 0, y: 20 }} // Start off invisible and slightly lower
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            transition={{ type: "spring", stiffness: 100, damping: 20 }} // Spring transition
          >
            <div className="md:w-1/3 mb-4 md:mb-0">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="md:w-2/3 md:pl-4">
              <h2 className="text-2xl font-bold text-red-400 mb-2">Title: {project.name}</h2>
              <p className="text-lg font-semibold text-gray-300 mb-2">
                GitHub: 
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline text-sm md:text-lg"> 
                  {project.github}
                </a>
              </p>
              <p className="text-lg font-semibold text-gray-300 mb-2">Technologies: 
                {Array.isArray(project.technology) ? project.technology.join(', ') : project.technology}
              </p>
              <p className="text-lg text-gray-400 mb-2">{project.description}</p>
              <h3 className="font-semibold text-lg text-gray-200">Features:</h3>
              <ul className="list-disc pl-5 text-gray-400">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
