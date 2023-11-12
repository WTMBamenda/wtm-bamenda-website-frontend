import React from "react";
import { Link } from "react-router-dom";
import "../EventDetails.css";
import JoinButton from "../JoinButton/JoinButton";
import Logo from "../assets/logos/wtm-logo.png";
import Footer from "../Footer/Footer";
import SpeakerImage1 from "../assets/events/event-details/speaker-1.jpg";
import Gallery from "../Gallery/Gallery";
import Card from "../card-component-amba-org/Card";
import SpeakerImage2 from "../assets/events/event-details/speaker-2.JPG";
import SpeakerImage3 from "../assets/events/event-details/speaker-3.jpg"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Sponsors from "../Sponsors/Sponsors"

export default function EventDetails () {

  let speakerInfo1 = {
    image: SpeakerImage1,
    name: 'Bongeya Noella',
    info: 'Keynote speech',
    twitterProfile: `#`,
    githubProfile: `#`,
    linkedinProfile:`#`
  }
  let speakerInfo2= {
    image: SpeakerImage2,
    name: 'Lum Liz',
    info: 'Belonging to a sisterhood',
    twitterProfile: `#`,
    githubProfile: `#`,
    linkedinProfile:`#`
  }
  let speakerInfo3 = {
    image: SpeakerImage3,
    name: 'Nangah Amandine',
    info: 'Flutter workshop',
    twitterProfile: '#',
    githubProfile: `#`,
    linkedinProfile:`#`
  }
    return(
        <div className="eventDetails">
           <div className="nav-bar1">
        <img src={Logo} alt="wtm-logo" className="nav-logo" />
        <nav className="nav-item">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
            <Link to="/project" className="link">
              <li>Projects</li>
            </Link>
            <Link to="/events" className="link">
              <li className="nav-events">Events</li>
            </Link>
            <Link to="/blog" className="link">
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
        <JoinButton />
      </div>
      <section className="event-section mt-5">
        <div className="top-section">
        <div className="hero-image-container">
        <img className="hero-image " src={require('../assets/events/event-details/hero-img.JPG')} alt='Bitsvalley Logo'/>
        </div>
       <h1 className="mt-3 mb-3">International Women's Day 2023</h1>
       <div className="d-flex gap-3">
        <p className="hash-tags">#IWD2023</p>
        <p className="hash-tags">#daretobe</p>
        <p className="hash-tags">#Wtmbamenda</p>
       </div>
       <div className="attendees-date mb-3">
      <div className="attendees">  <PersonOutlinedIcon />
          <p>240 attendees</p></div>
      
        <p className="green-text">12/4/2023</p>
       </div>
       <div className="event-details-text">
       Lorem ipsum dolor sit amet consectetur. At mattis sit sociis ultrices dui pulvinar vitae quam.
        Faucibus rutrum id ac non diam neque dui. Sodales a et vitae consectetur sagittis feugiat sed
         vitae. Diam at ut arcu sagittis nunc et.Tempor fermentum varius dui montes nulla elementum diam 
         magna. Nisl sollicitudin senectus porttitor ultricies sapien vivamus pellentesque commodo dictumst.
          Nec quis in pellentesque morbi a pulvinar etiam sit. Cursus egestas adipiscing nibh et. Ultricies
           faucibus sagittis commodo tortor. Erat pellentesque laoreet metus varius nibh odio. Quisque mi
            viverra et neque vel vivamus egestas. Pellentesque integer elit amet pellentesque ornare eget. 
            Aliquam lectus lectus dignissim sagittis feugiat in amet phasellus malesuada. Quam quam lacus 
            justo nisl eu. Neque nulla et consequat tristique at bibendum augue mus. Sit turpis molestie 
            leo dignissim. Et ultrices volutpat in volutpat pretium habitasse velit pellentesque.
             Sit hendrerit nec vitae a. Porttitor at malesuada nulla quam bibendum fusce felis tellus.
       </div>
       <div className="speakers-section">
        <h2 className="section-heading">Speakers</h2>
        <div className="speakers">
        <Card className="speaker-card"  info={speakerInfo1}/>
        <Card className="speaker-card" info={speakerInfo2}/>
        <Card className="speaker-card" info={speakerInfo3}/>
        </div>
       </div>
        </div>
       
       <div className="sponsors-section">
        <Sponsors />
       </div>
       <div className="bottom-section">
       <Gallery />
       </div>
       <Footer />
      </section>
        </div>
    );
}