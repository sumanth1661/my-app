import React, { useState, useEffect } from 'react';
import aboutImg1 from '../assets/about1.png';
import aboutImg2 from '../assets/about2.png';
import figma from '../assets/figma.svg';
import xd from '../assets/xd.svg';
import jsreact from '../assets/jsreact.svg';
import ai from '../assets/ai.svg';
import ps from '../assets/ps.svg';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import tailwindLogo from '../assets/tailwind.svg';
import underline from '../assets/underline.png';
import downloadIcon from '../assets/download.png';


const skills = [
  { name: 'Figma', logo: figma, percentage: 90 },
  { name: 'Adobe XD', logo: xd, percentage: 90 },
  { name: 'React Js', logo: jsreact, percentage: 70 },
  { name: 'HTML', logo: htmlLogo, percentage: 85 },
  { name: 'CSS', logo: cssLogo, percentage: 80 },
  { name: 'Tailwind CSS', logo: tailwindLogo, percentage: 75 },
  { name: 'Illustrator', logo: ai, percentage: 75 },
  { name: 'Photoshop', logo: ps, percentage: 80 },
];

const getProgressColor = (percentage) => {
  if (percentage >= 80) return 'bg-yellow-400';
  if (percentage >= 60) return 'bg-yellow-300';
  return 'bg-yellow-200';
};

const About = () => {
  const [isImage1, setIsImage1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImage1((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-white lg:text-5xl sm:text-4xl font-monospace font-vt323 mb-0">About Me</h1>
          <img src={underline} alt="underline" className="w-32 md:w-48 mb-6" />

          <p className="lg:text-xl font-raleway">
            I'm a passionate UI/UX designer dedicated to crafting seamless user experiences. With a diverse portfolio
            spanning website, app, product design, and graphic illustrations, I thrive on turning ideas into intuitive, visually engaging interfaces.
            I hold a Master’s in Interaction and Experience Design from the University of Limerick, where I honed my ability to blend creativity
            with user-centered design principles. Let's create experiences that not only work but inspire.
          </p>
          <br />
          <p className="lg:text-xl font-raleway">
            I'm a passionate UI/UX designer dedicated to crafting seamless user experiences. With a diverse portfolio
            spanning website, app, product design, and graphic illustrations, I thrive on turning ideas into intuitive, visually engaging interfaces.
            I hold a Master’s in Interaction and Experience Design from the University of Limerick, where I honed my ability to blend creativity
            with user-centered design principles. Let's create experiences that not only work but inspire.
          </p>

          {/* Download CV Button */}
          <div className="my-8">
            <a
                href="/cv.pdf"  // Path to the CV file in the public directory
                download="cv.pdf"  // Ensures the file is downloaded with the specified name
                className="inline-flex items-center px-6 py-3 rounded-3xl mr-4 bg-gradient-to-r from-violet-800 to-violet-700 text-xl text-white font-raleway font-extrabold transition-transform duration-300 transform hover:scale-105 hover:from-violet-700 hover:to-violet-800"
            >
                Get Resume
                <img
                    src={downloadIcon}
                    alt="Download Icon"
                    className="ml-2 w-5 h-5 object-contain"
                />
            </a>
        </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="relative max-w-[600px] h-auto overflow-hidden">
            <img
              src={isImage1 ? aboutImg1 : aboutImg2}
              alt="About Me"
              className="rounded-lg shadow-lg transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-black text-gray-500 max-w-[1800px] mx-auto py-8 flex overflow-x-auto no-scrollbar gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center relative w-20 group">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="transition-transform transform hover:scale-110 w-16 h-16"
            />
            <p className="mt-2 text-sm text-center">{skill.name}</p>

            <div className="absolute bottom-24 hidden group-hover:block bg-black text-white p-2 rounded-md shadow-lg">
              <div className="relative w-24 h-2 bg-gray-700 rounded-full">
                <div
                  className={`absolute h-full ${getProgressColor(skill.percentage)} rounded-full transition-all duration-300`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
