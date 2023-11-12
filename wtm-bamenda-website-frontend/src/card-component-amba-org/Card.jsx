import React from "react";
import "./Card.css";
import linkedinBlack from "../assets/logos/linkedin-black.png";
import githubBlack from "../assets/logos/github-black.png";
import twitterBlack from "../assets/logos/x-black.png";

export default function OrganizerAmbassadorCard(props) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.info.image} alt="member's facial" className="card-img" />
            </div>
            <div className="card-text">
                <h4 className='card-name'>{props.info.name}</h4>
                <p className='card-info'>{props.info.info}</p>
            </div>
            <div className="social-handles-container">
                <div className="linkedin-link">
                    <a href={props.info.linkedinProfile} >
                        <img className="socials-image" src={linkedinBlack} alt="linkedin" />
                    </a>
                </div>
                <div className="github-link">
                    <a href={props.info.githubProfile} >
                        <img className="socials-image" src={githubBlack} alt="github" />
                    </a>
                </div>
                <div className="twitter-link">
                    <a href={props.info.twitterProfile}>
                        <img className="socials-image" src={twitterBlack} alt="twitter" />
                    </a>
                </div>
            </div>

        </div>
    );
}
