import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="text-center about-head">
                <h1>About Us</h1>
                <Container>
                    <h5><span className="text-success">you</span>Speak is where lifelong learners come to learn the skills they need, to land the jobs they want, to build the lives they deserve.</h5>
                </Container>
            </div>
            <div className="about-container">
                <div className="sub-container">
                    <h1><span className="text-success">Our</span> Mission</h1>
                    <p>Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
                </div>
                <div className="sub-container">
                    <h1><span className="text-success">Our</span> Students</h1>
                    <p>youSpeak students are a community of global learners united in a shared goal of uplift and transformation. Our unique learning model enables an unprecedented degree of engagement with our students, and we are with them through every step of their learning journey—from the first moment a marketing team member might answer a question on Facebook, to the penultimate moment when a career team member receives word that a graduate has gotten a new job. Our mantra is Students First, and this is the light that guides us as we continue our mission to bring the highest quality learning possible, to as many students as we can possibly reach.</p>
                </div>
            </div>
        </div>
    );
};

export default About;