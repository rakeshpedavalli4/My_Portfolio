import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import image from './Assets/IMG.png';
import resume from "./Assets/Rakesh_resume.docx";

const Header = () => {
    const navigate = useNavigate();

    const FacebookLink = () => {
        window.open('https://www.facebook.com/profile.php?id=100008899028734', '_blank');
    };

    const LinkedInLink = () => {
        window.open("https://www.linkedin.com/in/rakeshuc22/", "_blank");
    };

    const InstagramLink = () => {
        window.open("https://www.instagram.com/__rakesh_pedavalli__/", "_blank")
    };

    const GithubLink = () => {
        window.open("https://github.com/rakeshpedavalli4", "_blank");
    };

    const Openresume = () => {
        window.open(resume, '_blank');
    };

    const Hireme = () => {
        navigate('/Contact');
    };

    return (
        <div className="header-container">
            <div className='header'>
                <div className="profile-pic">
                    <img src={image} alt="Profile" />
                </div>
                <div className='header-text'>
                    <h3>Hello, I'm Rakesh Chowdary Pedavalli</h3>
                    <h4>Backend Services Engineer</h4>
                    <div className="button-container">
                        <button className="button hire-me" onClick={Hireme}>Hire Me</button>
                        <button className="button resume" onClick={Openresume}>Resume</button>
                    </div>
                    <div className='social-icons'>
                        <button className="icon linkedin" onClick={LinkedInLink}>LinkedIn</button>
                        <button className="icon instagram" onClick={InstagramLink}>Instagram</button>
                        <button className="icon facebook" onClick={FacebookLink}>Facebook</button>
                        <button className="icon github" onClick={GithubLink}>Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;