import React, { useState, useEffect } from 'react';
import blogImage1 from '../assets/blogImage1.png';
import blogImage2 from '../assets/blogImage2.png';
import blogImage3 from '../assets/blogImage3.png';
import headingiconimg from '../assets/headingicon.svg';
import video from '../assets/video.mp4';

// Importing carousel images
import videoblogImage1 from '../assets/videoblogImage1.jpg';
import videoblogImage2 from '../assets/videoblogImage2.jpg';
import videoblogImage3 from '../assets/videoblogImage3.jpg';
import videoblogImage4 from '../assets/videoblogImage4.jpg';
import videoblogImage5 from '../assets/videoblogImage5.jpg';
import videoblogImage6 from '../assets/videoblogImage6.jpg';

const Blog = () => {
    const [activeTab, setActiveTab] = useState('Photography');
    const [currentSlide, setCurrentSlide] = useState(0);

    // Placeholder blog post content for Photography
    const photographyPosts = [
        {
            image: blogImage1,
            description: "The first picture was a formal headshot image. I wanted it to have a subtle and elegant look, so I tried my best to use neutral colors throughout the scene. This picture was captured with a 2.4f Aperture to have emphasis on myself entirely, a 1/40 shutter speed as it was shot indoor with almost zero movement in the scene, and an ISO of 200.",
            details: {
                iso: "200",
                shutterSpeed: "1/40",
                aperture: "2.4f",
                focalLength: "50mm"
            }
        },
        {
            image: blogImage2,
            description: "This image depicts me in an aesthetic and passionate way. It was taken in my picturesque backyard during sunset and a slight drizzle of rain, adding a dramatic touch. I used a 4f Aperture for a soft blurry touch, an ISO of 200 to keep the noise minimal, and compensated brightness with a lower shutter speed of 100. The focal length of 70mm produced the best-looking images.",
            details: {
                iso: "200",
                shutterSpeed: "1/100",
                aperture: "4f",
                focalLength: "70mm"
            }
        },
        {
            image: blogImage3,
            description: "The third image conveys a little story within its composition. I used Photoshop to superimpose two images taken at the same place with the same settings to produce a ghost image effect. The formal version of me reading a book is disturbed by the alter ego that's yearning to disrupt the controlled mind, adhering to boundaries and judgments of self.",
            details: {
                iso: "400",
                shutterSpeed: "1/50",
                aperture: "3.5f",
                focalLength: "85mm"
            }
        },
    ];

    // Placeholder blog post content for Videography
    const videographyPosts = [
        {
            description: (
                <>
                    <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Behind the Scenes of Bellarom - Wake Up Your Best</h2>
                    
                    {/* Video element */}
                    <div className="mb-12">
                        <video
                            className="w-full md:w-3/4 mx-auto rounded-lg shadow-lg"
                            controls
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <p className="mb-8 leading-relaxed text-lg text-justify md:px-4">Creating a product advertisement for “Bellarom - Wake Up Your Best”, our videography assignment, was an incredible creative journey, and as the cinematographer, I had the privilege of shaping its visual narrative. Here's an inside look at the process and my personal experience in bringing this project to life.</p>

                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Translating Vision into Visuals</h3>
                    <p className="mb-8 leading-relaxed text-lg text-justify md:px-4">The concept centered around a student tackling late-night study sessions with Bellarom Coffee as the ultimate source of motivation. My job was to visually tell this story, capturing the struggles, the moments of rejuvenation, and the inspiration that comes with every cup of coffee. Every frame was meticulously planned to evoke a sense of comfort and empowerment.</p>

                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">The Process: Crafting Visual Perfection</h3>
                    <div className="mb-8 md:px-4 leading-relaxed text-lg text-justify space-y-4">
                        <p><strong>Lighting Magic:</strong> Dorm rooms transformed into cinematic sets. Desk lamps and handheld lights were strategically positioned to create warm, cozy tones that complemented the narrative. The kitchen scenes, focusing on brewing coffee, demanded precise angles to capture the steam and inviting aroma.</p>
                        <p><strong>Storytelling Through Details:</strong> Each shot was designed to convey the student's emotional journey—from exhaustion to energy. Experimenting with angles, depth of field, and close-ups brought life to the coffee mug, brewing process, and the protagonist’s transformation.</p>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full md:w-3/4 mx-auto mb-12 relative">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <div
                                className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                            >
                                {[videoblogImage1, videoblogImage2, videoblogImage3, videoblogImage4, videoblogImage5, videoblogImage6].map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Carousel ${idx + 1}`}
                                        className="inline-block w-full h-auto object-cover"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
                            onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + 6) % 6)}
                        >
                            &#10094;
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
                            onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % 6)}
                        >
                            &#10095;
                        </button>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Giving Voice to the Visuals</h3>
                    <p className="mb-8 leading-relaxed text-lg text-justify md:px-4">In addition to cinematography, I contributed computer-generated voiceovers, narrating the story with smooth transitions and emotional cues. These voiceovers were carefully synced to align with the visuals, enhancing the overall storytelling experience.</p>

                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">The Take-aways</h3>
                    <ul className="list-disc list-inside mb-8 leading-relaxed text-lg text-justify md:px-4 space-y-3">
                        <li><strong>Resourcefulness:</strong> Limited tools and confined spaces pushed us to think innovatively, using everyday items to achieve professional results. We used an iPhone as the main camera, multiple LED tubes and phone flashlights as mini floodlights and fill-lights for a cinematic effect, and a rolling chair like a gimbal for a few dramatic opening and closing shots.</li>
                        <li><strong>Teamwork:</strong> Collaborative brainstorming and problem-solving were vital to refine the ad and elevate every scene.</li>
                        <li><strong>Impactful Storytelling:</strong> Seeing the final polished video resonate with the intended emotions was deeply fulfilling.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">On The Whole..</h3>
                    <p className="leading-relaxed text-lg text-justify md:px-4">The Bellarom - Wake Up Your Best ad stands as a testament to the power of teamwork and creativity. It captured the essence of the brand, showing how a simple cup of coffee can transform a moment. This project was not just a creative endeavor but a learning experience that reinforced the importance of resourcefulness, storytelling, and collaboration in filmmaking.</p>
                </>
            )
        },
    ];

    // Autoslide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const posts = activeTab === 'Photography' ? photographyPosts : videographyPosts;

    return (
        <div className="bg-black text-white py-16 px-8">
            <div className="container mx-auto">
                <div className="flex-1 mb-8 md:mb-0 md:pr-8">
                    <h1 className="text-white lg:text-5xl sm:text-4xl font-monospace font-vt323 mb-8">
                        <img src={headingiconimg} alt="icon" className="inline-block mr-2" />
                        Blog
                    </h1>
                </div>

                {/* Tab buttons */}
                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        className={`px-6 py-2 rounded-lg ${activeTab === 'Photography' ? 'bg-violet-700 text-white' : 'bg-gray-1000 text-gray-200'} font-semibold hover:bg-violet-900 transition`}
                        onClick={() => setActiveTab('Photography')}
                    >
                        Photography
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg ${activeTab === 'Videography' ? 'bg-violet-700 text-white' : 'bg-gray-1000 text-gray-200'} font-semibold hover:bg-violet-900 transition`}
                        onClick={() => setActiveTab('Videography')}
                    >
                        Videography
                    </button>
                </div>

                {/* Blog posts container */}
                <div className="space-y-16">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                            {/* Blog post image for Photography */}
                            {activeTab === 'Photography' && (
                                <div className="lg:w-1/3 overflow-hidden rounded-lg shadow-lg relative group">
                                    <img 
                                        src={post.image} 
                                        alt={`Blog post ${index + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-150 z-10"
                                    />
                                </div>
                            )}

                            {/* Blog post description */}
                            <div className={`lg:w-${activeTab === 'Photography' ? '2/3' : 'full'} text-gray-300 text-lg leading-relaxed`}>
                                <p>{post.description}</p>

                                {/* Show technical details for Photography only */}
                                {activeTab === 'Photography' && post.details && (
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <div className="bg-white bg-opacity-10 rounded-md px-4 py-2 text-sm">
                                            <strong>ISO:</strong> {post.details.iso}
                                        </div>
                                        <div className="bg-white bg-opacity-10 rounded-md px-4 py-2 text-sm">
                                            <strong>Shutter Speed:</strong> {post.details.shutterSpeed}
                                        </div>
                                        <div className="bg-white bg-opacity-10 rounded-md px-4 py-2 text-sm">
                                            <strong>Aperture:</strong> {post.details.aperture}
                                        </div>
                                        <div className="bg-white bg-opacity-10 rounded-md px-4 py-2 text-sm">
                                            <strong>Focal Length:</strong> {post.details.focalLength}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
