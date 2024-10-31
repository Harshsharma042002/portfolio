import React from 'react';
import img from '../assests/img5.jpg';
import img2 from '../assests/certificate.jpg';
import { motion } from 'framer-motion';
import { CiPhone, CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdHtml, MdCss } from "react-icons/md";
import { FaJava, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { getSkills } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-black text-white min-h-screen p-8 m-5">
      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/2 text-center lg:text-left space-y-3">
          <motion.h1 
            initial={{ x: -1000 }} 
            animate={{ x: 0 }}  
            transition={{ duration: 0.75, delay: 0.5 }}
            className="text-5xl font-bold text-red-500"
          >
            Welcome to My Portfolio!
          </motion.h1>
          <h2 className="text-3xl font-bold m-3">I'm Harsh Sharma</h2>
          <p className="text-gray-400 font-semibold mt-2">A computer science engineer passionate about technology and innovation.</p>
          <p className="text-gray-400 font-semibold">I enjoy turning ideas into reality with code. Check out my projects below, and let’s collaborate!</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <CiPhone className="text-red-500" />
              <p className="text-gray-300">+91 95000 07608</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <MdOutlineEmail className="text-red-500" />
              <p className="text-gray-300">harshu042002@gmail.com</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <CiLocationOn className="text-red-500" />
              <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={img} 
            alt="home" 
            className="rounded-3xl w-full h-auto lg:h-96 object-cover shadow-lg border-2 border-red-500 hover:scale-105 transition-transform duration-300 ease-in-out" 
          />
        </div>
      </div>

      <div className='m-5'>
        <a href="mailto:harshu042002@gmail.com" className='m-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 hover:scale-105 transform transition-all duration-300 ease-in-out'>
          Contact Me
        </a>
      </div>

      {/* Technologies Section */}
      <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 1 }}>
        <h1 className="text-4xl font-bold text-red-500 text-center mb-4">Technologies</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center text-4xl">
          {[<FaJava />, <FaReact />, <FaNode />, <MdHtml />, <MdCss />, <SiMongodb />, <DiJavascript />, <AiOutlineConsoleSql />].map((Icon, index) => (
            <div 
              key={index} 
              className="text-gray-300 bg-gray-800 rounded-lg p-3 hover:text-white hover:bg-red-500 hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out flex justify-center"
            >
              {Icon}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 1.5 }}>
        <h1 className="text-4xl font-bold text-red-500 text-center mb-4">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-500 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out transform"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for skills
            >
              <h2 className="text-2xl font-semibold">{skill.name}</h2>
              <p className="text-gray-400 mt-2">Proficiency: {skill.proficiency}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certification Section */}
      <motion.div className="mt-10 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 2 }}>
        <h1 className='text-2xl font-bold text-green-600 mb-4'>Certification</h1>
        <img 
          src={img2} 
          alt='certificate' 
          className='rounded-lg shadow-md border-2 border-red-500 w-full lg:w-1/2 h-auto' 
        />
      </motion.div>
      
      <div className="flex justify-center space-x-4 mt-6">
        <button 
          onClick={() => navigate('/projects')} 
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Check-out My Projects
        </button>
        <button 
          onClick={() => navigate('/education')} 
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-400 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Check-out My Education
        </button>
      </div>
    </div>
  );
};

export default Home;
