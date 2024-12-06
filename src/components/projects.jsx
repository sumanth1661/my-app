import React from 'react';
import headingiconimg from '../assets/headingicon.svg';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.png';
import bgimg from '../assets/bg.jpg';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className=" text-white py-16 px-8">
        <div className="container mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-white lg:text-5xl sm:text-4xl font-monospace font-vt323 mb-0">
              <img src={headingiconimg} alt="icon" className="inline-block mr-2" />
              My Projects
            </h2>
          </div>

          <Slider {...settings} className="carousel">
            {/* Project 1 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg1}
                  alt="Project 1"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg2}
                  alt="Project 2"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg3}
                  alt="Project 3"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg4}
                  alt="Project 4"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg5}
                  alt="Project 5"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="p-4">
              <div className="relative group">
                <img
                  src={projectImg6}
                  alt="Project 6"
                  className="w-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <p className="text-lg text-white font-semibold">View</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-300 hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-300 hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

export default Projects;
