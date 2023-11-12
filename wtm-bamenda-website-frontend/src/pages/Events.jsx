import React from "react";
import EventsHero1 from "../assets/events/hero-img-1.JPG";
import EventsHero2 from "../assets/events/hero-img-2.JPG";
import EventsHero3 from "../assets/events/hero-img-3.JPG";
import EventsHero4 from "../assets/events/hero-img-4.JPG";
import EventsMain1 from "../assets/events/s-img-1.JPG";
import EventsMain2 from "../assets/events/s-img-2.JPG";
import JoinButton from "../JoinButton/JoinButton";
import Logo from "../assets/logos/wtm-logo.png";

import { Link } from "react-router-dom";

import "../Events.css";
import Footer from "../Footer/Footer";

export default function Events() {
  return (
    <div className="events-page">
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

      <section className="events-hero me-5 ms-5">
        <h1 className="m-4">
          Our <span className="text-styled-green">Events</span>
        </h1>
        <p>
          From inspiring talks by industry leaders to interactive workshops and
          hackathons,
          <br /> our events are designed to foster creativity, collaboration,
          and growth.
        </p>
        <div className=" row events-hero-imgs mt-5">
          <div className="col-4">
            <img
              src={EventsHero1}
              alt="events-first-img"
              className="events-hero-side-imgs img-fluid"
            />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <img
                  src={EventsHero2}
                  alt="events-second-img"
                  className="events-nested-imgs"
                />
              </div>
              <div className="col mt-3">
                <img
                  src={EventsHero3}
                  alt="events-third-img"
                  className="events-nested-imgs"
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <img
              src={EventsHero4}
              alt="events-fourth-img"
              className=" events-hero-side-imgs img-fluid"
            />
          </div>
        </div>
        <div className="d-flex mt-5 events-btns">
          <button className="events-btn1 me-3">
            <a href="/" rel="noopener noreferrer">
              All
            </a>
          </button>
          <button className="events-btn2 me-3">
            <a href="/" rel="noopener noreferrer">
              Past
            </a>
          </button>
          <button className="events-btn3">
            <a href="/" rel="noopener noreferrer">
              Upcoming
            </a>
          </button>
        </div>
      </section>
      <main className="events-main m-5">
        <div className="row gx-5 mt-5">
          <div className="col-6 mt-5">
            <h2>
              International Women's Day <br /> 2023
            </h2>
            <div className="d-flex justify-content-between">
              <span>210 attendees</span>{" "}
              <span className="events-green">12/04/2023</span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              iure ab in eaque ipsa, tempore dolorem, cum consequatur
              repellendus nesciu Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="events-main-btn mt-4">
              <a href="/eventdetails">See event</a>
            </button>
          </div>
          <div className="col-6">
            <div className="row gx-1">
              <div className="col-6">
                <img
                  src={EventsMain1}
                  alt="events-main-small-img"
                  className="main-img1"
                />
              </div>
              <div className="col-6">
                <img
                  src={EventsMain2}
                  alt="events-main-large-img"
                  className="me-3 main-img2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 mt-5">
          <div className="col-6">
            <div className="row gx-1">
              <div className="col-6">
                <img
                  src={EventsMain1}
                  alt="events-main-small-img"
                  className="main-img1"
                />
              </div>
              <div className="col-6">
                <img
                  src={EventsMain2}
                  alt="events-main-large-img"
                  className="me-3 main-img2"
                />
              </div>
            </div>
          </div>
          <div className="col-6 mt-5 mb-5">
            <h2>
              International Women's Day <br /> 2023
            </h2>
            <div className="d-flex justify-content-between">
              <span>210 attendees</span>{" "}
              <span className="events-green">12/04/2023</span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              iure ab in eaque ipsa, tempore dolorem, cum consequatur
              repellendus nesciu Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="events-main-btn mt-4">
              <a href="/">See event</a>
            </button>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
