import Logo from "../assets/logos/wtm-logo.png"
import './NavBar.css'
import JoinButton from "../JoinButton/JoinButton";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="top-bar">
            <div className="nav-bar1">
                <img src={Logo} alt="wtm-logo" className="nav-logo"  />
                <nav className="nav-item">
                    <ul>

                   <Link to='/' className="link">
                   <li className="nav-home">Home</li>
                   </Link>
                    <Link to='/about' className="link">
                    <li >About</li>
                    </Link>
                   <Link to='/project' className="link" >
                   <li >Projects</li>
                   </Link>
                   <Link to='/events' className="link">
                   <li>Events</li>
                   </Link>
                   <Link to='/block' className="link">
                   <li>Block</li>
                   </Link>
                   
                   

                    </ul>
                    
                </nav>
                <JoinButton/>
            </div>

        </div>
    )
}
export default NavBar;