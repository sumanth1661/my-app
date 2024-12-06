import React, { useState } from 'react';
import galleryImg1 from '../assets/gallery1.jpg';
import galleryImg2 from '../assets/gallery2.jpg';
import galleryImg3 from '../assets/gallery3.jpg';
import galleryImg4 from '../assets/gallery4.jpg';
import galleryImg5 from '../assets/gallery5.jpg';
import galleryImg6 from '../assets/gallery6.jpg';
import galleryImg7 from '../assets/gallery7.jpg';
import galleryImg8 from '../assets/gallery8.jpg';
import galleryImg9 from '../assets/gallery9.jpg';
import galleryImg10 from '../assets/gallery10.jpg';
import galleryImg11 from '../assets/gallery11.jpg';
import galleryImg12 from '../assets/gallery12.jpg';
import headingiconimg from '../assets/headingicon.svg';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineDownload } from 'react-icons/ai';
import bgimg from '../assets/bg.jpg';

const Gallery = () => {
  const [likes, setLikes] = useState(Array(12).fill(false));
  const [comments, setComments] = useState(Array(12).fill(false));

  const handleLikeToggle = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

  const handleCommentToggle = (index) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index] = !updatedComments[index];
      return updatedComments;
    });
  };

  const images = [
    galleryImg1, galleryImg2, galleryImg3, galleryImg4,
    galleryImg5, galleryImg6, galleryImg7, galleryImg8,
    galleryImg9, galleryImg10, galleryImg11, galleryImg12
  ];

  return (
    <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className=" text-white py-16 px-8 font-raleway">
        <div className="container mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-vt323 font-raleway mb-0">
              <img src={headingiconimg} alt="icon" className="inline-block mr-2" />
              Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {images.map((img, index) => (
              <div key={index} className="relative group bg-black rounded-lg p-3 shadow-lg shadow-black">
                <img src={img} alt={`Gallery Image ${index + 1}`} className="w-full h-auto rounded-lg mb-6" />
                <div className="flex justify-start items-center space-x-4">
                  <button onClick={() => handleLikeToggle(index)} className="text-2xl">
                    {likes[index] ? (
                      <AiFillHeart className="text-red-600" />
                    ) : (
                      <AiOutlineHeart className="text-gray-400" />
                    )}
                  </button>
                  <button onClick={() => handleCommentToggle(index)} className="text-2xl">
                    <AiOutlineComment className="text-gray-400" />
                  </button>
                  <a href={img} download={`Gallery_Image_${index + 1}`} className="text-2xl">
                    <AiOutlineDownload className="text-gray-400" />
                  </a>
                </div>
                {comments[index] && (
                  <div className="  mt-6">
                    <textarea
                      placeholder="Write a comment..."
                      className="w-full p-3 bg-black text-white rounded-md"
                    ></textarea>
                    <button className="mt-3 py-2 px-4 bg-violet-700 text-white rounded-md font-semibold hover:bg-violet-800 transition-colors">
                      Post Comment
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
