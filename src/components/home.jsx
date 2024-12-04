import React, { useEffect, useState } from 'react';
import heroImage from '../assets/heroimage.png';
import portfolioIcon from '../assets/portfolioicon.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true when the component mounts, triggering the animation
        setIsLoaded(true);
    }, []);

    return (
        <div>
            {/* Home Section */}
            <div className="bg-black text-white py-16 px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
                    <div
                        className={`flex-shrink-0 w-full md:w-auto my-auto mx-auto md:mr-8 transform transition-transform duration-700 ${
                            isLoaded ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        <img src={heroImage} alt="hero" className="w-[400px] h-auto lg:w-[450px]" />
                    </div>

                    <div className={`flex-1 transform transition-transform duration-700 ${
                        isLoaded ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-monospace font-vt323 mb-6">
                            <span className="primary-color pb-2 block">I'm a UI/UX Designer,</span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'I craft seamless user experiences,',
                                    1000,
                                    'I achieve business goals through design,',
                                    1000,
                                    'I make interactions that stand-out.',
                                ]}
                                wrapper="span"
                                speed={40}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="sm:text-lg my-6 lg:text-xl font-raleway">
                            I specialize in blending design and functionality using Figma, ReactJs, and Photoshop. With a knack for illustration and a focus on intuitive interfaces, I’m excited to bring fresh, creative solutions to real-world challenges.
                        </p>

                        <div className="my-8">
                            <a
                                href="/"
                                className="inline-flex items-center px-6 py-3 rounded-3xl mr-4 bg-gradient-to-r from-violet-800 to-violet-700 text-xl text-white font-raleway font-extrabold transition-transform duration-300 transform hover:scale-105 hover:from-violet-700 hover:to-violet-800"
                            >
                                Portfolio
                                <img
                                    src={portfolioIcon}
                                    alt="Portfolio Icon"
                                    className="ml-2 w-5 h-5 object-contain"
                                />
                            </a>
                            <a
                                href="/"
                                className="inline-flex justify-center items-center px-6 py-3 w-[120px] rounded-3xl border border-white font-raleway font-extrabold text-xl text-white text-center hover:bg-transparent hover:text-violet-700 hover:border-violet-700 transition-transform transform hover:scale-105"
                            >
                                More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
