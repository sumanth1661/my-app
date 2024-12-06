import React, { useState, useEffect } from 'react';
import headingiconimg from '../assets/headingicon.svg';
import aboutImg1 from '../assets/about1.svg';
import aboutImg2 from '../assets/about2.svg';
import aboutImg3 from '../assets/about3.svg';
import aboutImg4 from '../assets/about4.svg';
import aboutImg5 from '../assets/about5.svg';
import aboutImg6 from '../assets/about6.svg';
import figma from '../assets/figma.svg';
import xd from '../assets/xd.svg';
import jsreact from '../assets/jsreact.svg';
import ai from '../assets/ai.svg';
import ps from '../assets/ps.svg';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';
import tailwindLogo from '../assets/tailwind.svg';
import downloadIcon from '../assets/download.png';
import bgimg from '../assets/bg.jpg';

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
  if (percentage >= 80) return 'bg-violet-400';
  if (percentage >= 60) return 'bg-violet-300';
  return 'bg-violet-200';
};

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutImg6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className=" text-white py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-white lg:text-5xl sm:text-4xl font-monospace font-vt323 mb-8">
              <img src={headingiconimg} alt="icon" className="inline-block mr-2" />About Me
            </h1>

            <p className="lg:text-xl font-raleway mt-20">
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

          <div className="flex-shrink-0 w-full md:w-auto md:flex md:items-center">
            <div className="relative max-w-[420px] h-auto overflow-hidden mx-auto md:ml-0">
              <img
                src={images[currentImageIndex]}
                alt="About Me"
                className="rounded-lg shadow-lg transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className=" text-gray-500 max-w-[1800px] mx-auto py-8 flex overflow-x-auto no-scrollbar gap-8">
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
    </div>
  );
};

export default About;
