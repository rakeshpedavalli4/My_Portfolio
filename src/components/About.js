import React from "react";
import './About.css';

const About = () => {
    return (
        <section className="About">
            <h2>ABOUT ME</h2>
            <p>
                Hello! I'm <span className="highlight">Rakesh Chowdary Pedavalli</span>,
                 a passionate Full Stack developer with a strong background in front-end, 
                 backend and database technologies. I love building user-friendly and
                  performant web applications using 
                  <span className="highlight"> Java, spring boot, JavaScript, react, node </span> 
                  and deployed the applications in <span className="highlight">AWS and Redhat openshift </span>.
                  currently working as a <span className="highlight"> Backend developer </span> in 
                  <span className="highlight"> FifthThird Bank</span>
            </p>
        </section>
    );
};

export default About;