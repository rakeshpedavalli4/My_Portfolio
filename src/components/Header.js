import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import image from './Assets/IMG.png';
import resume from "./Assets/Rakesh_resume.docx";

const Header =()=>{
    const navigate = useNavigate();
    const FacebookLink= ()=>{
        window.open('https://www.facebook.com/profile.php?id=100008899028734', '_blank');
    };
    const LinkedInLink =()=>{
        window.open("https://www.linkedin.com/in/rakeshuc22/", "_blank");
    };
    const InstagramLink =()=>{
        window.open("https://www.instagram.com/__rakesh_pedavalli__/", "_blank")
    };
    const GithubLink=()=>{
        window.open("https://github.com/rakeshpedavalli4","_blank");
    };
    const Openresume = () =>{
        window.open(resume, '_blank');
    };
    const Hireme =()=>{
        navigate('/Contact');
    };
    return(
        <div>
            <div className='header'>
                <div classname="pic">
                    <img  
                    src={image} 
                    alt="Profile"
                    />
                </div>
                <div className='text'>
                    <h3>Hello, I'm Rakesh Chowdary Pedavalli</h3>
                    <h4>Web Developer</h4>
                    <p>Actively looking for entry level positions</p>
                    <div>
                        <button className="button" onClick={Hireme}>Hire me</button>
                        <button className="button" onClick={Openresume}>Resume</button>
                    </div>
                    <div className='icons'>
                        <button onClick={LinkedInLink}>LinkedIn</button>
                        <button onClick={InstagramLink}>Instagram</button>
                        <button onClick={FacebookLink}>Facebook</button>
                        <button onClick={GithubLink}>Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
