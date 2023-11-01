import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./ProjectDetails.css";
import linkedinBlue from "../assets/logos/linkedin-blue.png";
import githubBlue from "../assets/logos/github-blue.png";
import twitterBlue from "../assets/logos/x-blue.png";
import linkBlue from "../assets/logos/link-blue.png";


export default function ProjectDetails(props) {
    return (
        <div>
            <NavBar />
            <div className="details">
                <a href=""><p className="return-link">Return to projects</p></a>
                <div className="details-container">
                    <h1 className="project-title">{props.info.title}</h1>
                    <p className="description">{props.info.description}</p>
                    <div className="tags">
                        <p className="tag">{props.info.tag1}</p>
                        <p className="tag">{props.info.tag2}</p>
                        <p className="tag">{props.info.tag3}</p>
                        <p className="tag">{props.info.tag4}</p>
                        <p className="tag">{props.info.tag5}</p>
                        <p className="tag">{props.info.tag6}</p>
                    </div>
                    <div className="social-handles-container">
                            <div className="linkedin-link">
                                <a href={props.info.linkedinProfile} >
                                    <img src={linkedinBlue} alt="linkedin" className="img-icon" />
                                </a>
                            </div>
                            <div className="github-link">
                                <a href={props.info.githubProfile} >
                                    <img src={githubBlue} alt="github" className="img-icon" />
                                </a>
                            </div>
                            <div className="twitter-link">
                                <a href={props.info.twitterProfile}>
                                    <img src={twitterBlue} alt="twitter" className="img-icon" />
                                </a>
                            </div>
                            <div className="link">
                                <a href={props.info.link}>
                                    <img src={linkBlue} alt="link" className="img-icon" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="image-container">
                                <img className="image">{props.info.image1}</img>
                                <img className="image">{props.info.image2}</img>
                                <img className="image">{props.info.image3}</img>
                                <img className="image">{props.info.image4}</img>
                                <img className="image">{props.info.image4}</img>
                                </div>
                        </div>
                        <div className="btn-container">
                        <button className="submit-btn">Submit project</button>
                        </div>
                </div>
                <div className="project-link">
                    <a href=""><p>Previous project</p></a>
                    <a href=""><p>Next project</p></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}