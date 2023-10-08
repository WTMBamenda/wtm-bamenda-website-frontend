import React from "react";
import './Card.css';
import twitterBlack from "../assets/logos/x-black.png";
import githubBlack from "../assets/logos/github-black.png";
import linkedinBlack from "../assets/logos/linkedin-black.png";
export const Card = () => {
    return (
        <div className="all-card-container">
            <div className='card-container'>
            <div className="card-container1">
                <div className="image-container"><img src = {require('../assets/about/ambassador-1.jpg')} alt="amba-1" className="card-img1"/></div>
                <div className="card-text-amba">
                   <h4 className='card-name'>Mbongeya Noella</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/mbongeya-noella-mary-640006bb/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href="https://twitter.com/MbongeyaNoella"><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href=""><img src={githubBlack} alt="link to github" /></a>
                   </div> 
                </div>
            </div>
            <div className="card-container2">
            <div className="image-container"><img src = {require('../assets/about/ambassador-2.jpeg')} alt="amba-2" className="card-img1"/></div>
                <div className="card-text-amba">
                   <h4 className='card-name'>Ida Delphine</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/idadelveloper/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href="https://twitter.com/idadelveloper/"><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href="https://github.com/Idadelveloper"><img src={githubBlack} alt="link to github" /></a>
                   </div>
                </div>
            </div>
            <div className="card-container3">
            <div className="image-container"><img src = {require('../assets/about/ambassador-3.jpg')} alt="amba-1" className="card-img1"/></div>
                <div className="card-text-amba">
                   <h4 className='card-name'>Agien Petra</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/agien-petra/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href="https://twitter.com/agienpetra"><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href="https://github.com/PetraAG"><img src={githubBlack} alt="link to github" /></a>
                   </div>
                </div>
            </div>
        </div>
        <div className='card-container'>
            <div className="card-container1">
                <div className="image-container"><img src = {require('../assets/about/organiser-1.jpg')} alt="org-1" className="card-img1"/></div>
                <div className="card-text-org">
                   <h4 className='card-name'>Enjeck Cleopatra</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/c1e0/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href=""><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href="https://github.com/enjeck"><img src={githubBlack} alt="link to github" /></a>
                   </div>
                </div>
            </div>
            <div className="card-container2">
            <div className="image-container"><img src = {require('../assets/about/organiser-2.jpg')} alt="org-2" className="card-img1"/></div>
                <div className="card-text-org">
                   <h4 className='card-name'>Nanga Amandine</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/nangah-amandine-61590a1b9/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href="https://twitter.com/nangah_amandine/"><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href="https://github.com/nangahamandine/"><img src={githubBlack} alt="link to github" /></a>
                   </div>
                </div>
            </div>
            <div className="card-container3">
            <div className="image-container"><img src = {require('../assets/about/organiser-3.jpg')} alt="org-1" className="card-img1"/></div>
                <div className="card-text-org">
                   <h4 className='card-name'>Ngumih Fien</h4>
                   <p className='card-job1'>Computer engineer</p>
                   <div className="icon-container">
                       <a href="https://www.linkedin.com/in/ngumih-fien/"><img src={linkedinBlack} alt="link to linkedin" /></a>
                       <a href="https://twitter.com/ngumihfien/"><img src={twitterBlack} alt="link to twitter" /></a>
                       <a href="https://github.com/Fienne"><img src={githubBlack} alt="link to github" /></a>
                   </div>
                </div>
            </div>
        </div>
        </div>
    )
}