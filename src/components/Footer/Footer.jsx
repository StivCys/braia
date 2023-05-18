import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../../assets/footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-space">
          <div className="social-list">
            <p>Let's connect</p>
            <a href="https://github.com/Bljexe">
              <FaGithub />
            </a>
            <a href="https://instagram.com/blj.exe">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/bljexe/">
              <FaLinkedin />
            </a>
          </div>
          <div className="copyright">
            <p>
              All rights reserved
              <br />
              Bryan 2023 ©
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
