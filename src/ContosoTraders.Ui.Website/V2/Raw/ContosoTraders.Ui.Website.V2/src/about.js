// About.js
import React from 'react';
//import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Contoso Traders</h1>
      <p>
        Welcome to the Contoso Traders React application! This app is a part of the DevOps and DevSecOps Hackathon. Our goal is to provide a seamless and interactive platform for users to explore and manage various aspects of Contoso Traders.
      </p>
      <p>
        This application is built with modern web technologies, including React, to ensure a dynamic and responsive user experience. Our team has integrated best practices in DevOps and DevSecOps to maintain a high standard of security and performance.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>User-friendly interface</li>
        <li>Real-time updates</li>
        <li>Secure user authentication</li>
        <li>Detailed analytics and reports</li>
        <li>Seamless integration with third-party services</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        At Contoso Traders, we aim to revolutionize the way businesses manage their operations through innovative technology solutions. Our mission is to empower users with the tools they need to succeed in today's competitive market.
      </p>
      <h2>Contact Us</h2>
      <p>
        Have any questions or feedback? Feel free to reach out to us at <a href="mailto:support@contosotraders.com">support@contosotraders.com</a>. We'd love to hear from you!
      </p>
    </div>
  );
};

export default About;
