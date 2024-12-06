import React from 'react';
import { AiOutlineMail, AiOutlineBehance, AiOutlineLinkedin } from 'react-icons/ai';
import contactimg from '../assets/contactme.png';
import bgimg from '../assets/bg.jpg';

const Contact = () => {
  return (
    <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className=" text-white py-16 px-8 font-raleway">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-black bg-opacity-50 text-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Get in touch!</h2>
            <p className="text-lg text-gray-400 mb-8">Together for a better solution</p>

            <form>
              <label className="block mb-4">
                <span className="block font-semibold">Name</span>
                <input type="text" placeholder="Insert your name" className="w-full p-3 mt-2 border border-gray-500 bg-black rounded-md" />
              </label>

              <label className="block mb-4">
                <span className="block font-semibold">Company</span>
                <input type="text" placeholder="Insert your company" className="w-full p-3 mt-2 border border-gray-500  bg-black rounded-md" />
              </label>

              <label className="block mb-4">
                <span className="block font-semibold">Email</span>
                <input type="email" placeholder="Insert your email" className="w-full p-3 mt-2 border border-gray-500 bg-black rounded-md" />
              </label>

              <label className="block mb-4">
                <span className="block font-semibold">Interests</span>
                <div className=" text-gray-500 flex flex-wrap gap-2 mt-2">
                  {['UX/UI', 'Web Dev', 'Illustration', 'Graphic Design', 'Branding', 'Digital Marketing'].map((interest, index) => (
                    <span key={index} className="px-3 py-2 border border-gray-500 rounded-full text-sm">{interest}</span>
                  ))}
                </div>
              </label>

              <label className="block mb-8">
                <span className="block font-semibold">Other</span>
                <textarea placeholder="Tell me, I'm all ears" className="w-full p-3 mt-2 border border-gray-500 bg-black rounded-md h-24"></textarea>
              </label>

              <button type="submit" className="w-full py-3 rounded-3xl bg-gradient-to-r from-violet-800 to-violet-700 text-xl text-white font-raleway font-extrabold transition-transform duration-300 transform hover:scale-105 hover:from-violet-700 hover:to-violet-800">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-black bg-opacity-50 text-white rounded-lg p-8 shadow-lg font-raleway">
            <h2 className="text-2xl font-semibold mb-6">Contacts</h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <AiOutlineMail className="text-3xl" />
                <span>
                  <a href="mailto:sumanthmanoharan1661@gmail.com">sumanthmanoharan1661@gmail.com</a>
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <AiOutlineBehance className="text-3xl" />
                <span>
                  <a href="www.behance.net/sumanthmanoharan">behance.net/sumanthmanoharan</a>
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <AiOutlineLinkedin className="text-3xl" />
                <span>
                  <a href="www.linkedin.com/in/sumanth61/">linkedin.com/in/sumanth61/</a>
                </span>
              </li>
            </ul>

            <div className="mt-12">
              <img src={contactimg} alt="Illustration" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
