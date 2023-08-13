import React from "react";
import './Skills.css';
import reactlogo from './Assets/React-logo.png';
import nodelogo from './Assets/node-js-img.png';
import mysql from './Assets/MySQL-img.png';
const Skills = () =>{
    return(
        <div className="icons">
                <div className="icon">
                    <img 
                        src="https://icon-library.com/images/java-icon-png/java-icon-png-15.jpg"
                        alt="Java Icon"
                        className="image"
                    />
                    <div>
                        <progress className="progress" value={80} max="100"></progress>
                    </div>
                </div> 
                <div className="icon">               
                    <img src="https://bolorundurovj.github.io/img/skill/javascript.png"
                        alt="JavaScriptLogo"
                        className="image"
                    />
                    <div>
                        <progress className="progress" value={70} max="100"></progress>
                    </div>
                </div> 
                <div className="icon">
                    <img src="https://skypointwebdesignbillingsmontana.com/wp-content/uploads/2013/08/HTML5-Super-Hero-Logo1.png"
                        alt="HTML LOgo"
                        className="image"
                    />
                    <div>
                        <progress className="progress" value={90} max="100"></progress>
                    </div>
                </div> 
                <div className="icon">
                    <img src="https://clipground.com/images/css3-png-18.png"
                        alt="CSS logo"
                        className="image"
                    />
                    <div>
                    <progress className="progress" value={90} max="100"></progress>
                </div>
                </div>
                <div className="icon">
                    <img src={reactlogo}
                        alt="react Logo"
                        className="image"
                        />
                    <div>
                        <progress className="progress" value={70} max="100"></progress>
                    </div>
                </div>
                <div className="icon">
                    <img src={nodelogo}
                        alt="node.js Logo"
                        className="image"
                        />
                    <div>
                        <progress className="progress" value={60} max="100"></progress>
                    </div>
                </div>
                <div className="icon">
                    <img src={mysql}
                        alt="MySQL Logo"
                        className="image"
                        />
                    <div>
                        <progress className="progress" value={80} max="100"></progress>
                    </div>
                </div> 
        </div>
    );
};

export default Skills;