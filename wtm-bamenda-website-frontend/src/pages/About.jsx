
import JoinButton from "../JoinButton/JoinButton";
import './About.css'
import Card from "../card-component-amba-org/Card";
import AboutImage from '../assets/about/hero-img.JPG'
import MemberProfile from '../pages/MemberProfile';
import memberImage1 from "../assets/home/s3-img-1.JPG";
import Footer from '../Footer/Footer.jsx'
import Logo from "../assets/logos/wtm-logo.png"
import icon from '../assets/logos/network 1.svg'
import { Link } from "react-router-dom";



function About() {
  let memberInfo = {
    image: memberImage1,
    twitterProfile: `https://twitter.com/AmandineNangah/status/1358828632924430336`,
    githubProfile: `https://github.com/nangahamandine`,
    linkedinProfile: `Linkedin: https://www.linkedin.com/in/nangah-amandine`
  }
  return (
    <div className="about-page">
      <div className="top-bar">
        <div className="nav-bar1">
          <img src={Logo} alt="wtm-logo" className="nav-logo" />
          <nav className="nav-item">
            <ul>

              <Link to='/' className="link">
                <li >Home</li>
              </Link>
              <Link to='/about' className="link">
                <li className="nav-about">About</li>
              </Link>
              <Link to='/project' className="link" >
                <li >Projects</li>
              </Link>
              <Link to='/events' className="link">
                <li>Events</li>
              </Link>
              <Link to='/blog' className="link">
                <li>Blog</li>
              </Link>
            </ul>
          </nav>
          <JoinButton />
        </div>

      </div>
      <section className="about-section">
        <div className="about-overview">
          <h1>We Empower and Support Women <br />in technology</h1>
          <p className="about-text">we strive to create a vibrant and inclusive community that fosters collaboration, <br />provide resources and opportunities for women to thrive in the tech industry.</p>
          <JoinButton />
          <div className="aboutImage">
            <img src={AboutImage} alt="aboutHero-image" className="about-image" />
          </div>
        </div>
      </section>
      <div className="goal-box">
        <div className="goaltext">
          <p className="goal1"> Our <span className="goal-style">Goals</span></p>
          <p className="text1">Our community has set ambitious goals to drive <br />change and make a lasting impact.</p>
        </div>
        <div className="boxes">
          <div className="box1">
            <img src={icon} alt="vector-icon" className="icon1" />
            <p className="box-p">Provide a supportive <br /> network for women in tech</p>
          </div>
          <div className="box2">
            <img src={icon} alt="vector-icon" className="icon1" />
            <p className="box-p">Advocate for diversity <br /> and inclusivity in tech</p>
          </div>
          <div className="box3">
            <img src={icon} alt="vector-icon" className="icon1" />
            <p className="box-p">Foster innovation and <br />promote women-led projects</p>
          </div>
          <div className="box4">
            <img src={icon} alt="vector-icon" className="icon1" />
            <p className="box-p">Create opportunities for <br /> networking and mentorship</p>
          </div>
        </div>
      </div>
      <div className="ambassadors">
        <div className="amba-text">
          <p className="amba-heading">Meet Our <span className="span1">Ambassadors</span></p>
          <p className="amba-text1">Our Ambassadors are passionate advocates for women in tech who embody our community's <br />values and drive our mission forward. They are industry professionals, leaders, and mentors who<br /> inspire and guide our members.</p>
        </div>
        <div className="ambassadors-card">
          <MemberProfile info={memberInfo} />
        </div>
        <div className="organizers">
          <div className="organ1">
            <p className="org-text">Our  <span className="span2">Organisers</span></p>
            <p className="org-text1">Our dedicated team of Organizers works tirelessly to organize engaging events, and manage our <br />community initiatives. They are committed to providing valuable resources, opportunities, and a <br />supportive environment for all members.</p>
          </div>
          <div className="organizer-card">
            <MemberProfile info={memberInfo} />
          </div>

        </div>
        <div className="ourCommunity">
          <div className="community">
            <p className="com-text">Our <span className="span3"> Thriving Community</span></p>
            <p className="com-text1">Our community is made up of talented, driven, and diverse ladiesFrom students to professionals, <br />entrepreneurs to innovators, our community members come together to learn, grow, and <br />collaborate. </p>
            <div className="button1">
              <button className="com-button">Join our community</button>
            </div>
          </div>
          <div className="community-card">
            <Card info={memberInfo} />
          </div>
        </div>
      </div>
      <div className="Footer1">
        <Footer />
      </div>


      </div>
  )
}


export default About;
