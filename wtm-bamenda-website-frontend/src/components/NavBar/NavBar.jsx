import Logo from "../../assets/logos/wtm-logo.png"
import "./NavBar.css"




function NavBar() {
    return (
        <div className="top-bar">
            <div className="nav-bar1">
                <img src={Logo} alt="wtm-logo" className="nav-logo"  />
                <nav className="nav-item">
                    <ul>
                    <li className="nav-home">Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Event</li>
                    <li>Block</li>
                    </ul>
                    
                </nav>
                <button className="join-button">Join Our Community</button>
            </div>

        </div>
    )
}
export default NavBar;