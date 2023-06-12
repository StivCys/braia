import "../../assets/header.css";
import Icon from "../../img/icon_andromeda.png";
import Email from "../../img/email.png";
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="header">
        <div className="icon">
          <img src={Icon} alt="Icon" />
        </div>
        <div className="list">
          <ul>
            <Link to='/' > 
              <li>HOME</li>
            </Link>
            <Link to='/about' >
              <li>ABOUT</li>
            </Link>
            <Link to='/contact' >
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
        <div className="mail">
          <a>
            <img src={Email} alt="Email" />
          </a>
        </div>
      </div>
  );
}

export default Header;
