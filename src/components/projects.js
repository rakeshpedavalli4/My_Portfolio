import React from 'react';
import './projects.css';

const Projects = () => {
    return (
         <section className='Projects'>
            <h2>Projects</h2>
            <card className='card'>
                <div>
                <a href="https://github.com/rakeshpedavalli4/Weatherapp" 
                    target="_blank" 
                    rel="noreferrer" 
                    alt="Weather app">
                    <img 
                    src="https://openclipart.org/image/2400px/svg_to_png/14714/Anonymous-simple-weather-symbols-13.png" 
                    alt="weather"/>
                </a>
                </div>
                <div>
                <a href="https://github.com/rakeshpedavalli4/TodoList" 
                    target="_blank" 
                    rel="noreferrer" 
                    alt="TodoList">
                    <img 
                    src="https://th.bing.com/th/id/R.baa8b83e6e6ce6a2dcd86082b59effca?rik=rUAlj4EmP%2f4ZLg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8HfLPbR1n0M%2fVLREeYjL0pI%2fAAAAAAAAAb8%2fCxNo7Qn3vG0%2fs1600%2fTo-Do%2bList.png&ehk=8KCQGCqkoAv3Jb2lkwYw94QfJ71bxVu1ywp65%2b6%2bBD4%3d&risl=&pid=ImgRaw&r=0" 
                    alt="Todolist"/>
                </a>
                </div>
                <div>
                    <a href="https://github.com/rakeshpedavalli4/ExpenseTracker" 
                    target="_blank" 
                    rel="noreferrer"
                    alt="expense tracker">
                    <img 
                    src="https://compass1.org/wp-content/uploads/2011/06/shutterstock_144688553_clipped_rev_3.png"
                    alt="expenseTracker"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/rakeshpedavalli4/myCaluclator"
                    target ="_blank"
                    rel="noreferrer"
                    alt="Calculator"
                    >
                    <img src="https://webstockreview.net/images/calculator-clipart-cartoon-1.png"
                    alt="Calculator"/>
                    </a>
                </div>
            </card>     
        </section>   
    );
};

export default Projects;