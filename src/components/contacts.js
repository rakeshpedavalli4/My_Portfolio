import React from "react";
import './Contacts.css';
const Contacts=()=>{
    return(
        <section className="Contacts">
            <h2>My contact information</h2>
            <p>
             Email: pedavary@mail.uc.edu  || Phone No: 5138796147 || Address: 724 Riddle road, Cincinnati, OH
            </p>
            <p>
            Feel free to get in touch with me if you have any questions or if you'd like to discuss a project collaboration.
            </p>
            <form>
                <input type="text" className="text-input" placeholder=" Your Name "></input>
                <input type="email" className="text-input" placeholder=" Your email "></input>
                <textarea className="text-input" placeholder=" Your Message"/>
                <button type="submit" className="text-input">Send Message </button>
            </form>
        </section>
    );
};

export default Contacts;
