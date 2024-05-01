import React from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

export function AboutPage(props) {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1 className="text-center">About Blooming</h1>
                <div className="row">
                    <div className="col-md-6">
                        <span>
                            <img className="about-img" src={require("../img/about-img.png")} style={{ width: '200px', marginRight: '-10px' }} />
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="about-container">
                            <p>The topic of female reproductive health education is laced with stigma and embarrassment for many communities, which impacts the health outcomes and education of girls and women. Here at Blooming, we aim to collect resources that provide appropriate language for women and girls to discuss reproductive health within their families, which can be essential in helping reduce these stigmas.</p>

                            <p>By delivering information with an awareness of cultural norms and sensitivities, this site can present articles, images, and descriptions that make reproductive health digestible for women and girls unfamiliar with the topic without compromising content thoroughness.</p>
                        </div>
                    </div>
                </div>

                <h2>Frequently Asked Questions (FAQ)</h2>
                <div className="faq-container">
                    <h3>What topics does your site cover?</h3>
                    <p>Blooming covers a wide range of topics related to female reproductive health and education, including menstruation, pregnancy, common reproductive disorders, and more. Check out the ‘Learn’ tab to see what topics we have covered so far.</p>

                    <h3>Is the information on your site reliable and accurate?</h3>
                    <p>Yes, we strive to provide accurate and up-to-date information sourced from reputable medical organizations, peer-reviewed journals, and trusted health professionals. Our sources are also cited for your convenience but consulting a healthcare provider for personalized advice is essential.</p>
                </div>

                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-container">
                            <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
                            <p>Contact us at our email: <a href="mailto:blooming@gmail.com">blooming@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <span>
                            <img className="about-img" src={require("../img/blooming-logo.png")} style={{ width: '200px' }} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
