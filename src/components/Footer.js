import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                    "#fff", marginRight: "2rem"}} />
                    <div className="loc">
                        <p>Adis Ababa, </p>
                        <p>Ethiopia.</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color:
                    "#fff", marginRight: "2rem"}} />
                    <p>+251-911-27-06-82</p>
                </div>
                <div className="mail">
                    <FaMailBulk size={20} style={{color:
                    "#fff", marginRight: "2rem"}} />
                    <p>dejengebrewahid23@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me, Dejen Hailu. Like to discussing
                    new projects and design challenges
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:
                    "#fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color:
                    "#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color:
                    "#fff", marginRight: "1rem"}} />
                </div>

            </div>
        </div>
    </div>
  );
};

export default Footer
