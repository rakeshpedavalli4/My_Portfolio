import React from 'react';
import './Header.css';

const Header =()=>{
    return(
        <header className='header'>
            <h1>My Portfolio</h1>
            <nav>
                <div className='about'>
                <a href="/About">About</a>
                </div>
                <div className='contacts'>
                <a href="/contacts">Contacts</a>
                </div>
                <div className='projects1'>
                <a href="/projects">Projects</a>
                </div>
            </nav>
        </header>

    );
};

export default Header;