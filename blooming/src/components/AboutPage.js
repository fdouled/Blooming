import React from "react";
import { NavBar } from "./NavBar";
import "../components/about.css";
import aboutSvg from "../img/about.svg";
import learningPNG from "../img/learning.png";

export function AboutPage(props) {
    return (
        <div>
            <NavBar />
            <div className="about-container">
                <h1 className="blooming-center"> {
                    }
                    <span style={{ color: "#ffdd88" }}>A</span>
                    <span style={{ color: "#fccd7b" }}>B</span>
                    <span style={{ color: "#ffdd88" }}>O</span>
                    <span style={{ color: "#fccd7b" }}>U</span>
                    <span style={{ color: "#ffdd88" }}>T</span>
                    <span style={{ color: "....." }}> </span>
                    <span style={{ color: "#F39E9E" }}>B</span>
                    <span style={{ color: "#f6b5b5" }}>L</span>
                    <span style={{ color: "#F39E9E" }}>O</span>
                    <span style={{ color: "#f6b5b5" }}>O</span>
                    <span style={{ color: "#F39E9E" }}>M</span>
                    <span style={{ color: "#f6b5b5" }}>I</span>
                    <span style={{ color: "#F39E9E" }}>N</span>
                    <span style={{ color: "#f6b5b5" }}>G</span> 
                </h1>
                {
                <div className="svg-center">
                <img src={aboutSvg} alt="About SVG" width="500px" height="500px" />                
                </div>
                }
                <h2 className="mission-statement">OUR MISSION</h2>
                <div className="mission-container"> 
                <p className="about-para">The topic of female reproductive health education is laced with stigma and embarrassment for many communities, impacting the health outcomes and education of girls and women. Here at Blooming, we aim to collect resources that provide appropriate language for women and girls to discuss reproductive health within their families, which can help reduce these stigmas.</p>
                        <p className="about-para">By delivering information with an awareness of cultural norms and sensitivities, this site can present articles, images, and descriptions that make reproductive health digestible for women and girls unfamiliar with the topic without compromising content thoroughness.</p>
                </div>

                <h2 className="faq">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="faq-container">
                    <h3 className="specifics">WHAT TOPICS DO WE COVER?</h3>
                    <p className="about-para">BLOOMING covers a wide range of topics related to female reproductive health and education, including menstruation, pregnancy, common reproductive disorders, and more. Check out the 'Learn' tab to see what topics we've covered so far.</p>

                    <h3 className="specifics">INFORMATION ACCURACY</h3>
                    <p className="about-para">Yes, we strive to provide accurate and up-to-date information sourced from reputable medical organizations, peer-reviewed journals, and trusted health professionals. Our sources are cited for your convenience, but consulting a healthcare provider for personalized advice is essential.</p>
                </div>


                <h2 className="contact">CONTACT US</h2>

                <div className="reach-out">
                    <div className="learning-center">
                    <img src={learningPNG} alt="Learning PNG" width="300px" height="300px" style={{ marginBottom: "20px" }} />                
                    </div>
                    <div className="contact-container">
                        <p className="about-para">Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
                        <p className="about-para">Contact us at our email: <a href="mailto:blooming@gmail.com" style={{ color: "#fccd7b" }}>blooming@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
