import React from 'react';
import { getEducation } from '../context/context';

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <div className='flex justify-center m-4 font-bold text-4xl text-red-500'>EDUCATION</div>
      <div className='space-y-8'>
        {getEducation.map((education, index) => (
          <div key={index} className='border border-orange-400 rounded-xl p-6 bg-white shadow-lg m-3'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold text-red-700 mb-2'>Degree: {education.Degree}</h1>
              <p className='text-2xl font-bold text-blue-900 mb-2'>Specialization: {Array.isArray(education.Specialization) ? education.Specialization.join(', ') : education.Specialization}</p>
              <h2 className='text-2xl font-bold text-red-700 mb-2'>Duration: {education.duration}</h2>
              <p className='text-2xl font-bold text-blue-900 mb-2'>Institute: {education.institute}</p>
              <h2 className='text-lg font-bold text-gray-700 mb-2'>Achievement: {education.achievements}</h2>
              <p className='text-2xl font-bold text-red-700 mb-2'>Location: {education.location}</p>
              <h3 className='text-2xl font-bold text-blue-900'>Grade: {education.grade}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
