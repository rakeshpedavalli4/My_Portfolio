import React from 'react';
import './projects.css';

const Projects = () => {
    return (
         <section className='Projects'>
            <h2>Projects</h2>
            <div className='card'>
                <h3>project 1</h3>
                <p>
                <a href="https://github.com/rakeshpedavalli4/Weatherapp" 
                    target="_blank" 
                    rel="noreferrer" 
                    alt="Weather app">
                    Weather app
                    </a>
                </p>
                <h3> project 2</h3>
                <p>
                    <a href="https://github.com/rakeshpedavalli4/TodoList" 
                    target="_blank" 
                    rel="noreferrer" 
                    alt="TodoList">
                    TodoList
                    </a>
                </p>
            </div>     
        </section>   
    );
};

export default Projects;