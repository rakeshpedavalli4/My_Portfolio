import React, {useState} from "react";
import axios from "axios";
import './Contacts.css';
const Contacts=()=>{
    const[name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = async (event)=>{
        event.preventDefault();
            try{
                await axios.post("http://localhost:5001/contact",{name, email, message});
                console.log("Data send to the backend");
                setName("");
                setEmail("");
                setMessage("");
            } catch(error){
                console.error("Failed to send the Data",error);
            }
    }
    return(
        <section className="Contacts">
            <h2>My contact information</h2>
            <p>
             Email: pedavary@mail.uc.edu  || Phone No: 5138796147 || Address: 724 Riddle road, Cincinnati, OH
            </p>
            <p>
            Feel free to get in touch with me if you have any questions or if you'd like to discuss a project collaboration.
            </p>
            <form onSubmit={handleSubmit}>
                <input type="text" className="text-input" placeholder=" Your Name " value={name} onChange={(event)=>setName(event.target.value)}></input>
                <input type="email" className="text-input" placeholder=" Your email "value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                <textarea className="text-input" placeholder=" Your Message"value={message} onChange={(event)=>setMessage(event.target.value)}/>
                <button  type="submit" className="text-input">Send Message </button>
            </form>
        </section>
    );
};

export default Contacts;
