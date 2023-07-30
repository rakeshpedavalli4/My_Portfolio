import React from "react";
import './Contacts.css';
const Contacts=()=>{
    return(
        <section className="Contacts">
            <h2>My contact information</h2>
            <p>
            Feel free to get in touch with me if you have any questions or if you'd like to discuss a project collaboration.
            </p>
            <form>
                <input type="text" placeholder=" Your Name "></input>
                <input type="email" placeholder=" Your email "></input>
                <textarea placeholder=" Your Message"/>
                <button type="submit">Send Message </button>
            </form>
        </section>
    );
};

export default Contacts;