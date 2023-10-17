import React from "react";
import "../MemberProfile.css";
import linkedinBlack from "../assets/logos/linkedin-black.png";
import githubBlack from "../assets/logos/github-black.png";
import twitterBlack from "../assets/logos/x-black.png";





export default function MemberProfile(props) {
  return (
    <div className=" container">
      <div className="row gx-5">
        
          <div className="col-sm-3 profile">
            <div className="profile-frame">
              <img
                src={props.info.image}
                alt="member's facial"
                className="img-fluid"
              />
              <h3>Member's name</h3>
              <small>Member's role</small>
            </div>
            <div className="social-handles">
              <div className="linkedin-link">
                <a href={props.info.linkedinProfile} rel="noopener noreferrer" >
                  <img src={linkedinBlack} alt="linkedin" />
                </a>
              </div>
              <div className="github-link">
                <a href={props.info.githubProfile} rel="noopener noreferrer">
                  <img src={githubBlack} alt="github" />
                </a>
              </div>
              <div className="twitter-link">
                <a href={props.info.twitterProfile} rel="noopener noreferrer">
                  <img src={twitterBlack} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          
        
      </div>
    </div>
  );
}
