import React from 'react';
import './AllCourses.css';

const AllCourses = () => {
  return (
    <div className="all-courses">
      <div className="hero-section">
        <img src="https://www.guvi.in/images/guvi-blog-banner.jpg" alt="Hero Banner" />
        <div className="hero-content">
          <h1>Welcome to GUVI Blog</h1>
          <p>Your one-stop destination for learning and career tips.</p>
        </div>
      </div>
      <div className="blog-grid">
        <div className="blog-post">
          <img src="https://www.guvi.in/images/blogs/ai-ml.png" alt="AI/ML" />
          <h2>Artificial Intelligence and Machine Learning</h2>
          <p>Explore the latest trends in AI and ML, and how they're transforming industries.</p>
        </div>
        <div className="blog-post">
          <img src="https://www.guvi.in/images/blogs/fullstack.png" alt="Full Stack Development" />
          <h2>Full Stack Development</h2>
          <p>Get started with Full Stack Development with our comprehensive guides.</p>
        </div>
        <div className="blog-post">
          <img src="https://www.guvi.in/images/blogs/data-science.png" alt="Data Science" />
          <h2>Data Science</h2>
          <p>Dive deep into Data Science, with tutorials, tips, and best practices.</p>
        </div>
        <div className="blog-post">
          <img src="https://www.guvi.in/images/blogs/cyber-security.png" alt="Cyber Security" />
          <h2>Cyber Security</h2>
          <p>Learn how to protect your digital assets with our Cyber Security tips.</p>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
