import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Logo from "../assets/logos/wtm-logo.png"

import JoinButton from "../JoinButton/JoinButton";
import "../BlogSubmitted.css";

export default function BlogSubmitted() {
  return (
    <div className="BlogSubmitted">
      <div className="nav-bar1 mb-5">
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
              <li className="blog-submitted">Projects</li>
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
      <section className="blog-success m-5">
        <h1 className="m-3">Successfully submitted!</h1>
        <p className="mb-5">
          Your blog post has been submitted and is being reviewed. Once the
          review is<br /> complete, you will receive an email about the confirmation
          of the post.
        </p>
           <a href="/" className="mb-5">Return to blog</a>
      </section>

      <Footer />
    </div>
  );
}
