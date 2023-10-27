import React from "react";
import "./BlogDetails.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import linkedinBlack from "../assets/logos/linkedin-black.png";
import githubBlack from "../assets/logos/github-black.png";
import twitterBlack from "../assets/logos/x-black.png";

export default function BlogDetails(props) {
    return (
        <div className="body">
            <NavBar />
            <div className="details-container">
                <div className="image-container">
                    <img src={props.info.image} className="main-image"></img>
                </div>
                <div className="title-container">
                    <p className="title">{props.info.title}</p>
                </div>
                <div className="tags">
                    
                    <p className="tag">{props.info.tag1}</p>
                    <p className="tag">{props.info.tag2}</p>
                    <p className="tag">{props.info.tag3}</p>
                    
                </div>
                <div className="content-container">
                    <p className="content">{props.info.content}
                    </p>
                </div>
                <div className="blogger">
                    <div className="blogger-profile">
                        <div className="blogger-info">
                            <div className="blogger-img"></div>
                            <div className="text-container">
                                <h3 className="blogger-name">{props.info.name}</h3>
                                <p className="post-date"><i>{props.info.date}</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="social-handles-container">
                            <div className="linkedin-link">
                                <a href={props.info.linkedinProfile} >
                                    <img src={linkedinBlack} alt="linkedin" className="img-icon" />
                                </a>
                            </div>
                            <div className="github-link">
                                <a href={props.info.githubProfile} >
                                    <img src={githubBlack} alt="github" className="img-icon" />
                                </a>
                            </div>
                            <div className="twitter-link">
                                <a href={props.info.twitterProfile}>
                                    <img src={twitterBlack} alt="twitter" className="img-icon" />
                                </a>
                            </div>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}