import React from "react";
import HeroImage1 from "../assets/home/hero-img-1.JPG";
import HeroImage2 from "../assets/home/hero-img-2.JPG";
import HeroImage3 from "../assets/home/hero-img-3.JPG";
import SectionImg1 from "../assets/home/s1-img-1.JPG";
import SectionImg2 from "../assets/home/s1-img-2.JPG";
import SectionImg3 from "../assets/home/s2-img.JPG";
import NestImage1 from "../assets/home/s3-img-1.JPG";
import NestImage2 from "../assets/home/s3-img-2.JPG";
import NestImage3 from "../assets/home/s3-img-3.JPG";
import NestImage4 from "../assets/home/s3-img-4.JPG";
import bottomImg from "../assets/home/s4-img.JPG";
import NavBar from "../NavBar/NavBar";
import JoinButton from "../JoinButton/JoinButton";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import "../Landing.css";




export default function Landing() {
  return (
    <div className="HomePage">
    <NavBar />
       <section className="hero-section">
        <div className="hero-overview">
          <h1 className="hero-heading">Women TechMakers Bamenda</h1>
          <p>
            We are a community connecting ladies interested in technology in
            Bamenda
            community, allowing them to thrive, grow and be trailblazers.
          </p>
           <JoinButton />
        </div>
        <div className="row mt-5 ">
          <div className="col-sm-4 ">
            <img
              src={HeroImage1}
              alt="hero-img-1"
              className=" hero-images"
            />
          </div>
          <div className="col-sm-4 ">
            <img
              src={HeroImage2}
              alt="hero-img-1"
              className="hero-images"
            />
          </div>
          <div className="col-sm-4 ">
            <img
              src={HeroImage3}
              alt="hero-img-1"
              className=" hero-images"
            />
          </div>
        </div>
      </section>
      <div className="container main-section">
        <div className="row unique-row first-row">
          <div className="col-sm-6 text-area mt-5">
            <h2>
              <span className="green-text">Empowering</span>
              <br /> Women in Tech,
              <br /> One Step at a Time
            </h2>
            <p>
              We are on a mission to create a supportive and inclusive
              community for women in technology. We believe in breaking
              barriers, and celebrating the achievements of women in
              tech.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="row gx-5">
              <div className="col-sm-5">
                <img
                  src={SectionImg1}
                  alt="s1-img-1"
                  className=" s1-small-img"
                />
              </div>
              <div className="col-sm-7">
                <img
                  src={SectionImg2}
                  alt="s1-img-2"
                  className=" s1-large-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 unique-row second-row">
          <div className="col-sm-6">
            <img
              src={SectionImg3}
              alt="section-2-img"
              className="img-fluid s2-image"
            />
          </div>
          <div className="col-sm-6 text-area mt-3">
            <h2>
              <span className="blue-text">Driving Impact </span>
              with Purposful Projects
            </h2>
            <p>
              Our community is dedicated to making a difference through
              impactful projects. Join us in our pursuit of innovative solutions
              and contribute your skills to projects that matter.
            </p>
            <button className="blue-btn">
              <a href="/" rel="noopener noreferrer">
                See our projects
              </a>
            </button>
          </div>
        </div>
        <div className="row gx-5 unique-row third-row">
          <div className="col-sm-6 text-area mt-5">
            <h2 className="mt-5">
              Unleashing <span className="green-text">Innovation </span>
              Through Engaging Events
            </h2>
            <p>
              We organize a diverse range of events that bring together talented
              women in tech and provide opportunities for networking, learning,
              and skill development.
            </p>
            <button className="green-btn mb-5">
              <a href="/" rel="noopener noreferrer">
                See our events
              </a>
            </button>
          </div>
          <div className="col-sm-6">
            <div className="row gx-4">
              <div className="col-sm-6 sm-div">
                <img
                  src={NestImage1}
                  alt="Nested-img-1"
                  className="nested-img-1"
                />
              </div>
              <div className="col-sm-6 sm-div">
                <img
                  src={NestImage2}
                  alt="Nested-img-2"
                  className="nested-img-2"
                />
              </div>
            </div>
            <div className="row gx-4 mt-2">
              <div className="col-sm-6 sm-div">
                <img
                  src={NestImage3}
                  alt="Nested-img-3"
                  className="nested-img-3"
                />
              </div>
              <div className="col-sm-6 sm-div">
                <img
                  src={NestImage4}
                  alt="Nested-img-4"
                  className="nested-img-4"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="last-section mt-5">
          <h2>
            <span className="blue-text">Insights</span>, {" "}
            <span className="green-text">Stories</span>, {" "} and{" "}
            <span className="pink-text">Inspiration</span>
          </h2>
          <p>
            Dive into our blog where we share insightful articles, success
            stories, and stay updated with the
            latest industry trends, and find inspiration from the
            experiences of fellow women in technology.
          </p>
          <button className="pink-btn mt-3 mb-5">
            <a href="/" rel="noopener noreferrer">
              Visit our blog
            </a>
                  </button>
                  <img src={bottomImg} alt="bottom-img" className=" bottom-image"/>
        </section>
      </div>
      <Partners />
      <Footer /> 


    </div>
  );
}
