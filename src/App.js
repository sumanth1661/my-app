import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Correct import based on the provided files
import Header from './components/header';

// Lazy loading components
const Home = React.lazy(() => import('./components/home'));
const About = React.lazy(() => import('./components/about'));
const Services = React.lazy(() => import('./components/services'));
const Projects = React.lazy(() => import('./components/projects'));
const Blog = React.lazy(() => import('./components/blog'));

function App() {
    return (
        <div className="App">
            <Router>
                <Header /> {/* Navigation bar component */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
