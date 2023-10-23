import Logo from "../assets/logos/wtm-logo.png"
import './NavBar.css'
import JoinButton from "../JoinButton/JoinButton";

function NavBar(){
    return(
        <div className="top-bar">
            <div className="nav-bar1">
                <img src={Logo} alt="wtm-logo" className="nav-logo"  />
                <nav className="nav-item">
                    <ul>
                    <li className="nav-home">Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Events</li>
                    <li>Blog</li>
                    </ul>
                    
                </nav>
                <JoinButton/>
            </div>

        </div>
    )
}
export default NavBar;