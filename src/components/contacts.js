import React, { useState } from "react";
import axios from "axios";
import './Contacts.css';

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5001/contact", { name, email, message });
            console.log("Data sent to the backend");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Failed to send the data", error);
        }
    };

    return (
        <section className="Contacts">
            <h2>My Contact Information</h2>
            <div className="contact-info">
                <p>
                    Email: rakesh.pedavalli2204@gmail.com
                </p>
                <p>
                     Phone No: 513-879-6147
                </p>
                <p>
                    Address: 2300 ohio avenue, Cincinnati, OH
                </p>
            </div>
            <p className="intro-text">
                Feel free to get in touch with me if you have any questions or if you'd like to discuss a project collaboration.
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="text-input"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
                <input
                    type="email"
                    className="text-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <textarea
                    className="text-input"
                    placeholder="Your Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                />
                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contacts;