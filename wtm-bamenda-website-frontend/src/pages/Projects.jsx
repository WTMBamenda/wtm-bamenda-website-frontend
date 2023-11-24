import React from "react";
import JoinButton from "../JoinButton/JoinButton";
import Logo from "../assets/logos/wtm-logo.png";
import projectimage1 from '../assets/project/project.png';
import { Link } from "react-router-dom";

import "./Projects.css";
import Footer from "../Footer/Footer";
import { useState } from "react";

const FilterButton = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const buttonStyle = {
    backgroundColor: isActive ? '#4285F4' : 'rgb(192, 195, 251)',
    color: isActive ? 'white' : 'black',
    padding: '8px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '25px',
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0} // Enables button to receive focus
    >
      {label}
    </button>
  );
};


export default function Projects() {
  return (
    <div className="projects-page">
      <div className="nav-bar3">
        <img src={Logo} alt="wtm-logo" className="nav-logo" />
        <nav className="nav-item">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
            <Link to="/projects" className="link">
              <li className="nav-projects">Projects</li>
            </Link>
            <Link to="/events" className="link">
              <li>Events</li>
            </Link>
            <Link to="/blog" className="link">
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
        <JoinButton />
      </div>
        <div className="page">
          <div className="page-title">
            <h1 className="header">Our Projects</h1>
          </div>
          <div className="filter-container">
            <FilterButton className="filter-btn" label="All" />
            <FilterButton className="filter-btn" label="Design" />
            <FilterButton className="filter-btn" label="Frontend development" />
            <FilterButton className="filter-btn" label="Backend development" />
            <FilterButton className="filter-btn" label="Cloud computing" />
          </div>
          <div className="project-container">
            <img src={projectimage1} className="wtm-website-image"/>
            <div className="detail-container">
              <h2 className="project-name">WTM Bamenda Website</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              iure ab in eaque ipsa, tempore dolorem, cum consequatur
              repellendus nesciu Lorem ipsum dolor sit amet, consectetur</p>
              <div className="tag-items">
                        <p className="project-tag">Design</p>
                        <p className="project-tag">Frontend development</p>
                        <p className="project-tag">Backend development</p>
                        <p className="project-tag">Backend development</p>
                        <p className="project-tag">Design</p>
              </div>
              <button className="view-btn">View project</button>
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  
  );
}
